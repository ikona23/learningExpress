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

var peter = {
  favFood:"haluskay",
  favMovie: "beats that shit"
}
  console.log(peter.favFood);
var Person = peter
Person.favFood = "salad"

console.log(peter.favFood);
