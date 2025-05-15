# Restaurant Order & Tip Calculator

This project is a **Restaurant Order & Tip Calculator** application built with **React**, **TypeScript**, and **Vite**. It allows users to browse menu categories, select items, adjust quantities, calculate tips, and view order totals in a modern, responsive UI.

## Features

- **Category Selection**: Browse menu items by category with animated transitions.
- **Interactive Menu**: Add menu items to your order with a single click.
- **Quantity Management**: Increase or decrease the quantity of each item.
- **Tip Calculation**: Adjust the tip percentage and automatically calculate the total.
- **Dynamic Totals**: Displays the subtotal, tip amount, and grand total in real-time.
- **Order Drawer**: Slide-up order summary with editable contents.
- **Modern UI**: Styled with **TailwindCSS** and animated with **Framer Motion**.
- **Responsive Design**: Works on desktop and mobile devices.

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

1. Clone this repository:
   ```bash
   git clone https://github.com/GilpiDv/myrestaurant-app.git
   cd tip-calculator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Previews the built app.
- `npm run lint`: Runs ESLint to analyze the code.

## Technologies Used

- **React**: Library for building user interfaces.
- **TypeScript**: A statically typed superset of JavaScript.
- **Vite**: A fast build tool for modern web projects.
- **TailwindCSS**: A utility-first CSS framework for styling.
- **Framer Motion**: For smooth UI animations.
- **clsx**: Utility for conditionally joining classNames.
- **FontAwesome**: Icons to enhance the user interface.

## How to Use

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

3. **Browse the Menu**: Select a category to view available items.
4. **Add Items**: Click on menu items to add them to your order.
5. **Adjust Quantities**: Use the plus/minus buttons to change item quantities.
6. **Set Tip Percentage**: Choose or enter a tip percentage.
7. **Review Order**: View your order summary, subtotal, tip, and total in real-time.
8. **Save or Reset**: Save your order or reset to start over.

## Contribution

If you'd like to contribute:

1. Fork the repository.
2. Create a branch for your feature or bug fix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature/new-feature
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.