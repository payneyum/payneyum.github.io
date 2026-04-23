# Deploy SkillSwap Hub to GitHub Pages

## 1. Create the Repository

1. Go to [GitHub](https://github.com) and create a new repository named `payneyum.github.io`
2. **Do NOT** initialize it with a README (we'll push our own code)

## 2. Push Your Code

If Git is not installed on your system, [download it here](https://git-scm.com/download/win) first.

Open a terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/payneyum/payneyum.github.io.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. On your GitHub repo, go to **Settings → Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. The workflow file (`.github/workflows/deploy.yml`) will automatically deploy on every push

## 4. Done!

Your site will be live at: **https://payneyum.github.io**

It may take 1-2 minutes for the first deployment.

## Alternative: Manual Deploy via gh-pages

If you prefer deploying manually from your local machine:

```bash
npm install
npm run deploy
```

This builds the project and pushes the `dist` folder to the `gh-pages` branch.

## Important Notes

- **Routing:** This project uses `createHashRouter`, so URLs will look like `https://payneyum.github.io/#/dashboard` instead of `/dashboard`. This is required for GitHub Pages static hosting.
- **All existing navigation** (`useNavigate`, `useLocation`, `<Link>`) works exactly the same.
- **No 404 errors** on page refresh — hash-based routing is fully client-side.

