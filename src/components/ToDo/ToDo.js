import { useMemo, useState, useEffect } from "react";
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../api/api.js";

import ToDoFilterAndSearch from "./ToDoFilterAndSearch.js";
import { Container } from "../styledContainer.js";
import { Button } from "../Button/styledButton.js";
import ToDoList from "./ToDoList.js";
import Loader from "../Loader/Loader.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";

export const MIN_LENGTH = 3;
export const MAX_LENGTH = 50;

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [showAdd, setShowAdd] = useState(true);


  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchTodos = async () => {
      try {
        const res = await getTodos();
        setTodos(res.data ?? []);
        if (res.data.length === 0) {
          setShowAdd(false);
        }
      } catch (err) {
        setError("Помилка при отриманні Todo");
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const onClickHandler = async () => {
    const input = inputTitle.trim();

    if (input === "" || input.length < MIN_LENGTH) {
      setError(`Заголовок має бути не менше ${MIN_LENGTH} символів`);

      return;
    }
    if (input.length > MAX_LENGTH) {
      setError(`Заголовок має бути не більше ${MAX_LENGTH} символів`);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const newTodo = {
        title: inputTitle,
        description: inputDescription,
        checked: false,
      };

      const res = await addTodo(newTodo);
      setTodos((prev) => [...prev, res.data]);
      setInputTitle("");
      setInputDescription("");
    } catch (error) {
      setError("Помилка при додаванні Todo 😢");
    } finally {
      setLoading(false);
    }
  };

  const handelKeyDown = (e) => {
    if (e.key === "Enter") onClickHandler();
  };

  const onDeleteToDo = async (id) => {
    setLoading(true);
    setError("");

    try {
      await deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      setError("Помилка при видаленні Todo");
    } finally {
      setLoading(false);
    }
  };

  const onToggleCompleted = async (id) => {
    const todo = todos.find((todo) => todo.id === id);

    if (!todo) return;

    setLoading(true);
    setError("");

    try {
      const res = await updateTodo(id, { ...todo, checked: !todo.checked });
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? res.data : todo))
      );
    } catch (error) {
      setError("Помилка при оновленні статусу Todo");
    } finally {
      setLoading(false);
    }
  };


  const filteredToDos = useMemo(() => {
    const searchWords = search.toLowerCase().trim();

    const filterByStatus = todos.filter((todo) => {
      if (filter === "active") return !todo.checked;
      if (filter === "completed") return todo.checked;
      return true;
    });
    if (!searchWords) return filterByStatus;

    return filterByStatus.filter((todo) =>
      `${todo.title} ${todo.description}`.toLowerCase().includes(searchWords)
    );
  }, [todos, search, filter]);

  return (
    <Container>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && todos.length === 0 && (
        <div>
          <Button type="button" onClick={() => setShowAdd(true)}>
            Додати Todo
          </Button>
        </div>
      )}

      {showAdd && (
        <div>
          <label className="label" htmlFor="new-todo">
            New task -{" "}
          </label>
          <input
            className="input"
            id="new-todo"
            placeholder="Введіть нова завдання"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            onKeyDown={handelKeyDown}
          />

          <label className="label" htmlFor="new-todo-description">
            Task description-{" "}
          </label>
          <input
            className="input"
            id="new-todo-description"
            placeholder="Зробить опис завдання"
            value={inputDescription}
            onChange={(e) => setInputDescription(e.target.value)}
            onKeyDown={handelKeyDown}
          />
          <div className="container">
            <p>Total ToDo's: {todos.length}</p>
            <Button type="button" onClick={onClickHandler}>
              Додати To Do
            </Button>
          </div>
        </div>
      )}

      <ToDoFilterAndSearch
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      {filteredToDos.length === 0 && <p>Уп-с ... а я нічого не знайшов</p>}

      <ToDoList
        todos={filteredToDos}
        onDeleteToDo={onDeleteToDo}
        onToggleCompleted={onToggleCompleted}
      />
    </Container>
  );
};

export default ToDo;
