@echo off
REM Start all microservices and API Gateway for Online Food Ordering System
REM This script starts all services in separate terminal windows

echo.
echo ========================================
echo Starting Online Food Ordering System
echo ========================================
echo.

REM Change to the project root directory
cd /d "%~dp0"

REM Start API Gateway on port 8080
start "API Gateway" cmd /k "cd api-gateway && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

REM Start User Service on port 8081
start "User Service" cmd /k "cd user-service && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

REM Start Restaurant Service on port 8082
start "Restaurant Service" cmd /k "cd restaurant-service && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

REM Start Order Service on port 8083
start "Order Service" cmd /k "cd order-service && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

REM Start Payment Service on port 8084
start "Payment Service" cmd /k "cd payment-service && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

REM Start Delivery Service on port 8085
start "Delivery Service" cmd /k "cd delivery-service && npm install >nul 2>&1 && npm run dev"
timeout /t 2 /nobreak

echo.
echo ========================================
echo All services are starting...
echo ========================================
echo.
echo API Gateway:       http://localhost:8080
echo User Service:      http://localhost:8081
echo Restaurant Service: http://localhost:8082
echo Order Service:     http://localhost:8083
echo Payment Service:   http://localhost:8084
echo Delivery Service:  http://localhost:8085
echo.
echo Wait 10-15 seconds for all services to initialize...
echo.
pause
