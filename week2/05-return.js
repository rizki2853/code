var matchObj =
    // /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    // .exec('2022-08-22');
    /^(\d\d)\/(\d\d)\/(\d\d\d\d)$/
    .exec('22/08/2022');
var day = matchObj[1];
var month = matchObj[2];
var year = matchObj[3];

let [, _day, _month, _year] =
/^(\d\d)\/(\d\d)\/(\d\d\d\d)$/
.exec('22/08/2022');

console.log(_day)
console.log(_month)
console.log(_year)
