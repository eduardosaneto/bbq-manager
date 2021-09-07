import styled from "styled-components";
import { useHistory } from "react-router";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Box({ barbecues }) {
  const { id, name, date, amountCollected, totalParticipants } = barbecues;

  const history = useHistory();

  return (
    <>
      <BarbecueBox key={barbecues.id} onClick={() => history.push(`/barbecues/${id}`)}>
        <h1>{name}</h1>
        <h2>{date}</h2>
        <div>
          <span>
            <People />
            <p>{totalParticipants}</p>
          </span>
          <span>
            <p>R${amountCollected},00</p>
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
  cursor: pointer;

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

const People = styled(BsFillPeopleFill)`
  font-size: 18px;
  margin-right: 7px;
`;
