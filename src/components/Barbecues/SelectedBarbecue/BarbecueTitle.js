import styled from "styled-components";

export default function BarbecueTitle({ id, name }) {
  return (
    <Box>
      <h1>{name}</h1>
      <button>Adicione uma pessoa</button>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 35px;
    font-weight: 800;
    line-height: 32px;
    color: #000;
  }

  button {
    width: 100%;
    height: 50px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffd836;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
    border-radius: 18px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
  }
`;
