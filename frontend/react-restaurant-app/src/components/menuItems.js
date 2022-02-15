import { v4 as uuidv4 } from 'uuid';
import spicy_taco from './images/spicy_taco.jpeg'
import chicken_taco from './images/chicken_taco.jpeg'
import beef_taco from './images/beef_taco.jpeg'
import shrimp_taco from './images/shrimp_taco.jpeg'
import not_chicken_taco from './images/not_chicken_taco.jpeg'
import not_beef_taco from './images/not_beef_taco.jpeg'
import not_shrimp_taco from './images/not_shrimp_taco.jpeg'
import custom_taco from './images/custom_taco.jpeg'
import cheese_pizza from './images/cheese_pizza.jpeg'
import pep_pizza from './images/pep_pizza.jpeg'
import pep_sau_pizza from './images/pep_sau_pizza.jpeg'
import supreme_pizza from './images/supreme_pizza.jpeg'
import hawaiian_pizza from './images/hawaiian_pizza.jpeg'
import meet_lovers_pizza from './images/meet_lovers_pizza.jpeg'
import one_top_pizza from './images/one_top_pizza.jpeg'
import two_top_pizza from './images/two_top_pizza.jpeg'
import fries from './images/fries.jpeg'
import chips from './images/chips.jpeg'
import cookie from './images/cookie.jpeg'
import mac_cheese from './images/mac_cheese.jpeg'
import fruit_cup from './images/fruit_cup.jpeg'
import garlic_knots from './images/garlic_knots.jpeg'
import nachos from './images/nachos.jpeg'
import brownie from './images/brownie.jpeg'

const MENU = [{
    name: 'Spicy Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: spicy_taco,
},
{
    name: 'Chicken Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: chicken_taco,
},
{
    name: 'Beef Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: beef_taco,
},
{
    name: 'Shimp Taco',
    price: 3,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: shrimp_taco,
},
{
    name: 'Not A Chicken Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: not_chicken_taco,
},
{
    name: 'Not A Beef Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: not_beef_taco,
},
{
    name: 'Not A Shrimp  Taco',
    price: 4,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: not_shrimp_taco,
},
{
    name: 'Custom Taco',
    price: 6,
    id: uuidv4(),
    catagory: 'tacos',
    quantity: 1,
    size: 'M',
    url: custom_taco,
},
{
    name: 'Cheese Pizza',
    price: 6,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: cheese_pizza,
},
{
    name: 'Pepperoni Pizza',
    price: 7,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: pep_pizza,
},
{
    name: 'Pepperoni And Sausage Pizza',
    price: 8,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: pep_sau_pizza,
},
{
    name: 'Supreme Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: supreme_pizza,
},
{
    name: 'Hawaiian Pizza',
    price: 2,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: hawaiian_pizza,
},
{
    name: 'Meat Lovers Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: meet_lovers_pizza,
},
{
    name: 'Custom One-Topping Pizza',
    price: 10,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: one_top_pizza,
},
{
    name: 'Custom Two-Topping Pizza',
    price: 12,
    id: uuidv4(),
    catagory: 'pizza',
    quantity: 1,
    size: 'M',
    url: two_top_pizza,
},
{
    name: 'Fries',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: fries,
},
{
    name: 'Chips',
    price: 2,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: chips,
},
{
    name: 'Cookie',
    price: 4,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: cookie,
},
{
    name: 'Mac & Cheese',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: mac_cheese,
},
{
    name: 'Fruit Cup',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: fruit_cup,
},
{
    name: 'Garlic Bread Knots',
    price: 5,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: garlic_knots,
},
{
    name: 'Nachos',
    price: 5,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: nachos,
},
{
    name: 'Brownie',
    price: 3,
    id: uuidv4(),
    catagory: 'sides',
    quantity: 1,
    size: 'M',
    url: brownie,
},
];

export default MENU;