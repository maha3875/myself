# Maharajan C — Personal Tech Portfolio

**Live Website:** [https://maha3875.github.io/myself/](https://maha3875.github.io/myself/)  
**Brand:** Maharajan C  
**Tagline:** Technology • Automation • Education • Digital Innovation  

Modern personal tech portfolio, interactive timeline, project showcase, and runnable Automation Lab for **Maharajan C** — Technical Assistant, IT Professional, Automation Enthusiast, and Creator with 14+ years of technical experience.

---

## 🚀 Live Publishing on GitHub Pages

This repository has an automated **GitHub Actions** deployment pipeline (`.github/workflows/deploy.yml`).

### Step 1: Enable GitHub Pages in Repository Settings
1. Go to: [github.com/maha3875/myself/settings/pages](https://github.com/maha3875/myself/settings/pages)
2. Under **Build and deployment** $\rightarrow$ **Source**:
   - Change from *"Deploy from a branch"* to **`GitHub Actions`**.
3. That's all! GitHub Actions will automatically run the build and publish your site at:
   👉 **`https://maha3875.github.io/myself/`**

### Step 2: (Optional) Adding a Custom Domain Later
When you purchase your domain (e.g. `maharajanc.com`):
1. In this project, create a file named `public/CNAME` containing your domain name:
   ```text
   maharajanc.com
   ```
2. Commit and push:
   ```bash
   git add public/CNAME
   git commit -m "feat: add custom domain"
   git push origin main
   ```
3. In your domain registrar (Hostinger, Cloudflare, Namecheap, etc.), add the GitHub Pages DNS A records pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
   - CNAME `www` $\rightarrow$ `maha3875.github.io.`

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
- **Contact:** Verified email (`maharajanchithiraimuthu@gmail.com`), live Indian Standard Time (IST) clock, and consultation inquiry form.
- **Spotlight Command Palette (`⌘K` / `Ctrl+K`):** Global instant keyboard navigation.
