function  Person (name){
    this.name = name;
}

Person.prototype.describe = function (){

    return 'Orang pertama\nNama : ' + this.name;
}

console.log( new Person('Lalu Rizki Aldi Saputra').describe());



class Person2{
    constructor(name) {
        this.name = name;
    }

    describe(){
        return '\nOrang kedua\nNama : ' + this.name ;
    }
}

const Rizki = new Person2('Pangeran Muhammad Waliyullah');
console.log(Rizki.describe());