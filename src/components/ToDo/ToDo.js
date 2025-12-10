import { useMemo, useState, useEffect } from "react";
import { Container } from "../styledContainer.js";
import { Button } from "../Button/styledButton.js";
import ToDoList from "./ToDoList.js";
import ToDoFilterAndSearch from "./ToDoFilterAndSearch.js";
import Loader from "../Loader/Loader.js";
import ErrorMessage from "../ErrorMessage/ErrorMessage.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchToDos,
  addTodoAsync,
  deleteTodoAsync,
  toggleTodoAsync,
} from "../../redux/slices/todoSlice.js";

export const MIN_LENGTH = 3;
export const MAX_LENGTH = 50;

const ToDo = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [showAdd, setShowAdd] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const loading = useSelector((state) => state.todos.loading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchToDos())
      .unwrap()
      .then((data) => {
        if (!data || data.length === 0) setShowAdd(false);
      })
      .catch((err) => {
        if (err.status === 404) navigate("/not-found");
        else navigate("/error-page");
      });
  }, [dispatch, navigate]);

  const onClickHandler = () => {
    const title = inputTitle.trim();

    if (title.length < MIN_LENGTH || title.length > MAX_LENGTH) return;

    dispatch(
      addTodoAsync({ title, description: inputDescription, checked: false })
    );

    setInputTitle("");
    setInputDescription("");
    setShowAdd(true);
  };

  const handelKeyDown = (e) => {
    if (e.key === "Enter") onClickHandler();
  };

  const onDeleteToDo = (id) => {
    dispatch(deleteTodoAsync(id));
  };

  const onToggleCompleted = (id) => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    dispatch(toggleTodoAsync({ id, checked: !todo.checked }));
  };

  const filteredToDos = useMemo(() => {
    const searchWords = search.toLowerCase().trim();

    const filteredByStatus = todos.filter((todo) => {
      if (filter === "active") return !todo.checked;
      if (filter === "completed") return todo.checked;
      return true;
    });

    if (!searchWords) return filteredByStatus;

    return filteredByStatus.filter((todo) =>
      `${todo.title} ${todo.description}`.toLowerCase().includes(searchWords)
    );
  }, [todos, search, filter]);

  return (
    <Container>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && todos.length === 0 && (
        <Button type="button" onClick={() => setShowAdd(true)}>
          Додати Todo
        </Button>
      )}

      {showAdd && (
        <div>
          <label htmlFor="new-todo">New task - </label>
          <input
            id="new-todo"
            placeholder="Введіть нову задачу"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
            onKeyDown={handelKeyDown}
          />

          <label htmlFor="new-todo-description">Task description - </label>
          <input
            id="new-todo-description"
            placeholder="Опис задачі"
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
