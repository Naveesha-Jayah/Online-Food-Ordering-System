# Quick Start Guide

## 🚀 Running the Entire System

### Step 1: Ensure Node.js is Installed
```bash
node --version  # Should return v14.0.0 or higher
npm --version   # Should return npm v6.0.0 or higher
```

### Step 2: Start All Services

#### **Windows Users:**
Double-click the file:
```
start-all-services.bat
```

#### **Mac/Linux Users:**
Run the following commands in terminal:
```bash
chmod +x start-all-services.sh
./start-all-services.sh
```

### Step 3: Wait for Initialization
The system needs 15-30 seconds to fully initialize. You should see success messages in each terminal window.

### Step 4: Access the Gateway
Open your browser and visit:
```
http://localhost:8080
```

You should see a welcome message showing all available endpoints.

---

## 🧪 Quick Testing

### Test Gateway Health
```bash
curl http://localhost:8080/health
```

### Test User Service (via Gateway)
```bash
curl http://localhost:8080/api/users/
```

### Test User Service (Direct)
```bash
curl http://localhost:8081/
```

### Test All Services Are Running
Visit these URLs in your browser:
- http://localhost:8080 (API Gateway)
- http://localhost:8081 (User Service)
- http://localhost:8082 (Restaurant Service)
- http://localhost:8083 (Order Service)
- http://localhost:8084 (Payment Service)
- http://localhost:8085 (Delivery Service)

---

## 📊 Service Ports

| Service | Direct | Via Gateway |
|---------|--------|-------------|
| User | 8081 | 8080/api/users |
| Restaurant | 8082 | 8080/api/restaurants |
| Order | 8083 | 8080/api/orders |
| Payment | 8084 | 8080/api/payments |
| Delivery | 8085 | 8080/api/delivery |

---

## 🛑 Stopping Services

**Windows:** Close each terminal window

**Mac/Linux:** Press `Ctrl+C` in each terminal

---

## 📝 Swagger Documentation

Each service has its own Swagger documentation:

- http://localhost:8081/api-docs (User Service)
- http://localhost:8082/api-docs (Restaurant Service)
- http://localhost:8083/api-docs (Order Service)
- http://localhost:8084/api-docs (Payment Service)
- http://localhost:8085/api-docs (Delivery Service)

---

## 🔧 Troubleshooting

### "Port already in use"
If you see this error, another service is already using that port. Either:
1. Close the other service
2. Change the PORT in the service's .env file
3. Restart your computer

### "Cannot connect to MongoDB"
- Ensure your MongoDB credentials in .env files are correct
- Check your internet connection (Atlas requires internet)
- Verify MongoDB Atlas IP whitelist includes your current IP

### "Service timeout or not responding"
- Wait 10-15 seconds for MongoDB connections to establish
- Check browser console for specific error messages
- Review the service terminal for error details

---

## ✅ System Status Indicator

When all services are running correctly, you should see:

```
✅ Gateway running on 8080
✅ User Service running on 8081
✅ Restaurant Service running on 8082
✅ Order Service running on 8083
✅ Payment Service running on 8084
✅ Delivery Service running on 8085
```

---

For complete architecture details, see [ARCHITECTURE.md](ARCHITECTURE.md)
