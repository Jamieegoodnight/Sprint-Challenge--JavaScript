// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(obj){
        this.length=obj.length;
        this.width=obj.width;
        this.height=obj.height;
    }
    volume(){
        return this.length*this.width*this.height
    };
    surface(){
        return 2*(this.length*this.width + this.length*this.height + this.width*this.height)
    };
  }

  const newCuboid=new CuboidMaker({
    length: 4,
    width: 5,
    height: 5
  });
  
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(newCuboid.volume()); // 100
  console.log(newCuboid.surface()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
 class CubeMaker extends CuboidMaker{
     constructor(cubobj){
         super(cubobj);
     }
     cubeVolume(){
        return this.length*this.length*this.length
     };
     cubeSurface(){
        return 6*this.length*this.length
     };
 }

 const newCube=new CubeMaker({
     length: 5,
     width: 5,
     height: 5
 })