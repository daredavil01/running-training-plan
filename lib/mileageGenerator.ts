export interface WeeklyMileage {
  week: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  totalMiles: number;
}

/**
 * Generate weekly mileage progression for Half Marathon training (12 weeks)
 */
export function generateHalfMarathonMileage(): WeeklyMileage[] {
  return [
    { week: 1, monday: 0, tuesday: 4, wednesday: 0, thursday: 3, friday: 0, saturday: 0, sunday: 6, totalMiles: 13 },
    { week: 2, monday: 0, tuesday: 4, wednesday: 0, thursday: 4, friday: 0, saturday: 0, sunday: 7, totalMiles: 15 },
    { week: 3, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 0, sunday: 8, totalMiles: 17 },
    { week: 4, monday: 0, tuesday: 4, wednesday: 0, thursday: 3, friday: 0, saturday: 0, sunday: 5, totalMiles: 12 },
    { week: 5, monday: 0, tuesday: 5, wednesday: 0, thursday: 5, friday: 0, saturday: 0, sunday: 9, totalMiles: 19 },
    { week: 6, monday: 0, tuesday: 5, wednesday: 0, thursday: 5, friday: 0, saturday: 0, sunday: 10, totalMiles: 20 },
    { week: 7, monday: 0, tuesday: 6, wednesday: 0, thursday: 5, friday: 0, saturday: 0, sunday: 11, totalMiles: 22 },
    { week: 8, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 0, sunday: 6, totalMiles: 15 },
    { week: 9, monday: 0, tuesday: 6, wednesday: 0, thursday: 6, friday: 0, saturday: 0, sunday: 12, totalMiles: 24 },
    { week: 10, monday: 0, tuesday: 6, wednesday: 0, thursday: 6, friday: 0, saturday: 0, sunday: 13, totalMiles: 25 },
    { week: 11, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 0, sunday: 8, totalMiles: 17 },
    { week: 12, monday: 0, tuesday: 3, wednesday: 0, thursday: 2, friday: 0, saturday: 0, sunday: 13.1, totalMiles: 18.1 },
  ];
}

/**
 * Generate weekly mileage progression for Full Marathon training (16 weeks)
 */
export function generateFullMarathonMileage(): WeeklyMileage[] {
  return [
    { week: 1, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 3, sunday: 8, totalMiles: 20 },
    { week: 2, monday: 0, tuesday: 5, wednesday: 0, thursday: 5, friday: 0, saturday: 3, sunday: 10, totalMiles: 23 },
    { week: 3, monday: 0, tuesday: 6, wednesday: 0, thursday: 5, friday: 0, saturday: 4, sunday: 11, totalMiles: 26 },
    { week: 4, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 3, sunday: 8, totalMiles: 20 },
    { week: 5, monday: 0, tuesday: 6, wednesday: 0, thursday: 6, friday: 0, saturday: 4, sunday: 13, totalMiles: 29 },
    { week: 6, monday: 0, tuesday: 6, wednesday: 0, thursday: 6, friday: 0, saturday: 5, sunday: 14, totalMiles: 31 },
    { week: 7, monday: 0, tuesday: 7, wednesday: 0, thursday: 6, friday: 0, saturday: 5, sunday: 16, totalMiles: 34 },
    { week: 8, monday: 0, tuesday: 6, wednesday: 0, thursday: 5, friday: 0, saturday: 4, sunday: 10, totalMiles: 25 },
    { week: 9, monday: 0, tuesday: 7, wednesday: 0, thursday: 7, friday: 0, saturday: 5, sunday: 18, totalMiles: 37 },
    { week: 10, monday: 0, tuesday: 7, wednesday: 0, thursday: 7, friday: 0, saturday: 6, sunday: 20, totalMiles: 40 },
    { week: 11, monday: 0, tuesday: 8, wednesday: 0, thursday: 7, friday: 0, saturday: 6, sunday: 20, totalMiles: 41 },
    { week: 12, monday: 0, tuesday: 7, wednesday: 0, thursday: 6, friday: 0, saturday: 5, sunday: 12, totalMiles: 30 },
    { week: 13, monday: 0, tuesday: 7, wednesday: 0, thursday: 6, friday: 0, saturday: 5, sunday: 18, totalMiles: 36 },
    { week: 14, monday: 0, tuesday: 6, wednesday: 0, thursday: 5, friday: 0, saturday: 4, sunday: 14, totalMiles: 29 },
    { week: 15, monday: 0, tuesday: 5, wednesday: 0, thursday: 4, friday: 0, saturday: 3, sunday: 10, totalMiles: 22 },
    { week: 16, monday: 0, tuesday: 4, wednesday: 0, thursday: 3, friday: 0, saturday: 2, sunday: 26.2, totalMiles: 35.2 },
  ];
}

/**
 * Generate weekly mileage based on race type
 */
export function generateWeeklyMileage(raceType: 'half-marathon' | 'full-marathon'): WeeklyMileage[] {
  if (raceType === 'half-marathon') {
    return generateHalfMarathonMileage();
  } else {
    return generateFullMarathonMileage();
  }
}

