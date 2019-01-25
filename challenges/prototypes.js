
// 1. Describe the biggest difference between `.forEach` & `.map`.


//  .forEach has no return value. 


// 2. What is the difference between a function and a method?


// A method is a function on (or within) an object—it's a property of that object, specific and unique
// to it. For example: .forEach would not work on const x=10, but it would work on const x=[10],
// because the latter is an array and .forEach is an array method. 



// 3. What is closure?


// Closure is a way to describe the bounds of lexical scope. It's a door (or, perhaps, a bouncer at
// the door) that grants and denies access. It can be described as a cascade. 


// 4. Describe the four rules of the 'this' keyword.


// It has a generic, global value outside of a specific object.
// It has implicit meaning within an object—it refers to that object.
// It has explicit meaning in combination with call, apply, and bind—it refers to the objects these 
// other functions refer to. 
// New objects can be created via the keyword "new" with a constructor function and this can be used 
// to refer to these unique instatiations. 


// 5. Why do we need super() in an extended class?


// "extends" is like someone pointing in the right direction and super is the physical act of moving
// in that direction. It's an abstraction of a call function.






/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

const CuboidMaker=function(obj){
  this.length=obj.length;
  this.width=obj.width;
  this.height=obj.height;
}

/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

CuboidMaker.prototype.volume=function(){
  return this.length*this.width*this.height;
}

/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker.prototype.surface=function(){
  return 2*(this.length*this.width + this.length*this.height + this.width*this.height);
}

/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

const newCuboid=new CuboidMaker({
  length: 4,
  width: 5,
  height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(newCuboid.volume()); // 100
console.log(newCuboid.surface()); // 130



