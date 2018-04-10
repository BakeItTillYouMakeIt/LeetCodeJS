function rotate(matrix) {

  let layerMin = 0;
  let layerMax = matrix.length - 1;

  while (layerMin <= layerMax) {

    for (let i = layerMin; i < layerMax; i++) {
      // Get values
      let top = matrix[layerMin][i];
      let right = matrix[i][layerMax];
      let bottom = matrix[layerMax][layerMax - i + layerMin];
      let left = matrix[layerMax - i + layerMin][layerMin];

      // Reassign values

      // Top will now be left
      matrix[layerMin][i] = left;

      // Right will now be top
      matrix[i][layerMax] = top;

      // Bottom will now be right
      matrix[layerMax][layerMax - i + layerMin] = right;

      // Left will now be bottom
      matrix[layerMax - i + layerMin][layerMin] = bottom;
    }
    layerMin++;
    layerMax--;
  }
}
