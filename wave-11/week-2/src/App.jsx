import { useState, useEffect } from "react";
import "./App.css";
import CharacterCounter from "./components/useState/CharacterCountInput";
import ContactForm from "./components/useState/SimpleForm";
import TodoList from "./components/useState/TodoList";

// const count = 0
// updaterFunction | setCount
// ... | spread operator

// [setCount, setCount]
const initialPerson = {
  firstName: "",
  lastName: "",
  email: "",
  age: null,
};

function App() {
  const [person, setPerson] = useState(initialPerson);
  const [data, setData] = useState();
  const [pokemon, setPokemon] = useState("ditto");

  const UpdatePerson = () => {
    person.firstName = "Bob";
    setPerson({ ...person });

    console.log(person);

    setCount();
  };

  // life cycle methods
  // mounts, unmounts,

  useCallBack(
    () =>
      async function temp() {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
          ).then((res) => res.json());

          if (!response) {
            throw new Error("can't find response");
          }

          console.log(response);
          setData(response);
        } catch (err) {
          throw new Error("There was an error: " + err);
        }
      },
  );

  // use for third party connections
  // dependency array [] - at the start call the function
  // [dependencies] => when the values of the dependcies update, call the function

  useEffect(() => {
    temp();
  }, []);

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
