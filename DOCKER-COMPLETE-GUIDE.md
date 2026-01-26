# 🐳 Complete Docker Hosting Guide - Rawlings Global Solutions

**Status:** ✅ **READY TO DEPLOY**

All Docker files are configured and ready to use. Follow this guide to host your application locally using Docker.

---

## 📋 **What's Included**

### **Docker Configuration (4 files)**
- ✅ [Dockerfile](Dockerfile) - Multi-stage production build
- ✅ [Dockerfile.dev](Dockerfile.dev) - Development with hot reload
- ✅ [docker-compose.yml](docker-compose.yml) - Orchestration config
- ✅ [.dockerignore](.dockerignore) - Build optimization

### **Launch Scripts (4 files)**
- ✅ [docker-start.bat](docker-start.bat) - One-click launcher
- ✅ [docker-stop.bat](docker-stop.bat) - Stop all containers
- ✅ [docker-validate.bat](docker-validate.bat) - System validation
- ✅ [docker-test.bat](docker-test.bat) - Test builds

### **Health Check API**
- ✅ [app/api/health/route.ts](app/api/health/route.ts) - Container health endpoint

### **Documentation**
- ✅ [DOCKER.md](DOCKER.md) - Comprehensive guide
- ✅ [DOCKER-QUICK-REFERENCE.txt](DOCKER-QUICK-REFERENCE.txt) - Command reference

---

## 🎯 **COMPLETE SETUP IN 3 STEPS**

### **STEP 1: Install Docker Desktop** (One-Time)

1. **Download Docker Desktop:**
   - Visit: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
   - Click "Download for Windows"

2. **Install:**
   - Run the installer
   - Keep all default settings
   - Click "Install"
   - **Restart your computer** when prompted

3. **Start Docker Desktop:**
   - Find "Docker Desktop" in Start Menu
   - Launch it
   - Wait for the whale icon to appear in system tray
   - Icon should show "Docker Desktop is running"

4. **Verify Installation:**
   - Open PowerShell or Command Prompt
   - Run: `docker --version`
   - You should see: `Docker version 24.x.x`

**Time Required:** 10-15 minutes (including download)

---

### **STEP 2: Validate Setup** (Recommended)

Before running the application, validate your Docker setup:

**Double-click:** [docker-validate.bat](docker-validate.bat)

This will check:
- ✓ Docker installed
- ✓ Docker Compose available
- ✓ Docker daemon running
- ✓ All required files present
- ✓ Port 3000 availability
- ✓ System resources

**Expected Output:**
```
[PASS] Docker is installed
[PASS] Docker Compose is available
[PASS] Docker daemon is running
[PASS] All required files exist
[PASS] Next.js configured for standalone output
[PASS] Port 3000 is available
[PASS] Docker system is healthy

[SUCCESS] All validations passed!
```

**If any tests fail:** See the troubleshooting section below.

**Time Required:** 30 seconds

---

### **STEP 3: Launch the Application**

**Option A: One-Click Launch (Easiest)**

1. **Double-click:** [docker-start.bat](docker-start.bat)

2. **Choose your mode:**
   ```
   Choose deployment mode:
   [1] Development (with hot reload)
   [2] Production (optimized build)

   Enter 1 or 2:
   ```

3. **Wait for build:**
   - Development: 2-3 minutes (first time)
   - Production: 3-5 minutes (first time)
   - Subsequent runs: 10-30 seconds

4. **Open browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - ✨ **Your website is live!**

**Option B: Manual Command Line**

```bash
# Development mode
docker-compose up dev

# Production mode
docker-compose up --build prod

# Run in background (detached)
docker-compose up -d dev
```

**Time Required:** 2-5 minutes (first time), 10-30 seconds after

---

## 🎨 **DEVELOPMENT vs PRODUCTION MODE**

### **Development Mode** (`docker-compose up dev`)

**Best for:** Active development, testing features

**Features:**
- ✅ **Hot Reload** - Changes appear instantly
- ✅ **Source Code Mounted** - Edit files outside container
- ✅ **Full Dev Tools** - All debugging capabilities
- ✅ **Detailed Logging** - See all output
- ⚠️ Larger image (~1GB)
- ⚠️ Higher resource usage

**How to Use:**
1. Start: `docker-compose up dev`
2. Edit files in VS Code
3. Save (`Ctrl + S`)
4. Watch browser update automatically! ✨
5. No rebuild needed!

**Perfect for:**
- Building new features
- Fixing bugs
- Testing changes
- Learning the codebase

---

### **Production Mode** (`docker-compose up prod`)

**Best for:** Testing production build, final deployment

**Features:**
- ✅ **Optimized Build** - Multi-stage compilation
- ✅ **Small Image** - ~150MB (vs 1GB dev)
- ✅ **Fast Performance** - Production-ready speed
- ✅ **Secure** - Runs as non-root user
- ✅ **Health Checks** - Built-in monitoring
- ⚠️ No hot reload (rebuild for changes)

**How to Use:**
1. Build: `docker-compose up --build prod`
2. Test at [http://localhost:3000](http://localhost:3000)
3. For changes: rebuild with `--build` flag

**Perfect for:**
- Final testing before deployment
- Performance benchmarking
- Production simulation
- Deployment to servers

---

## 🔄 **COMMON WORKFLOWS**

### **Workflow 1: Daily Development**

```bash
# Morning: Start dev container
docker-compose up dev

# Work: Edit files, save, see instant updates
# (Container keeps running)

# Evening: Stop container
Ctrl + C
```

### **Workflow 2: Test Production Build**

```bash
# Build production image
docker-compose up --build prod

# Test in browser
# Open http://localhost:3000

# When satisfied, stop
docker-compose down
```

### **Workflow 3: Switch Between Modes**

```bash
# Stop current mode
docker-compose down

# Start different mode
docker-compose up dev
# or
docker-compose up prod
```

### **Workflow 4: Run in Background**

```bash
# Start in background
docker-compose up -d dev

# Continue working, container runs silently

# Check logs anytime
docker-compose logs -f dev

# Stop when done
docker-compose down
```

---

## 🌐 **ACCESSING YOUR APPLICATION**

### **From Your Computer:**
```
http://localhost:3000
```

### **From Phone/Tablet (Same WiFi):**

1. **Find your computer's IP:**
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" under your WiFi adapter
   Example: `192.168.1.100`

2. **On mobile device:**
   ```
   http://192.168.1.100:3000
   ```

### **From Another Computer (Same Network):**
   ```
   http://YOUR_COMPUTER_IP:3000
   ```

### **Allow Through Firewall:**

If other devices can't connect:

1. Windows Security → Firewall & Network Protection
2. Advanced Settings → Inbound Rules
3. New Rule → Port → TCP → 3000
4. Allow the connection
5. Apply to all profiles

---

## 🛠️ **USEFUL COMMANDS**

### **Container Management**

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a specific container
docker stop rgs-webapp-dev
docker stop rgs-webapp-prod

# Start a stopped container
docker start rgs-webapp-dev

# Restart container
docker restart rgs-webapp-dev

# Remove container
docker rm rgs-webapp-dev

# View logs
docker logs rgs-webapp-dev
docker-compose logs -f dev

# Enter container shell
docker exec -it rgs-webapp-dev sh
```

### **Image Management**

```bash
# List images
docker images

# Remove image
docker rmi rgs-webapp-dev

# Build specific image
docker-compose build dev
docker-compose build prod

# Pull latest base images
docker-compose pull
```

### **Cleanup**

```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything (use with caution!)
docker system prune -a

# Remove volumes
docker volume prune
```

### **Monitoring**

```bash
# View resource usage
docker stats

# Inspect container details
docker inspect rgs-webapp-dev

# Check health status
docker inspect --format='{{.State.Health.Status}}' rgs-webapp-prod
```

---

## 🐛 **TROUBLESHOOTING**

### **Issue 1: "Docker is not running"**

**Error Message:**
```
Cannot connect to the Docker daemon
```

**Solution:**
1. Open Docker Desktop from Start Menu
2. Wait for whale icon in system tray
3. Wait until it says "Docker Desktop is running"
4. Try again

---

### **Issue 2: "Port 3000 is already in use"**

**Error Message:**
```
Bind for 0.0.0.0:3000 failed: port is already allocated
```

**Solution A: Stop the conflicting service**
```bash
# Find what's using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID)
taskkill /PID <PID> /F
```

**Solution B: Use a different port**

Edit [docker-compose.yml](docker-compose.yml):
```yaml
ports:
  - "3001:3000"  # Changed from 3000:3000
```

Then access at: [http://localhost:3001](http://localhost:3001)

---

### **Issue 3: "Build failed" / Out of memory**

**Error Message:**
```
JavaScript heap out of memory
```

**Solution:**

1. **Increase Docker memory allocation:**
   - Docker Desktop → Settings → Resources
   - Increase "Memory" to 4GB or more
   - Click "Apply & Restart"

2. **Clear build cache:**
   ```bash
   docker builder prune
   docker-compose build --no-cache prod
   ```

3. **Close other applications** to free up RAM

---

### **Issue 4: "Container exits immediately"**

**Check logs to see why:**
```bash
docker-compose logs dev
# or
docker-compose logs prod
```

**Common causes:**
- **Missing dependencies:** Rebuild with `docker-compose up --build`
- **Port conflict:** Change port in docker-compose.yml
- **Syntax error:** Check logs for error details

---

### **Issue 5: "Hot reload not working" (Dev mode)**

**Solutions:**

1. **Already configured in docker-compose.yml:**
   ```yaml
   environment:
     - WATCHPACK_POLLING=true
   ```

2. **Restart container:**
   ```bash
   docker-compose restart dev
   ```

3. **Rebuild:**
   ```bash
   docker-compose down
   docker-compose up --build dev
   ```

---

### **Issue 6: "Cannot access from mobile device"**

**Checklist:**
- [ ] Both devices on same WiFi network?
- [ ] Using correct IP address? (run `ipconfig`)
- [ ] Firewall allows port 3000?
- [ ] Container is running? (run `docker ps`)
- [ ] Try disabling Windows Firewall temporarily to test

---

### **Issue 7: "Docker Desktop won't start"**

**Solutions:**

1. **Restart computer** (fixes 90% of issues)

2. **Enable Virtualization in BIOS:**
   - Restart computer
   - Press F2/Del to enter BIOS
   - Find "Virtualization" or "Intel VT-x" / "AMD-V"
   - Enable it
   - Save and exit

3. **Update WSL 2:**
   ```bash
   wsl --update
   wsl --set-default-version 2
   ```

4. **Reinstall Docker Desktop** as administrator

---

## 📊 **PERFORMANCE & RESOURCES**

### **Expected Resource Usage**

| Mode | CPU | RAM | Disk | Startup |
|------|-----|-----|------|---------|
| **Development** | 10-20% | 500MB | 1.5GB | 30s |
| **Production** | 5-10% | 150MB | 150MB | 10s |

### **Monitor Resources**

```bash
# Real-time stats
docker stats

# Detailed info
docker inspect rgs-webapp-prod
```

### **Optimize Performance**

1. **Allocate more resources:**
   - Docker Desktop → Settings → Resources
   - Increase CPU cores (2-4)
   - Increase Memory (4-8GB)

2. **Use production mode** for better performance

3. **Enable BuildKit** for faster builds:
   ```bash
   set DOCKER_BUILDKIT=1
   docker-compose build
   ```

---

## ✅ **PRE-DEPLOYMENT CHECKLIST**

Before deploying to production servers:

- [ ] Update contact info in [lib/content.ts](lib/content.ts)
- [ ] Configure form endpoint in [QuoteForm.tsx](components/contact/QuoteForm.tsx)
- [ ] Add booking link in [contact page](app/contact/page.tsx)
- [ ] Set environment variables (create `.env.local`)
- [ ] Test production build: `docker-compose up prod`
- [ ] Verify health endpoint: [http://localhost:3000/api/health](http://localhost:3000/api/health)
- [ ] Run tests: `npm test`
- [ ] Check container logs: `docker-compose logs prod`
- [ ] Test on mobile devices
- [ ] Verify all pages load correctly
- [ ] Test forms and interactive elements

---

## 🚀 **DEPLOYMENT TO PRODUCTION**

### **Option 1: Docker Hub**

```bash
# Build production image
docker build -t rgs-webapp:latest .

# Tag for Docker Hub
docker tag rgs-webapp:latest username/rgs-webapp:latest

# Login to Docker Hub
docker login

# Push image
docker push username/rgs-webapp:latest

# On production server:
docker pull username/rgs-webapp:latest
docker run -d -p 3000:3000 username/rgs-webapp:latest
```

### **Option 2: Cloud Platforms**

Deploy to:
- **AWS ECS/EKS** - Elastic Container Service
- **Azure Container Instances**
- **Google Cloud Run**
- **DigitalOcean App Platform**
- **Railway** - Simplest option

### **Option 3: VPS/Dedicated Server**

```bash
# On Ubuntu/Debian server
curl -fsSL https://get.docker.com | sh

# Clone repository
git clone https://github.com/yourusername/rgs-webapp.git
cd rgs-webapp

# Run production container
docker-compose up -d prod

# Set up Nginx reverse proxy for SSL
```

---

## 📚 **ADDITIONAL RESOURCES**

- **Docker Documentation:** [docs.docker.com](https://docs.docker.com/)
- **Next.js Docker Guide:** [nextjs.org/docs/deployment#docker](https://nextjs.org/docs/deployment#docker)
- **Docker Compose Docs:** [docs.docker.com/compose](https://docs.docker.com/compose/)
- **Full Docker Guide:** [DOCKER.md](DOCKER.md)
- **Quick Reference:** [DOCKER-QUICK-REFERENCE.txt](DOCKER-QUICK-REFERENCE.txt)

---

## 🎉 **YOU'RE ALL SET!**

### **Quick Start Recap:**

1. ✅ Install Docker Desktop
2. ✅ Run [docker-validate.bat](docker-validate.bat)
3. ✅ Double-click [docker-start.bat](docker-start.bat)
4. ✅ Choose mode (1 or 2)
5. ✅ Open [http://localhost:3000](http://localhost:3000)

### **What You Can Do Now:**

- 🔧 Develop with hot reload
- 🚀 Test production builds
- 📱 Access from mobile devices
- 🌐 Share on local network
- 🐳 Deploy to any Docker platform
- ☁️ Host on cloud services

---

**Total Setup Time:** 15 minutes (including Docker installation)
**Subsequent Runs:** 10-30 seconds ⚡

**Need Help?** Check [DOCKER.md](DOCKER.md) for detailed troubleshooting!

---

**🐳 Docker deployment is complete and ready to use!**
