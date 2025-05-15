import type { MenuItem } from "../types"

export const menuItems : MenuItem[] = [
    // Appetizers
    {
      id: 1,
      name: "Nachos Supreme",
      price: 40,
      image: 'nachos.svg',
      category: "Appetizers"
    },
    {
      id: 2,
      name: "Mozzarella Sticks",
      price: 35,
      image: 'mozzarella.svg',
      category: "Appetizers"
    },
    // Burgers
    {
      id: 3,
      name: "Classic Cheeseburger",
      price: 60,
      image: 'burger.svg',
      category: "Burgers"
    },
    {
      id: 4,
      name: "Bacon Burger",
      price: 70,
      image: 'burger.svg',
      category: "Burgers"
    },
    // Tacos
    {
      id: 5,
      name: "Beef Tacos (3)",
      price: 50,
      image: 'taco.svg',
      category: "Tacos"
    },
    {
      id: 6,
      name: "Chicken Tacos (3)",
      price: 45,
      image: 'taco.svg',
      category: "Tacos"
    },
    // Beverages
    {
      id: 7,
      name: "Orange Juice",
      price: 15,
      image: 'juice.svg',
      category: "Beverages"
    },
    {
      id: 8,
      name: "Apple Juice",
      price: 15,
      image: 'juice.svg',
      category: "Beverages"
    },
    {
      id: 9,
      name: "American Coffee",
      price: 20,
      image: 'coffee.svg',
      category: "Beverages"
    },
    {
      id: 10,
      name: "Tequila",
      price: 40,
      image: 'tequila.svg',
      category: "Beverages"
    },
    // Kids Menu
    {
      id: 11,
      name: "Kids Mini Burger",
      price: 30,
      image: 'burger.svg',
      category: "Kids Menu"
    },
    {
      id: 12,
      name: "Kids Cheese Pizza",
      price: 35,
      image: 'pizza.svg',
      category: "Kids Menu"
    },
    // Desserts
    {
      id: 13,
      name: "Slice of Lemon Pie",
      price: 30,
      image: 'cake.svg',
      category: "Desserts"
    },
    {
      id: 14,
      name: "Slice of Chocolate Cake",
      price: 30,
      image: 'cake.svg',
      category: "Desserts"
    },
    {
      id: 15,
      name: "Slice of Cheesecake",
      price: 30,
      image: 'cake.svg',
      category: "Desserts"
    },
    // Pizzas
    {
      id: 16,
      name: "Small Wood-Fired Pizza",
      price: 30,
      image: 'pizza.svg',
      category: "Pizzas"
    },
    {
      id: 17,
      name: "Medium Wood-Fired Pizza",
      price: 50,
      image: 'pizza.svg',
      category: "Pizzas"
    },
    {
      id: 18,
      name: "Large Wood-Fired Pizza",
      price: 70,
      image: 'pizza.svg',
      category: "Pizzas"
    },
    // Steaks
    {
      id: 19,
      name: "Rib Eye 800g",
      price: 100,
      image: 'steak.svg',
      category: "Steaks"
    },
    // More Beverages
    {
      id: 20,
      name: "Cappuccino",
      price: 40,
      image: 'coffee.svg',
      category: "Beverages"
    }
]

export const tipOptions = [
  {
    id: 'tip-0',
    value: 0,
    label: '0%'
  },
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  }
]

export const categoriesItems = [
    {
      id: 1,
      name: 'Plates of the Day',
      background: 'white',
      image: 'pizza.svg',
    },
    {
      id: 2,
      name: 'Appetizers',
      background: 'white',
      image: '',
    },
    {
      id: 3,
      name: 'Burgers',
      background: 'white',
      image: '',
    },
    {
      id: 4,
      name: 'Tacos',
      background: 'white',
      image: '',
    },
    {
      id: 5,
      name: 'Beverages',
      background: 'white',
      image: '',
    },
    {
      id: 6,
      name: 'Kids Menu',
      background: 'white',
      image: '',
    },
    {
      id: 7,
      name: 'Desserts',
      background: 'white',
      image: '',
    },
    {
      id: 8,
      name: 'Pizzas',
      background: 'white',
      image: '',
    },
    {
        id: 9,
        name: 'Steaks',
        background: 'white',
        image: '',
    }
]