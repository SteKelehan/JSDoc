// This will make sure that type matches desc type
// @ts-check

const { add, subtract, divide, multiply } = require('./calculator');

/**
 * @file index.js is the root file for this exmple app
 * @author Stephen Kelehan
 * @see <a href="https://notre-studio.co.uk">Notre-Studio</a>
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<Number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * @type {{id: number, text:string}}
 */
const todo = {
  id: 1,
  text: 'string',
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax %
 * @returns {string} - Total with a dollar sign
 */

const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 *
 */

class Person {
  /**
   *
   * @param {Object} personInfo - Info about person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age Persons age
     */
    this.ages = personInfo.age;
  }

  /**
   * @property {Function} greet A greeting with the name and age
   * @returns void
   */
  great() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * Person one
 * See {@link Person}
 */

const person1 = new Person({
  name: 'John Doe',
  age: 30,
});

console.log(person1.great());

console.log(add(20, 30));
