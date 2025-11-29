'use client';

import { useState } from 'react';
import InputForm from '@/components/InputForm';
import TrainingResults from '@/components/TrainingResults';
import WeeklySchedule from '@/components/WeeklySchedule';
import MileageProgression from '@/components/MileageProgression';
import DarkModeToggle from '@/components/DarkModeToggle';
import { calculateTrainingPlan, TrainingPlan } from '@/lib/paceCalculator';
import { generateWeeklySchedule, WorkoutDay } from '@/lib/scheduleGenerator';
import { generateWeeklyMileage, WeeklyMileage } from '@/lib/mileageGenerator';
import { exportToPDF, printTrainingPlan } from '@/lib/pdfExport';

export default function Home() {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan | null>(null);
  const [weeklySchedule, setWeeklySchedule] = useState<WorkoutDay[] | null>(null);
  const [weeklyMileage, setWeeklyMileage] = useState<WeeklyMileage[] | null>(null);
  const [raceType, setRaceType] = useState<'half-marathon' | 'full-marathon'>('half-marathon');
  const [showResults, setShowResults] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const handleFormSubmit = (
    timeInMinutes: number,
    isTimeFor10K: boolean,
    selectedRaceType: 'half-marathon' | 'full-marathon'
  ) => {
    const plan = calculateTrainingPlan(timeInMinutes, isTimeFor10K);
    
    if (plan) {
      setTrainingPlan(plan);
      setRaceType(selectedRaceType);
      const schedule = generateWeeklySchedule(plan, selectedRaceType);
      setWeeklySchedule(schedule);
      const mileage = generateWeeklyMileage(selectedRaceType);
      setWeeklyMileage(mileage);
      setShowResults(true);
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleReset = () => {
    setShowResults(false);
    setTrainingPlan(null);
    setWeeklySchedule(null);
    setWeeklyMileage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportPDF = async () => {
    setIsExporting(true);
    const raceTypeName = raceType === 'half-marathon' ? 'Half-Marathon' : 'Full-Marathon';
    const fileName = `${raceTypeName}-Training-Plan.pdf`;
    const success = await exportToPDF('results', fileName);
    setIsExporting(false);
    
    if (!success) {
      alert('Failed to export PDF. Please try again or use the Print option.');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-12 px-3 sm:px-4 transition-colors duration-300">
      <DarkModeToggle />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 px-2">
            🏃 Get Me My Training Plan! 🏃
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Enter your time trial results and get a personalized training plan with target paces,
            predicted race times, and a weekly training schedule
          </p>
        </div>

        {/* Input Form */}
        <div className="mb-8 sm:mb-12">
          <InputForm onSubmit={handleFormSubmit} />
        </div>

        {/* Results Section */}
        {showResults && trainingPlan && weeklySchedule && weeklyMileage && (
          <div id="results" className="space-y-8">
            {/* Reset Button */}
            <div className="text-center no-print">
              <button
                onClick={handleReset}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg transition duration-200 shadow-lg text-sm sm:text-base"
              >
                ← Start Over
              </button>
            </div>

            {/* Print Header - only visible when printing */}
            <div className="hidden print:block mb-8 text-center border-b-2 border-gray-300 pb-4">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                🏃 Get Me My Training Plan! 🏃
              </h1>
              <p className="text-lg text-gray-600">
                Your Personalized {raceType === 'half-marathon' ? 'Half Marathon' : 'Full Marathon'} Training Plan
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Generated on {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Training Results */}
            <TrainingResults plan={trainingPlan} raceType={raceType} />

            {/* Weekly Schedule */}
            <WeeklySchedule schedule={weeklySchedule} raceType={raceType} />

            {/* Weekly Mileage Progression */}
            <MileageProgression mileage={weeklyMileage} raceType={raceType} />

            {/* Export Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 no-print px-4">
              <button
                onClick={printTrainingPlan}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                🖨️ Print Training Plan
              </button>
              <button
                onClick={handleExportPDF}
                disabled={isExporting}
                className={`bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 sm:px-8 rounded-lg transition duration-200 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base ${
                  isExporting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isExporting ? (
                  <>
                    <span className="animate-spin">⏳</span> Generating PDF...
                  </>
                ) : (
                  <>📄 Export as PDF</>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-lg">
              <p className="text-gray-600 mb-2">
                <strong>Disclaimer:</strong> This training plan is for informational purposes only.
                Always consult with a healthcare professional before starting any new training program.
              </p>
              <p className="text-gray-500 text-sm">
                Training plans are based on general running performance data and may vary based on
                individual fitness, experience, and environmental conditions.
              </p>
            </div>
          </div>
        )}

        {/* How it Works Section */}
        {!showResults && (
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">📝</div>
                <h3 className="font-bold text-gray-800 mb-2">1. Enter Your Time</h3>
                <p className="text-gray-600 text-sm">
                  Input your recent 5K or 10K time trial result
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-gray-800 mb-2">2. Choose Your Goal</h3>
                <p className="text-gray-600 text-sm">
                  Select whether you&apos;re training for a half or full marathon
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="font-bold text-gray-800 mb-2">3. Get Your Plan</h3>
                <p className="text-gray-600 text-sm">
                  Receive personalized paces, times, and a weekly training schedule
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

