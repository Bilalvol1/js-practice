function filterRange(arr, a, b) {
    let filtered = arr.filter((num) => num >= a && num <= b );
    console.log(filtered);
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
filterRange(arr, 1,3);
console.log(arr)