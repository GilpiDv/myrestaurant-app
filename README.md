# Tip Calculator

This project is a **Tip Calculator** application built with **React**, **TypeScript**, and **Vite**. It allows users to select menu items, adjust quantities, calculate tips, and view order totals.

## Features

- **Interactive Menu**: Users can add menu items to their order.
- **Quantity Management**: Increase or decrease the quantity of each item.
- **Tip Calculation**: Adjust the tip percentage and automatically calculate the total.
- **Dynamic Totals**: Displays the subtotal, tip amount, and grand total in real-time.
- **Modern UI**: Styled with **TailwindCSS**.

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
        (cake.svg, coffee.svg, juice.svg, pizza.svg, steak.svg, tequila.svg)
src/
    App.tsx
    index.css
    main.tsx
    vite-env.d.ts
    components/
        (MenuItem.tsx, OrderContent.tsx, OrderTotals.tsx, TipPercentageForm.tsx)
    data/
        (db.ts)
    helpers/
        (index.ts)
    hooks/
        (useOrder.ts)
    types/
        (index.ts)
```

## Installation

1. Clone this repository:
   ```bash
   git clone <REPOSITORY_URL>
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
- **FontAwesome**: Icons to enhance the user interface.

## How to Use

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

3. Interact with the menu, adjust quantities, select a tip percentage, and save your order.

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