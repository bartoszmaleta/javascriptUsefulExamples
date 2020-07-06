// https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=2s
// 8 Must Know JavaScript Array Methods

// ---------------------------------------------- filter
const items = [
    { name: 'Bike',        price: 100},
    { name: 'TV',        price: 200},
    { name: 'Album',        price: 10},
    { name: 'Book',        price: 5},
    { name: 'Phone',        price: 500},
    { name: 'Computer',        price: 1000},
    { name: 'Keyboard',        price: 25}
]

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})

console.log(filteredItems);

// ---------------------------------------------- map
const itemNames = items.map((item) => {
    return item.name;
})

console.log(itemNames);

// ---------------------------------------------- find
const foundItem = items.find((item) => {
    return item.name === 'Book';
})

console.log(foundItem);

// ---------------------------------------------- forEach
items.forEach((item) => {
    console.log(item.name);
    console.log(item.price);
})

// ----------------------------------------------
