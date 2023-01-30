console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// 1. - Create a global variable named `basket` and set it to an empty array.
let basket = [];

// 2. - Create a function called `addItem`. It should:
// take an input parameter for a string `item`
// add the new item to the global array `basket`. 
// return `true` indicating the item was added.
function addItem(item){
    basket.push(item);
    console.log(basket);
    return true;
}

console.log(addItem('Purple'));
console.log(basket);

// 3. - Create a function called `listItems`. It should:
// loop over the items in the `basket` array
// console.log each individual item on a new line.
let i = 0;
function listItems(){
     for(i=0; i < basket.length; i += 1) {
        console.log(basket[i]);
     }
}

listItems();

function empty (){
    basket = [];
}

empty();
addItem('testAfterEmpty');
listItems();
empty();

addItem('pineapples');
console.log(`Basket is: ${basket}`);
console.log('Adding apples (expect true):', addItem('apples'));
console.log(`Basket is now: ${basket}`);

const maxItems = 5;

/* return `false` if the basket contains *less* than max number of items
  - return `true` otherwise (equal or more than maxItems) */

function isFull () {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

console.log(isFull());


