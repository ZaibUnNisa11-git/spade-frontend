# SPADE Agency Landing Page – Website Replication

## 🔗 Live Demo
👉 https://spadelanding.netlify.app/

---

## 📌 Project Overview
This project is a front-end replication of the **SPADE Agency landing page design**, completed as part of a 48-hour technical assessment.

The goal was to accurately reproduce the given UI design while ensuring:
- Pixel-accurate layout matching  
- Fully responsive design  
- Clean and maintainable code structure  
- Functional navigation interactions  

---

## 🛠️ Tech Stack
- HTML5  
- CSS3 (Flexbox & Grid)  
- JavaScript (DOM manipulation)  
- Netlify (Deployment)

---

## 📄 Features

### 🎯 UI Sections Implemented
- Hero Section  
- Who We Work With  
- Services Section  
- Process Section  
- Why Us Section  
- Projects Showcase  
- Testimonials  
- Blog Section  
- Footer  

---

### 📱 Responsive Design
- Fully responsive across mobile, tablet, and desktop  
- Adaptive layout using Flexbox and CSS Grid  
- Mobile-friendly navigation menu  

---

### ⚙️ JavaScript Functionality

#### Mobile Navigation Toggle
```javascript
function toggleMenu() {

    const nav = document.getElementById('nav-menu');

    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '80px';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#030712';
        nav.style.padding = '2rem';
        nav.style.gap = '1.5rem';
        nav.style.zIndex = '999';
    }
}
