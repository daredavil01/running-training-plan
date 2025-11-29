# Project Architecture

## Overview
The "Get Me My Training Plan!" application is a Next.js web application designed to generate personalized running training plans. It uses a client-side architecture where all calculations happen in the browser, ensuring fast response times and privacy.

## Directory Structure

### `app/`
Contains the Next.js App Router files.
- `page.tsx`: The main entry point and state container. It manages the application state (user input, generated plan) and orchestrates the flow between components.
- `layout.tsx`: Defines the root layout and global styles.
- `globals.css`: Contains global Tailwind CSS directives and custom styles.

### `components/`
Reusable React components that make up the UI.
- **Input**: `InputForm.tsx` handles user data entry (time, race type).
- **Display**: `TrainingResults.tsx`, `WeeklySchedule.tsx`, `MileageProgression.tsx` display the generated plan.
- **Utility**: `DarkModeToggle.tsx` manages theme switching.

### `lib/`
Contains the core business logic and data processing functions.
- `paceCalculator.ts`: Algorithms for calculating training paces based on input time.
- `scheduleGenerator.ts`: Logic for creating the day-by-day training schedule.
- `mileageGenerator.ts`: Calculates weekly mileage targets.
- `pdfExport.ts`: Handles the generation of PDF files from the DOM.
- `trainingData.json`: Source data for VDOT paces (derived from Jack Daniels' formulas).

## Data Flow

1. **User Input**: The user enters their 5K/10K time and selects a target race in `InputForm`.
2. **Calculation**: `page.tsx` receives the input and calls `calculateTrainingPlan` from `lib/paceCalculator`.
3. **Schedule Generation**: The calculated plan is passed to `generateWeeklySchedule` and `generateWeeklyMileage`.
4. **Rendering**: The resulting data objects (`TrainingPlan`, `WeeklySchedule`, `WeeklyMileage`) are passed to the display components (`TrainingResults`, `WeeklySchedule`, etc.) for rendering.
5. **Export**: When requested, `lib/pdfExport` captures the rendered results and generates a PDF.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Generation**: html2canvas, jspdf
