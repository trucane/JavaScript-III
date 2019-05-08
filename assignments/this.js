/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding and Golbal Object Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function favoriteFood(name){
    console.log(this);
    return name;
}

console.log( favoriteFood('Rice') )

// Principle 2

// code example for Implicit Binding

const favShow = {
    genre: 'Drama',
    show: function(name){
        console.log(this)
        console.log(`The show ${name} is a type of ${this.genre} `)
    }
}

favShow.show('The Good Dr.');

// Principle 3

// code example for New Binding

function House(type) {
    this.foundation = 'concrete',
    this.type = type,
    this.status = function(){
        console.log(`This ${this.type} home have a ${this.foundation} foundation`);
        console.log(this)
    }
}




const colonial = new House('2 Story');
const ranch = new House('One level');

colonial.status();
ranch.status();


// Principle 4

// code example for Explicit Binding

colonial.status.apply(ranch);
ranch.status.apply(colonial);

colonial.status();
ranch.status();
