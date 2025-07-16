//  console.log("hello wold")
//  let name = "John ";
// let surname = "Doe";

// console.log(name)
// console.log(surname)
// console.log(name + surname)
// let age = 11
// let number = 4
// console.log(age)
// console.log(number)
// console.log(age + number)
// const pi = 3.14

// console.log(pi)
// console.log((3 + 2) - 76 * (1 + 1))
// let f= 2
// let y =3
// console.log(f)
// f = 5
// console.log(f)
// let t= f*2
// console.log(t)
// const max = 57
// const actual =max -13
// const persentage = actual/max
// console.log(persentage)
// const a = 24
// const b = 3
// const c= 2
// let d =(a + c) % b
// console.log(d)
// "use strict"
// numm =6
// console.log(numm)
// // note: no "use strict" in this example

// num = 5; // the variable "num" is created if it didn't exist


// console.log(num)
// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
// console.log(COLOR_RED)

// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// // alert(color); // #FF7F00
// let g = "dont  the site again" 
// console.log(g)
// // alert(g)
// let admin 
// let namee 
// namee = "jhonn"
// admin = namee
// // alert(admin)


// let ourPlanet
//  const desimal = 7.9865
//  let w = desimal.toFixed(2)
//  console.log(w)
//  const lotsOfDecimal = 1.7665849587;
// lotsOfDecimal;
// const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
// twoDecimalPlaces;
// const ww =3
// let tt = 5
// let u = ww ** tt
// console.log(u)
// let ee =3
// let ff = 1
// // console.log(ff)
// console.log("hi Wrlid")
// // object
// let houseColor = {
//   roomColor:"green ",
//   kitchenColor:"orange"

// }
// let colors = {
//   home:"red"
//   ,
//   house:"WebGL2RenderingContext",
//   kitchen:"onratechange"

// }
// colors.home ="green";console
// colors.house = "red";
// let array = [ "walid","green",2 ,"walid"]
// array[0] = 4
// function fullName (name ,lastname) {
//   console.log("hi,how are you " +name + lastname);

// }
// fullName("walid ","nashi")
// let name =" Walid"
// alert(`heelo ${name}` );
// const song = "Fight the Youth";
// const score = 9;
// const highestScore = 10;
// const output = `I like the song ${song}. I gave it a score of ${
//   (score / highestScore) * 100
// }%.`;
// console.log(output); // "I like the song Fight the Youth. I gave it a score of 90%."
// let lastName = `evry day i have been studying but i dont know the reson 
// dont be shy to talk to me `
// console.log(lastName)
// const walid =" dont be a football player /n\n be your serlf"
// console.log(walid)
// let karim = "5"
// karim = Number(karim)
// console.log(karim)
// let number = 1234
// let number2 = String(number)
// console.log(number)
// console.log(number2)
// console.log(typeof number)
// console.log(typeof number2)
const screenDisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')
// console.log(buttons)
let calaculation = []
let acumalativeCalculation
function calculate(button){
  // console.log('clicked',button.textContent)
const value = button.textContent
if (value === "CLEAR"){
calaculation = []
screenDisplay.textContent = '.'
}else if (value === "=") {
  console.log(acumalativeCalculation)
  screenDisplay.textContent =eval(acumalativeCalculation)

}else  {
  calaculation.push(value)
// console.log(calaculation)
  acumalativeCalculation = calaculation.join('')
//  console.log(acumalativeCalculation)
 screenDisplay.textContent = acumalativeCalculation
}




}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
