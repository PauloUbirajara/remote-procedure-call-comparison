k6 run ./rest.js  -u 10 --summary-export=restResults/rest1.json -e LOADPROFILE=baixa

k6 run ./rest.js  -u 50 --summary-export=restResults/rest2.json -e LOADPROFILE=baixa

k6 run ./rest.js  -u 100 --summary-export=restResults/rest3.json -e LOADPROFILE=baixa

k6 run ./rest.js  -u 10 --summary-export=restResults/rest4.json -e LOADPROFILE=media

k6 run ./rest.js  -u 50 --summary-export=restResults/rest5.json -e LOADPROFILE=media

k6 run ./rest.js  -u 100 --summary-export=restResults/rest6.json -e LOADPROFILE=media

k6 run ./rest.js  -u 10 --summary-export=restResults/rest7.json -e LOADPROFILE=alta

k6 run ./rest.js  -u 50 --summary-export=restResults/rest8.json -e LOADPROFILE=alta

k6 run ./rest.js  -u 100 --summary-export=restResults/rest9.json -e LOADPROFILE=alta