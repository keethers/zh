// TemporalAnchor.js – Corrects clone drift for accurate prediction timing
export function calibratePredictionWindow(hoursAhead = 24) {
  const driftCorrection = (hoursAhead * Math.random() * 0.1).toFixed(2);
  return {
    correctedHours: hoursAhead - driftCorrection,
    driftCorrection,
    anchorTime: new Date(Date.now() + hoursAhead * 3600000).toISOString()
  };
}
