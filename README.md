# Maharajan C — Personal Tech Portfolio

**Website:** [maharajanc.com](https://maharajanc.com)  
**Brand:** Maharajan C  
**Tagline:** Technology • Automation • Education • Digital Innovation  

Modern personal tech portfolio, interactive timeline, project showcase, and runnable Automation Lab for **Maharajan C** — Technical Assistant, IT Professional, Automation Enthusiast, and Creator with 14+ years of technical experience.

---

## 🚀 Live Publishing on GitHub Pages

This repository is configured with an automated **GitHub Actions** deployment pipeline (`.github/workflows/deploy.yml`).

### Step 1: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository: [github.com/maha3875/myself](https://github.com/maha3875/myself)
2. Click **Settings** (top tabs) $\rightarrow$ select **Pages** (in the left sidebar).
3. Under **Build and deployment** $\rightarrow$ **Source**, choose:
   - **GitHub Actions** (recommended)
4. Under **Custom domain**, enter:
   - `maharajanc.com` (automatically set via `public/CNAME`)
5. Check **Enforce HTTPS**.

### Step 2: Push changes to `main`
Every time you push to the `main` branch, GitHub Actions will automatically:
- Install dependencies
- Build the optimized production bundle (`dist/`)
- Deploy the site to GitHub Pages seamlessly!

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Features

- **Interactive Visual Hero:** With live terminal diagnostics (`maharajan@sys-node:~`).
- **About Me:** The 14-year evolution across systems, infrastructure, and education.
- **Skills Matrix:** 35+ technical competencies with real-time keyword search and domain filters.
- **My Technology Journey:** 14-year interactive timeline spanning 2010 hardware to AI workflows.
- **Projects Showcase:** Deep case studies for TechPickers, TNKalvi, Exam Analytics, Workspace Provisioner, and Biometric Sync.
- **Automation Lab:** Runnable live simulators for Google Apps Script, Excel VBA ROI calculator, Python log parser, and Webhook dispatcher.
- **Content Hub:** YouTube masterclass library and educational guides.
- **Articles & Notes:** Technical tutorials with syntax-highlighted, copyable code snippets.
- **Contact:** Verified domain email, live Indian Standard Time (IST) clock, and consultation inquiry form.
- **Spotlight Command Palette (`⌘K` / `Ctrl+K`):** Global instant keyboard navigation.
