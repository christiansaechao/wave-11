import React from "react";
import ProblemCard from "../components/ProblemCard";

export const LookUp = () => {
  const users = [
    { id: 101, name: "Taylor" },
    { id: 102, name: "Jordan" },
  ];
  return (
    <ProblemCard
      title="Reduce 08 — Build a lookup object"
      method="reduce"
      question="Use reduce() to convert the array into an object: { [id]: name }."
      dataPreview={users}
    >
    </ProblemCard>
  );
};
