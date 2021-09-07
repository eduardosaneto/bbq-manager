import styled from "styled-components";

export default function Details() {
  return (
    <Box>
      <span>
        <p>Descrição</p>
      </span>
      <span>
        <p>Observação</p>
      </span>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #e5c231;

  > span {
    width: 100%;
    height: 50%;
    padding: 3px;
  }

  span > p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #000;
    text-align: left;
  }
`;
