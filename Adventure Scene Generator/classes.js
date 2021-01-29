/*This file contains the class descriptions for Biomes and
  ObjectsOfInterest

  A Biome is a type of location in The Damned World.

// A Biome must have an array of potential descriptors, a
// an array of potential ObjectsOfInterest to interact with, 
// and a threat assessment (how dangerous the locale is       
// percieved to be.)

// Biome class objects should also have getters as well as
   methods for:
   - generating a randomized description of the setting.
   - generating a random object of interest or hazard. 

  ObjectOfInterst class objects hold descriptions for objects
  within the local that can be interacted with.     

*/

// Biome class objects will include the same list of 
// description "starters".  Here they are...

const starters = [
    'One foot goes in front of the other, and before you know it',
  
    "The earth turns beneath your footsteps; before long",
  
    "You walk for hours, lost in thought.  Soon you realize the world has changed around you, and",
  
    "Hours pass.  The Damned World changes with every step, but it is many steps before you notice.  Slowly (and then all at once) ",
  
    "Minutes may have passed, or hours -- it's hard to say anymore. By the time you look around you,",
  
    "Weariness is taking its toll.  You walk for hours, as if in a trance.  When you return to your senses,",
  
    "You pass a merry hour walking, followed by several miserable hours.  When you finally look up from your feet,"
    
  ]
  
  // Save a few keystrokes with a random number method
  
  function rand(number) {
    return Math.floor(Math.random()*number)
  }
  
  
  // Define Biome class to construct environments
  
  class Biome {
  
    constructor(name, threatLevel, des1, des2, objOfInt) {
      this._name = name,
      this._threatLevel = threatLevel,
      this._des1 = des1,
      this._des2 = des2,
      this._objOfInt = objOfInt,
      this._starter = starters
    }
  
    rand(type) {
      return type[Math.floor(Math.random()*type.length)]
    }
  
    description() {
      return `${this.rand(this._starter)}, ${this.rand(this._des1)}  ${this.rand(this._des2)}  ${this.rand(this._objOfInt).description()}.`
    }
  
  }
  
  // Define Object of Interest Class to add objects within Biomes
  
  class ObjectOfInterest {
  
    constructor(type, desc) {
      this._type = type
      this._desc = desc
    }
  
    description() {
      return `${this._desc[Math.floor(Math.random()*(this._desc.length))]}`
    }
  
    get type() {
      return this._type
    }
  
  }
  
  
  module.exports.Biome = Biome;
  module.exports.ObjectOfInterest = ObjectOfInterest  