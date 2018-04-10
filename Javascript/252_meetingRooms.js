function canAttendMeetings (intervals) {
  // Sort based off start time
  intervals.sort((a,b) => a.start - b.start);

  for (let i = 0; i < intervals.length - 1; i++) {
    const curMeeting = intervals[i];
    const nextMeeting = intervals[i + 1];
    if (curMeeting.end > nextMeeting.start) return false;
  }
  return true;
}
