'use client';

import { WeeklyMileage } from '@/lib/mileageGenerator';

interface MileageProgressionProps {
  mileage: WeeklyMileage[];
  raceType: 'half-marathon' | 'full-marathon';
}

export default function MileageProgression({ mileage, raceType }: MileageProgressionProps) {
  const maxMileage = Math.max(...mileage.map(w => w.totalMiles));
  
  const getDayName = (day: string): string => {
    const names: { [key: string]: string } = {
      monday: 'Mon',
      tuesday: 'Tue',
      wednesday: 'Wed',
      thursday: 'Thu',
      friday: 'Fri',
      saturday: 'Sat',
      sunday: 'Sun'
    };
    return names[day] || day;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">
          📊
        </span>
        Weekly Mileage Progression
      </h3>
      <p className="text-gray-600 mb-6">
        Complete {raceType === 'half-marathon' ? '12-week' : '16-week'} training plan with weekly distance breakdown (in kilometers)
      </p>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Total Weeks</p>
          <p className="text-2xl font-bold text-blue-600">{mileage.length}</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Peak Week</p>
          <p className="text-2xl font-bold text-green-600">{maxMileage.toFixed(1)} km</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Total Kilometers</p>
          <p className="text-2xl font-bold text-purple-600">
            {mileage.reduce((sum, w) => sum + w.totalMiles, 0).toFixed(0)}
          </p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 mb-1">Avg/Week</p>
          <p className="text-2xl font-bold text-orange-600">
            {(mileage.reduce((sum, w) => sum + w.totalMiles, 0) / mileage.length).toFixed(1)} km
          </p>
        </div>
      </div>

      {/* Mileage Chart */}
      <div className="mb-6">
        <h4 className="font-bold text-gray-800 mb-3">Weekly Total Visualization</h4>
        <div className="space-y-2">
          {mileage.map((week) => (
            <div key={week.week} className="flex items-center gap-2">
              <div className="w-16 text-sm font-medium text-gray-700">
                Week {week.week}
              </div>
              <div className="flex-grow bg-gray-100 rounded-full h-8 relative">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 rounded-full flex items-center justify-end pr-2"
                  style={{ width: `${(week.totalMiles / maxMileage) * 100}%` }}
                >
                  <span className="text-white text-xs font-bold">
                    {week.totalMiles.toFixed(1)} km
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Table */}
      <div className="overflow-x-auto">
        <h4 className="font-bold text-gray-800 mb-3">Detailed Daily Breakdown</h4>
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="text-left py-2 px-3 font-semibold text-gray-700 sticky left-0 bg-gray-100">Week</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Mon</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Tue</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Wed</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Thu</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Fri</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Sat</th>
              <th className="text-center py-2 px-2 font-semibold text-gray-700">Sun</th>
              <th className="text-center py-2 px-3 font-semibold text-gray-700 bg-blue-100">Total</th>
            </tr>
          </thead>
          <tbody>
            {mileage.map((week, index) => (
              <tr
                key={week.week}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="py-2 px-3 font-medium text-gray-800 sticky left-0 bg-inherit">
                  {week.week}
                </td>
                <td className="text-center py-2 px-2 text-gray-600">
                  {week.monday > 0 ? week.monday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-orange-600 font-medium">
                  {week.tuesday > 0 ? week.tuesday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-purple-600 font-medium">
                  {week.wednesday > 0 ? week.wednesday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-red-600 font-medium">
                  {week.thursday > 0 ? week.thursday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-purple-600 font-medium">
                  {week.friday > 0 ? week.friday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-gray-600">
                  {week.saturday > 0 ? week.saturday : '-'}
                </td>
                <td className="text-center py-2 px-2 text-green-600 font-bold">
                  {week.sunday > 0 ? week.sunday : '-'}
                </td>
                <td className="text-center py-2 px-3 font-bold text-blue-600 bg-blue-50">
                  {week.totalMiles.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-200 font-bold">
              <td className="py-3 px-3 text-gray-800">Total</td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.monday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.tuesday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.wednesday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.thursday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.friday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.saturday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-2 text-gray-800">
                {mileage.reduce((sum, w) => sum + w.sunday, 0).toFixed(0)}
              </td>
              <td className="text-center py-3 px-3 text-blue-700 bg-blue-100">
                {mileage.reduce((sum, w) => sum + w.totalMiles, 0).toFixed(1)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Training Notes */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
        <h4 className="font-bold text-gray-800 mb-2">📝 Training Notes:</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• <strong>Rest days</strong> (Mon, {raceType === 'half-marathon' ? 'Sat' : ''}) = 0 km</li>
          <li>• <strong>Tempo runs</strong> (Tue) shown in orange - focus on pace</li>
          <li>• <strong>Strength training</strong> (Wed, Fri) shown in purple - cross-training days</li>
          <li>• <strong>Interval runs</strong> (Thu) shown in red - high intensity</li>
          {raceType === 'full-marathon' && <li>• <strong>Easy runs</strong> (Sat) - recovery pace</li>}
          <li>• <strong>Long runs</strong> (Sun) shown in green - build endurance</li>
          <li>• Peak distance occurs around week {mileage.findIndex(w => w.totalMiles === maxMileage) + 1}</li>
          <li>• Taper weeks reduce distance before race day</li>
        </ul>
      </div>
    </div>
  );
}

