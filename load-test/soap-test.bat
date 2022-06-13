k6 run .\soap.js  -u 10 --summary-export=soapResults/soap1.json -e LOADPROFILE=baixa

k6 run .\soap.js  -u 50 --summary-export=soapResults/soap2.json -e LOADPROFILE=baixa

k6 run .\soap.js  -u 100 --summary-export=soapResults/soap3.json -e LOADPROFILE=baixa

k6 run .\soap.js  -u 10 --summary-export=soapResults/soap4.json -e LOADPROFILE=media

k6 run .\soap.js  -u 50 --summary-export=soapResults/soap5.json -e LOADPROFILE=media

k6 run .\soap.js  -u 100 --summary-export=soapResults/soap6.json -e LOADPROFILE=media

k6 run .\soap.js  -u 10 --summary-export=soapResults/soap7.json -e LOADPROFILE=alta

k6 run .\soap.js  -u 50 --summary-export=soapResults/soap8.json -e LOADPROFILE=alta

k6 run .\soap.js  -u 100 --summary-export=soapResults/soap9.json -e LOADPROFILE=alta
