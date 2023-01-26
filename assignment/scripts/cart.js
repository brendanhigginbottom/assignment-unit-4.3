console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    basket.push(item);
    console.log(basket);
    return true;
}

addItem('Purple');
let ifItemAdded = addItem('test');
console.log('Truthy of item added', ifItemAdded);

function listItems() {
     for(let item in basket) {
        console.log(basket[item]);
     }
}

function empty () {
    basket = [];
}

empty();
listItems();
console.log('TEST');
console.log(basket);

addItem('pineapples');
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

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


