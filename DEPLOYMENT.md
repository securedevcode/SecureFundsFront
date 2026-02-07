# Deployment Guide - SecureFundsFinance

## Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Local Development

1. **Clone and Install**
```bash
cd securefunds-nextjs
npm install
```

2. **Run Development Server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

3. **Build for Production**
```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended - One-Click Deploy)

Vercel is the creator of Next.js and offers the best integration.

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

**Benefits:**
- Automatic deployments on git push
- Built-in CDN
- Automatic HTTPS
- Edge network
- Preview deployments
- Zero configuration

**Environment Variables in Vercel:**
```
NEXT_PUBLIC_SITE_URL=https://securefundsfinance.com
```

### Option 2: Netlify

**Steps:**
1. Push code to GitHub
2. Connect to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Deploy

**netlify.toml:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Option 3: AWS Amplify

**Steps:**
1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy

**Build Settings:**
```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - npm ci
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Option 4: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_SITE_URL=https://securefundsfinance.com
    restart: unless-stopped
```

### Option 5: Traditional VPS/Server

**Using PM2 (Process Manager):**

1. **Install PM2**
```bash
npm install -g pm2
```

2. **Create ecosystem.config.js**
```javascript
module.exports = {
  apps: [{
    name: 'securefunds',
    script: 'npm',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

3. **Deploy**
```bash
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name securefundsfinance.com www.securefundsfinance.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Post-Deployment Checklist

### 1. DNS Configuration
- [ ] Point domain to hosting provider
- [ ] Set up www subdomain
- [ ] Configure SSL certificate
- [ ] Enable HTTPS redirect

### 2. Performance Optimization
- [ ] Enable CDN
- [ ] Configure caching headers
- [ ] Test Core Web Vitals
- [ ] Run Lighthouse audit

### 3. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership
- [ ] Set up Google Analytics
- [ ] Configure Google Tag Manager
- [ ] Create Google Business Profile
- [ ] Submit to Bing Webmaster Tools

### 4. Security
- [ ] Enable HTTPS
- [ ] Configure security headers
- [ ] Set up DDoS protection (Cloudflare)
- [ ] Enable rate limiting
- [ ] Regular security updates

### 5. Monitoring
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error tracking (Sentry)
- [ ] Set up performance monitoring
- [ ] Enable real user monitoring

## Environment Variables

Create `.env.local` for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# API Keys (if needed)
# NEXT_PUBLIC_API_KEY=your_api_key

# Database (if needed)
# DATABASE_URL=postgresql://...
```

**Production Environment Variables:**
```env
NEXT_PUBLIC_SITE_URL=https://securefundsfinance.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

## Custom Domain Setup

### Vercel
1. Go to Project Settings > Domains
2. Add your domain: `securefundsfinance.com`
3. Add www variant: `www.securefundsfinance.com`
4. Update DNS records as shown

### Cloudflare DNS (Recommended)
```
Type: A
Name: @
Content: [Your server IP]
Proxy: Enabled

Type: CNAME
Name: www
Content: securefundsfinance.com
Proxy: Enabled
```

## SSL Certificate

### Let's Encrypt (Free)
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d securefundsfinance.com -d www.securefundsfinance.com

# Auto-renewal
sudo certbot renew --dry-run
```

### Cloudflare SSL (Free)
1. Enable SSL in Cloudflare dashboard
2. Set SSL mode to "Full (strict)"
3. Enable "Always Use HTTPS"
4. Enable HSTS

## CDN Configuration

### Cloudflare
1. Add site to Cloudflare
2. Update nameservers
3. Enable these features:
   - Auto Minify (JS, CSS, HTML)
   - Brotli compression
   - HTTP/2
   - Caching
   - Firewall rules

### Amazon CloudFront
```json
{
  "Origins": [{
    "DomainName": "your-app.vercel.app",
    "OriginProtocolPolicy": "https-only"
  }],
  "DefaultCacheBehavior": {
    "Compress": true,
    "ViewerProtocolPolicy": "redirect-to-https"
  }
}
```

## Database Setup (If Needed)

### PostgreSQL (Vercel Postgres)
```bash
npm install @vercel/postgres
```

### MongoDB (Atlas)
```bash
npm install mongodb
```

## Monitoring Tools

### Google Analytics 4
Add to `app/layout.tsx`:
```tsx
import Script from 'next/script'

// Add to <head>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### Sentry Error Tracking
```bash
npm install @sentry/nextjs

# Initialize
npx @sentry/wizard -i nextjs
```

### Vercel Analytics
```bash
npm install @vercel/analytics

# Add to layout
import { Analytics } from '@vercel/analytics/react';
```

## Performance Testing

### Lighthouse
```bash
npm install -g lighthouse
lighthouse https://securefundsfinance.com
```

### WebPageTest
Visit [webpagetest.org](https://www.webpagetest.org)

### Google PageSpeed Insights
Visit [pagespeed.web.dev](https://pagespeed.web.dev)

## Backup Strategy

### Daily Backups
1. Database backups (if applicable)
2. Environment variables
3. Configuration files
4. User uploads (if any)

### Backup Tools
- Vercel: Automatic deployments serve as backups
- GitHub: Version control backup
- AWS S3: Long-term storage

## Scaling Considerations

### Horizontal Scaling
- Use Vercel's Edge Network
- Configure load balancer
- Database read replicas

### Vertical Scaling
- Upgrade server resources
- Optimize database queries
- Implement caching (Redis)

## Maintenance

### Regular Tasks
- [ ] Weekly dependency updates
- [ ] Monthly security patches
- [ ] Quarterly performance audits
- [ ] Annual SSL certificate renewal (auto with Let's Encrypt)

### Update Commands
```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest

# Security audit
npm audit
npm audit fix
```

## Troubleshooting

### Build Failures
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Environment Variables Not Working
- Ensure they start with `NEXT_PUBLIC_` for client-side
- Restart development server after changes
- Check Vercel dashboard for production

### Images Not Loading
- Verify `next.config.js` remote patterns
- Check image URLs are accessible
- Ensure proper CORS headers

### Slow Performance
- Run Lighthouse audit
- Check bundle size
- Optimize images
- Enable caching
- Use CDN

## Support Contacts

- Vercel Support: support@vercel.com
- Netlify Support: support@netlify.com
- Google Search Console: [search.google.com/search-console](https://search.google.com/search-console)

## Cost Estimation

### Vercel (Hobby)
- Free tier: $0/month
- Great for MVP and small sites

### Vercel (Pro)
- $20/month per member
- Includes analytics, password protection

### VPS (DigitalOcean/Linode)
- $5-20/month depending on specs
- Full control, more setup required

### Enterprise
- Custom pricing
- Dedicated support
- SLA guarantees

---

**Deployment Date**: [Add date after deployment]
**Deployed By**: [Your name]
**Environment**: Production
**Domain**: https://securefundsfinance.com
