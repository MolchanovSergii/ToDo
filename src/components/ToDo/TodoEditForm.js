import { useEffect, useState } from "react";
import { Button } from "../Button/styledButton";
import { FormWrapper } from "../styledFormWrapper";

import { MIN_LENGTH, MAX_LENGTH } from "./ToDo";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const TodoEditForm = ({ editingTodo, onCancel, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
      setChecked(editingTodo.checked);
    }
  }, [editingTodo]);

  const handleSave = () => {
    const input = title.trim();

    if (input === "" || input.length < MIN_LENGTH) {
      setError(`Заголовок має бути не менше ${MIN_LENGTH} символів`);

      return;
    }
    if (input.length > MAX_LENGTH) {
      setError(`Заголовок має бути не більше ${MAX_LENGTH} символів`);
      return;
    }

    onSave({ ...editingTodo, title, description, checked });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") onCancel();
  };

  return (
    <FormWrapper onKeyDown={handleKeyDown} tabIndex={0}>
      {error && <ErrorMessage message={error} />}

      <input
        className="input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="input"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button type="button" onClick={handleSave}>
        Зберегти
      </Button>
      <Button type="button" onClick={onCancel}>
        Скасувати
      </Button>
      <label htmlFor="todo-editing-completed">Виконано?</label>
      <input
        id="todo-editing-completed"
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </FormWrapper>
  );
};

export default TodoEditForm;
