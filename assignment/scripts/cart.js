console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


const maxItems = 5;

// 1. - Create a global variable named `basket` and set it to an empty array.
let basket = [];

// 2. - Create a function called `addItem`. It should:
// take an input parameter for a string `item`
// add the new item to the global array `basket`. 
// return `true` indicating the item was added.

// Commented out to not conflict with updated addItem function in stretch goals below
/* function addItem(item){
    basket.push(item);
    console.log(basket);
    return true;
} */

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

// 1. Add a global `const` named `maxItems` and set it to 5.

// SEE TOP OF .JS FILE

//2. Create a function called isFull(). It should:
//   return `false` if the basket contains *less* than max number of items
//   return `true` otherwise (equal or more than maxItems)

function isFull () {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}

console.log(isFull());
addItem('pinecones');
addItem('zapples');
addItem('papples');
addItem('zinepone');
listItems();
console.log(isFull());
empty();

// 3. Update the required `addItem` function to:
// Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
// If an item was added to the array, return `true`
// If there was no room and the item could not be added return `false`

function addItem(item){
    if (isFull() === false) {
    basket.push(item);
    console.log(basket);
    return true;
    } else {
        console.log('The basket is full! Item not added.');
        return false;
    }
}

// 4. Create a function called `removeItem`. It should:
// Take an input parameter for a string `item`
// Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
// Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
// Return the item removed or `null` if the item was not found

addItem('snake');
addItem('my boot');
listItems();

/**
 * 
 * @param {string} itemToRemove Item to remove from basket
 * @returns The removed item if one was removed, 'null' if no item was removed
 */

function removeItem(itemToRemove) {
    let splicedItem = '';
    let i = 0;
    for (i = 0; i < basket.length; i += 1) {
        if(basket.indexOf(itemToRemove) >= 0) {
           splicedItem = splicedItem = basket.splice(basket.indexOf(itemToRemove), 1);
           return splicedItem;
        } else {
            splicedItem = 'null';
            return splicedItem;
        }
    }
}

console.log('No tree in the basket so expecting null:', removeItem('tree'));
console.log('I have removed from my boot in the basket one:', removeItem('snake'));

