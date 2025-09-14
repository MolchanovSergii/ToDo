import styled from "styled-components";

const ErrorWrapper = styled.div`
  background-color: #ffe6e6;
  color: #d00;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 10px 0;
  font-size: 14px;
  text-align: center;
`;

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <ErrorWrapper>{message}</ErrorWrapper>;
};

export default ErrorMessage;
