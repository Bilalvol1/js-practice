function sortByAge(array) {
    array.sort((a, b) => {
        if (a.age > b.age) return 1;
        if (a.age == b.age) return 0;
        if (a.age < b.age) return -1;
    });
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);