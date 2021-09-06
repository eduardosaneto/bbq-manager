import styled from "styled-components";

export const Form = styled.form`
  width: 310px;
  height: auto;
  margin: 0 auto;
  padding-top: 20px;

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
  }
`;

export const Row = styled.div`
  width: 282px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px auto;
  font-size: 16px;
  font-weight: 700;
`;
