import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTodos = () => api.get("/todos");
export const getTodoById = (id) => api.get(`/todos/${id}`);
export const addTodo = (newTodo) => api.post("/todos", newTodo);
export const updateTodo = (id, todo) => api.put(`/todos/${id}`, todo);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);

export const loginUser = async ({ username, password }) => {
  try {
    const res = await api.get("/auth", { params: { username, password } });
    if (res.data.length > 0) {
      return res.data[0];
    } else {
      return null;
    }
  } catch (err) {
    throw err;
  }
};
