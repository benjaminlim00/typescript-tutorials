export {};

let message = 'hello ben';
let message_long = `this is a long message: ${message}`;

console.log(message_long);

let myVar: unknown = '10';

//#####
// function hasName(obj: any): obj is { name: string } {
//   return !!obj && typeof obj === 'object' && 'name' in obj;
// }

// if (hasName(myVar)) {
//   console.log(myVar);
// }
//#####

// console.log(myVar)
// (gives error)

//assertion must be applied
(myVar as string).toUpperCase();

//functions, the ? makes the param optional
function add(num1: number, num2?: number) {
  if (num2) {
    return num1 + num2;
  } else {
    return num1;
  }
}

console.log(add(5, 10));

// add(1,'s') (gives error)

//optional and default params
//in js, if you don't give a param, it is inserted with undefined

console.log(add(5));

//any number of optional params, but the required ones
//must come first

//functions, we are giving the default value for num2
function add2(num1: number, num2: number = 10) {
  return num1 + num2;
}

//should return 20
console.log(add2(10));

//interfaces, ? means optional, useful for form data
interface Person {
  firstName: string;
  lastName?: string;
}

// function fullName(person: {firstName: string, lastName: string}) {
//     console.log(`${person.firstName} ${person.lastName}`);
// }

//using interface
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};

fullName(p);

//classes
class Employee {
  employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet = () => {
    console.log(`Good morning ${this.employeeName}`);
  };
}

let emp1 = new Employee('Benjamin Lim');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }

  delegateWork() {
    console.log(`Manager delagating tasks...`);
  }
}

let m1 = new Manager('Tom');
m1.delegateWork();
m1.greet();

//access modifiers
class Animal {
  public color: string;
  private numChildren: number;
  protected numLegs: number;

  constructor(color, numChildren, numLegs) {
    this.color = color;
    this.numChildren = numChildren;
    this.numLegs = numLegs;
  }
}

//unable to get private var even in derived classes.
//unless we use protected.

class Cat extends Animal {
  constructor(color, numLegs) {
    super(color, 10, numLegs);
  }
}

// cat1.color
let cat1 = new Cat('red', 4);
//protected parameter is accessible
console.log(cat1.numLegs);
