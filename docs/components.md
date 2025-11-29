# Component Documentation

## Core Components

### `InputForm`
**Path**: `components/InputForm.tsx`

Handles user input for the training plan generation.
- **Inputs**: Time trial distance (5K/10K), Time (minutes/seconds), Target Race (Half/Full Marathon).
- **Output**: Calls `onSubmit` prop with normalized data.

### `TrainingResults`
**Path**: `components/TrainingResults.tsx`

Displays the calculated training paces.
- **Props**: `TrainingPlan` object.
- **Sections**: Easy runs, Interval paces, Tempo paces, Long run paces.

### `WeeklySchedule`
**Path**: `components/WeeklySchedule.tsx`

Renders the week-by-week training calendar.
- **Props**: `WorkoutDay[]` (array of daily workouts).
- **Features**: Displays workout type, distance/duration, and specific instructions for each day.

### `MileageProgression`
**Path**: `components/MileageProgression.tsx`

Visualizes the weekly mileage buildup.
- **Props**: `WeeklyMileage[]`.
- **Visualization**: Bar chart or list showing the volume progression towards the race.

## Utility Components

### `DarkModeToggle`
**Path**: `components/DarkModeToggle.tsx`

Toggles between light and dark themes. Persists preference in local storage.

## Libraries (`lib/`)

### `paceCalculator.ts`
Calculates training paces based on a VDOT-like formula. Interpolates between data points in `trainingData.json` for precise pacing.

### `scheduleGenerator.ts`
Generates a specific workout schedule based on the user's fitness level and target race distance. It structures the plan into phases (Base, Build, Peak, Taper).

### `pdfExport.ts`
Utility to capture the results DOM element and generate a downloadable PDF file.
