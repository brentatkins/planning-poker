export const SCORE_OPTIONS = [1, 2, 3, 5, 8, 13];

export const getAverageScore = scores => {
  if (!scores || scores.length === 0) {
    return null;
  }

  const average = scores.reduce((sum, i) => sum + i, 0) / scores.length;

  return average;
};

export const calculateScore = scores => {
  if (!scores || scores.length === 0) {
    return null;
  }

  const average = getAverageScore(scores);

  const result = SCORE_OPTIONS.includes(average)
    ? average
    : SCORE_OPTIONS.find(x => x > average);

  return result;
};
