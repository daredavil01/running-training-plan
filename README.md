# Get Me My Training Plan! 🏃

A Next.js web application that generates personalized running training plans based on your 5K or 10K time trial results.

## 📚 Documentation

- [**Setup Guide**](docs/setup_guide.md): Detailed installation, development, and deployment instructions.
- [**Architecture**](docs/architecture.md): Overview of the project structure, data flow, and tech stack.
- [**Components**](docs/components.md): Documentation for the React components and utility libraries.

## Features

- **Time Trial Input**: Enter your 5K or 10K time trial results
- **10K to 5K Conversion**: Automatically converts 10K times to equivalent 5K times
- **Race Goal Selection**: Choose between Half Marathon or Full Marathon training
- **Comprehensive Training Data**:
  - Interval training paces (400M to 2000M)
  - Tempo run paces (Short, Mid, Long)
  - Long run paces (Half & Full Marathon)
  - Predicted completion times
- **Weekly Training Schedule**: Sample 7-day training plan tailored to your goal
- **Weekly Mileage Progression**: Complete week-by-week distance breakdown with visual charts
- **Print-Friendly & PDF Export**: Optimized print styles and PDF download option

## Getting Started

For a complete guide, see [**docs/setup_guide.md**](docs/setup_guide.md).

### Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

For a detailed architecture overview, see [**docs/architecture.md**](docs/architecture.md).

```
training-plan/
├── app/                      # Next.js app directory
├── components/              # React components
├── docs/                    # Project documentation
├── lib/                     # Business logic and data
└── public/                  # Static assets
```

## How It Works

1. **User Input**: User enters their 5K or 10K time trial result and selects their race goal.
2. **Conversion**: If 10K time is entered, it's converted to an equivalent 5K time.
3. **Data Matching**: The app finds the closest match in the training data or interpolates between values.
4. **Results Display**: Shows personalized paces, predicted times, and a weekly training schedule.

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: html2canvas, jspdf

## License

This project is provided as-is for educational and personal use.

## Disclaimer

This training plan is for informational purposes only. Always consult with a healthcare professional before starting any new training program.
