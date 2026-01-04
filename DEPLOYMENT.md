# GitHub Pages Deployment Guide

## Quick Start

Your project is already configured for GitHub Pages deployment! Follow these steps:

### Step 1: Push to GitHub

If you haven't already, initialize git and push your code:

```bash
cd ~/Desktop/Blog/finance-blog

# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Finance blog with GitHub Pages setup"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/finance-blog.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/finance-blog`
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### Step 3: Automatic Deployment

The GitHub Actions workflow will automatically:
- Build your Angular app when you push to `main` branch
- Deploy to GitHub Pages
- Your site will be live at: `https://YOUR_USERNAME.github.io/finance-blog/`

**Note:** First deployment may take 2-3 minutes. You can check the progress in the **Actions** tab of your repository.

## Manual Deployment

If you want to deploy manually:

```bash
npm run deploy
```

This will build and deploy to the `gh-pages` branch.

## Update Repository Name

If your repository name is NOT `finance-blog`, update these files:

1. **package.json** - Change base-href in `build:ghpages` script:
   ```json
   "build:ghpages": "ng build --configuration production --base-href=/YOUR_REPO_NAME/"
   ```

2. **.github/workflows/deploy.yml** - Update publish_dir if needed

3. **src/404.html** - Update base href:
   ```html
   <base href="/YOUR_REPO_NAME/">
   ```

## Troubleshooting

### Site shows 404 errors
- Make sure `404.html` is in the root of your `gh-pages` branch
- Check that base-href matches your repository name

### Assets not loading
- Verify all assets are in `src/assets/` folder
- Check browser console for 404 errors
- Ensure base-href is correct

### GitHub Actions failing
- Check the **Actions** tab in your repository
- Look for error messages in the workflow logs
- Ensure Node.js version matches (currently set to 18)

## Your Live URL

After deployment, your site will be available at:

```
https://YOUR_USERNAME.github.io/finance-blog/
```

Replace:
- `YOUR_USERNAME` with your GitHub username
- `finance-blog` with your repository name (if different)

## Next Steps

1. Push your code to GitHub
2. Enable GitHub Pages in repository settings
3. Wait for GitHub Actions to deploy (check Actions tab)
4. Visit your live website!

---

**Need help?** Check the Actions tab in your GitHub repository for deployment logs.

