// function placeOrder(orderNumber) {
//   console.log('cusotmer order:', orderNumber);
//
//   cookAndDeliveryFood(function(){
//     console.log("deiver food", orderNumber);
//   })
// }
//
// function cookAndDeliveryFood(callback){
//   setTimeout (callback, 5000)
// }
//
// placeOrder(1)
// placeOrder(2)
// placeOrder(3)
// placeOrder(4)
// placeOrder(5)

// var peter = {
//   favFood:"haluskay",
//   favMovie: "beats that shit"
// }
// console.log(peter.favFood);
//
// var Person = peter
// Person.favFood = "salad"
//
// console.log(peter.favFood);
//
// var Peter = {
//   printFirstName: function(){
//     console.log("my name is peter");
//     console.log(this === Peter);
//   }
// }
// Peter.printFirstName()
//
// function doSomething(){
//   console.log(" i am wortless");
//   console.log(this === global);
// }
//
// doSomething()

function User(){
  this.name = "",
  this.life = 100,
  this.giveLife = function(targetPlayer){
    targetPlayer.life +=1
    console.log(this.name + "gave 1 life" + targetPlayer.name);
    // console.log("peter to nani" + Nani.Life);
  }

}
var Nani = new User()
var Peter = new User()
Peter.name = "peter"
Peter.life = 200
console.log(User.name);
console.log(Peter.name);
console.log(Peter.life);
console.log("peter: "+ " " +  Peter.life);
// console.log("peter to nani" + Nani.Life);

Peter.giveLife(Nani)
Peter.giveLife(Nani)
Nani.giveLife(Peter)
console.log("Peter" + " " + Peter.life);
console.log("Nani" + " " +  Nani.life);

User.prototype.uppercut = function uppercut (targetPlayer) {
  targetPlayer.life -= 3
  console.log(this.name + "just uppercut" + targetPlayer.name);

}

Peter.uppercut(Nani)

console.log("peter" + Peter.life);
console.log("Nani" + Nani.life);

User.prototype.magic = function magic (targetPlayer) {
  targetPlayer.life += 19

}

Nani.magic(Peter)

console.log("nani dala magic" + Nani.life);
console.log("nani dala magic" + Peter.life);

console.log(Peter.magic);
console.log(Nani.magic);

User.prototype.darkMagic = -19

console.log(Peter.darkMagic);

// console.log("Peter magic" + Peter.magic);
// console.log("NANI magic" + Nani.magic);
