k6 run ./grpc.js  -u 10 --summary-export=grpcResults/grpc1.json -e LOADPROFILE=baixa

k6 run ./grpc.js  -u 50 --summary-export=grpcResults/grpc2.json -e LOADPROFILE=baixa

k6 run ./grpc.js  -u 100 --summary-export=grpcResults/grpc3.json -e LOADPROFILE=baixa

k6 run ./grpc.js  -u 10 --summary-export=grpcResults/grpc4.json -e LOADPROFILE=media

k6 run ./grpc.js  -u 50 --summary-export=grpcResults/grpc5.json -e LOADPROFILE=media

k6 run ./grpc.js  -u 100 --summary-export=grpcResults/grpc6.json -e LOADPROFILE=media

k6 run ./grpc.js  -u 10 --summary-export=grpcResults/grpc7.json -e LOADPROFILE=alta

k6 run ./grpc.js  -u 50 --summary-export=grpcResults/grpc8.json -e LOADPROFILE=alta

k6 run ./grpc.js  -u 100 --summary-export=grpcResults/grpc9.json -e LOADPROFILE=alta