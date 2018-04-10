var merge = function(meetings) {
  // Edge Case
  if (!meetings || !meetings.length) return [];

  meetings.sort((a,b) => a.start - b.start);

  const mIs = [];
  let mS = meetings[0].start;
  let mE = meetings[0].end;

  for (let i = 1; i < meetings.length; i++) {
    let cS = meetings[i].start;
    let cE = meetings[i].end;

    if (cS <= mE) {
      mE = Math.max(mE, cE);
    }
    else {
      mIs.push([mS, mE]);
      mS = cS;
      mE = cE;
    }
  }
  mIs.push([mS, mE]);
  return mIs;
};
