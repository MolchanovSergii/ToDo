import { Container } from "../../components/styledContainer";
import { ReturnToHomePage } from "./NotFoundPageStyled";

export default function NotFoundPage() {
  return (
    <Container>
      <h2>404 — Сторінку не знайдено</h2>
      <ReturnToHomePage to="/">
        Повернутися на головну сторінку
      </ReturnToHomePage>
    </Container>
  );
}
