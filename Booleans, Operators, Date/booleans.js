//#1
let firstName= "Murager";
let lastName= "Berikly";
let country= "Kazakstan";
let city = "Almaty";
let age = 18 ;
let isMarried= false;
let year = 2023;

console.log(typeof firstName);// string
console.log(typeof lastName);// string
console.log(typeof country); // string
console.log(typeof city);// string
console.log(typeof age);// number
console.log(typeof isMarried);//boolren
console.log(typeof year);//number


//#2
let str = '10';
let num = 10;

if (parseInt(str) === num) {
  console.log(" Жол түрі '10' санға тең 10");
} else {
  console.log(" Жол түрі '10' санға тең емес 10");
}


//#3
if (parseInt('9.8') == 10) {
  console.log("Нәтиже тең 10");
} else {
  console.log("Нәтиже тең емес 10");
}


//#5
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 == 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 == '4'); // false
console.log('python'.length >= 'jargon'.length); // false
