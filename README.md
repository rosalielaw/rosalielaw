# Rosalie Law

This VitePress site is hosted from GitHub.io pages at [www.rosalielaw.com](https://www.rosalielaw.com).

## Setup / Requirements

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install
nvm use
npm install
```

### Development

When you want to test the site locally, run the following command:

```bash
npm run docs:dev
```

### Build

To build the site, run the following command:
```bash
npm run docs:build
```

### Preview build

To preview the build, run the following command:
```bash
npm run docs:preview
```

### Deploy to GitHub Pages
Commit to `main` branch and push to GitHub. The site will be automatically deployed to GitHub Pages.

### Images
It's good practice to store all images in the `./images` directory for example `./images/blog` and `./images/experience`.

Images like the [favicon](https://www.google.com/search?q=favicon+explained) should be in the `./images`
directory.
