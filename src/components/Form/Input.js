import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  padding: 5px 0px 5px 10px;
  font-size: 18px;
  font-weight: 400;
  color: #000;

  ::placeholder {
    font-style: italic;
    color: #a5a5a5;
  }

  label {
    font-size: 21px;
    font-weight: 700;
    color: #000;
  }
`;

export default Input;
