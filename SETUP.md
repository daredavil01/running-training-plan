# Setup Instructions for "Get Me My Training Plan!"

## Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js**: Version 18.x or higher ([Download here](https://nodejs.org/))
- **npm**: Comes with Node.js (or use yarn/pnpm)

To verify your installation:
```bash
node --version  # Should show v18.x or higher
npm --version   # Should show 9.x or higher
```

## Installation Steps

### Step 1: Install Dependencies

Navigate to the project directory and install all required packages:

```bash
cd /home/sanket-tambare/learning/training-plan
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- All necessary dependencies

### Step 2: Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

You should see:
- The main page with the title "Get Me My Training Plan!"
- An input form to enter time trial results
- Instructions on how to use the app

### Step 3: Test the Application

1. **Open your browser** to http://localhost:3000
2. **Enter a time trial**:
   - Select "5K" or "10K"
   - Enter time (e.g., 25 minutes, 0 seconds)
   - Select your race goal (Half Marathon or Full Marathon)
3. **Click "Get My Training Plan!"**
4. **Review the results**:
   - Interval training paces
   - Tempo and long run paces
   - Predicted completion times
   - Weekly training schedule

### Step 4: Build for Production

To create a static export ready for deployment:

```bash
npm run build
```

This will:
- Compile and optimize all code
- Generate static HTML, CSS, and JavaScript files
- Create an `out/` directory with the complete static site

### Step 5: Preview Production Build

To test the production build locally:

```bash
# Install a simple HTTP server if you don't have one
npm install -g serve

# Serve the out directory
serve out
```

## Deployment Options

### Option 1: GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `out/` directory to your GitHub Pages branch

### Option 2: Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Option 3: Vercel

1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 4: Any Static Host

Simply upload the contents of the `out/` directory to any web server or static hosting service.

## Troubleshooting

### Issue: "Command 'npm' not found"

**Solution**: Install Node.js from https://nodejs.org/

### Issue: Port 3000 already in use

**Solution**: Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Build errors

**Solution**: 
1. Delete node_modules and package-lock.json
2. Run `npm install` again
3. Try building again: `npm run build`

### Issue: TypeScript errors

**Solution**: Ensure all files are saved and run:
```bash
npm run lint
```

## File Structure Overview

```
training-plan/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page with state management
│   └── globals.css        # Global Tailwind styles
├── components/            # React components
│   ├── InputForm.tsx      # User input form
│   ├── TrainingResults.tsx # Results container
│   ├── IntervalPaces.tsx  # Interval paces display
│   ├── TempoAndLongRuns.tsx # Tempo/long run paces
│   ├── CompletionTimes.tsx # Race time predictions
│   └── WeeklySchedule.tsx # Weekly training schedule
├── lib/                   # Core logic
│   ├── trainingData.json  # Pace data (from CSV)
│   ├── paceCalculator.ts  # Calculation logic
│   └── scheduleGenerator.ts # Schedule generation
├── public/                # Static assets
├── next.config.js         # Next.js config (static export)
├── tailwind.config.js     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── package.json           # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `out/` directory)
- `npm run start` - Start production server (not used with static export)
- `npm run lint` - Run ESLint to check code quality

## Features to Test

1. ✅ **5K Time Input**: Enter a 5K time and verify paces are calculated
2. ✅ **10K Time Input**: Enter a 10K time and verify conversion to 5K equivalent
3. ✅ **Half Marathon Plan**: Select half marathon and verify appropriate schedule
4. ✅ **Full Marathon Plan**: Select full marathon and verify different schedule
5. ✅ **Interpolation**: Enter a non-standard time (e.g., 23.5 min) to test interpolation
6. ✅ **Print Function**: Click "Print Training Plan" to test print-friendly layout
7. ✅ **Responsive Design**: Test on different screen sizes (mobile, tablet, desktop)
8. ✅ **Start Over**: Click "Start Over" to return to input form

## Next Steps

1. **Customize the data**: Edit `lib/trainingData.json` to add/modify training paces
2. **Adjust styling**: Modify Tailwind classes in components for custom look
3. **Add features**: Extend functionality (e.g., save plans, multiple athletes, etc.)
4. **Deploy**: Choose a hosting option and deploy your app

## Support

If you encounter any issues:
1. Check this SETUP.md file
2. Review the README.md for detailed documentation
3. Check the browser console for error messages
4. Ensure all dependencies are installed correctly

## Success Checklist

- [ ] Node.js installed (v18+)
- [ ] Dependencies installed (`npm install` completed)
- [ ] Development server running (`npm run dev` works)
- [ ] App accessible at http://localhost:3000
- [ ] Input form loads correctly
- [ ] Training plan generates when form is submitted
- [ ] All paces and schedules display correctly
- [ ] Production build succeeds (`npm run build`)
- [ ] Static files generated in `out/` directory

Congratulations! Your training plan app is ready to use! 🎉

