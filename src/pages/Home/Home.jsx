import { HomeWrapper, Title, Description, StartLink } from "./HomeStyled";

export default function Home() {
  return (
    <HomeWrapper>
      <Title>Ласкаво просимо до вашого ToDo List 🚀</Title>
      <Description>
        Тут ви можете створювати, редагувати та видаляти ваші задачі.
      </Description>
      <StartLink to="/todo-list">Розпочати</StartLink>
    </HomeWrapper>
  );
}
