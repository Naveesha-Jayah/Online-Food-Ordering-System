#!/bin/bash

# Start all microservices and API Gateway for Online Food Ordering System
# This script starts all services in the background for Unix/Linux/Mac

echo ""
echo "========================================"
echo "Starting Online Food Ordering System"
echo "========================================"
echo ""

# Get the script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Function to start a service
start_service() {
    local service_name=$1
    local port=$2
    local service_dir=$3
    
    echo "Starting $service_name on port $port..."
    cd "$service_dir"
    npm install > /dev/null 2>&1
    npm run dev &
    cd - > /dev/null
    sleep 2
}

# Start API Gateway on port 8080
start_service "API Gateway" 8080 "api-gateway"

# Start User Service on port 8081
start_service "User Service" 8081 "user-service"

# Start Restaurant Service on port 8082
start_service "Restaurant Service" 8082 "restaurant-service"

# Start Order Service on port 8083
start_service "Order Service" 8083 "order-service"

# Start Payment Service on port 8084
start_service "Payment Service" 8084 "payment-service"

# Start Delivery Service on port 8085
start_service "Delivery Service" 8085 "delivery-service"

echo ""
echo "========================================"
echo "All services are starting..."
echo "========================================"
echo ""
echo "API Gateway:        http://localhost:8080"
echo "User Service:       http://localhost:8081"
echo "Restaurant Service: http://localhost:8082"
echo "Order Service:      http://localhost:8083"
echo "Payment Service:    http://localhost:8084"
echo "Delivery Service:   http://localhost:8085"
echo ""
echo "Wait 10-15 seconds for all services to initialize..."
echo ""
