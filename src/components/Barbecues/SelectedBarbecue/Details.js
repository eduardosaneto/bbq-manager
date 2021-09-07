import styled from "styled-components";

export default function Details({ obs, description }) {
  return (
    <Box>
      <span>
        <p>
          <strong>Descrição:</strong> {description}
        </p>
      </span>
      <span>
        <p>
          <strong>Observações adicionais:</strong> {obs}
        </p>
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
