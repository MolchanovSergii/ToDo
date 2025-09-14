import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  text-align: center;
  padding: 50px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
`;

export const StartLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
