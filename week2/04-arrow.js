// Traditional Function
function x1(a, b, c) {
    return a + b + c + 100;
}

const x2 = (a, b, c) => a + b + c + 100;

console.log('x1 =', x1(10, 20, 30));
console.log('x2 =', x2(10, 20, 30));

var arr = [1, 2, 3];
console.log('arr: ', arr);

let y = 8;
var squares = arr.map(function(x) {
    return x * y;
});
console.log('squares: ', squares);

const squares1 = arr.map(x => x * y);

const squares2 = arr.map(x => {
    return x * y;
});

console.log('squares2: ', squares2);

function say() {
    return 'hello';
}

const say2 = () => {
    return 'hello';
};


const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
console.log(materials.map(a => `${a}s`));
