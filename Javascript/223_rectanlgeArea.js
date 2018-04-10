var computeArea = function(M, N, C, D, E, F, G, H) {
  const A = {};
  const B = {};

  // Rectangle A
  A.xMin = M;
  A.yMin = N;
  A.xMax = C;
  A.yMax = D;
  A.xLength = A.xMax - A.xMin;
  A.yLength = A.yMax - A.yMin;

  // Rectangle B
  B.xMin = E;
  B.yMin = F;
  B.xMax = G;
  B.yMax = H;
  B.xLength = B.xMax - B.xMin;
  B.yLength = B.yMax - B.yMin;

  let xIntersect = null;
  let yIntersect = null;

  // Find x Intersect length
  if (A.xLength > B.xLength) {
      xIntersect = getIntersect(B.xMin, B.xMax, A.xMin, A.xMax);
  } else {
      xIntersect = getIntersect(A.xMin, A.xMax, B.xMin, B.xMax);
  }

  // Find y Intersect length
  if (A.yLength > B.yLength) {
      yIntersect = getIntersect(B.yMin, B.yMax, A.yMin, A.yMax);
  } else {
      yIntersect = getIntersect(A.yMin, A.yMax, B.yMin, B.yMax);
  }

  let intersect = xIntersect * yIntersect;
  return A.xLength * A.yLength + B.xLength * B.yLength - intersect;

};

function getIntersect (sMin, sMax, gMin, gMax) {
  // No Interset
  if (sMin >= gMax || sMax <= gMin) return 0;
  // Left Overlap
  else if (sMin < gMin) return sMax - gMin;
  // Internal Overlap
  else if (sMin >= gMin && sMax <= gMax) return sMax - sMin;
  // Right Overlap
  else if (sMin > gMin) return gMax - sMin;
}
