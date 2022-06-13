k6 run ./graphql.js  -u 10 --summary-export=graphqlResults/graphql1.json -e LOADPROFILE=baixa

k6 run ./graphql.js  -u 50 --summary-export=graphqlResults/graphql2.json -e LOADPROFILE=baixa

k6 run ./graphql.js  -u 100 --summary-export=graphqlResults/graphql3.json -e LOADPROFILE=baixa

k6 run ./graphql.js  -u 10 --summary-export=graphqlResults/graphql4.json -e LOADPROFILE=media

k6 run ./graphql.js  -u 50 --summary-export=graphqlResults/graphql5.json -e LOADPROFILE=media

k6 run ./graphql.js  -u 100 --summary-export=graphqlResults/graphql6.json -e LOADPROFILE=media

k6 run ./graphql.js  -u 10 --summary-export=graphqlResults/graphql7.json -e LOADPROFILE=alta

k6 run ./graphql.js  -u 50 --summary-export=graphqlResults/graphql8.json -e LOADPROFILE=alta

k6 run ./graphql.js  -u 100 --summary-export=graphqlResults/graphql9.json -e LOADPROFILE=alta