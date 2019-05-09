// /*
//   Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

//   In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

//   At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
//   Each constructor function has unique properties and methods that are defined in their block comments below:
// */
  

/*
 === GameObject ===
 * createdAt
 * name
 * dimensions (These represent the character's size in the video game)
 * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
// function gameObject(features) {
//  this.createdAt = features.createdAt;
//  this.name = features.name;
//  this.dimensions = features.dimensions;

// };

function gameObject(features){
    this.createdAt = features.createdAt;
    this.name = features.name;
    this.dimensions = features.dimensions;
  
  };

gameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
};


/*
 === CharacterStats ===
 * healthPoints
 * takeDamage() // prototype method -> returns the string '<object name> took damage.'
 * should inherit destroy() from GameObject's prototype
*/
// function CharacterStats(attributes){
//   this.healthPoints = attributes.healthPoints
//   GameObjects.call(this, attributes)
// }

function CharacterStats(attributes){
  this.healthPoints = attributes.healthPoints;
  gameObject.call(this, attributes);
}

// CharacterStats.prototype = Object.create(gameObject.prototype)
// CharacterStats.prototype.takeDamage = function () {
//  return `${this.name} took damage`
// };

CharacterStats.prototype = Object.create(gameObject.prototype);
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage`;
};
/*
 === Humanoid (Having an appearance or character resembling that of a human.) ===
 * team
 * weapons
 * language
 * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
 * should inherit destroy() from GameObject through CharacterStats
 * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

// function Humanoid(species) {
//  gameObject.call(this ,species);
//  this.team = species.team;
//  this.weapons = species.weapons;
//  this.language = species.languages;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype)
// Humanoid.prototype.greet = function() {
//  return `${this.name} offers a greeting ${this.language}`
// }

function Humanoid (attributes){
  CharacterStats.call(this, attributes)
  this.team = attributes.team,
  this.weapons = attributes.weapons,
  this.language = attributes.language
}

Humanoid.prototype = Object.create(CharacterStats.prototype)
Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}`;
}


function Villan (attributes)  {
  Humanoid.call(this, attributes);
  this.attittude = attributes.attitude;
  this.mentalStatus = attributes.mentalStatus;
}

Villan.prototype =  Object.create(Humanoid.prototype);
Humanoid.prototype.destruction = function(){
  return `The evil villan ${this.name} has attacked New York`;
}
 const mage = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 2,
     width: 1,
     height: 1,
   },
   healthPoints: 5,
   name: 'Bruce',
   team: 'Mage Guild',
   weapons: [
     'Staff of Shamalama',
   ],
   language: 'Common Tongue',
 });

 const swordsman = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 2,
     width: 2,
     height: 2,
   },
   healthPoints: 15,
   name: 'Sir Mustachio',
   team: 'The Round Table',
   weapons: [
     'Giant Sword',
     'Shield',
   ],
   language: 'Common Tongue',
 });

 const archer = new Humanoid({
   createdAt: new Date(),
   dimensions: {
     length: 1,
     width: 2,
     height: 4,
   },
   healthPoints: 10,
   name: 'Lilith',
   team: 'Forest Kingdom',
   weapons: [
     'Bow',
     'Dagger',
   ],
   language: 'Elvish',
 });

 const villan = new Villan({
   createdAt: new Date(),
   dimensions:{
     length:3,
     width:2,
     height:6,
   },
   healthPoints:30,
   name:'Bad Bad',
   team: 'Dark Darkside',
   weapons: [
     'Orb of Dark',
     'Staff of Whoram'
   ],
   language: 'Broken English',
   mentalStatus: 'Insane',

 });

 const hero = new Humanoid({
  createdAt: new Date(),
  dimensions:{
    length:2,
    width:2,
    height:8,
  },
  healthPoints:30,
  name:'Eat Your Wheeties',
  team: 'Lame',
  weapons: [
    'Reading Books',
    'Endless Bank Account'
  ],
  language: ''
});

 console.log(mage.createdAt); // Today's date
 console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
 console.log(swordsman.healthPoints); // 15
 console.log(mage.name); // Bruce
 console.log(swordsman.team); // The Round Table
 console.log(mage.weapons); // Staff of Shamalama
 console.log(archer.language); // Elvish
 console.log(archer.greet()); // Lilith offers a greeting in Elvish.

 console.log(mage.takeDamage()); // Bruce took damage.
 console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

 console.log(villan.name); // Sir Mustachio was removed from the game.
 












// function battle(){

// if(checkDeath())
// console.log('Game Over')
// else{
//   while(){

//   }
// }
// whosturn()
//   attack()
// }



// function checkDeath(person1, person2){
//   if(person1.healthPoints <= 0 || person2.healthPoints <= 0){
//     return true;
//   }
// }

// function whosTurn(){

// }


//  function attack(person1, person2){
//    if(){

//    }
//  }