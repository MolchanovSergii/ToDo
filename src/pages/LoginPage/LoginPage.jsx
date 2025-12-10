import { useState } from "react";
import { Button } from "../../components/Button/styledButton";
import { Container } from "../../components/styledContainer";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { loginUser } from "../../api/api";
import { FormWrapper } from "../../components/styledFormWrapper";

import { login } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Будь ласка, введіть ім'я користувача та пароль");
      return;
    }

    try {
      const user = await loginUser({ username, password });

      if (user) {
        dispatch(login({ username, password }));
        navigate("/todo-list");
      } else {
        setError("Невірний логін або пароль");
      }
    } catch (err) {
      setError("Помилка сервера");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Login Page</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="login"> Username: </label>
            <input
              id="login"
              className="input"
              type="text"
              placeholder="Введіть ім'я"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              className="input"
              type="password"
              placeholder="Введіть пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
      </FormWrapper>
    </Container>
  );
}
