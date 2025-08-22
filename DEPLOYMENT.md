# Deployment Instructions

## GitHub Pages Deployment

Follow these steps to deploy your portfolio website to GitHub Pages:

### Step 1: Create GitHub Repository
1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `portfolio` or `gino-portfolio`
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### Step 2: Connect Local Repository to GitHub
```bash
cd /Users/ginowinnefeld/Documents/portfolio-website
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select branch: "main" and folder: "/ (root)"
6. Click "Save"

### Step 4: Access Your Live Site
- Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/`
- It may take a few minutes to deploy initially

## Alternative: Custom Domain (Optional)
If you want to use a custom domain:
1. Add a `CNAME` file to your repository with your domain name
2. Configure DNS settings with your domain provider
3. Update the custom domain in GitHub Pages settings

## Making Updates
To update your live site:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Your changes will automatically deploy to GitHub Pages within a few minutes.