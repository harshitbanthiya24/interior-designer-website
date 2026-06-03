# InteriorDream - Professional Interior Designer Website

✨ A modern, animated website for professional interior designers with stunning 3D effects and smooth animations.

## Features

🎨 **3D Animations**
- Interactive 3D hero section with Three.js
- Smooth page transitions using Framer Motion
- Hover effects and parallax animations

📸 **Portfolio Gallery**
- Filterable project gallery
- Smooth animations on image load
- Category-based filtering

💼 **Services Showcase**
- 6 comprehensive services
- Animated service cards
- Interactive hover effects

⭐ **Testimonials**
- Carousel slider for client reviews
- Smooth transitions
- Star ratings

📧 **Contact Form**
- Fully functional contact form
- Backend integration
- Form validation

📱 **Responsive Design**
- Mobile-first approach
- Works perfectly on all devices
- Optimized performance

## Tech Stack

**Frontend:**
- React 18
- Vite (build tool)
- Three.js (3D animations)
- Framer Motion (smooth animations)
- Tailwind CSS (styling)
- Axios (API calls)

**Backend:**
- Node.js
- Express.js
- MongoDB (database)
- CORS enabled

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Step 1: Clone the repository
```bash
git clone <repository-url>
cd interior-designer-website
```

### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 3: Install Backend Dependencies
```bash
cd ../backend
npm install
```

### Step 4: Set up Environment Variables

Create a `.env` file in the `backend` folder:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/interior-designer
NODE_ENV=development
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

Visit `http://localhost:5173` in your browser!

## Production Build

### Build Frontend
```bash
cd frontend
npm run build
# Creates optimized build in dist/ folder
```

### Build Backend
```bash
cd backend
npm run build
# Ready for deployment
```

## Deployment Guide

### Option 1: Deploy Frontend on Vercel (Recommended)

1. **Create Vercel Account:**
   - Go to https://vercel.com
   - Sign up with GitHub/GitLab/Bitbucket

2. **Deploy:**
   ```bash
   npm install -g vercel
   vercel --prod
   ```
   
   OR connect your GitHub repo to Vercel for automatic deployments

3. **Configure:**
   - Set environment variables if needed
   - Vercel will auto-detect Vite and build correctly

### Option 2: Deploy Backend on Render

1. **Create Render Account:**
   - Go to https://render.com
   - Sign up

2. **Create New Web Service:**
   - Connect GitHub repo
   - Set Build Command: `cd backend && npm install`
   - Set Start Command: `npm start`
   - Add environment variables (MONGODB_URI, etc.)

3. **Deploy:**
   - Render will auto-deploy on push

### Option 3: Deploy Backend on Railway

1. **Create Railway Account:**
   - Go to https://railway.app
   - Sign up with GitHub

2. **Create New Project:**
   - Connect repository
   - Select backend folder
   - Set PORT to 8080 (Railway default)
   - Deploy!

## API Endpoints

### Base URL (Local)
```
http://localhost:5000/api
```

### Endpoints

**GET /portfolio** - Get all portfolio items
```bash
curl http://localhost:5000/api/portfolio
```

**POST /portfolio** - Add new portfolio item
```bash
curl -X POST http://localhost:5000/api/portfolio \
  -H "Content-Type: application/json" \
  -d '{"title":"Design","description":"...","imageUrl":"...","category":"..."}'
```

**GET /testimonials** - Get all testimonials
```bash
curl http://localhost:5000/api/testimonials
```

**POST /contact** - Submit contact form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","phone":"123456","message":"..."}'
```

**GET /contact** - Get all contact submissions
```bash
curl http://localhost:5000/api/contact
```

## Customization

### Change Colors
- Edit the gradient colors in CSS files
- Primary color: `#c4a747` (Gold)
- Secondary color: `#8b7355` (Brown)

### Update Content
- Edit portfolio data in `App.jsx`
- Update testimonials in `App.jsx`
- Modify service cards in `Services.jsx`

### Add More Sections
- Create new component in `components/` folder
- Import and add to `App.jsx`
- Create corresponding CSS file

## Performance Optimization

✅ **Already Implemented:**
- Code splitting with Vite
- Image optimization (Unsplash CDN)
- Lazy loading with Framer Motion
- Efficient re-renders with React

💡 **Additional Tips:**
- Use responsive image sizes
- Optimize large image files
- Enable gzip compression on backend
- Use CDN for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

MIT License - Feel free to use this for your projects!

## Support

For issues or questions:
1. Check the code comments
2. Review the component structure
3. Test with browser DevTools

---

Built with ❤️ using React, Three.js, and Framer Motion
