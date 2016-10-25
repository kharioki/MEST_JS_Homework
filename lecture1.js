/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the best practice
 */

var 1stCar = 'Doge';
/* not valid, because a variable name cannot begin with a number*/
var firstCar = 'Doge';

var var = 'variable';
/* invalid - variable name cannot be a javascript defined word 'var'*/
var varr = 'variable';

var first name = 'Jerry';
/*variable name cannot have whitespace*/
var firstName = 'Jerry';

var Sch00lName = 'MEST';
/*variable name should be human readable and cannot begin with uppercase*/
var schoolName = 'MEST';

var totalnumber = 100;
/*best practice is to have the variable name in camelCase*/
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
var greeting  =  'It's nice to me you today!'; 
/*invalid. best practice is to have a \ before introducing quotes inside the string*/
var greeting  =  'It\'s nice to me you today!';
var response = "Ashwin said, "Yes Sir!"";
/*invalid. best practice is to have a \ before introducing quotes inside the string*/
var response = "Ashwin said, \"Yes Sir!\"";

/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
0.3 + 0.1 === 0.4
true
/*the boolean result is true*/

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
/*1. Literal notation*/
var Pizza = {
    shape : 'round';
    crust : 'thick';
    top : 'meat toppings';
    slices : 8;    
}

/*2. Object constructor function*/
function Pizza(shape, crust, top, slices){
    this.shape = shape;
    this.crust = crust;
    this.top = top;
    this.slices = slices;
}
var pizza1 = pizza('round', 'thick', 'meat toppings', 8);

/*3. Object.create method*/
var pizza = {
    shape : 'round';
    crust : 'thick';
    top : 'meat toppings';
    slices : 8;
} 
var pizza2 = Object.create(pizza);

/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

function Animal(type, size, habitat, food){
    this.type = type;
    this.size = size;
    this.habitat = habitat;
    this.food = food;
}

Animal.prototype.view = function(){
      return this.size + ' ' + this.type
}

Animal.prototype.live = function(){
    return 'lives in ' + this.habitat + ' and eats ' + this.food
}

var giraffe = new Animal('herbivore', 'big', 'forest', 'branches');
var hare = new Animal('herbivore', 'small', 'forest', 'grass');

giraffe.view() + ' ' + giraffe.live;
hare.view() + ' ' + hare.live;


/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

/*using IF statement*/

if (7){
    console.log('jollof rice, 2pcs chicken, salad ' + '12Cedis');
} else if (8){
    console.log('jollof rice, 3pcs chicken, salad ' + '14Cedis');
} else if (9){
    console.log('jollof rice, tilapia, salad ' + '15Cedis');
}

/*using SWITCH statement*/

switch(value){
    case 1 :
        'jollof rice, 2pcs chicken, salad ' + '= 12Cedis';
        break;
    case 2 :
        'jollof rice, 3pcs chicken, salad ' + '= 14Cedis';
        break;
    case 3 :
        'jollof rice, tilapia, salad ' + '= 15Cedis';
        break;
    
    default :
        'Welcome to Sandcity hotel, please enter value';
        break;
}

/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
for (var i = 0; i < 8; i++){
    console.log(studentScores[i]);
}

/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
forEach(studentScores){
    studentScores.forEach(studentScores){
        console.log(studentScores);
    };
}

