var HitCounter = function() {
  this.hitMap = {};
};

/**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
  if (timestamp in this.hitMap) this.hitMap[timestamp] += 1;
  else this.hitMap[timestamp] = 1;
};

/**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity).
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
  let startTime = timestamp - 299;
  let hits = 0;

  for (let i = startTime; i <= timestamp; i++) {
    if (i in this.hitMap) hits += this.hitMap[i];
  }

  return hits;
};
