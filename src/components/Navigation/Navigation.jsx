import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../Button/styledButton";
import { NavigationMenu, NavigationLink } from "./NavigationStyled";

export default function Navigation({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogOut = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    navigate("/");
  };

  return (
    <NavigationMenu>
      <NavigationLink to="/">Home</NavigationLink>
      {isAuthenticated && (
        <NavigationLink to="/todo-list">Todo List</NavigationLink>
      )}
      {isAuthenticated && <NavigationLink to="/about">About</NavigationLink>}
      {isAuthenticated && (
        <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
      )}
    </NavigationMenu>
  );
}
