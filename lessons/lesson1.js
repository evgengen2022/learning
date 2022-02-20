 /* function sumAll(...args) {
     console.log(args)
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
       sum = sum + args[i]
    }
   console.log(sum);
}

sumAll(10, 25, 5, 30, 5, )

 // Arrow function

let getMessage = ( text, name) => text + ' , ' + name +'!' ;
console.log(getMessage('Hello',  "Evgen"));*/



  //Arrow function multiline



  /*let getMessage = (text, number) =>{
    let message = text + ',' + number + '!'
     return message;
 }
 console.log(getMessage('Bro', '15'))

 // PLANING setTimeout AND setInterval

 function ShowMessage(text, number){
     console.log(text + ',' + number );
 }
 setTimeout(ShowMessage, 500, 'Hello friend', 5)
*/




 // Recursion function



  /*function calcSumm(numOne, numTwo){
      if (numTwo === 1){
          return numOne;
      }else {
          return numOne * calcSumm(numOne, numTwo -3)
      }
  }
 console.log(calcSumm(2, 4))
*/

 // CREATION OBJECT


  let userInfo = {
      name : "Evgen",
      age : 20 ,
          country: "USA",
          city: "New York",
          street: "Olakhoma 50",
      phone : "223-453-345",
  };
 console.log(userInfo.country)

 let key = "name"
 console.log(userInfo[key]);

