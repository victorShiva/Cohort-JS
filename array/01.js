// Array is a variable that store list of multiple data type.
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

//console.log(shopping)
//console.log(shopping[shopping.length - 1]);         // last element



// * finding the index of items
//console.log(shopping.indexOf("hummus"));            // 3
//console.log(shopping.indexOf("Pizza"));             // -1 not in array 


// Adding items   // end of array
const heros = ["salman", "Hiritik"];
heros.push("spiderman", "Ironman");      //[ 'salman', 'Hiritik', 'spiderman', 'Ironman' ]

heros.unshift("Auntman");               //['Auntman', 'salman', 'Hiritik', 'spiderman', 'Ironman' ]




//*** Removing items       // end of array and start of array
const numbers = [2, 5, 78, 95, 32, 56];
numbers.pop();          ///[2, 5, 78, 95, 32]
numbers.shift();        ///[ 5, 78, 95, 32]



// ** Removing specific elements
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];  //delete "Mango" from fruits
let index = fruits.indexOf("Mango");            //3
if (index > -1) {
    fruits.splice(index, 1);
}



// ** Access every items
const birds = ["Parrot", "Falcon", "Owl"];
for (let element of birds) {
    //console.log(element);
}



//** Converting String -> Array
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
data.split();       //[ 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle' ]
data.split("")      // ['M', 'a', 'n', 'c', 'h', 'e', 's', 't','e', 'r', ',', 'L', 'o', 'n', 'd', 'o','n', ',', 'L', 'i', 'v', 'e', 'r', 'p','o', 'o', 'l', ',', 'B', 'i', 'r', 'm','i', 'n', 'g', 'h', 'a', 'm', ',', 'L','e', 'e', 'd', 's', ',', 'C', 'a', 'r','l', 'i', 's', 'l', 'e']
data.split(",")   //['Manchester','London','Liverpool','Birmingham','Leeds','Carlisle']


//** Converting Array -> String
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.join(",")              // Rocket,Flash,Bella,Slugger

