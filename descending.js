let arr = [5, 2, 1, -10, 8]

arr.sort((a, b) => {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
})

console.log(arr)