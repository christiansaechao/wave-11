import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const wordCount = words.reduce<Record<string, number>>((acc, word) => {
    acc[word] ||= 0;
    acc[word]++;
    return acc;
  }, {
    "apple": 2
  }); //accumulator starts with empty obj

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      {Object.keys(wordCount).map((wordKey) => (
        <div>
          {wordKey}: {wordCount[wordKey]}
        </div>
      ))}
    </ProblemCard>
  );
};
