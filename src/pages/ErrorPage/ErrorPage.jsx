import { useNavigate } from "react-router-dom";
import { Container } from "../../components/styledContainer";
import { Button } from "../../components/Button/styledButton";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <h1>Щось пішло не так 😢</h1>
      <p>Ми не змогли завантажити дані з сервера.</p>
      <Button onClick={handleGoHome}>Повернутися на головну</Button>
    </Container>
  );
}
