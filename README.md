# My Restaurant App

A modern restaurant order and tip calculator built with **React**, **TypeScript**, and **Vite**. Users can browse menu categories, add items to their order, adjust quantities, set a tip percentage, and view real-time totals—all in a responsive, animated interface.

## Features

- **Category Browsing**: Explore menu items by category with smooth transitions.
- **Add to Order**: Click any menu item to add it to your order.
- **Quantity Controls**: Increase or decrease item quantities with intuitive buttons.
- **Tip Calculation**: Adjust the tip percentage and see the tip amount update instantly.
- **Order Summary Drawer**: Slide-up panel to review and edit your order.
- **Real-Time Totals**: Subtotal, tip, and grand total update as you make changes.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern UI**: Styled with TailwindCSS and animated with Framer Motion.

## Project Structure

```
.gitignore
eslint.config.js
index.html
package.json
README.md
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
public/
    img/
        appetizers.jpg
        beverages.jpg
        burguers.jpg
        cake.svg
        coffee.svg
        desserts.jpg
        juice.svg
        kids-menu.jpg
        pizza.jpeg
        pizza.svg
        restaurant-logo.png
        steak.jpg
        steak.svg
        tacos.jpg
        tequila.svg
src/
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    components/
        MenuCategories.tsx
        MenuItem.tsx
        OrderContent.tsx
        OrderTotals.tsx
        TipPercentageForm.tsx
    data/
        db.ts
    helpers/
        index.ts
    hooks/
        useOrder.ts
    types/
        index.ts
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/GilpiDv/myrestaurant-app.git
   cd myrestaurant-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

## Technologies Used

- **React** (with TypeScript)
- **Vite**
- **TailwindCSS**
- **Framer Motion**
- **FontAwesome**
- **clsx**
- **ESLint**

## How to Use

1. Start the development server:
   ```sh
   npm run dev
   ```
2. Open your browser at [http://localhost:5173](http://localhost:5173).
3. Select a menu category to view items.
4. Click items to add them to your order.
5. Adjust item quantities and tip percentage as needed.
6. Review your order and totals in the order drawer.
7. Save or reset your order as desired.

## Live Demo

[https://my-new-restaurant-app.netlify.app/](https://my-new-restaurant-app.netlify.app/)