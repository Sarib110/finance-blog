# Finance Blog

A modern, animated finance blogging website built with Angular, Tailwind CSS, and AOS (Animate On Scroll).

## 🌐 Live Demo

Visit the live website: [https://YOUR_USERNAME.github.io/finance-blog/](https://YOUR_USERNAME.github.io/finance-blog/)

*(Replace YOUR_USERNAME with your GitHub username)*

## ✨ Features

- **Modern Animations**: Smooth scroll animations using AOS
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Blog System**: Complete blog listing and detail pages
- **Categories**: Budgeting, Investment, and Digital Finance
- **Pages**: Home, All Articles, About, Contact, Privacy & Policy
- **Modern UI**: Glassmorphism effects, gradient text, and smooth transitions

## 🛠️ Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: Tailwind CSS
- **Animations**: AOS (Animate On Scroll)
- **Package Manager**: npm

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.19.1 or compatible)
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start development server
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

```bash
# Build for production
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment:

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be live at: `https://YOUR_USERNAME.github.io/finance-blog/`

### Manual Deployment

```bash
# Build and deploy manually
npm run deploy
```

This will:
1. Build the project with the correct base-href for GitHub Pages
2. Deploy to the `gh-pages` branch

### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select branch: `gh-pages` and folder: `/ (root)`
5. Click **Save**

## 📁 Project Structure

```
finance-blog/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── blog-detail/    # Individual article page
│   │   ├── blog-list/      # All articles listing
│   │   ├── contact/        # Contact page
│   │   ├── footer/         # Footer component
│   │   ├── header/         # Header/Navigation component
│   │   ├── home/           # Home page
│   │   ├── privacy/        # Privacy & Policy page
│   │   ├── models/         # TypeScript interfaces
│   │   └── services/       # Blog service with mock data
│   ├── assets/             # Images and static assets
│   └── styles.css          # Global styles
├── .github/workflows/      # GitHub Actions deployment
└── angular.json            # Angular configuration
```

## 🎨 Design Features

- **Hero Section**: Animated background with image/video support
- **Modern Cards**: Glassmorphism effects and hover animations
- **Gradient Text**: Eye-catching gradient text effects
- **Smooth Transitions**: Professional animations throughout
- **Responsive Navigation**: Mobile-friendly menu with animations

## 📝 Mock Data

The project currently uses mock data from `BlogService`. All blog posts are stored locally and can be easily replaced with API calls when the backend is ready.

## 🔧 Configuration

### Update Repository Name

If your repository name is different from `finance-blog`, update:

1. `package.json` - `build:ghpages` script base-href
2. `angular.json` - base-href in build configuration
3. `.github/workflows/deploy.yml` - publish_dir path

## 📄 License

This project is private and proprietary.

## 👨‍💻 Development

### Code Structure

- **Standalone Components**: All components are standalone (no NgModules)
- **Services**: Injectable services for data management
- **Routing**: Angular Router with lazy loading support
- **Styling**: Tailwind CSS utility classes with custom animations

### Adding New Pages

1. Generate component: `npx ng generate component page-name --standalone`
2. Add route in `app.routes.ts`
3. Update navigation in `header.component.html`

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the repository owner.

---

Built with ❤️ using Angular and Tailwind CSS
