


// function to fetch data from the api
fetch(`https://opentdb.com/api.php?amount=5`) 
.then(response => response.json())
.then(data => addQuestions(data))



function addQuestions(data){
    console.log(data)
   
   
    // the value of i goes up by 1 each time it iterates until it reaches the last question
    for(let i = 0; i < data.results.length;  i++){
      //the value of i is chaning by 1 each time so it will start at 0 and go to 5 to grab each part of the array 
      console.log(data.results[i].correct_answer)
      console.log(data.results[i].question)
      console.log(' ')

      // create new div
      // add question text
      // add choices
      // add correct answer
      // add all this to html

    }
}


























// var o = 'Olivia'

// let car = {
//   make: 'toyota',
//   year: 2016,
//   owners: ['Nick', 'Tyler', o],
//   mods: {
//     tint: true,
//     wheels: "yellow"
//   },
//   makeAndYear : function(){
//     return this.year + " " + this.make
//   }
// }


// console.log(car.makeAndYear())

// // console.log(car.owners)
// console.log(car.make)
// console.log(car.mods.tint)



// // Write an object of an animal
// // properities of: name, type, siblings names
// let animal = {
//   name: 'zorb',
//   type: 'cat',
//   siblingsNames: ['zore' , 'zord']
// }

// console.log(animal)
// console.log(animal.siblingsNames[1])
  

  
  