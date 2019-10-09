"use strict";

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
// Maartje work in 2 days (time in minutes).
  const works=monday.concat(tuesday);
  console.log(works);

  //converting minutes ti hours.
  const worksInHour = works.map(time => time.duration / 60);
  console.log(worksInHour);

  // removing everything that took less than two hours.
  const works_greater_than_towHours=worksInHour.filter(time=>time >= 2);
  console.log(works_greater_than_towHours);

  // Multiplying each duration by a per-hour rate for billing (use €20/hour) and summing them all up.

  const billing_each_job=works_greater_than_towHours.map(billing=>billing * hour_rate);
  console.log(billing_each_job);

  const total_amount=billing_each_job.reduce((total,t)=>total+t,0);
  console.log(total_amount);

  // Formatting Euro amount, rounded to Euro cents.
  const total_amount_inEuro=total_amount.toFixed(2);
  console.log(total_amount_inEuro);
