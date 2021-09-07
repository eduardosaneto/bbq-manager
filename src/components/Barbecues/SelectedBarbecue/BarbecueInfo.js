import styled from "styled-components";

import Details from "./Details";
import Participants from "./Participants";

export default function BarbecueInfo({ date, amount, totalPeople, obs, description, people }) {
  return (
    <Container>
      <span>
        <h1>{date}</h1>
        <div>
          <span>
            <p>{totalPeople}</p>
          </span>
          <span>
            <p>R${amount},00</p>
          </span>
        </div>
      </span>
      <Details obs={obs} description={description} />
      {people.map(p => {
        return <Participants key={p.id} name={p.name} amountToPay={p.amountToPay} payed={p.payed} />;
      })}
    </Container>
  );
}

const Container = styled.div`
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

  > span {
    width: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  > span > h1 {
    font-size: 35px;
    font-weight: 800;
    line-height: 32px;
    color: #000;
    margin-bottom: 5px;
    text-align: left;
  }

  > span > h2 {
    font-size: 21px;
    font-weight: 700;
    line-height: 27px;
    color: #000;
    margin-bottom: 10px;
  }

  > span > div {
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  > span > div > span {
    width: 100px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    color: #000;
    margin-right: 5px;
  }
`;
