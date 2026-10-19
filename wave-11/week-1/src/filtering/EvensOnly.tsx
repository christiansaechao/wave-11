import ProblemCard from "../extras/ProblemCard";

export const EvensOnly = () => {
  const nums = [1, 44, 12, 98, 93, 27, 20, 15, 23];
  return (
    <ProblemCard
      title="Filter 01 — Even numbers only"
      method="filter"
      question="Filter the array to only even numbers, then render them."
      dataPreview={nums}
    ></ProblemCard>
  );
};
