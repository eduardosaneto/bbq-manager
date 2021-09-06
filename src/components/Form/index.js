import styled from "styled-components";

export const Form = styled.form`
  min-width: 320px;
  max-width: 500px;
  padding: 0 15px;
  height: auto;
  margin: 10px auto 0 auto;
  padding: 20px 15px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

  fieldset {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  span {
    width: 200px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
`;
