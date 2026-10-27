import { useState } from "react";
import { Todo } from "./Todo";
import type { TodoType } from "../../types/TodoType";

/*

  todo: string

CRUD:
  - create
  - read
  - update
  - delete

Requirements:
- Input field to add a task
- Button to add task to a list
- Display list of tasks
- Bonus:
  - Delete a task
  - Mark task as completed
  
  Component
  Todo List 
    - <input> to take user inputs
    -  stores all the todo list items
    Submit
      - button
        - onClick - some function attached
    Saving feature
      - useState
      
  IndividualTodo
    HIGHER ORDER FUNCTION:  map
  
    display: todo

    Complete a task: Cross out task when clicked
        - taskElement
        - onClick - strikeout the task name or task instructions 
    
    Delete individual tasks/todo list
      - button
      - onClick - delete id of that individual task
*/

export default function TodoList() {
  const [list, setList] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  function addTodo() {
    if (inputValue === "") return;
    const newTodo: TodoType = {
      id: Date.now(),
      content: inputValue,
      completed: false,
    };
    setList([...list, newTodo]);
  }

  function deleteTodo(id: number) {
    const filtered_list = list.filter((todo) => todo.id !== id);
    setList(filtered_list);
  }

  function updateTodo(id: number) {
    const updatedItem = list.find(item => item.id === id); //find one 
    if (!updatedItem) throw new Error(`Invalid id ${id}`);

    updatedItem.completed = !updatedItem.completed;
    setList([...list]);
  }

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {list.map((todo) => (
          <Todo key={todo.id} todoItem={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </ul>
    </div>
  );
}
