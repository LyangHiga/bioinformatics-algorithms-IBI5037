import needlemanWunsch from "./needlemanWunsch";
import simpleScoreMatrix from "../score-matrices/dna/simpleScoreMatrix";
describe("Tests for Needleman-Wunsch global alignemnt", () => {
  const gap = -1;

  test("example from class notes page 59", () => {
    const x = "GATTACCA";
    const y = "GATACTA";

    // given answer
    const ans = 4;

    expect(needlemanWunsch(x, y, gap, simpleScoreMatrix)).toBe(ans);
  });
});
