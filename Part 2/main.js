//=======================================================================
/*                                     Q1                              */
//=======================================================================
  //lets make a user profile using closures
  //create a function person when invoked returns the name of that person

  function person(name){
    var per=name;
    var x=[personA,personB,personC];
    var count=0;
    return {
     sayMyName:function(){
      return per;
     }
     add:function("hello"){
      return "hello"+" "+per;
     }
     addFriend:function(person()){
      for(var i=0;i<x.length;i++){
        var y=x[i];
      }
      return "you just became friend with"+" "+y;
     }
     listFriends:function(count){
      for(var i=0;i<count.length;i++){
      if(x.length!==0){
        count++;
        }
    }
    return count;

   }
    }
    //your code is here
  }
  var personA=person("jack")
  var personB=person("Mark")
  var personC=person("Sara")

  // personA.sayMyName(); // "jack"
  // personB.sayMyName(); // "Mark"

  //now modify that closure and add a function that says hello to the person name;
  
  // personA.sayHello(); // hello jack
  // personB.sayHello(); // hello Mark

  //how about we let jack and mark meet toghter!
  //modify your closure and add function addFriend that accepts object of functions, and let jack meets his friends.

  // personA.addFriend(personB); // "you just became friend with Mark"
  // personA.addFriend(personC); // "you just became friend with Mark and Sara"

  //modify your closure to tell mark how many friends does he have

  // personA.listFriends(); // "Mark! you have 2 friends"


//=======================================================================
/*                                  Q2                                 */
//=======================================================================
  //lets create a football team using OOP concept,
  // a - we need to create the players (lets create only one for now), the player declaration should take the name of the player   
    
  // var player1 = Player("messi")

  // b - we need function to add the other info for the player with addInfo function
  
  // player1.addInfo(age, position, level, availability );

  // c- create another function to increase the the level for the player by n value 
   
  // player1.increaseLevel(4); 

  // d - we need another function to check the player state, if the player is available it should return true , if not it should return false
  //      note that the default state of the player is false.
    
  // player1.isAvailable();  // true / false

  // f- in order to change the state of the player, create a function called chageState, when called it will make the player avaliablity true,
  //    and when called again it will make it false.

  // player1.chageState(); // true
  // player1.chageState(); // false

  //writ your code here .....
  function players(player){
  player.player1={
   name:name,
  }
  player.age:age,
   player.position:position,
    player.level:level,
   player.availability:availability
 }
  this.addInfo(age, position, level, availability){
  return 
   this.age:age,
   this.position:position,
    this.level:level,
   this.availability:availability
  }
  this.increase(n){
    return this.level=n;
  }
  this.available(){
  if(this.availability===true){
    return true;
  }
   return false;
  }
  this.chageState(){
    if(this.availability===true){
      return false;
    }
    if(this.availability===false){
      return true;
    }
  }
  }
//=======================================================================
/*                                  Q3                                 */
//=======================================================================
  //Depending on data modeling concept that you have learned:
  //create a factory function called makeCar that represents cars,
  // what different attributes cars may have? create two cars object from your factory function and save them in one array called cars!

  function makeCar( color,name,type ){
    return {
   color:'color',
   name:'name',
   type:'type'
    }
    // TODO: Your code here
  }
  var car1=makeCar({color:"red",name:"jeb",type:"forwell"});
 var car2=makeCar({color:"darkred",name:"newjeb",type:"forwell2"});
  // write function displayCar that can be used to display one car
var cars=[car1,car2]
  function displayCar(car) {
    // TODO: Your code here
    return car.name+car.color+car.type;
  }
  
