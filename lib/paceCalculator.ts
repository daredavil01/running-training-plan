import trainingData from './trainingData.json';

export interface TrainingPlan {
  fiveKTime: number;
  intervals: {
    '400M': string;
    '600M': string;
    '800M': string;
    '1000M': string;
    '1200M': string;
    '1600M': string;
    '2000M': string;
  };
  tempo: {
    short: string;
    mid: string;
    long: string;
  };
  longRun: {
    halfMarathonPace: string;
    fullMarathonPace: string;
  };
  completionTimes: {
    '10K': string;
    halfMarathon: string;
    fullMarathon: string;
  };
}

/**
 * Convert 10K time to equivalent 5K time
 * Using the approximate factor of 2.07 based on running performance tables
 */
export function convert10KTo5K(tenKMinutes: number): number {
  // 10K time is roughly 2.07 times 5K time for most runners
  return tenKMinutes / 2.07;
}

/**
 * Convert time string "H:MM:SS" or "M:SS" to total seconds
 */
function timeToSeconds(timeStr: string): number {
  if (!timeStr) return 0;
  
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return 0;
}

/**
 * Convert seconds back to time string format
 */
function secondsToTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.round(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }
  return `0:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

/**
 * Interpolate between two values
 */
function interpolate(value1: number, value2: number, factor: number): number {
  return value1 + (value2 - value1) * factor;
}

/**
 * Interpolate between two training plans
 */
function interpolatePlans(
  plan1: TrainingPlan,
  plan2: TrainingPlan,
  factor: number
): TrainingPlan {
  const interpolateTime = (time1: string, time2: string): string => {
    if (!time1 || !time2) return time1 || time2;
    const seconds1 = timeToSeconds(time1);
    const seconds2 = timeToSeconds(time2);
    const interpolated = interpolate(seconds1, seconds2, factor);
    return secondsToTime(interpolated);
  };

  return {
    fiveKTime: interpolate(plan1.fiveKTime, plan2.fiveKTime, factor),
    intervals: {
      '400M': interpolateTime(plan1.intervals['400M'], plan2.intervals['400M']),
      '600M': interpolateTime(plan1.intervals['600M'], plan2.intervals['600M']),
      '800M': interpolateTime(plan1.intervals['800M'], plan2.intervals['800M']),
      '1000M': interpolateTime(plan1.intervals['1000M'], plan2.intervals['1000M']),
      '1200M': interpolateTime(plan1.intervals['1200M'], plan2.intervals['1200M']),
      '1600M': interpolateTime(plan1.intervals['1600M'], plan2.intervals['1600M']),
      '2000M': interpolateTime(plan1.intervals['2000M'], plan2.intervals['2000M']),
    },
    tempo: {
      short: interpolateTime(plan1.tempo.short, plan2.tempo.short),
      mid: interpolateTime(plan1.tempo.mid, plan2.tempo.mid),
      long: interpolateTime(plan1.tempo.long, plan2.tempo.long),
    },
    longRun: {
      halfMarathonPace: interpolateTime(
        plan1.longRun.halfMarathonPace,
        plan2.longRun.halfMarathonPace
      ),
      fullMarathonPace: interpolateTime(
        plan1.longRun.fullMarathonPace,
        plan2.longRun.fullMarathonPace
      ),
    },
    completionTimes: {
      '10K': interpolateTime(plan1.completionTimes['10K'], plan2.completionTimes['10K']),
      halfMarathon: interpolateTime(
        plan1.completionTimes.halfMarathon,
        plan2.completionTimes.halfMarathon
      ),
      fullMarathon: interpolateTime(
        plan1.completionTimes.fullMarathon,
        plan2.completionTimes.fullMarathon
      ),
    },
  };
}

/**
 * Get training plan based on 5K time
 * Will interpolate if exact match is not found
 */
export function getTrainingPlan(fiveKMinutes: number): TrainingPlan | null {
  const plans = trainingData.data;

  // Check if time is out of range
  if (fiveKMinutes < plans[0].fiveKTime) {
    return plans[0];
  }
  if (fiveKMinutes > plans[plans.length - 1].fiveKTime) {
    return plans[plans.length - 1];
  }

  // Find exact match
  const exactMatch = plans.find((plan) => plan.fiveKTime === fiveKMinutes);
  if (exactMatch) {
    return exactMatch;
  }

  // Find two closest plans for interpolation
  for (let i = 0; i < plans.length - 1; i++) {
    if (fiveKMinutes > plans[i].fiveKTime && fiveKMinutes < plans[i + 1].fiveKTime) {
      const plan1 = plans[i];
      const plan2 = plans[i + 1];
      const range = plan2.fiveKTime - plan1.fiveKTime;
      const factor = (fiveKMinutes - plan1.fiveKTime) / range;
      return interpolatePlans(plan1, plan2, factor);
    }
  }

  return null;
}

/**
 * Main function to get training plan from user input
 */
export function calculateTrainingPlan(
  timeInMinutes: number,
  isTimeFor10K: boolean
): TrainingPlan | null {
  let fiveKTime = timeInMinutes;
  
  if (isTimeFor10K) {
    fiveKTime = convert10KTo5K(timeInMinutes);
  }

  return getTrainingPlan(fiveKTime);
}

