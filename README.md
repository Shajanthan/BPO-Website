# BPO Business Solutions Website

A modern, professional BPO (Business Process Outsourcing) website built with React, Vite, and Tailwind CSS.

## Features

- **Home Page**: Hero section with tagline, key services overview, and call-to-action buttons
- **Services Page**: Comprehensive listing of all BPO services
- **Contact Page**: Contact form with office location, phone, and email details
- **Resources Page**: Business knowledge articles and tips
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalistic design with soft colors

## Services Included

- Business Registration
- VAT Registration
- Tax Consultation
- Payroll Management
- Online Bookkeeping
- Auditing
- Trademark Registration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation bar component
│   └── Footer.jsx      # Footer component
├── pages/
│   ├── Home.jsx        # Home page
│   ├── Services.jsx    # Services page
│   ├── Contact.jsx     # Contact page
│   └── Resources.jsx   # Resources/Knowledge page
├── App.jsx             # Main app component with routing
├── main.jsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Customization

- **Colors**: Edit `tailwind.config.js` to customize the color scheme
- **Content**: Update the content in each page component
- **Images**: The website uses Unsplash placeholder images. Replace the image URLs in the page components with your own images:
  - Home page: Service cards and hero background
  - Services page: Service card images and header background
  - Resources page: Article featured images and header background
  - Contact page: Contact info cards and header background

## Technologies Used

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- PostCSS
- Autoprefixer

## License

This project is open source and available for use.

