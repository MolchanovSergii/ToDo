import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import { useSelector } from "react-redux";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const ToDoListPage = lazy(() =>
  import("./pages/ToDoListPage/ToDoListPage.jsx")
);
const About = lazy(() => import("./pages/About/About.jsx"));
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage/NotFoundPage.jsx")
);
const Navigation = lazy(() => import("./components/Navigation/Navigation.jsx"));
const ToDoEditPage = lazy(() =>
  import("./pages/ToDoEditPage/ToDoEditPage.jsx")
);
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage.jsx"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));

function App() {
  const isAuthenticated = useSelector(
    (state) => state.auth.currentUser !== null
  );

  return (
    <Suspense fallback={<Loader />}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/todo-list"
          element={
            <PrivateRoute>
              <ToDoListPage />
            </PrivateRoute>
          }
        />
        <Route
          path="todo-list/:id"
          element={
            <PrivateRoute>
              <ToDoEditPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route
          path="login"
          element={
            isAuthenticated ? (
              <Navigate to="/todo-list" replace />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
export default App;
