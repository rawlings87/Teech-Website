# 🚀 START HERE - Run Your Website Locally

## Step-by-Step Guide to Host the App Locally

---

## ✅ **STEP 1: Install Node.js**

### Download Node.js

1. Go to **[https://nodejs.org/](https://nodejs.org/)**
2. Download the **LTS (Long Term Support)** version
   - Look for the button that says "Recommended For Most Users"
   - Should be version 18.x or 20.x
3. Run the installer (`.msi` file)
4. Follow the installation wizard:
   - ✅ Accept license agreement
   - ✅ Keep default installation path
   - ✅ **IMPORTANT:** Check "Automatically install necessary tools"
   - ✅ Click "Next" through all steps
   - ✅ Click "Install"

### Verify Installation

After installation completes:

1. Open **Command Prompt** or **PowerShell**:
   - Press `Win + R`
   - Type `cmd` or `powershell`
   - Press Enter

2. Type this command and press Enter:
   ```bash
   node --version
   ```

3. You should see something like:
   ```
   v18.19.0
   ```

4. Check npm (package manager) is also installed:
   ```bash
   npm --version
   ```

5. You should see something like:
   ```
   10.2.3
   ```

✅ If you see version numbers, Node.js is installed correctly!

---

## ✅ **STEP 2: Open Terminal in Project Directory**

### Option A: Using VS Code Terminal (RECOMMENDED)

1. In VS Code, press **`` Ctrl + ` ``** (backtick key, usually below Escape)
2. Or go to **Terminal → New Terminal** in the menu
3. The terminal will automatically open in your project directory

### Option B: Using Command Prompt/PowerShell

1. Press `Win + R`
2. Type `cmd` or `powershell`
3. Press Enter
4. Navigate to project directory:
   ```bash
   cd "c:\Users\User\Documents\RGS webapp"
   ```

### Verify You're in the Right Directory

Type this command:
```bash
dir
```

You should see files like:
- `package.json`
- `next.config.ts`
- `tailwind.config.ts`
- Folders: `app`, `components`, `lib`

✅ If you see these files, you're in the right place!

---

## ✅ **STEP 3: Install Project Dependencies**

This downloads all required packages (React, Next.js, Tailwind, etc.)

### Run Installation Command

In your terminal, type:

```bash
npm install
```

**What to Expect:**
- This will take **1-3 minutes**
- You'll see lots of text scrolling
- It's downloading ~200MB of packages
- A `node_modules` folder will be created

**When Complete, You'll See:**
```
added 345 packages, and audited 346 packages in 1m

52 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

✅ Installation complete when you see "found 0 vulnerabilities"

### If You See Warnings

Some warnings are normal, like:
- "deprecated" warnings - ✅ Safe to ignore
- "npm WARN" - ✅ Safe to ignore

### If You See Errors

If installation fails:

**Error: "EACCES: permission denied"**
```bash
# Run as administrator
# Right-click Command Prompt → "Run as administrator"
```

**Error: "network error"**
```bash
# Your firewall might be blocking npm
# Try:
npm config set strict-ssl false
npm install
```

**Error: "Cannot find module"**
```bash
# Delete node_modules and try again:
rmdir /s node_modules
npm install
```

---

## ✅ **STEP 4: Start Development Server**

Now you're ready to run the website!

### Run Development Command

In your terminal, type:

```bash
npm run dev
```

**What to Expect:**

You'll see output like this:

```
  ▲ Next.js 15.1.3
  - Local:        http://localhost:3000
  - Environments: .env.local

 ✓ Starting...
 ✓ Ready in 2.3s
```

✅ **Success!** Your website is now running locally!

### Important Notes

- **Do NOT close the terminal** - the server runs in the terminal
- You'll see logs as you interact with the site
- The terminal shows real-time updates
- To stop the server: Press `Ctrl + C` in the terminal

---

## ✅ **STEP 5: Open Website in Browser**

### Open Your Browser

1. Open your favorite browser (Chrome, Edge, Firefox, Safari)
2. Go to this URL:

   **[http://localhost:3000](http://localhost:3000)**

3. Or click the link in the terminal (if your terminal supports it)

### What You Should See

✅ **Home Page** with:
- Navigation bar at top
- Large hero section with headline
- Metrics strip (72h, 99.9%, Zero Noise)
- Scrolling telemetry feed
- Services cards
- Industries grid
- CTA section
- Footer

### Test Navigation

Click through all pages:
- Home (/)
- About (/about)
- Services (/services)
- Training (/training)
- Recruitment (/recruitment)
- Events (/events)
- Contact (/contact)

---

## 🔥 **HOT RELOAD (Live Updates)**

Your dev server has **hot reload** enabled!

### Try It:

1. Keep browser open at [http://localhost:3000](http://localhost:3000)
2. In VS Code, open `lib/content.ts`
3. Change line 11 (headline):
   ```typescript
   headline: 'YOUR CUSTOM HEADLINE HERE',
   ```
4. Save the file (`Ctrl + S`)
5. **Watch the browser** - it updates automatically! ⚡

No need to refresh - changes appear instantly!

---

## 📱 **VIEW ON MOBILE (SAME NETWORK)**

Want to see the site on your phone?

### Find Your Computer's IP Address

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address" (e.g., `192.168.1.100`)

### Access from Phone

1. Connect phone to **same WiFi** as computer
2. Open browser on phone
3. Go to: `http://YOUR-IP:3000`
   - Example: `http://192.168.1.100:3000`

---

## 🛑 **STOPPING THE SERVER**

When you're done testing:

1. Go back to the terminal
2. Press **`Ctrl + C`**
3. You'll see: `^C` and the server stops
4. Type `exit` to close the terminal (optional)

---

## 🔄 **RESTARTING THE SERVER**

To start again later:

1. Open terminal in project directory
2. Run: `npm run dev`
3. Open browser to `http://localhost:3000`

That's it!

---

## 🏗️ **BUILDING FOR PRODUCTION**

To create an optimized production build:

### Build Command

```bash
npm run build
```

This creates an optimized version in `.next/` folder.

### Test Production Build Locally

```bash
npm start
```

Opens production version at `http://localhost:3000`

---

## 🧪 **RUNNING TESTS**

To run the test suite:

```bash
npm test
```

To run with coverage:

```bash
npm run test:coverage
```

To run all validations:

```bash
npm run validate
```

This runs: `lint` → `type-check` → `test`

---

## 🚨 **TROUBLESHOOTING**

### Port 3000 Already in Use

**Error Message:**
```
Port 3000 is already in use
```

**Solution 1: Kill the process**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F
```

**Solution 2: Use different port**
```bash
# Use port 3001 instead
set PORT=3001 && npm run dev
```

### "Cannot Find Module" Error

```bash
# Delete node_modules and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Page Won't Load / Shows Error

1. **Check terminal** - any error messages?
2. **Clear cache**: `Ctrl + Shift + R` in browser
3. **Restart server**: `Ctrl + C`, then `npm run dev`
4. **Delete .next folder**: `rmdir /s /q .next`

### TypeScript Errors

```bash
# Check for type errors
npm run type-check
```

### Linting Errors

```bash
# Check and fix linting issues
npm run lint
```

---

## 📂 **PROJECT STRUCTURE (FOR REFERENCE)**

```
RGS webapp/
├── app/                    # Next.js pages (App Router)
│   ├── page.tsx           # Home page → http://localhost:3000/
│   ├── about/page.tsx     # About → http://localhost:3000/about
│   ├── contact/page.tsx   # Contact → http://localhost:3000/contact
│   └── ...
├── components/            # React components
│   ├── ui/               # Buttons, Cards, Badges
│   ├── layout/           # Navbar, Footer
│   └── home/             # Hero, Metrics, Services
├── lib/
│   └── content.ts        # 🔑 EDIT THIS to change website copy
├── public/               # Static files (if needed)
├── node_modules/         # Dependencies (created by npm install)
├── .next/                # Build output (created by npm run dev/build)
├── package.json          # Project dependencies and scripts
└── next.config.ts        # Next.js configuration
```

---

## 🎯 **QUICK REFERENCE COMMANDS**

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies (run once) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build locally |
| `npm test` | Run test suite |
| `npm run validate` | Run all checks (lint + types + test) |
| `Ctrl + C` | Stop the dev server |

---

## 🎨 **EDITING CONTENT**

All website copy is in **one file**: `lib/content.ts`

### To Change Homepage Headline:

1. Open `lib/content.ts`
2. Find line 11 (in `home.hero` section)
3. Change the headline text
4. Save (`Ctrl + S`)
5. Browser updates automatically! ✨

### Example:

```typescript
export const home = {
  hero: {
    headline: 'Your New Amazing Headline',  // ← Change this
    subheading: 'Your new description...',  // ← And this
    // ...
  },
};
```

---

## 📚 **HELPFUL RESOURCES**

- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **React Docs**: [https://react.dev](https://react.dev)

---

## ✅ **SUCCESS CHECKLIST**

Before moving to deployment, ensure:

- [ ] Website runs locally without errors
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms display properly
- [ ] Mobile responsive design looks good
- [ ] No console errors in browser DevTools (F12)
- [ ] Tests pass: `npm test`
- [ ] Build succeeds: `npm run build`

---

## 🚀 **NEXT STEPS**

Once your site is running locally and you've tested it:

1. **Update placeholders** in `lib/content.ts`:
   - Contact email
   - Phone number

2. **Configure form** in `components/contact/QuoteForm.tsx`

3. **Deploy to Vercel**:
   - Push to GitHub
   - Connect to Vercel
   - Deploy with one click

---

## 💡 **TIPS**

✨ **Keep terminal open** while working - you'll see errors immediately
✨ **Use hot reload** - edit and save files to see instant updates
✨ **Open DevTools** (F12) to debug any issues
✨ **Check terminal** for error messages if something breaks

---

**Need Help?** Check:
1. Terminal output for error messages
2. Browser console (F12) for JavaScript errors
3. [INSTRUCTIONS.md](INSTRUCTIONS.md) for detailed guides
4. [TESTING.md](TESTING.md) for testing documentation

---

**🎉 You're Ready! Follow the steps above and your website will be running in ~5 minutes!**
