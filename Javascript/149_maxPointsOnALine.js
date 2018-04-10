function maxPoints(points) {
  if (!points) return 0;
  if (points.length <= 2) return points.length;

  const map = new Map();
  let res = 0;

  for (let i = 0; i < points.length; i++) {
    map.clear();
    let overlap = 0;
    let max = 0;

    for (let j = i + 1; j < points.length; j++) {
      let x = points[j].x - points[i].x;
      let y = points[j].y - points[i].y;

      if (!x && !y) {
        overlap++;
        continue;
      }
      const gcdVal = gcd(x,y);
      x /= gcdVal;
      y /= gcdVal;

      const key = x + ',' + y;

      if (map.has(key)) {
        map.set(key, map.get(key) + 1);
      }
      else {
        map.set(key, 1);
      }

      max = Math.max(max, map.get(key));
    }
    res = Math.max(res, max + overlap + 1);
  }

  return res;
}

function gcd(y,x){

  if (x === 0) return y;
  return gcd(x, y % x);
}
