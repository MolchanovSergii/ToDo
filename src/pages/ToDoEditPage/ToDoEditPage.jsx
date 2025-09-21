import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTodoById, updateTodo } from "../../api/api";
import TodoEditForm from "../../components/ToDo/TodoEditForm";
import { Container } from "../../components/styledContainer";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function ToDoEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      let ignore = false;

      try {
        setLoading(true);
        setError("");
        if (!ignore) {
          const res = await getTodoById(id);
          setTodo(res.data);
          setLoading(false);
        }
      } catch (err) {
        if (err?.response?.status === 404) {
          navigate("/not-found");
        } else {
          navigate("/error-page");
        }
      } finally {
        if (!ignore) setLoading(false);
      }
      return () => (ignore = true);
    };

    fetchTodo();
  }, [id, navigate]);

  const handleSave = async (updatedTodo) => {
    setLoading(true);
    setError("");
    try {
      const res = await updateTodo(updatedTodo.id, updatedTodo);
      setTodo(res.data);
      navigate("/todo-list");
    } catch (error) {
      setError("Помилка при збереженні Todo");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/todo-list");
  };

  return (
    <Container>
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && todo && (
        <TodoEditForm
          editingTodo={todo}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </Container>
  );
}
