import { Link } from "react-router-dom";
import { BaseButton, Button } from "../Button/styledButton.js";

const ToDoList = ({ todos, onDeleteToDo, onToggleCompleted }) => {
  return (
    <>
      <ul>
        {todos.map(({ id, title, description, checked }) => (
          <li key={id}>
            <div>
              <p className={checked ? "todo-item completed" : "todo-item"}>
                {title}
              </p>
              <p className={checked ? "todo-item completed" : "todo-item"}>
                {description}
              </p>
            </div>
            <Button type="button" onClick={() => onDeleteToDo(id)}>
              Видалити To Do
            </Button>
            <BaseButton as={Link} to={`/todo-list/${id}`}>
              Редагувати
            </BaseButton>
            <label htmlFor={`todo-${id}`}>Виконано?</label>
            <input
              id={`todo-${id}`}
              type="checkbox"
              onChange={() => onToggleCompleted(id)}
              checked={checked}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
