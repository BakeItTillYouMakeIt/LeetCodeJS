var canPlaceFlowers = function(flowerbed, n) {
  // Edge Cases
  if (!flowerbed || !flowerbed.length || n > Math.round(flowerbed.length/2) ) return false;
  if (n === 0) return true;

  let i = 0;
  while (n && i < flowerbed.length) {
    const prev = flowerbed[i-1] !== undefined ? flowerbed[i-1] : 0;
    const cur = flowerbed[i];
    const next = flowerbed[i+1] !== undefined ? flowerbed[i+1] : 0;

    if (prev === 0 && cur === 0 && next === 0) {
      flowerbed[i] = 1;
      n--;
    }
    i++;
  }

  return n === 0;
};
