# 🌍 Africa Health Collaborative - Frontend

> Modern, responsive React frontend for the Africa Health Collaborative platform, promoting collaboration, knowledge exchange, and scholarship in health professions education across Africa.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)
![Google Analytics](https://img.shields.io/badge/GA4-Integrated-4285F4?logo=google-analytics)

## 📸 Preview

| Homepage | Events | Resources |
|----------|--------|-----------|
| Modern landing with hero | Event listings & registration | Document repository |

## ✨ Features

### Core Functionality
- 🏥 **Health Education Hub** - Centralized platform for health professions education
- 📅 **Event Management** - Browse, register, and track health education events
- 📚 **Resource Library** - Access documents, educational materials, and research
- 👥 **Leader Profiles** - Showcase AHC leaders and team members
- 🤝 **Partner Directory** - Local and international partners with detailed profiles
- 💼 **Programs** - Explore health employment, entrepreneurship, and ecosystem programs

### Analytics & Privacy
- 📊 **Google Analytics 4** - Comprehensive event tracking and user analytics
- 🍪 **GDPR Compliant Cookie Consent** - BT.com-inspired cookie banner with:
  - 12-month consent expiration
  - Granular cookie preferences (Analytical, Marketing, etc.)
  - Dedicated `/cookie-preferences` management page
  - Easy consent withdrawal via footer link
- 🔒 **Privacy-First** - localStorage-based consent (no server-side tracking)
- 📈 **Event Tracking** - Detailed tracking of:
  - Event registrations
  - Leader profile views
  - Document downloads
  - Form submissions
  - LinkedIn clicks
  - Newsletter signups

### User Experience
- 🌓 **Dark/Light Mode** - System preference detection with manual toggle
- 📱 **Fully Responsive** - Mobile-first design with adaptive layouts
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- ⚡ **Fast Loading** - Optimized builds with code splitting
- 🔍 **SEO Optimized** - React Helmet for meta tags and social sharing
- ♿ **Accessible** - WCAG 2.1 AA compliant components
- 🌐 **Multi-Language Ready** - i18n integration for future translations

### Technical Features
- 🔐 **Authentication** - Laravel Sanctum integration with secure cookie-based auth
- 📡 **API Integration** - RESTful API communication with the Laravel backend
- 🗂️ **State Management** - Redux Toolkit for global state
- 🎯 **Form Validation** - React Hook Form with Zod schema validation
- 🖼️ **Image Optimization** - Lazy loading and responsive images
- 🔄 **Dynamic Routing** - Client-side routing with React Router v6
- 💬 **Chatbot Widget** - Integrated support chatbot (placeholder for customization)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18.3 with TypeScript 5.5 |
| **Build Tool** | Vite 7.1 (ultra-fast HMR) |
| **Styling** | Tailwind CSS 3.4 + PostCSS |
| **State Management** | Redux Toolkit 2.2 |
| **Routing** | React Router DOM 6.26 |
| **Forms** | React Hook Form 7.53 + Zod 3.23 |
| **HTTP Client** | Axios 1.13 |
| **Analytics** | React GA4 2.1 + Custom Service |
| **Animations** | GSAP 3.13, Embla Carousel |
| **SEO** | React Helmet Async 2.0 |
| **Icons** | Lucide React 0.468 |
| **Dates** | Day.js 1.11 |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Running AHC-BackEnd instance (Laravel API)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/AHC-FrontEnd_2.git
cd AHC-FrontEnd_2

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env and configure API URL
# VITE_API_BASE_URL=http://localhost:8000/api

# Start development server
npm run dev
```

Application runs at: **http://localhost:5173**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

Build output: `dist/` directory

## 🔐 Environment Variables

Create `.env` file in the project root:

```env
# Backend API URL (required)
VITE_API_BASE_URL=http://localhost:8000/api

# Optional: Production URL
# VITE_API_BASE_URL=https://api.ahc.tewostech.com/api
```

## 📁 Project Structure

```
AHC-FrontEnd_2/
├── public/                      # Static assets
│   ├── images/                  # Images (logos, icons, etc.)
│   └── logo.svg                 # Main logo
├── src/
│   ├── app/                     # Application setup
│   │   ├── routes.tsx           # Route configuration
│   │   └── store.ts             # Redux store setup
│   ├── components/              # React components
│   │   ├── Layout.tsx           # Main layout wrapper
│   │   ├── Header.tsx           # Navigation header
│   │   ├── Footer.tsx           # Footer with links
│   │   ├── CookieBanner.tsx     # GDPR cookie consent banner
│   │   ├── chatbot/             # Chatbot widget
│   │   └── ...                  # Other reusable components
│   ├── pages/                   # Page components
│   │   ├── Home.tsx             # Homepage
│   │   ├── About.tsx            # About page
│   │   ├── EventsList.tsx       # Events listing
│   │   ├── EventDetail.tsx      # Event details & registration
│   │   ├── Resources.tsx        # Resource library
│   │   ├── CookiePreferences.tsx # Cookie management page
│   │   ├── PrivacyPolicy.tsx    # Privacy policy
│   │   └── ...                  # Other pages
│   ├── features/                # Redux slices
│   │   ├── navigation/          # Navigation API
│   │   ├── events/              # Events API
│   │   ├── contact/             # Contact form API
│   │   └── settings/            # Settings API (company info)
│   ├── contexts/                # React contexts
│   │   └── AnalyticsContext.tsx # Analytics provider
│   ├── services/                # Service layers
│   │   └── analytics.ts         # GA4 integration (400+ lines)
│   ├── hooks/                   # Custom React hooks
│   │   └── usePageTracking.ts   # Auto page tracking
│   ├── types/                   # TypeScript definitions
│   │   └── analytics.ts         # Analytics types
│   ├── styles/                  # Global styles
│   │   └── index.css            # Tailwind imports
│   └── main.tsx                 # App entry point
├── .env.example                 # Environment template
├── .gitignore                   # Git ignore rules
├── index.html                   # HTML template
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript config
├── vite.config.ts               # Vite configuration
├── tailwind.config.ts           # Tailwind customization
├── postcss.config.js            # PostCSS plugins
└── README.md                    # This file
```

## 📡 API Integration

### Backend Endpoints Used

| Method | Endpoint | Description |
|--------|----------|-------------|
| **Public** | | |
| GET | `/api/v1/pages` | CMS pages (dynamic routes) |
| GET | `/api/v1/navigation` | Main navigation menu |
| GET | `/api/v1/footer` | Footer navigation |
| GET | `/api/v1/events` | Events listing |
| GET | `/api/v1/events/{id}` | Event details |
| GET | `/api/v1/public/google-analytics-config` | GA4 configuration |
| POST | `/api/v1/contact` | Contact form submission |
| **Auth** | | |
| POST | `/api/auth/login` | User login (Sanctum) |
| GET | `/api/auth/user` | Get authenticated user |
| POST | `/api/auth/logout` | User logout |
| **Protected** | | |
| GET | `/api/v1/user/events` | User's registered events |
| POST | `/api/v1/events/{id}/register` | Event registration |

### CORS Configuration

Ensure Laravel backend allows frontend origin:

```php
// config/cors.php
'allowed_origins' => [
    'http://localhost:5173',  // Development
    'https://ahcadmin.aau.edu.et', // Production
],
```

## 🍪 Cookie Consent Implementation

### Features
- ✅ **BT.com-Style Banner** - Professional bottom banner with 3 buttons
- ✅ **12-Month Expiration** - Automatic consent expiry (GDPR compliant)
- ✅ **Dedicated Preferences Page** - `/cookie-preferences` for management
- ✅ **Footer Link** - Easy access to change preferences anytime
- ✅ **localStorage Storage** - Client-side only (privacy-first)
- ✅ **Automatic Migration** - Old consent formats auto-removed

### Cookie Categories

| Category | Description | Toggle |
|----------|-------------|--------|
| **Strictly Necessary** | Essential for site operation | Always On |
| **Analytical Cookies** | Google Analytics tracking | User Choice |
| **Preference Cookies** | User settings (future) | User Choice |
| **Marketing Cookies** | Advertising (future) | User Choice |

### Implementation Files
- `src/components/CookieBanner.tsx` - Bottom banner
- `src/pages/CookiePreferences.tsx` - Management page
- `src/services/analytics.ts` - Consent logic + GA4
- `src/contexts/AnalyticsContext.tsx` - Provider

## 📊 Google Analytics Integration

### Features
- ✅ **Automatic Page Tracking** - All route changes tracked
- ✅ **Custom Event Tracking** - 20+ business events
- ✅ **Cookie Consent Integration** - Respects user choices
- ✅ **Config from Backend** - Dynamic measurement ID
- ✅ **Error Handling** - Graceful failures
- ✅ **Development Mode** - Disabled in development

### Tracked Events

| Event | Trigger | Parameters |
|-------|---------|------------|
| `event_registration_started` | User clicks "Register" | event_id, event_title |
| `event_registration_completed` | Registration form submitted | event_id, event_title |
| `leader_profile_viewed` | Leader profile opened | leader_id, leader_name |
| `linkedin_clicked` | LinkedIn link clicked | profile_type, profile_id |
| `contact_form_submitted` | Contact form sent | subject |
| `media_downloaded` | File download | file_type, file_name |
| `newsletter_signup` | Newsletter subscription | source |
| ... | 13 more events | ... |

### Setup

1. Backend admin configures GA4 at `/admin/settings?tab=integrations`:
   - Measurement ID (e.g., `G-ABC123XYZ`)
   - Property ID (for backend dashboard)
   - Service Account JSON (for API access)

2. Frontend automatically:
   - Fetches config from `/api/v1/public/google-analytics-config`
   - Shows cookie banner (if consent required)
   - Initializes GA4 after user accepts

3. Analytics dashboard available at `/admin/analytics` (backend)

## 🎨 Styling & Theming

### Tailwind Configuration

Custom colors in `tailwind.config.ts`:

```typescript
colors: {
  'ahc-green': {
    light: '#A8D5BA',
    DEFAULT: '#6B9E78',
    dark: '#4A7C59',
  },
}
```

### Dark Mode

Uses CSS class strategy:
```typescript
// Toggle in Layout.tsx
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('darkMode', isDark);
};
```

## 🔨 Development

### Available Scripts

```bash
# Start development server (hot reload)
npm run dev

# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code (if configured)
npm run lint
```

### Code Quality

- **TypeScript** - Strict mode enabled
- **ESLint** - Code quality rules
- **Prettier** - Code formatting (recommended)

### Adding New Pages

1. Create component in `src/pages/`:
```typescript
// src/pages/NewPage.tsx
export default function NewPage() {
  return <div>New Page Content</div>;
}
```

2. Add route in `src/app/routes.tsx`:
```typescript
{ path: 'new-page', element: <NewPage /> }
```

3. Add to navigation (backend CMS or `Header.tsx`)

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# VITE_API_BASE_URL = https://api.ahc.tewostech.com/api
```

### Netlify

```bash
# Build command: npm run build
# Publish directory: dist

# Add _redirects file for SPA:
echo "/*    /index.html   200" > dist/_redirects
```

### Traditional Hosting

```bash
# Build
npm run build

# Upload dist/ to server (Apache/Nginx)
# Configure server for SPA routing
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name ahc.tewostech.com;
    root /var/www/ahc-frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🧪 Testing (Future)

Recommended testing stack:
- **Vitest** - Unit testing
- **React Testing Library** - Component testing
- **Playwright** - E2E testing

```bash
# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm run test
```

## 📝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Coding Standards

- Use TypeScript strict mode
- Follow React best practices (hooks, functional components)
- Write meaningful commit messages
- Add comments for complex logic
- Keep components small and focused

## 🐛 Troubleshooting

### CORS Errors
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** Update Laravel `config/cors.php` to allow your frontend origin.

### Cookie Banner Not Showing
**Check:**
1. Open console - look for `[CookieBanner]` logs
2. Check localStorage: `ahc_analytics_consent`
3. Verify backend returns `cookie_consent_required: true`

### Build Errors
```
Module not found: Can't resolve '@/...'
```
**Solution:** Check `tsconfig.json` and `vite.config.ts` have correct path aliases.

### Analytics Not Tracking
**Check:**
1. Cookie consent accepted?
2. GA Measurement ID configured in backend?
3. Open Network tab → see `www.google-analytics.com` requests?

## 📄 License

MIT License - Africa Health Collaborative © 2024

## 🤝 Support

- **Website:** [https://ahc.tewostech.com](https://ahc.tewostech.com)
- **Email:** info@healthventures.org
- **Documentation:** See `/docs` folder
- **Backend Repo:** [AHC-BackEnd](https://github.com/your-org/AHC-BackEnd)

---

**Built with ❤️ by Tewos Technology for Africa Health Collaborative**

*Empowering health education across Africa through technology*
