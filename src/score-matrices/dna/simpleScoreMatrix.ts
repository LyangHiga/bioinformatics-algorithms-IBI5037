// use score rule:
// match = 1
// mismatch = -1

const A = "A";
const C = "C";
const G = "G";
const T = "T";
const aMap = new Map<string, number>([
  [A, 1],
  [C, -1],
  [G, -1],
  [T, -1],
]);
const cMap = new Map<string, number>([
  [A, -1],
  [C, 1],
  [G, -1],
  [T, -1],
]);
const gMap = new Map<string, number>([
  [A, -1],
  [C, -1],
  [G, 1],
  [T, -1],
]);
const tMap = new Map<string, number>([
  [A, -1],
  [C, -1],
  [G, -1],
  [T, 1],
]);

const simpleScoreMatrix = new Map<string, Map<string, number>>([
  [A, aMap],
  [C, cMap],
  [G, gMap],
  [T, tMap],
]);

export default simpleScoreMatrix;
