# Installing Dependencies for PDF Export

The app now includes PDF export functionality. To use this feature, you need to install the required dependencies.

## Installation Steps

### If you haven't installed dependencies yet:

```bash
cd /home/sanket-tambare/learning/training-plan
npm install
```

### If you already have node_modules:

```bash
cd /home/sanket-tambare/learning/training-plan
npm install html2canvas jspdf
```

## Dependencies Added

- **html2canvas** (v1.4.1): Converts HTML elements to canvas for PDF generation
- **jspdf** (v2.5.1): Generates PDF documents from canvas/images

## Features

### Print Functionality
- Click "Print Training Plan" to open the browser print dialog
- Optimized print styles for clean, professional output
- Automatically hides UI elements (buttons, navigation) when printing
- Preserves colors and formatting

### PDF Export
- Click "Export as PDF" to download a PDF file
- Automatically named based on race type (e.g., "Half-Marathon-Training-Plan.pdf")
- Includes all training data, schedules, and mileage tables
- Multi-page support for long content

## Usage

1. Generate your training plan by entering your time trial results
2. Review the complete plan with all sections
3. Choose to either:
   - **Print**: Use browser's print dialog to print or save as PDF
   - **Export PDF**: Directly download a PDF file

## Troubleshooting

If PDF export doesn't work:
1. Make sure dependencies are installed: `npm install`
2. Try the Print option instead (works in all browsers)
3. Check browser console for errors
4. Ensure JavaScript is enabled in your browser

## Browser Compatibility

- **Print**: Works in all modern browsers (Chrome, Firefox, Safari, Edge)
- **PDF Export**: Works best in Chrome/Edge; may have issues in older browsers

