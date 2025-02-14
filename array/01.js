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


/********* sort() 
 * sorts the elements of an aray and return the reference to the same array,now sorted.
 * 
*/
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();         //[ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 21, 100000, 1111];
array1.sort();          // [ 1, 100000, 1111, 21, 30, 4 ]

array1.sort((a, b) => a - b)      //[ 1, 4, 21, 30, 1111, 100000 ]



/***
*concat()
*useed to merge two or more arrays.
*does not change existing arrays , but instead returns new array.
*/

const array2 = ["a", "b", "c"];
const array3 = ["d", "e", "f"];
const array4 = ["g", "h"];

const array5 = array2.concat(array3, array4);               //[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
