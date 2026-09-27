// // Exercise 1 — Hoisting & Scoping

// // Original example
// console.log(name); // undefined because var is hoisted, but the value is assigned later

// var name = "Jone";

// function test() {
//     var x = 10;

//     if (true) {
//         var y = 20;
//     }

//     console.log(y); // 20 because var has function scope
// }

// test();

// // console.log(x); // Error if uncommented: x exists only inside test()

// // Rewritten version using let
// let userName = "Jone";
// console.log(userName);

// function testWithLet() {
//     let x = 10;

//     if (true) {
//         let y = 20;
//         console.log(y); // y is block-scoped
//     }

//     // console.log(y); // Error if uncommented
// }

// testWithLet();
//======================================================
// Exercise 2 — Constructor Functions & Prototypal Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
};

function Employee(name, age, employeeId, position) {
    Person.call(this, name, age);

    this.employeeId = employeeId;
    this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function () {
    return "Hello, I am " + this.name +
        ", employee ID: " + this.employeeId +
        ", and I work as a " + this.position + ".";
};

let employee1 = new Employee("Ahmad", 24, "E001", "Developer");
let employee2 = new Employee("Sara", 26, "E002", "Designer");
let employee3 = new Employee("Omar", 28, "E003", "Manager");

console.log(employee1.greet());
console.log(employee2.greet());
console.log(employee3.greet());

console.log(employee1 instanceof Employee);
console.log(employee1 instanceof Person);   

//======================================================
// Exercise 3 — Array Methods Playground

let students1 = ["Ahmad", "Mohammad", "Omar", "Ali", "Sara", "Lina", "Rami", "Yazan", "Dana", "Noor", "Khaled", "Samer", "Huda", "Lama", "Tareq", "Zaid", "Malak", "Aya", "Adam", "Yousef", "Leen", "Jana", "Hassan", "Farah", "Anas", "Maya", "Laith", "Salma", "Rana", "Fadi", "Majd", "Dina", "Bashar", "Reem", "Alaa", "Nour", "Sami", "Haneen", "Kareem", "Razan", "Amjad", "Batool", "Wael", "Rawan", "Mahmoud", "Jamal", "Tasneem", "Ibrahim", "Sahar", "Nabil"];

let students2 = [
    "Abeer",
    "Osama",
    "Dalia",
    "Murad",
    "Ruba"
];

// concat()
let allStudents = students1.concat(students2);
console.log("After concat:", allStudents);

// sort()
allStudents.sort();
console.log("Alphabetically sorted:", allStudents);

// reverse()
allStudents.reverse();
console.log("Reversed:", allStudents);

// includes()
console.log("Does the list include Ahmad?", allStudents.includes("Ahmad"));
console.log("Does the list include John?", allStudents.includes("John"));

// forEach()
allStudents.forEach(function (student, index) {
    console.log(index + ": " + student);
});

//======================================================


// Exercise 4 — Student Records Manager

let students = [];

for (let i = 1; i <= 50; i++) {
    students.push({
        id: i,
        name: "Student " + i,
        grade: 50 + (i % 51)
    });
}

console.log("Original students:", students);

// splice() — add
students.splice(5, 0, {
    id: 51,
    name: "New Student",
    grade: 88
});


// splice() — remove
students.splice(10, 1);

// splice() — replace
students.splice(0, 1, {
    id: 100,
    name: "Replacement Student",
    grade: 95
});

// slice() — copy a portion
let firstFive = students.slice(0, 5);
console.log("First five copied with slice():", firstFive);

// sort() — by grade
students.sort(function (a, b) {
    return a.grade - b.grade;
});

// forEach() — final list
students.forEach(function (student) {
    console.log(
        "ID: " + student.id +
        " | Name: " + student.name +
        " | Grade: " + student.grade
    );
});
//======================================================
// Exercise 5 — JSON Converter

let product = {
    id: 1,
    name: "Laptop",
    price: 750,
    category: "Electronics",
    available: true
};

console.log("Original object:", product);

// Object -> JSON string
let jsonString = JSON.stringify(product);
console.log("JSON string:", jsonString);

// JSON string -> Object
let convertedProduct = JSON.parse(jsonString);
console.log("Converted object:", convertedProduct);

// Invalid JSON using try...catch
let invalidJson = '{"id": 1, "name": "Laptop",}';

try {
    let invalidProduct = JSON.parse(invalidJson);
    console.log(invalidProduct);
} catch (error) {
    console.log("Invalid JSON:", error.message);
}
//======================================================

// Exercise 6 — Product Inventory Analyzer

let inventory1 = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", quantity: 5 },
    { id: 2, name: "Mouse", price: 25, category: "Accessories", quantity: 20 },
    { id: 3, name: "Keyboard", price: 50, category: "Accessories", quantity: 15 },
    { id: 4, name: "Monitor", price: 300, category: "Electronics", quantity: 8 },
    { id: 5, name: "Phone", price: 650, category: "Electronics", quantity: 10 },
    { id: 6, name: "Desk", price: 200, category: "Furniture", quantity: 6 },
    { id: 7, name: "Chair", price: 150, category: "Furniture", quantity: 12 },
    { id: 8, name: "Webcam", price: 90, category: "Accessories", quantity: 7 },
    { id: 9, name: "Headphones", price: 120, category: "Audio", quantity: 14 },
    { id: 10, name: "Tablet", price: 400, category: "Electronics", quantity: 9 }
];

let inventory2 = [
    { id: 11, name: "Printer", price: 180, category: "Electronics", quantity: 4 },
    { id: 12, name: "Microphone", price: 110, category: "Audio", quantity: 11 }
];

// sort() — products by price
inventory1.sort(function (a, b) {
    return a.price - b.price;
});

console.log("Sorted by price:", inventory1);

// includes() — available categories
let availableCategories = ["Electronics", "Accessories", "Furniture", "Audio"];

console.log(
    "Is Electronics available?",
    availableCategories.includes("Electronics")
);

console.log(
    "Is Clothing available?",
    availableCategories.includes("Clothing")
);

// splice() — remove a discontinued product
let discontinuedIndex = inventory1.findIndex(function (product) {
    return product.id === 6;
});

if (discontinuedIndex !== -1) {
    inventory1.splice(discontinuedIndex, 1);
}

console.log("After removing discontinued product:", inventory1);

// slice() — first five products
let firstFiveProducts = inventory1.slice(0, 5);
console.log("First five:", firstFiveProducts);

// concat() — merge inventories
let mergedInventory = inventory1.concat(inventory2);
console.log("Merged inventory:", mergedInventory);
//======================================================
// Exercise 7 — Arrow Function Transformation

// Square
const square = number => number * number;

// Even check
const isEven = number => number % 2 === 0;

// Products
const products = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 50 }
];

// Total price using reduce()
const totalPrice = products.reduce((total, product) => total + product.price, 0);

// map()
const productNames = products.map(product => product.name);

// filter()
const expensiveProducts = products.filter(product => product.price > 50);

console.log("Square of 5:", square(5));
console.log("Is 10 even?", isEven(10));
console.log("Total price:", totalPrice);
console.log("Product names:", productNames);
console.log("Expensive products:", expensiveProducts);

//======================================================


// Exercise 8 — Destructuring & Default Parameters

const user = {
    name: "Ahmad",
    email: "ahmad@example.com",
    age: 22,
    address: "Amman"
};

// Object destructuring
const { name, email, age, address } = user;

console.log(name);
console.log(email);
console.log(age);
console.log(address);

// Rename one property
const { name: userName } = user;
console.log("Renamed property:", userName);

// Array destructuring
const skills = ["HTML", "CSS", "JavaScript"];

const [firstSkill, secondSkill, thirdSkill] = skills;

console.log(firstSkill);
console.log(secondSkill);
console.log(thirdSkill);

// Default parameters
function createUser(name = "Unknown", email = "not-provided@example.com", age = 0) {
    return {
        name: name,
        email: email,
        age: age
    };
}

const user1 = createUser("Sara", "sara@example.com", 25);
const user2 = createUser();

console.log("Complete user:", user1);
console.log("User with omitted optional parameters:", user2);
//======================================================
// Exercise 9 — Spread, Rest, Map & Set Challenge

// Spread — combine two arrays
const enrolledStudents1 = ["S001", "S002", "S003"];
const enrolledStudents2 = ["S004", "S005", "S006"];

const allEnrolledStudents = [
    ...enrolledStudents1,
    ...enrolledStudents2
];

console.log("Combined students:", allEnrolledStudents);

// Rest — any number of grades
const calculateAverage = (...grades) => {
    if (grades.length === 0) {
        return 0;
    }

    const total = grades.reduce((sum, grade) => sum + grade, 0);
    return total / grades.length;
};

console.log("Average:", calculateAverage(80, 90, 70, 100));

// Set — remove duplicate IDs
const studentIds = ["S001", "S002", "S002", "S003", "S001", "S004"];

const uniqueStudentIds = new Set(studentIds);

console.log("Unique IDs:", [...uniqueStudentIds]);

// Map — student IDs and grades
const studentGrades = new Map();

// Add
studentGrades.set("S001", 85);
studentGrades.set("S002", 90);
studentGrades.set("S003", 78);

// Update
studentGrades.set("S002", 95);

// Retrieve
console.log("S002 grade:", studentGrades.get("S002"));

// Delete
studentGrades.delete("S003");

console.log("Map after operations:", studentGrades);

// Convert final data to regular array
const finalStudentData = Array.from(studentGrades, ([id, grade]) => ({
    id: id,
    grade: grade
}));

console.log("Final student data:", finalStudentData);

//======================================================

// Exercise 10 — Dynamic Student Report

 students = [
    { id: 1, name: "Ahmad", grade: 85 },
    { id: 2, name: "Sara", grade: 92 },
    { id: 3, name: "Omar", grade: 58 },
    { id: 4, name: "Lina", grade: 74 },
    { id: 5, name: "Yazan", grade: 45 }
];

const reportsContainer = document.getElementById("reports");

students.forEach(student => {
    const status = student.grade >= 50 ? "Pass" : "Fail";

    const report = `
        <section>
            <h2>Student Report</h2>
            <p>Name: ${student.name}</p>
            <p>ID: ${student.id}</p>
            <p>Grade: ${student.grade}</p>
            <p>Status: ${status}</p>
            <hr>
        </section>
    `;

    reportsContainer.innerHTML += report;
});
