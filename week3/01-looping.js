var arr = ['a','b','c','d']//array
//object
var arr2 = {
    'a' : 'nilai a',
    'b' : 'nilai b'
}
//for loop
console.log("For looping")
for(var i =0;i<arr.length;i++){
    console.log(arr[i])
}

console.log('\n\n')

//foreach
console.log("forEach")
arr.forEach(function func(element){
    console.log(element)
});

console.log('\n\n')

//forEach using arrow function
console.log("forEach using arrow function")
arr.forEach((element)=> console.log(element))

console.log('\n\n')

//ES6
console.log("looping in ES6 using for-of")
for (const element of arr){
    console.log(element)
}