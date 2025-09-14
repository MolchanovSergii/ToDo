import { AboutWrapper, Title, Section, Photo } from "./AboutStyled";
import authorPhoto from "../../image/author.png";

export default function About() {
  return (
    <AboutWrapper>
      <Title>Про застосунок 📝</Title>

      <Section>
        <p>
          Цей застосунок створений для зручного керування списком завдань (ToDo
          List). Ви можете додавати, редагувати та видаляти завдання.
        </p>
      </Section>

      <Section>
        <h2>Використані технології:</h2>
        <ul>
          <li>⚛️ React</li>
          <li>🛤 React Router</li>
          <li>💅 Styled-components</li>
        </ul>
      </Section>

      <Section>
        <h2>Автор:</h2>
        <p> Serhii aka SharkyDN 😎</p>
        <Photo src={authorPhoto} alt="Author" />
      </Section>
    </AboutWrapper>
  );
}
