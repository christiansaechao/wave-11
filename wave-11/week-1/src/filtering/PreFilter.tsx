import React from "react";
import ProblemCard from "../extras/ProblemCard";

// == loose comparison, doesn't check type, === strict comparison, checks data type

export const PreFilter = () => {
  const products = [
    { id: 1, name: "Notebook", inStock: true },
    { id: 2, name: "Pen", inStock: false },
    { id: 3, name: "Backpack", inStock: true },
  ];

  return (
    <ProblemCard
      title="Filter 10 — Pre-filtered rendering"
      method="filter"
      question="Filter to in-stock products first, then map into a reusable component."
      dataPreview={products}
    >
      {products
        .filter((product) => product.inStock)
        .map((product) => {
          return <div>{product.name}</div>;
        })}
    </ProblemCard>
  );
};
