const wrapInReadOnlyProxy = require("../source/wrapInReadOnlyProxy")

let original = {
    a: 42,
    b: "forty-two",
    c: {
        e: 51,
        f: "FIFTY-ONE",
        g: {
            i: 101
        },
        h: ["one", "two", "three"]
    },
    d: [10, 20, 30]
};

console.log("original", JSON.stringify(original));



let readonly = wrapInReadOnlyProxy(original);

readonly.a = 142;
readonly.c.e = 151;
readonly.c.g.i = 1001;
readonly.d[1] = 123;

// console.log("original", JSON.stringify(original));
console.log("readonly", JSON.stringify(readonly));

original.a = 142;
original.c.e = 151;
original.c.g.i = 1001;
original.d[1] = 123;

console.log("readonly", JSON.stringify(readonly));