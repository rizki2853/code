let x = 3;

function func(randomize){
    if(randomize){
        let x = Math.random();
        return x;
    }
    return x;
}

console.log('random : ',func(true));
console.log('no random : ',func(false));