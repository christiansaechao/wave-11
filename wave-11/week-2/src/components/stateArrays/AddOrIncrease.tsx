import { useState } from "react";

/*
Requirements:
- Snack order: render the menu below, each with an "Add" button
- The order is an array of { snack, quantity }
- Clicking "Add" on a snack NOT in the order adds it with quantity 1
- Clicking "Add" on a snack ALREADY in the order increases its quantity (no duplicate rows)
- Each snack has a `limit` - disable its button once the quantity reaches the limit
- Show the order total in dollars (reduce: price * quantity)
*/

const menu = [
  { id: 1, name: "Popcorn", price: 6, limit: 3 },
  { id: 2, name: "Nachos", price: 8, limit: 2 },
  { id: 3, name: "Soda", price: 4, limit: 5 },
];

export default function AddOrIncrease() {
  return <div>{/* CODE HERE */}</div>;
}
