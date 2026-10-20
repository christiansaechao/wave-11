import type { User } from "../types/user";

export const Card = (props: User) => {
  return (
    <div className="border-2 border-orange-400">
      <h1 className ="bg-yellow-600 fonts-sans">{props.name}</h1>
      <div className ="text-left my-1">Age: {props.age}</div>
      <div className ="text-left my-1">Email: {props.email}</div>
      <div className ="text-left my-1">Phone#: {props.phoneNumber}</div>
      <div className ="text-left my-1">Occupation: {props.occupation}</div>
    </div>
  );
};

export default Card;