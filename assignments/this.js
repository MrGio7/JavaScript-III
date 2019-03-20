/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: window is an massive object that contains JS language features, syntaxes which we can use and window binding is showing us, list of this features.
* 2. Implicit Binding: in this situation this keyword is used to point on container function name.
* 3. New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the
constructor function.
* 4. Explicit binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(hi){
    console.log(this);
    return hi;
}

hello('Greetings');

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hi',
    sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    }
    };
    myObj.sayHello('Giorgi');

// Principle 3

// code example for New Binding
function NPC(talk) {
    this.greeting = 'Hallo there ';
    this.talk = talk;
    this.speak = function() {
    return this.greeting + 'my name is ' + this.talk;
    };
    }
    const Mogo = new NPC('Mogo');
    const Ruby = new NPC('Ruby');
    console.log(Mogo.speak());
    console.log(Ruby.speak());


// Principle 4

// code example for Explicit Binding
function Player(answer){
    NPC.apply(this, this.greeting)
    this.answer = 'i`m here to take a quest';
    this.myName = answer;
    this.speak = function() {
        return this.greeting + 'my name is ' + this.myName + ', ' + this.answer;
    };
}

const Hugo = new Player('Hugo');
const Remsi = new Player('Remsi');
console.log(Hugo.speak())
console.log(Remsi.speak())