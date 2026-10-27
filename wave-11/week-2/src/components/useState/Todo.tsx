import { TodoType } from "../../types/TodoType";

/**
 * 
 *   IndividualTodo
    HIGHER ORDER FUNCTION:  map
  
    display: todo

    Complete a task: Cross out task when clicked
        - taskElement
        - onClick - strikeout the task name or task instructions 
    
    Delete individual tasks/todo list
      - button
      - onClick - delete id of that individual task
 */

export const Todo = ({
  todoItem,
  deleteTodo,
  updateTodo,
}: {
  todoItem: TodoType;
  deleteTodo: (index: number) => void;
  updateTodo: (index: number) => void;
}) => {

    
  return (
    <li>
      <p>{todoItem.content} {todoItem.completed && "(completed)"}</p>
      <button onClick={() => updateTodo(todoItem.id)}>complete</button>
      <button
        onClick={() => deleteTodo(todoItem.id)}
        className="hover:bg-red-600"
      >X</button>
    </li>
  );
};
