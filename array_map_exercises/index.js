/* 1) Make an array of numbers that are doubles of the first array
COMPLETE

 const arr = [2, 5, 100]

 // const doubleNumbers = arr.map(function(nums){
 //    return nums * 2
 // })

 const doubleNumbers = arr.map(nums => nums * 2)

 console.log(doubleNumbers) 
 
*/

/* 2) Take an array of numbers and make them strings
COMPLETE

  const objs = [
    { num: 2 },
    { num: 5 },
    { num: 100 }
  ]

  // const result = objs.map(function(obj) {
  //   return obj.num
  // })

  const result = objs.map(obj => obj.num)

 console.log(result)

*/

/* 3) Capitalize the first letter of each name and make the rest of the characters lowercase
COMPLETE

 function capitalizeNames(arr){
    return arr.map(name => {
        const firstLetter = name.charAt(0).toUpperCase();
        const rest = name.slice(1).toLowerCase();

        return firstLetter + rest
    })
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

*/

/* 4) Make an array of strings of the names
COMPLETE

 const namesOnly = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ];
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

  const result = namesOnly.map(namenew => namenew.name)

 console.log(result)
*/

/* 5) Make an array of strings of the names saying whether or not they can go to The Matrix
COMPLETE

//function makeStrings(arr){
    // your code here
  //}
  
  const actors = [
      { name: "Angelina Jolie",
        age: 80 },
      { name: "Eric Jones",
        age: 2 },
      { name: "Paris Hilton",
        age: 5 },
      { name: "Kayne West",
        age: 16 },
      { name: "Bob Ziroll",
        age: 100 }
  ];

    const result = actors.map(function(actor){
        if (actor.age >= 18) {
            console.log(actor.name + " can go to the Matrix")
        } else {
            console.log(actor.name + " is under age!")
        }
    }) 

    console.log(result)
  // ["Angelina Jolie can go to The Matrix",
  // "Eric Jones is under age!!",
  // "Paris Hilton is under age!!",
  // "Kayne West is under age!!",
  // "Bob Ziroll can go to The Matrix"]
*/

// 6) Make an array of the names in h1s, and the ages in h2s

  const stuff = [
      { name: "Angelina Jolie",
        age: 80 },
      { name: "Eric Jones",
        age: 2 },
      { name: "Paris Hilton",
        age: 5 },
      { name: "Kayne West",
        age: 16 },
      { name: "Bob Ziroll",
        age: 100 }
    ]

const result = stuff.map(function(changed){
    
})

  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]
