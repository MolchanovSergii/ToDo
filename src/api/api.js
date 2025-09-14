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
