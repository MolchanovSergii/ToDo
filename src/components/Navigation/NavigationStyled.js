import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationMenu = styled.nav`
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 2px solid #ddd;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 6px;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    color: #0056b3;
    background-color: #e9ecef;
  }

  &.active {
    color: #fff;
    background-color: #007bff;
  }
`;
