// console.log("hello");
// const Hello:Number = 3.14;
// console.log("hello");


// ---------------------------------------------

// function calculate(n1:number,n2:number){
//     return n1 + n2;
// }
// console.log(calculate(1,3));

//-----------------------------------------------

// function getTotal(numbers:number[]){

//     return numbers.reduce((acc,item) =>{
//         return acc+item;
//     },0)
// }

// console.log(getTotal([3,2,1]));


//Object---------------------------------------

// const user = {
//   firstName:'Ashish',
//   LastName:'Parmar'
// }

// console.log(user.firstName);
// console.log(user.LastName);

//Type alias-------------------------------------------

// type User = {
//   name:string;
//   age:number;
//   address?:string;
// }

// // ? means optional not required.

// const user:User = {
//   name:'dhaval',
//   age:33,

// }

// function login(userData:User):User{
//   return userData;
// }

// console.log(login({
//   name:'ashish',
//   age:37,
// }));
// console.log(login(user));

// -------------------------------------------

// type ID  = number | string;

// const userId:ID = 123


// --------------------------------------------------------

// interface Trancation{
//   payerAccountnumber : number;
//   payeeAccountnumber : number;
// }

// interface BankAccount{
//   accountNumber: number;
//   accountHolder:string;
//   balance:number;
//   isActive:boolean;
//   transactions:Trancation[]
// }

// const transaction1:Trancation = {
//   payerAccountnumber : 123,
//   payeeAccountnumber : 456,
// }

// const transaction2:Trancation = {
//   payerAccountnumber : 123,
//   payeeAccountnumber : 456,
// }


// const bankAccount:BankAccount = {
//   accountNumber:123,
//   accountHolder:"AShish",
//   balance:20000,
//   isActive:true,
//   transactions:[transaction1,transaction2]


// }


//extend-------------------------------------------------------------------

// interface Book {
//   name:string;
//   price:number;
// }

// interface Ebook extends Book{
//   // name:string;
//   // price:number;
//   fileSize:number;
//   format:string
// }

// interface AudioBook extends Ebook{
//   // name:string;
//   // price:number;
//   // fileSize:number;
//   // format:string
//   duration:number;

// }



// const book:AudioBook = {
//   name:"Atomic book",
//   price:1200,
//   fileSize:300,
//   format:"pdf",
//   duration:4,
// }

//Merging-------------------------------------------------------

// interface Book{
//   name:string;
//   price:number;
// }

// interface Book {
//   size:number;
// }


// const book:Book = {
//   name:"Bhajvatgita",
//   price:1200,
//   size:45,
// }

//differance between type and interface------------------------------------------------------------
//not allow same name in type------------
// 1)

// type Book{
//   name:string;
//   price:number;
// }

// type Book {
//   size:number;
// }

// 2)

// primetive type for only use type

// type sanitizedString = string;
// type EvenNumber = number;

//unions-----------------------
//Narrowing-------------------------
// type ID = number | string;

// function printId(id:ID){
//   if(typeof id === 'string'){
//   console.log(id.toUpperCase());
//   }
//   else{
//     console.log(id);
    
//   }
    
// }
// printId("hello");
// printId(11);


//---------------------------------
// function getFirstThree(x:string | number[]){
//   return x.slice(0,3);
// }

// console.log(getFirstThree("hello"));
// console.log(getFirstThree([1,3,4,5,6,7]));


//Generics----------------------------------------------------

// function logString<T>(arg: T):T{
//   console.log(arg);
//   return arg;
  
// }

// logString("11")

//---------------------------------------------------------

// interface HasAge{
//   age:number;
// }
// function getOldest<T extends HasAge>(people:T[]):T{
//   return people.sort((a,b)=>b.age - a.age)[0];

// }

// const people:HasAge[] = [{age:20},{age:33},{age:12}];

// // const age = getOldest(people).age;

// // console.log(age);


// interface Player{
//   name:string;
//   age:number;
// }

// const Players:Player[] = [
//   {name:"Ashish",age:22},
//   {name:"harshil",age:21},
//   {name:"Dhaval",age:28},


// ];

// //Assertion

// //const person = getOldest(players) as player;

// const person = getOldest(Players);

// let age1 = person.age;
// let name1 = person.name;
// console.log(age1);
// console.log(name1);


//--------------------------------------------------------------


