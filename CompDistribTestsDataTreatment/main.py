import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json
import numpy as np


def getMetricsResults(durations):
    durations = np.array(durations)

    minValue = np.min(durations)
    maxValue = np.max(durations)
    meanValue = np.mean(durations)
    percentileValue = np.percentile(durations, 95)
    medianValue = np.median(durations)

    return {'min': minValue, 'max': maxValue, 'avg': meanValue, 'med': medianValue, 'p(95)': percentileValue}
    # return [str(minValue).replace(".", ","), str(meanValue).replace(".", ","), str(percentileValue).replace(".", ","), str(medianValue).replace(".", ",")]


def getLatenciesPerMethod(rest, grpc, graphql, soap):
    metrics = [
        np.array_split(rest, 3),
        np.array_split(grpc, 3),
        # np.array_split(graphql, 3),
        np.array_split(soap, 3)
    ]

    getMethod = [[], [], []]
    streamMethod = [[], [], []]
    dripMethod = [[], [], []]

    for tool in metrics:
        for j in range(len(tool)):
            getMethod[j].append(float(tool[0][j]["med"]))
            streamMethod[j].append(float(tool[1][j]["med"]))
            dripMethod[j].append(float(tool[2][j]["med"]))

    return [getMethod, streamMethod, dripMethod]


def updateSheet(sheet, metrics, startLine, endLine, isNewMetric=False):
    minValues = []
    maxValues = []
    meanValues = []
    medianValues = []
    percentileValues = []

    for i in metrics:
        minValues.append(i['min'])
        maxValues.append(i['max'])
        meanValues.append(i['avg'])
        medianValues.append(i['med'])
        percentileValues.append(i['p(95)'])

    minValues = np.array_split(minValues, 3)
    maxValues = np.array_split(maxValues, 3)
    meanValues = np.array_split(meanValues, 3)
    medianValues = np.array_split(medianValues, 3)
    percentileValues = np.array_split(percentileValues, 3)

    columnsValues = []

    for i in range(3):
        columnValues = []

        columnValues += minValues[i].tolist()
        columnValues += maxValues[i].tolist()
        columnValues += meanValues[i].tolist()
        columnValues += medianValues[i].tolist()
        columnValues += percentileValues[i].tolist()

        columnsValues.append(columnValues)

    columnsLabels = ["B", "D", "F"]

    if isNewMetric:
        columnsLabels = ["P", "Q", "R"]

    for i in range(len(columnsLabels)):
        cellList = sheet.range(f'{columnsLabels[i]}{startLine}:{columnsLabels[i]}{endLine}')

        for j in range(len(cellList)):
            cellList[j].value = columnsValues[i][j]

        sheet.update_cells(cellList)


def updateSheetPerMethod(sheet, metrics, startLine, endLine):
    columnsLabels = ["J", "K", "L"]

    for i in range(len(columnsLabels)):
        cellList = sheet.range(f'{columnsLabels[i]}{startLine}:{columnsLabels[i]}{endLine}')

        for j in range(len(cellList)):
            cellList[j].value = metrics[i][j]

        sheet.update_cells(cellList)


def getMetricsRest():
    metrics = []

    for i in range(0, 9):
        metricsAux = loadJSON("../load-test/restResults/rest" + str(i + 1))
        metrics.append(metricsAux["metrics"]["http_req_duration"])

    return metrics


def getMetricsGrpc():
    metrics = []

    for i in range(0, 9):
        metricsAux = loadJSON("../load-test/grpcResults/grpc" + str(i + 1))
        metrics.append(metricsAux["metrics"]["grpc_req_duration"])

    return metrics

def getMetricsGraphql():
    metrics = []

    for i in range(0, 9):
        metricsAux = loadJSON("../load-test/graphqlResults/graphql" + str(i + 1))
        metrics.append(metricsAux["metrics"]["graphql_req_duration"])

    return metrics


def getMetricsSoap():
    metrics = []

    for i in range(0, 9):
        metricsAux = loadJSON("../load-test/soapResults/soap" + str(i + 1))
        metrics.append(metricsAux["metrics"]["http_req_duration"])

    return metrics


def loadJSON(fileName):
    JSONName = fileName + ".json"

    with open(JSONName, 'r') as file:
        return json.load(file)


def loadCSV(toolName):
    CSVName = toolName + ".csv"

    with open(CSVName, 'r') as file:
        return file.read().splitlines()


if __name__ == '__main__':
    # define the scope
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']

    # add credentials to the account
    creds = ServiceAccountCredentials.from_json_keyfile_name('eth-vs-ton-b8e005fda44c.json', scope)

    # authorize the clientsheet
    client = gspread.authorize(creds)

    # get the instance of the Spreadsheet
    sheet = client.open_by_key("1a1Z_IAPzAoowMR3YBdGq0sv7HuXEB6PSZE_Qy-M9-NY").sheet1

    print("Metrics: ")
    print("Min", "Max", "Mean", "Median", "Percentile(95)")

    metricsRest = getMetricsRest()
    metricsGrpc = getMetricsGrpc()
    # metricsGraphql = getmetricsGraphql()
    metricsSoap = getMetricsSoap()

    # medianas = getLatenciesPerMethod(metricsRest, metricsGrpc, metricsGraphql, metricsSoap)
    medianas = getLatenciesPerMethod(metricsRest, metricsGrpc, None, metricsSoap)

    print(metricsRest)
    print(metricsGrpc)
    # print(metricsGraphql)
    print(metricsSoap)

    updateSheet(sheet, metricsRest, 3, 17)
    updateSheet(sheet, metricsGrpc, 21, 35)
    # updateSheet(sheet, metricsGraphql, 39, 53)
    updateSheet(sheet, metricsSoap, 57, 71)

    updateSheetPerMethod(sheet, medianas[0], 3, 6)
    updateSheetPerMethod(sheet, medianas[1], 10, 13)
    updateSheetPerMethod(sheet, medianas[2], 17, 20)
