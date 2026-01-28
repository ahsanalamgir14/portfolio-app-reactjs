# React Portfolio App

A complete portfolio application built with React featuring smooth scrolling, animated header, project showcase, and contact form.

## Features

✅ **Header with smooth transitions**
- External links to social media (GitHub, LinkedIn, Medium, Stack Overflow, Email)
- Internal navigation with smooth scrolling
- Hides on scroll down, shows on scroll up with smooth animation

✅ **Landing Section**
- Avatar image
- Name and greeting
- Short bio

✅ **Projects Section**
- 2x2 grid layout
- Card-based project display
- Hover effects

✅ **Contact Me Section**
- Full form validation using Formik and Yup
- Required fields: name, email, message (min 25 characters)
- Success/error feedback
- Form reset after submission

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── App.js                          # Main app component with scroll logic
├── App.css                         # Global styles
├── components/
│   ├── Header.js                   # Navigation header
│   ├── Header.css
│   ├── LandingSection.js           # Hero section
│   ├── LandingSection.css
│   ├── ProjectsSection.js          # Projects grid
│   ├── ProjectsSection.css
│   ├── Card.js                     # Project card component
│   ├── Card.css
│   ├── ContactMeSection.js         # Contact form
│   └── ContactMeSection.css
└── package.json
```

## Key Concepts Explained

### 1. Smooth Scrolling
The header navigation uses `scrollIntoView` with smooth behavior:
```javascript
element.scrollIntoView({
  behavior: 'smooth',
  block: 'start',
});
```

### 2. Header Show/Hide Animation
Uses scroll event listener to track scroll direction:
```javascript
useEffect(() => {
  const handleScroll = () => {
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowHeader(false); // Scrolling down
    } else {
      setShowHeader(true);  // Scrolling up
    }
  };
}, [lastScrollY]);
```

The CSS transition handles the animation:
```css
.header {
  transition: transform 0.3s ease-in-out;
}
.header.hide {
  transform: translateY(-100%);
}
```

### 3. Form Validation with Formik & Yup
- **Formik** manages form state and submission
- **Yup** provides validation schema
- Displays error messages for invalid inputs
- Shows success/error alerts after submission

### 4. 2x2 Grid Layout
Uses CSS Grid for responsive project cards:
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
```

## Customization

### Update Social Links
Edit the `socials` array in `components/Header.js`:
```javascript
const socials = [
  { icon: faGithub, url: "YOUR_GITHUB_URL" },
  // Add more...
];
```

### Update Projects
Edit the `projects` array in `components/ProjectsSection.js`:
```javascript
const projects = [
  {
    title: "Your Project",
    description: "Description...",
    imageSrc: "image-url",
  },
];
```

### Update Personal Info
Edit `components/LandingSection.js`:
- Replace avatar image URL
- Update name and bio text

## Dependencies

- **React** - UI framework
- **Formik** - Form management
- **Yup** - Validation schema
- **Font Awesome** - Social media icons

## Requirements Met

✅ External social media links in header  
✅ Internal smooth scrolling navigation  
✅ Landing section with avatar and bio  
✅ 2x2 project grid with cards  
✅ Contact form with validation  
✅ Header hide/show on scroll with animation  

## License

MIT
