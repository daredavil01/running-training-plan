'use client';

import Link from 'next/link';
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
              <span className="block">Unlock Your Potential</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Through Movement
              </span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Exercise is not just about physical fitness; it&apos;s a catalyst for a healthier mind, 
              a stronger body, and a more vibrant life.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/training-plan"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Your Training Plan
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Importance of Exercise Section */}
      <div className="py-16 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              Why Exercise Matters
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              In our modern sedentary lifestyle, movement is more crucial than ever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mental Clarity</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Regular physical activity boosts cognitive function, reduces stress, and improves sleep quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Physical Health</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Strengthens your heart, muscles, and bones while reducing the risk of chronic diseases.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Energy Boost</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Increases endurance and overall energy levels, helping you tackle daily challenges with vigor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 text-center text-white">
              <h2 className="text-3xl font-extrabold mb-6">Recommended Activity Guidelines</h2>
              <p className="text-xl mb-8 opacity-90">
                According to major health organizations, adults should aim for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold mb-2">150</div>
                  <div className="text-lg font-medium">Minutes Per Week</div>
                  <div className="text-sm opacity-80 mt-2">of Moderate-Intensity Activity<br/>(Brisk Walking)</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-5xl font-bold mb-2">75</div>
                  <div className="text-lg font-medium">Minutes Per Week</div>
                  <div className="text-sm opacity-80 mt-2">of Vigorous-Intensity Activity<br/>(Running/Jogging)</div>
                </div>
              </div>
              <p className="mt-8 text-sm opacity-75">
                *Or an equivalent combination of both. Muscle-strengthening activities are also recommended at least 2 days a week.
              </p>
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}
