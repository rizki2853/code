//inisialisasi variabel x
var x = 3;

//function untuk menimpa variabel x dengan random value
function func(randomize){
    if(randomize){
        var x = Math.random();
        return x;
    }
    return x;
}

console.log('inside : ', func(true));//menghasilkan random value
console.log('outside : ', func(false));//undefined 