/*ADVENTURE SCENE GENERATOR*/

/* This program makes scene descriptions for a text-based 
   RPG called "The Damned World".  Descriptions include 
   commentary on the scene, the perception of threat level,
   and objects of interest found within the scene.  

   Program is set to describe one of three environments or 
   'biomes' with objects of interest that fit the environment.

   Run this to get your descriptions!
   
   I implemented this code as an object so that I 
   could easily modify it to become a game loop. All it 
   would require is a ._step property, an iterator method that would step between initializing, logging a description,
   getting input from the player, providing some outcome based on the input, then returning another description.  Methods would be required for each step.  A character object would be needed with methods for modifying the character as necessary.  However, all this is beyond the scope of this project.  
   
   Welcome to the Damned World, and enjoy!*/

   const things = require('./descriptions.js')

   const theDamnedWorld = {
     _biomes: things.biomes.slice(),
   
     play() {
       console.log(this._biomes[Math.floor(Math.random()*this._biomes.length)].description())     
     }
   }
   
   
   theDamnedWorld.play()
   

