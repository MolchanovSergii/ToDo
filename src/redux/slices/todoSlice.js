import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/api";

export const fetchToDos = createAsyncThunk(
  "todos/fetchToDos",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getTodos();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (todo, { rejectWithValue }) => {
    try {
      const res = await addTodo(todo);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id, { rejectWithValue }) => {
    try {
      await deleteTodo(id);
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodoAsync",
  async ({ id, checked }, { rejectWithValue }) => {
    try {
      const res = await updateTodo(id, { checked });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoLocal: (state, action) => {
      state.items.push({ ...action.payload, id: nanoid() });
    },
    toggleTodoLocal: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.checked = !todo.checked;
    },
    removeTodoLocal: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToDos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchToDos.fulfilled, (state, action) => {
        state.items = action.payload ?? [];
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchToDos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Ошибка загрузки задач";
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload);
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      });
  },
});

export const { addTodoLocal, toggleTodoLocal, removeTodoLocal } =
  todoSlice.actions;
export default todoSlice.reducer;
