// console.log("hello");
// const Hello:Number = 3.14;
// console.log("hello");
function getOldest(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var people = [{ age: 20 }, { age: 33 }, { age: 12 }];
var Players = [
    { name: "Ashish", age: 22 },
    { name: "harshil", age: 21 },
    { name: "Dhaval", age: 28 },
];
//Assertion
//const person = getOldest(players) as player;
var person = getOldest(Players);
var age1 = person.age;
var name1 = person.name;
console.log(age1);
console.log(name1);
