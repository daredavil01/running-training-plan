# Setup and Installation Guide

## Prerequisites
- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher

## Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd training-plan
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   This installs Next.js, React, Tailwind CSS, and PDF generation libraries (`html2canvas`, `jspdf`).

## Development

To start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To create a static export ready for deployment:

```bash
npm run build
```

This generates a static site in the `out/` directory.

## PDF Export Support

The application supports exporting training plans as PDFs. This feature relies on `html2canvas` and `jspdf`. If you encounter issues with PDF export:
1. Ensure all dependencies are installed (`npm install`).
2. Try the "Print" button as a fallback, which uses the browser's native print-to-PDF capability.

## Deployment

You can deploy the contents of the `out/` directory to any static hosting service:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3 / CloudFront**

For detailed deployment steps, refer to the hosting provider's documentation for static sites.
