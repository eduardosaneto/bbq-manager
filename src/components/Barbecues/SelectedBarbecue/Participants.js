import styled from "styled-components";

export default function Participants({ id, userId, people }) {
  return (
    <>
      {people.map(p => {
        <Box>
          <span>
            <div className={p.payed ? "check" : ""}></div>
            <h2>{p.name}</h2>
          </span>
          <h2>R${p.amounToPay},00</h2>
        </Box>;
      })}
    </>
  );
}

const Box = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border-top: 1px solid #e5c231;

  > span {
    width: 70%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 1px;
    color: #000;
  }

  > span > div {
    width: 20px;
    height: 20px;
    border: 2px solid #e5c231;
    border-radius: 10px;
    margin-right: 10px;
  }
`;
