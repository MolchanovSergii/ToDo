import { NavigationMenu, NavigationLink } from "./NavigationStyled";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/todo-list">Todo List</NavigationLink>
      <NavigationLink to="/about">About</NavigationLink>
    </NavigationMenu>
  );
}
