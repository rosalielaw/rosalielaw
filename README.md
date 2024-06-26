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

```bash
npm run docs:dev
```

### Build

```bash
npm run docs:build
```

### Preview build

```bash
npm run docs:preview
```

It's good practice to store all images in the (./images)[./images] directory;
[./images/blog](./images/blog) and [./images/career](./images/career) should be used if images 
are specific to a blog or career page. Otherwise place them in the [./images](./images) directory.

Images like the [favicon](https://www.google.com/search?q=favicon+explained) should be in the [./images](./images)
directory.
