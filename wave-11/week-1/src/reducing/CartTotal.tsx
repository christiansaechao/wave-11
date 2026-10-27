import ProblemCard from "../extras/ProblemCard";

// cart.reduce((acc, curr) => , default value)

// each cart item on it's own line, price, quantity
// total of the entire cart
// each line item it's own component

export const CartTotal = () => {
  const cart = [
    { id: 1, name: "Book", price: 10, quantity: 2 },
    { id: 2, name: "Pen", price: 3, quantity: 5 },
  ];

  return (
    <ProblemCard
      title="Reduce 09 — Calculate totals"
      method="reduce"
      question="Use reduce() to calculate total cost: sum(price * quantity)."
      dataPreview={cart}
    >
      {cart.map((item) => (
        <div>
          {item.name}: ${item.price} - {item.quantity}
        </div>
      ))}
      {
        <div>
          Total:{" "}
          {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </div>
      }
    </ProblemCard>
  );
};
