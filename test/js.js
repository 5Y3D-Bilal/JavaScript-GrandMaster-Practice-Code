console.log("eawejwan")
console.log(new Date())

const d_p = new Date(0)
console.log(d_p)

// BirthDay Example
let myBirthDay = new Date(2024, 2, 3)
const BirthDayDate = myBirthDay.getDate()
const BirthMonth = myBirthDay.getMonth()


const current = new Date()
const Month = current.getMonth()
const date = current.getDate()

if (myBirthDay === date && BirthMonth === Month) {
    console.log("Happy Birthday")
} else {
    console.log("its not your birth day")
}


//! Objects

let person1 = {
    name: "player1",
    age: "25",
    from: "Pak",
    aim(logVal) {
        console.log(logVal)
    }
}

console.log(person1.name.toUpperCase())
console.log(person1['age'].split(''))
let D = document.createElement('h2')
D.textContent = person1['age'].split('')
document.body.appendChild(D)
person1.aim('Be a hacker')

person1.newVALUE = "add something"
person1.falseVale;

console.log([person1])
console.log(person1.falseVale); // undefined


let test = []
test.da = "Stfu".toLowerCase()
if (test === "Stfu".toLowerCase()) {
    console.log("true")
} else {
    console.log("falseF")
}
console.log(test)

let test2 = {}
test2.da = "Dont Care About Us"
console.log(test2.da.toUpperCase().split(' '))


let empty = function () {

}

empty.jot = "Tessing"
empty()

const DAO = {
    d: 2,
    b: 3,
    true: 'true Answer',
    false: 'False Answer please try again',
    answer(val1, val2) {
        console.log(val1 + val2 === 3 && 3 === this.b !== this.d > 2 - 1 < 0 || 2 - this.d === 0 ? this.true : this.false)
    }
}

console.log(DAO.answer(1, 2))


//! OOP
// Constructors

//* Step1 . Define the object
function MotorBike(name, BikeColor) {
    this.CompanyName = name;
    this.BikeColored = BikeColor;
}

//* Step2 . Call the function with the new object
let NewBike = new MotorBike("Honda", "Red")

console.log(NewBike)

//~ Delivers a single Object
const Daddy = new Object()
console.log(typeof (Daddy)) // returns object
Daddy.age = 21
Daddy.name = "John Doe"
console.log(Daddy)

//~ Main Thing is we can pass multiple instance to this function
function Daddy_but_with_Constructor(name, age) {
    this.DaddyAge = age
    this.DaddyName = name
    console.log(name, age);
}

const newDaddy = new Daddy_but_with_Constructor('John Doe'.split(''), 45 + 'da');

//! MORE CONSTRUCTOR FUCNTIONS EXAMPLE

// Contructor function
function TV(brand, size, type, result) {
    this.Tv_brand = brand;
    this.Tv_size = size;
    this.Tv_type = type;
}
//~ multiple instance
let Samsung = new TV("Samsung", 42, "Smart");
let LG = new TV("LG", 32, "LCD");
let Jontic = new TV("Jontic", 32, "LED");
console.log(Samsung, LG, Jontic)


//! MORE ON CONSTRUCTOR AND OBJECTS

//* Contructor function 
function WebsiteWebURL(url) {
    this.url = url
    this.showURl = function () {
        console.log(this.url)
    }
}

//* Instance
var mySite = new WebsiteWebURL("https://youtube.com")
console.log(
    mySite
)

//* with object litreal you are unable to have a contructor, which means you are unable to initialise your object unless you add your own limit function
let webSite = {
    init: function (url) {
        this.url = url
    },
    showUrl: function () {
        console.log(this.url)
    }
}

webSite.init('www.google.com')
webSite.showUrl('www.google.com')

//* making a new object, using another object as its protyotype
const personY = {
    name: "PersoneX",
    age: 20
}

let personX = Object.create(personY);
personX.workAt = "Google";
console.log(`${personX.name} is ${personX.age} years old and he works at ${personX.workAt}`)


//* making objects with clases ES-2015

//^1. Constructor function
function Ped(name) {
    this.name = name
}

Ped.prototype.gretting = function () {
    console.log(this.name)
}

let user = new Ped("John");
user.gretting()

//^2. Classes ES 2015
class Ped1 {
    constructor(name) {
        this.name = name
    }
    gretting() {
        console.log(this.name)
    }
}

let user2 = new Ped1("Don")
user2.gretting();

console.log(typeof (Ped1))
console.log(Ped1 === Ped1.prototype.constructor)
console.log(Object.getOwnPropertyNames(Ped1.prototype))

class Animal {
    constructor(Animal_Name, color) {
        this.Animal_Name = Animal_Name
        this.color = color
    }
    result() {
        console.log(`I got a ${this.Animal_Name} and its ${this.color}`)
    }
} // class without any property or method

// const myDog = new Animal('dog', 'yellowish')
// myDog.result()

// 

//! IIFE - Immediately Invoked Function Expression.
//* A Function which have its own scope and it cant be accessed outside of the function. In Simple words it have its own world and it cant not connect with outside world. and we dont have to call thses function they will run automaticlly.
(function () {
    let arr1 = ['test', 'dsajd', 'lol', 'sdajd']
    let arr2 = []
    arr1.forEach((item, index) => {
        arr2.push(`$${item} has added ${index}`)
        console.log(arr2)
    })
})()

//* A Normal function
let arr2 = []
function log_It() {
    arr2.push({ name: "dook" })
    console.log(arr2)
}
log_It()

//! Array Methods Types

// 1. mutate methods
let numbers = [4, 302, 2]
numbers.push(56789)
console.log(numbers)

//  2. accessor methods
let Name = ['Ali', 'Sara']
let copy = Name.slice(1, 2)
console.log(copy)
console.log(Name)

// 3. interator Methods
let gangMembers = ['Rich', 'Dok23']
const animalInterator = gangMembers.map((gangMembers) => {
    console.log(`These are my mates ${gangMembers}`)
})

//! Array LOOPS

// forOf Loop 
for (const key of gangMembers.entries()) {
    console.log(key)
}

let hi = function (name) {
    return `hi  ${name}`;
}

// forIn Loop
for (const name in gangMembers) {
    if (gangMembers.hasOwnProperty(name)) {
        let GangMembersName = hi(gangMembers[name])
        console.log(GangMembersName)
    }
}

// ! ProtoTypes , Inheritance and how  to create them

// for now we cant access the run function in "a"  object because it is not a built-in method but we will add protoypes method to in now .
let a = {
    name: "jhon"
}
console.log(a)
// making a prototype for a to run a console-LOG method on it 
let p = {
    run_A_msg_in_CONSOLE(msg) {
        return `${msg}`
    }
}
// so now a will get the "run_A_msg_in_CONSOLE" method  from p by protypal-Inheritance / Object chaining
a.__proto__ = p
console.log(a.run_A_msg_in_CONSOLE('Hello world whats up'))

//^ Another example with Constructor Funciton
// Prototype for Carrot Constructor
let food = {
    yummy: true
}
// Master Constructor 
function Carrot(color) {
    this.Carrot = color
}
// Making a prototype for the carrot constructor
Carrot.prototype = food
// instance of Carrot Master Constructor function where we pass color as orange
let carrot = new Carrot("orange")
// Loggin it
console.log(carrot);


// Making a Constructor without a prototype. Insted using this key word
class CarOrder {
    constructor(name, brand) {
        this.name = name
        this.brand = brand
        this.orderNow = function () {
            return `You have buyed this ${this.name} from ${this.brand}.`
        }
    }
}

// making instances
const Ford = new CarOrder('Ford-2020', 'Ford')
const BMW = new CarOrder('BMW-X5', 'BMW')

console.log(Ford.orderNow());
console.log(BMW.orderNow());

//! Very Important thing
//* So why we dont use this.orderNow for making a prototype ? just because we dont want to duplicate the for each instance. So thats why we just share the prototype because orderNow is a method we want to use on every instance this will reduce the memory load by sharing the method not duplicating the method for each inctance.
class FoodOrder {
    constructor(name, food) {
        this.name = name
        this.food = food
    }
}
FoodOrder.prototype.orderNow = function () {
    return `i have a ${this.food} for ${this.name}`
}
const order1 = new FoodOrder('John Doe', 'Pizza')
const order2 = new FoodOrder('Dinal', 'Pasta')
console.log(order1.orderNow())
console.log(order2.orderNow())

// Making a litle function for showing Random Quotes
function showQuote() {
    let quote = []
    quote[0] = "The best way to predict the future is to invent it.";
    quote[1] = "Life is not about waiting for the storm to pass, but learning to dance in the rain."
    quote[2] = "In the tapestry of life, every thread counts. Embrace both the light and the dark, for they weave the beauty of your story."
    quote[3] = "Life is a journey, not a destination. Treasure the moments, embrace the detours, and find joy in the unexpected adventures along the way."

    let random = Math.floor(Math.random() * quote.length)
    document.getElementsByTagName('p')[0].innerHTML = quote[random]
}

//! Some Functions Types


// function decleraton
function dogs() {
    let sound = 'wof wof'
    console.log(sound)
}
dogs()

// function expression
const catSound = function cat() {
    let sound = 'meow'
    console.log(sound)
}
catSound()

// Both ("Globle Function, Function Expression") are the same but main difference is initalaziation

// we can assess the fucntion before its declaration 
hiMan("Hello World"); // Global Function
function hiMan(msg) {
    console.log(msg)
}

// We cannot access before its declaration
//sayHi('Whats up mate'); // Uncaught ReferenceError: Cannot access 'sayHi' before initializationjs:3
const sayHi = msg => console.log(msg); //Function Expresison

//! Practice

class Food {
    constructor(name, from) {
        this.name = name
        this.from = from
        // this.getFood = function () {
        //     console.log(`We got this ${this.name} from ${this.from}`);
        // } --- //* We can use this but it will duplicate the getFood function  everytime a new instance of Food is created.
    }
}

Food.prototype.getFood = function () {
    console.log(`We got this ${this.name} from ${this.from}`);
}

const donation1 = new Food('Pizza', 'John Doe')
const donation2 = new Food('Pizza', 'John Doe')
console.log(donation1)
console.log(donation2)