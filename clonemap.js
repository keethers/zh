// CloneMap.js – Visual mapping of clone predictions
export function mapClones(cloneResults = []) {
  return cloneResults.map((res, i) => ({
    cloneId: `C-${i + 1}`,
    seenNumbers: res.results,
    confidence: res.confidence,
    timestamp: res.generatedAt
  }));
}
