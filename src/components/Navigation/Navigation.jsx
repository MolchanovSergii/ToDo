import { useNavigate } from "react-router-dom";
import { LogoutButton } from "../Button/styledButton";
import { NavigationMenu, NavigationLink } from "./NavigationStyled";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.auth.currentUser !== null
  );

  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <NavigationMenu>
      <NavigationLink to="/">Home</NavigationLink>
      {isAuthenticated && (
        <>
          <NavigationLink to="/todo-list">Todo List</NavigationLink>
          <NavigationLink to="/about">About</NavigationLink>
          <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
        </>
      )}
    </NavigationMenu>
  );
}
