import styled from "styled-components";

export default function Box() {
  return (
    <>
      <BarbecueBox>
        <h1>Churras Teste</h1>
        <h2>26/07</h2>
        <div>
          <span>
            <p>15</p>
          </span>
          <span>
            <p>R$180,00</p>
          </span>
        </div>
      </BarbecueBox>
      <BarbecueBox>
        <h1>Churras Teste</h1>
        <h2>26/07</h2>
        <div>
          <span>
            <p>15</p>
          </span>
          <span>
            <p>R$180,00</p>
          </span>
        </div>
      </BarbecueBox>
    </>
  );
}

const BarbecueBox = styled.div`
  width: 100%;
  padding: 14px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 5px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  position: relative;

  h1 {
    font-size: 24px;
    font-weight: 800;
    line-height: 32px;
    color: #000;
    margin-bottom: 5px;
    text-align: left;
  }

  h2 {
    font-size: 21px;
    font-weight: 700;
    line-height: 27px;
    color: #000;
    margin-bottom: 10px;
    text-align: left;
  }

  div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #000;
    margin-right: 5px;
    text-align: left;
  }
`;
