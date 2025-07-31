// ResultsLogger.js – Logs predictions to memory or file system
let resultsMemory = [];

export function logPrediction(prediction) {
  const entry = {
    ...prediction,
    loggedAt: new Date().toISOString()
  };
  resultsMemory.push(entry);
  console.log("🧾 Prediction logged:", entry);
  return resultsMemory.length;
}

export function getPredictionLog() {
  return resultsMemory;
}
