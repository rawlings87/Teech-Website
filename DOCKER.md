# 🐳 Docker Deployment Guide

Complete guide for running Rawlings Global Solutions website in Docker containers.

---

## 📋 Prerequisites

### 1. Install Docker Desktop

**Windows:**
1. Go to [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
2. Download **Docker Desktop for Windows**
3. Run the installer
4. Follow the setup wizard (keep default settings)
5. **Restart your computer** after installation
6. Launch **Docker Desktop** from Start Menu
7. Wait for Docker to start (you'll see a whale icon in system tray)

**System Requirements:**
- Windows 10/11 (64-bit)
- WSL 2 (will be installed automatically)
- At least 4GB RAM
- Virtualization enabled in BIOS

### 2. Verify Installation

Open PowerShell or Command Prompt:

```bash
docker --version
docker-compose --version
```

You should see version numbers for both.

---

## 🚀 Quick Start (One-Click Method)

### Development Mode (with hot reload)

**Double-click:** [docker-start.bat](docker-start.bat)
- Choose option **1** for development
- Wait 2-3 minutes for first build
- Open [http://localhost:3000](http://localhost:3000)

### Production Mode (optimized)

**Double-click:** [docker-start.bat](docker-start.bat)
- Choose option **2** for production
- Wait 3-5 minutes for first build
- Open [http://localhost:3000](http://localhost:3000)

### Stop Containers

**Double-click:** [docker-stop.bat](docker-stop.bat)

---

## 🔧 Manual Docker Commands

### Development Mode

```bash
# Start development container with hot reload
docker-compose up dev

# Run in background (detached mode)
docker-compose up -d dev

# View logs
docker-compose logs -f dev

# Stop
docker-compose down
```

### Production Mode

```bash
# Build and start production container
docker-compose up --build prod

# Run in background
docker-compose up -d prod

# View logs
docker-compose logs -f prod

# Stop
docker-compose down
```

### Build Images Separately

```bash
# Build development image
docker build -t rgs-webapp:dev -f Dockerfile.dev .

# Build production image
docker build -t rgs-webapp:prod -f Dockerfile .

# Run development container
docker run -p 3000:3000 -v ${PWD}:/app rgs-webapp:dev

# Run production container
docker run -p 3000:3000 rgs-webapp:prod
```

---

## 📁 Docker Files Explained

### 1. `Dockerfile` (Production)

**Multi-stage build for optimized production:**

- **Stage 1 (deps):** Install production dependencies only
- **Stage 2 (builder):** Build the Next.js application
- **Stage 3 (runner):** Minimal runtime image

**Benefits:**
- ✅ Small image size (~150MB vs 1GB+)
- ✅ Fast startup time
- ✅ Security (runs as non-root user)
- ✅ No unnecessary dev dependencies

### 2. `Dockerfile.dev` (Development)

**Simple setup for local development:**

- Single stage with all dependencies
- Supports hot reload
- Mounts source code as volume
- Ideal for active development

### 3. `docker-compose.yml`

**Orchestrates both development and production services:**

```yaml
services:
  dev:   # Development service with hot reload
  prod:  # Production service with health checks
```

### 4. `.dockerignore`

**Excludes unnecessary files from Docker build:**

- node_modules (will be installed fresh)
- .next, .git, tests, documentation
- Reduces build context size
- Faster builds

---

## 🌐 Accessing the Application

### From Your Computer

Open browser to:
- **[http://localhost:3000](http://localhost:3000)**

### From Another Device (Same Network)

1. Find your computer's IP address:
   ```bash
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., `192.168.1.100`)

2. On other device, navigate to:
   ```
   http://192.168.1.100:3000
   ```

### From Internet (Port Forwarding)

1. Configure router port forwarding:
   - External Port: 80 or 8080
   - Internal Port: 3000
   - Internal IP: Your computer's IP

2. Access via public IP:
   ```
   http://YOUR_PUBLIC_IP:80
   ```

---

## 🔄 Hot Reload (Development Mode)

When running in development mode:

1. Edit any file (e.g., [lib/content.ts](lib/content.ts))
2. Save with `Ctrl + S`
3. **Browser updates automatically!** ✨

**Mounted Volumes:**
```yaml
volumes:
  - .:/app              # Source code
  - /app/node_modules   # Preserve node_modules
  - /app/.next          # Preserve build cache
```

---

## 🛠️ Common Docker Commands

### Container Management

```bash
# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop rgs-webapp-dev

# Remove a container
docker rm rgs-webapp-dev

# Restart a container
docker restart rgs-webapp-dev
```

### Image Management

```bash
# List all images
docker images

# Remove an image
docker rmi rgs-webapp:dev

# Remove unused images
docker image prune

# Remove all unused data
docker system prune -a
```

### Logs and Debugging

```bash
# View logs
docker-compose logs -f dev

# View last 100 lines
docker logs --tail 100 rgs-webapp-dev

# Execute command in running container
docker exec -it rgs-webapp-dev sh

# Inside container shell:
ps aux              # List processes
ls -la              # List files
cat /app/.next/...  # View build output
```

---

## 🔍 Troubleshooting

### Docker Desktop Not Starting

**Error:** "Docker Desktop is starting..."

**Solutions:**
1. **Restart Computer** - Often fixes startup issues
2. **Enable Virtualization** in BIOS/UEFI
3. **Update WSL 2:**
   ```bash
   wsl --update
   wsl --set-default-version 2
   ```
4. **Reinstall Docker Desktop** as administrator

### Port 3000 Already in Use

**Error:** "Bind for 0.0.0.0:3000 failed: port is already allocated"

**Solutions:**

**Option 1: Stop conflicting service**
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill process (replace PID)
taskkill /PID <PID> /F
```

**Option 2: Use different port**

Edit [docker-compose.yml](docker-compose.yml):
```yaml
ports:
  - "3001:3000"  # Changed from 3000:3000
```

Access at: [http://localhost:3001](http://localhost:3001)

### Build Fails / Out of Memory

**Error:** "Docker build failed" or "JavaScript heap out of memory"

**Solutions:**

1. **Increase Docker Memory:**
   - Open Docker Desktop
   - Settings → Resources → Memory
   - Increase to at least 4GB
   - Apply & Restart

2. **Clear Build Cache:**
   ```bash
   docker builder prune
   docker-compose down
   docker-compose up --build
   ```

3. **Build with More Memory:**
   ```bash
   $env:NODE_OPTIONS="--max-old-space-size=4096"
   docker-compose up --build prod
   ```

### Container Exits Immediately

**Check logs:**
```bash
docker-compose logs dev
```

**Common causes:**
- Missing dependencies → Rebuild: `docker-compose up --build`
- Port conflict → Change port in docker-compose.yml
- Syntax error in code → Check terminal output

### Hot Reload Not Working (Dev Mode)

**Solutions:**

1. **Enable Polling** (already configured in docker-compose.yml):
   ```yaml
   environment:
     - WATCHPACK_POLLING=true
   ```

2. **Restart Container:**
   ```bash
   docker-compose restart dev
   ```

3. **Rebuild:**
   ```bash
   docker-compose down
   docker-compose up --build dev
   ```

### Cannot Access from Another Device

**Checklist:**
- [ ] Both devices on same network?
- [ ] Computer firewall allows port 3000?
- [ ] Using correct IP address?
- [ ] Docker container is running?

**Allow through Windows Firewall:**
1. Windows Security → Firewall & Network Protection
2. Advanced Settings → Inbound Rules
3. New Rule → Port → TCP → 3000
4. Allow Connection → Next → Finish

---

## 📊 Resource Usage

### Development Mode

- **CPU:** 10-20% (with hot reload)
- **RAM:** ~500MB
- **Disk:** ~1.5GB (image + volumes)

### Production Mode

- **CPU:** 5-10% (idle)
- **RAM:** ~150MB
- **Disk:** ~150MB (optimized image)

### Monitor Resources

```bash
# Show resource usage
docker stats

# Show detailed container info
docker inspect rgs-webapp-prod
```

---

## 🔒 Security Best Practices

### Production Dockerfile Features

✅ **Multi-stage build** - Removes build tools from final image
✅ **Non-root user** - Runs as `nextjs` user (UID 1001)
✅ **Minimal base image** - Alpine Linux (~5MB base)
✅ **No secrets in image** - Use environment variables
✅ **Health checks** - Monitors container health

### Environment Variables

Create `.env.local` (not tracked in Git):

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Form Submission
NEXT_PUBLIC_FORMSPREE_ID=your-id

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Mount in docker-compose.yml:
```yaml
env_file:
  - .env.local
```

---

## 🚢 Deployment Options

### 1. Docker Hub

```bash
# Tag image
docker tag rgs-webapp:prod yourusername/rgs-webapp:latest

# Push to Docker Hub
docker push yourusername/rgs-webapp:latest

# Pull and run on server
docker pull yourusername/rgs-webapp:latest
docker run -p 3000:3000 yourusername/rgs-webapp:latest
```

### 2. Cloud Platforms

**Deploy to various cloud providers:**

- **AWS ECS/EKS** - Elastic Container Service
- **Azure Container Instances** - Managed containers
- **Google Cloud Run** - Serverless containers
- **DigitalOcean App Platform** - Container hosting
- **Railway** - Simple container deployment

### 3. VPS / Dedicated Server

```bash
# Install Docker on Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Clone repository
git clone https://github.com/yourusername/rgs-webapp.git
cd rgs-webapp

# Build and run
docker-compose up -d prod

# Set up reverse proxy (Nginx)
# Map domain → localhost:3000
```

---

## 📦 Production Deployment Checklist

Before deploying to production:

- [ ] Update contact info in [lib/content.ts](lib/content.ts)
- [ ] Configure form endpoint in [QuoteForm.tsx](components/contact/QuoteForm.tsx)
- [ ] Add real booking link in [contact page](app/contact/page.tsx)
- [ ] Set environment variables (`.env.local`)
- [ ] Update site URL in content.ts
- [ ] Test production build locally: `docker-compose up prod`
- [ ] Run tests: `npm test`
- [ ] Check logs for errors: `docker-compose logs prod`
- [ ] Configure SSL certificate (for HTTPS)
- [ ] Set up domain name and DNS
- [ ] Configure firewall rules
- [ ] Set up monitoring and backups

---

## 🔄 Updating the Application

### Development Mode

Changes are automatically reflected (hot reload).

### Production Mode

Rebuild the image after code changes:

```bash
# Stop current container
docker-compose down

# Rebuild and start
docker-compose up --build prod
```

### Zero-Downtime Update

```bash
# Build new image with version tag
docker build -t rgs-webapp:v2 .

# Start new container on different port
docker run -d -p 3001:3000 --name rgs-v2 rgs-webapp:v2

# Test new version at localhost:3001
# If OK, switch traffic:

# Stop old container
docker stop rgs-webapp-prod

# Remove old container
docker rm rgs-webapp-prod

# Start new container on port 3000
docker run -d -p 3000:3000 --name rgs-webapp-prod rgs-webapp:v2
```

---

## 📚 Additional Resources

- **Docker Documentation:** [https://docs.docker.com/](https://docs.docker.com/)
- **Next.js Docker Guide:** [https://nextjs.org/docs/deployment#docker-image](https://nextjs.org/docs/deployment#docker-image)
- **Docker Compose Docs:** [https://docs.docker.com/compose/](https://docs.docker.com/compose/)

---

## 💡 Tips & Best Practices

✨ **Use docker-compose** for easier management
✨ **Tag images with versions** (e.g., `v1.0.0`, `v1.0.1`)
✨ **Monitor logs** regularly for issues
✨ **Clean up** unused containers/images: `docker system prune`
✨ **Backup volumes** before major changes
✨ **Use .dockerignore** to reduce build context size
✨ **Enable health checks** for production containers
✨ **Set resource limits** in production

---

**🎉 Your Docker setup is ready! Choose a method above and get started!**
