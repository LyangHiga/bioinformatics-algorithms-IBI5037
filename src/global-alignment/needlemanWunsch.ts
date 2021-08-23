const needlemanWunsch = (
  x: string,
  y: string,
  // score for gap, opening or extending have the same cost
  gap: number,
  // score matrix
  scoreMatrix: Map<string, Map<string, number>>
) => {
  const m = x.length + 1;
  const n = y.length + 1;
  const F: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => -Infinity)
  );

  // base cases:
  //    position 0,0 = 0
  //    1st row/col: i or j times gap cost
  for (let i = 0; i < m; i++) F[i][0] = i * gap;
  for (let j = 0; j < n; j++) F[0][j] = j * gap;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      F[i][j] = Math.max(
        // case 1: s(xi,yj) + Xi-1 Yj-1
        // I use x[i-1] and y[j-1] because these strings indexes differ by 1 from F
        // m: size of x + 1 ; n: size of y + 1
        F[i - 1][j - 1] + scoreMatrix.get(x[i - 1])!.get(y[j - 1])!,
        // case 2: gap + Xi-1 Yj
        F[i - 1][j] + gap,
        // case 3: gap + Xi Yj-1
        F[i][j - 1] + gap
      );
    }
  }

  return F[m - 1][n - 1];
};

export default needlemanWunsch;
