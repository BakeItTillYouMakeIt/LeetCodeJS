var insert = function(intervals, newInterval) {
  // Edge Case
  if (!intervals || !intervals.length) return [newInterval];
  // Insert new interval in correct position
  insertion(intervals, newInterval);

  // Merge intervals
  return merge(intervals);
};

function insertion(intervals, newInterval) {
  // Add interval
  intervals.push(newInterval);

  // Insert in correct position
  let i = intervals.length - 1;

  while (i > 0 && intervals[i].start < intervals[i-1].start) {
    swap(intervals, i, i-1);
    i--;
  }
}

function merge(intervals) {
  let mergedArr = [];
  let mS = intervals[0].start;
  let mE = intervals[0].end;

  for (let i = 1; i < intervals.length; i++) {
    const cS = intervals[i].start;
    const cE = intervals[i].end;

    // check if we can merge
    if (cS <= mE) {
      mE = Math.max(mE, cE);
    }
    else {
      mergedArr.push(new Interval(mS, mE));
      mS = cS;
      mE = cE;
    }
  }
  mergedArr.push(new Interval(mS, mE));
  return mergedArr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
