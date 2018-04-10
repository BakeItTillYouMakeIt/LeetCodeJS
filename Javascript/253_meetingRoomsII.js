var minMeetingRooms = function(intervals) {
  // Edge Case
  if (!intervals.length) return 0;

  // Sort based off start time
  intervals.sort((a,b) => a.start - b.start);

  const meetingsMinHeap = new MinHeap([intervals[0].end]);

  for (let i = 1; i < intervals.length; i++) {
    const curMeeting = intervals[i];

    if (curMeeting.start >= meetingsMinHeap.peek()) {
      meetingsMinHeap.remove();
      meetingsMinHeap.insert(curMeeting.end);
    }
    else {
      meetingsMinHeap.insert(curMeeting.end);
    }
  }
  return meetingsMinHeap.size();
};


class MinHeap {
  constructor(arr = []) {
    this.heap = this.buildHeap(arr);
  }

  buildHeap(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
			this.siftDown(i, arr);
		}
		return arr;
  }

  siftDown(idx, arr) {
		const left = this.getLeftChild(idx);
		const right = this.getRightChild(idx);

		// No children, base case return;
		if (!arr[left] && !arr[right]) return;

		// One Child, must be on the left
		if (arr[left] && !arr[right]) {
			if (arr[idx] > arr[left]) {
				this.swap(arr, idx, left);
				this.siftDown(left, arr);
			}
			return;
		}

		// Must be two children, check any are less than ele at idx
		if (arr[idx] > arr[left] || arr[idx] > arr[right]) {
			const min = arr[left] < arr[right] ? left : right;
			this.swap(arr, idx, min);
			this.siftDown(min, arr);
		}

  }

  siftUp(idx, arr) {
    while (idx > 0) {
			const parent = this.getParent(idx);
			if (arr[idx] < arr[parent]) {
				this.swap(arr, idx, parent);
				idx = parent;
			}
			else break;
		}
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    const min = this.heap.shift();
    this.heap = this.buildHeap(this.heap);
	  return min;
  }

  insert(value) {
    this.heap.push(value);
		const lastIdx = this.heap.length - 1;
		this.siftUp(lastIdx, this.heap);
  }
	getParent(idx) {
		return Math.floor((idx-1)/2);
	}
	getLeftChild(idx) {
		return 2 * idx + 1;
	}
	getRightChild(idx) {
		return 2 * idx + 2;
	}
	swap(arr, i, j) {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
  size () {
    return this.heap.length;
  }
}
