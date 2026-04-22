// Arrays WITH prices
const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $35.99', 'Pasta - $18.99', 'Burger - $14.99', 'Salmon - $28.99'];
const dessertMenu = ['Cake - $8.99', 'Ice Cream - $6.99', 'Pudding - $7.99', 'Fruit Salad - $9.99'];

// map() for Breakfast Menu
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) =>
    `<p>Item ${index + 1}: ${item}</p>`
).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// forEach() for Main Course Menu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// for loop for Dessert Menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;