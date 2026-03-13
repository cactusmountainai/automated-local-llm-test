# Lane Smith Portfolio Website - Project Ideas & Roadmap

## Project Overview

**Goal:** Build a polished, professional portfolio website for Lane Smith that showcases skills, projects, and personality. The site should feel modern, load fast, and leave a lasting impression on visitors.

**Current State:** Skeleton site with Tailwind CSS, dark mode support, and basic page structure. Main landing page shows "Under Construction".

**Tech Stack:**
- HTML5 + Vanilla JavaScript
- Tailwind CSS (v3.3.3) with dark mode
- Express.js (for local dev server)
- Font Awesome icons
- Static site (can be deployed to GitHub Pages, Netlify, Vercel)

---

## Design Direction

### Visual Style
- **Clean & Modern:** Minimalist with strategic use of color
- **Dark Mode First:** Both light and dark themes should look premium
- **Typography:** Clean sans-serif, good hierarchy
- **Animations:** Subtle, purposeful (fade-ins, scroll reveals, hover effects)
- **Color Palette:** 
  - Primary: Blue (#1a56db)
  - Dark bg: Gray 900 (#111827)
  - Light bg: Slate 50 (#f8fafc)

### Layout Principles
- Single-page application feel with smooth scrolling sections
- Mobile-first responsive design
- Generous whitespace
- Card-based project showcases
- Sticky navigation with active section highlighting

---

## Content Sections to Build

### 1. Hero Section
- **Big bold name:** "Lane Smith"
- **Tagline:** Short, punchy description of what you do
- **Background:** Subtle gradient or animated particles
- **CTA buttons:** "View My Work" + "Contact Me"
- **Scroll indicator:** Animated arrow or chevron

### 2. About Section
- **Professional photo:** High-quality headshot
- **Bio:** 2-3 paragraphs covering:
  - Background and expertise
  - What you're passionate about
  - What makes you unique
- **Quick stats:** Years experience, projects completed, technologies
- **Download resume button**

### 3. Skills Section
- **Visual skill bars or animated counters**
- **Categorized:** Frontend, Backend, Tools, Soft Skills
- **Icons:** For each technology
- **Proficiency levels:** Optional visual indicator

**Technologies to highlight:**
- HTML5, CSS3, JavaScript/ES6+
- Tailwind CSS
- React/Vue (if applicable)
- Node.js, Express
- Git, GitHub
- Any other relevant tools

### 4. Projects Section
- **3-6 featured projects** with:
  - Project thumbnail/screenshot
  - Title and brief description
  - Tech stack used
  - Live demo link
  - GitHub repo link
  - "Learn more" expandable details
- **Grid layout:** Responsive (1 col mobile, 2-3 col desktop)
- **Hover effects:** Card lift, image zoom

### 5. Experience/Timeline Section
- **Work history** or **Education** (whichever is more relevant)
- **Timeline layout:** Vertical line with nodes
- **Each entry:** Date range, title, company/school, description
- **Icons:** For different types (work, education, certification)

### 6. Contact Section
- **Contact form:** Name, email, message
- **Form validation:** Client-side with error messages
- **Alternative contact methods:**
  - Email link
  - LinkedIn profile link
  - GitHub profile link
  - Twitter/X (if applicable)
- **Location:** General area (optional)

### 7. Footer
- **Copyright notice**
- **Quick links:** Back to top, social links
- **Tech stack badge:** "Built with HTML, Tailwind, JS"

---

## Technical Improvements

### Performance
- [ ] Lazy load images
- [ ] Minify CSS/JS for production
- [ ] Optimize images (WebP format, proper sizing)
- [ ] Add preconnect for external resources (Font Awesome)
- [ ] Implement critical CSS inlining

### SEO
- [ ] Add proper meta tags (title, description, OG tags)
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Semantic HTML structure
- [ ] Schema.org structured data

### Accessibility
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Focus indicators
- [ ] Alt text for all images
- [ ] Color contrast compliance (WCAG AA)

### Developer Experience
- [ ] Add build script for production
- [ ] Set up automatic deployment (GitHub Actions)
- [ ] Add ESLint rules for HTML
- [ ] Create component templates for reusability

---

## Animation & Interaction Ideas

### Scroll Animations
- Fade in sections as they enter viewport
- Stagger animations for lists/cards
- Parallax effect on hero background

### Hover Effects
- Button scale and color shift
- Card lift with shadow
- Image zoom within containers
- Link underline animations

### Micro-interactions
- Dark mode toggle animation (sun to moon)
- Form input focus animations
- Success/error states for form submission
- Loading states

### Page Transitions
- Smooth scroll to sections
- Optional: Page transition animations (if adding multiple pages)

---

## Content Assets Needed

### Images
- [ ] Professional headshot (About section)
- [ ] Project screenshots (minimum 3)
- [ ] Background images/patterns (optional)
- [ ] Favicon and OG image

### Copy
- [ ] Hero tagline
- [ ] About section bio (2-3 paragraphs)
- [ ] Project descriptions
- [ ] Skills list with proficiency
- [ ] Contact form labels and placeholders

### External Links
- [ ] LinkedIn profile URL
- [ ] GitHub profile URL
- [ ] Project demo URLs
- [ ] Project repo URLs
- [ ] Resume PDF link

---

## Deployment Options

1. **GitHub Pages** (free, easy)
2. **Netlify** (free tier, great features)
3. **Vercel** (free tier, fast)
4. **Cloudflare Pages** (free, fast CDN)

**Recommendation:** GitHub Pages for simplicity since repo is already on GitHub.

---

## Phase 1 MVP (Minimum Viable Portfolio)

Focus on getting something live quickly:

1. Complete hero section with name and CTA
2. About section with bio
3. Skills section (text-based list)
4. 2-3 project cards with links
5. Contact section with email link
6. Basic dark mode toggle
7. Deploy to GitHub Pages

**Timeline:** 1-2 days of focused work

---

## Phase 2 Polish

Add the premium touches:

1. All animations and micro-interactions
2. Full project showcase (6 projects)
3. Timeline/experience section
4. Contact form with validation
5. SEO optimization
6. Performance optimizations
7. Accessibility audit

**Timeline:** 3-5 additional days

---

## Inspiration References

Look at these portfolio styles for inspiration:
- Minimal developer portfolios
- Dark mode heavy designs
- Single-page scroll layouts
- Card-based project showcases

---

## Success Criteria

- [ ] Loads in under 2 seconds
- [ ] Looks great on mobile, tablet, desktop
- [ ] Dark mode is polished
- [ ] All links work
- [ ] Contact method is functional
- [ ] Passes Lighthouse audit (90+ score)
- [ ] Reflects Lane Smith's personal brand

---

## Notes for Autonomous Development

- Keep all code in the existing repo structure
- Use Tailwind classes consistently
- Maintain dark mode support throughout
- Test on mobile viewport frequently
- Commit regularly with clear messages
- Update this file as tasks are completed
