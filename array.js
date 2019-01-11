const s = [2, 1, 6, 9, 9, 4, 3];

// bubble sort, swaping the biggest number and sorting first
for (let i = 0; i < s.length; i++) {
  for (let j = 0; j < s.length; j++) {
    if (s[j] > s[j + 1]) {
      let temp = s[j];
      s[j] = s[j + 1];
      s[j + 1] = temp;
    }
  }
}

// get highest number
let maxIndex = s.length - 1;

// if the next of highest number equal to highest number, get other (second highest)
if (s[maxIndex] === s[maxIndex - 1]) {
  console.log(s[maxIndex - 2]);
} else if (s[maxIndex] === s[maxIndex + 1]) {
  console.log(s[maxIndex + 2]);
}
