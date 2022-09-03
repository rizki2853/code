function  foo(x,y){
    x = x || 0;
    y = y || 0;
    console.log(x,y);
}

foo();
foo(5,6)


function bar ( x =0,y =0){
    console.log(x,y);
}

bar();
bar(5,6);


function SelectEntries(Option){
    var start = Option.start || 0;
    var end = Option.end || -1;
    var step = Option.step || 1;
    console.log(start,end,step);
}

SelectEntries({});
SelectEntries({start:7,step: 9, end: 8});


function  SelectEntries2({ start =0,end =-1,step =1}){
    console.log(start,end,step);
}

SelectEntries2({})
SelectEntries2({end:7, start: 4,step:2});