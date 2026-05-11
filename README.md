# Mayn AI - AI-Powered Video Creation Platform

A modern, high-performance Full-Stack web application for AI-powered video generation, editing, and visualization. Inspired by Vidrush with advanced features and professional UI.

## 🚀 Features

### Core Features
- **AI Video Generation**: Transform text prompts into stunning videos using Luma, Runway, or MiniMax APIs
- **Multiple Resolutions**: Support for 720p, 1080p, and 4K video generation
- **Credit System**: Flexible credit-based pricing for video generation
- **Video Management**: Upload, edit, organize, and manage videos
- **Social Sharing**: Share videos publicly with unique share tokens
- **Advanced Analytics**: Track video views and user engagement

### UI/UX Features
- **Modern Dashboard**: Intuitive and responsive dashboard design
- **Glassmorphism Design**: Ultra-modern glassmorphism UI effects
- **Dynamic Theming**: Dark, Light, and Cyberpunk theme options
- **Smooth Animations**: Framer Motion-powered animations and transitions
- **Mobile Responsive**: Fully responsive design for all devices

### Authentication & Security
- **Google OAuth Integration**: Secure login with Google
- **Session Management**: NextAuth.js for robust session handling
- **Database Security**: Prisma ORM with PostgreSQL
- **API Security**: Protected API endpoints with authentication

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **State Management**: Zustand
- **UI Components**: Custom components with Lucide icons
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **API Framework**: Next.js API Routes
- **Authentication**: NextAuth.js with Google OAuth
- **Database**: PostgreSQL with Prisma ORM
- **Validation**: TypeScript for type safety

### External APIs
- **Video Generation**: Luma AI, Runway ML, MiniMax
- **Authentication**: Google OAuth 2.0
- **Storage**: Cloudinary (planned)
- **Payments**: Stripe (planned)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- Google OAuth credentials
- API keys for video generation providers

### Setup Steps

1. **Clone repository**
```bash
git clone <repository-url>
cd mayn-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

4. **Setup database**
```bash
npx prisma generate
npx prisma migrate dev --name init
```

5. **Run development server**
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 🗂️ Project Structure

```
mayn-ai/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── Sidebar.tsx        # Navigation sidebar
│   │   ├── VideoCard.tsx      # Video card component
│   │   └── VideoGeneratorModal.tsx
│   ├── lib/                   # Utility functions
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── db.ts              # Prisma client
│   │   ├── services.ts        # Business logic
│   │   ├── video-generation.ts # API integrations
│   │   └── api-utils.ts       # API utilities
│   ├── hooks/                 # Custom React hooks
│   │   └── index.ts
│   ├── store/                 # Zustand stores
│   │   └── app.ts
│   ├── styles/                # Global styles
│   │   └── globals.css
│   └── types/                 # TypeScript definitions
│       └── index.ts
├── prisma/
│   └── schema.prisma          # Database schema
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

```
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
LUMA_API_KEY=your-luma-api-key
RUNWAY_API_KEY=your-runway-api-key
MINIMAX_API_KEY=your-minimax-api-key
```

## 📚 API Documentation

### Video Generation
- **POST** `/api/videos/generate` - Generate new video
- **GET** `/api/videos/generate` - List user videos

### Credits
- **GET** `/api/credits` - Get credit balance
- **POST** `/api/credits` - Purchase credits

### Authentication
- **GET** `/api/auth/session` - Get current session
- **POST** `/api/auth/signin` - Sign in with provider
- **GET** `/api/auth/signout` - Sign out user

## 🎨 Theme System

The platform supports three themes:

1. **Dark** (Default): Sleek dark theme with cyan accents
2. **Light**: Clean light theme for daytime use
3. **Cyberpunk**: Futuristic theme with neon colors

Switch themes from the sidebar settings panel.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```bash
docker build -t mayn-ai .
docker run -p 3000:3000 mayn-ai
```

### Traditional Hosting
1. Build project: `npm run build`
2. Start server: `npm start`

## 📝 Development Roadmap

- [ ] Payment integration with Stripe
- [ ] Video editing tools
- [ ] Advanced filters and effects
- [ ] Collaboration features
- [ ] API for third-party integrations
- [ ] Mobile app (React Native)
- [ ] Real-time collaboration
- [ ] Community gallery

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m 'Add feature'`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 📧 Support

For support, email support@mayn-ai.com or create an issue on GitHub.

## 🙏 Acknowledgments

- Inspired by Vidrush
- Built with Next.js, Tailwind CSS, and modern web technologies
- Special thanks to the open-source community
