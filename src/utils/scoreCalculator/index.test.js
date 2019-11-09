import { calculateScore } from "./";

describe("calculate result", () => {
  describe("when no scores are supplied", () => {
    it("should return null", () => {
      const result = calculateScore([]);

      expect(result).toBe(null);
    });
  });

  describe("when all scores are the same", () => {
    it("should return the same score", () => {
      const userScores = [1, 1, 1, 1];

      const result = calculateScore(userScores);

      expect(result).toBe(1);
    });
  });

  describe("when scores are not the same", () => {
    describe("and average matches a possible score", () => {
      it("should return the average", () => {
        const userScores = [1, 2, 2, 3];
        const result = calculateScore(userScores);
        expect(result).toBe(2);
      });
    });

    describe("and average does not match a possible score", () => {
      it("should return the next average up", () => {
        const userScores = [1, 2, 2];
        const result = calculateScore(userScores);
        expect(result).toBe(2);
      });
    });
  });
});
