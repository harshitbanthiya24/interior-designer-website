# Deployment Instructions

This guide will help you deploy your InteriorDream website to production.

## Quick Start (Local Testing)

### 1. Start Backend
```bash
cd backend
npm run dev
```
Backend will run on `http://localhost:5000`

### 2. Start Frontend (in another terminal)
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

---

## Production Deployment

### Option A: Vercel + Render (Recommended)

#### Step 1: Deploy Frontend to Vercel

1. **Prepare your code:**
   ```bash
   git push origin main
   ```

2. **Go to Vercel.com**
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework: Vite (auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Your frontend is live!** ✨
   - Vercel will give you a URL like: `https://your-app.vercel.app`

4. **Update Backend URL in Frontend:**
   - In `frontend/.env.production` (create if not exists):
     ```
     VITE_API_URL=https://your-backend-url.com
     ```
   - Update `frontend/src/components/Contact.jsx` to use this env var:
     ```javascript
     const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
     await axios.post(`${API_URL}/api/contact`, formData);
     ```

#### Step 2: Deploy Backend to Render

1. **Go to Render.com**
   - Click "New +"
   - Select "Web Service"
   - Connect your GitHub account
   - Select your repository

2. **Configure:**
   - Name: `interior-designer-backend`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: Free

3. **Environment Variables:**
   - Add `MONGODB_URI`: 
     - Get free MongoDB at https://mongodb.com/cloud/atlas
     - Create a cluster and get connection string
     - Add it here

4. **Deploy!**
   - Render will build and deploy
   - You'll get a URL like: `https://your-api.onrender.com`
   - Copy this URL for next step

5. **Update Frontend with Backend URL:**
   - In Vercel project settings:
     - Environment Variables
     - Add `VITE_API_URL`: `https://your-api.onrender.com`
     - Redeploy

---

### Option B: Netlify + Heroku

#### Frontend on Netlify:
1. Connect GitHub to netlify.com
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy!

#### Backend on Heroku:
1. Install Heroku CLI
2. Create app: `heroku create your-app-name`
3. Add MongoDB URI: `heroku config:set MONGODB_URI=<your-url>`
4. Deploy: `git push heroku main`

---

### Option C: Full Stack on Railway.app

1. Go to railway.app
2. Create new project
3. Add GitHub repo
4. Railway auto-detects and deploys both
5. Set environment variables
6. Done!

---

## MongoDB Setup (Free)

1. Go to https://mongodb.com/cloud/atlas
2. Sign up
3. Create free cluster
4. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/interior-designer`
5. Use this as `MONGODB_URI` in environment variables

---

## Custom Domain (Optional)

After deployment, add your custom domain:

### Vercel:
- Settings → Domains
- Add your domain
- Update DNS records

### Render:
- Settings → Custom Domain
- Add your domain
- Follow DNS instructions

---

## Environment Variables Checklist

Frontend (.env.production):
```
VITE_API_URL=https://your-backend-url.com
```

Backend (.env):
```
PORT=8080 (or as set by host)
MONGODB_URI=mongodb+srv://username:password@...
NODE_ENV=production
```

---

## Testing Your Deployment

1. Visit your frontend URL
2. Test Hero section animations
3. Click "Explore Portfolio" 
4. Filter portfolio items
5. Submit contact form
6. Check that form submission works

---

## Troubleshooting

**Frontend shows 404:**
- Check if build was successful
- Verify build output directory

**Contact form doesn't work:**
- Check backend API URL
- Verify MongoDB connection
- Check CORS settings

**3D animations not showing:**
- Browser supports WebGL
- No console errors
- Check Three.js is loaded

**Slow performance:**
- Images are optimized
- JavaScript is minified
- Database queries are fast

---

## Advanced: Custom Server

Want full control? Deploy to your own server:

```bash
# Build both
cd frontend && npm run build
cd ../backend

# Copy frontend dist to backend
cp -r ../frontend/dist ./public

# Update backend server.js
app.use(express.static('public'));

# Deploy to AWS/DigitalOcean/Linode/etc
```

---

## Need Help?

- Check `README.md` for more details
- Review component files for customization
- Test locally first before deploying
- Use browser DevTools to debug

**Good luck! 🚀**
