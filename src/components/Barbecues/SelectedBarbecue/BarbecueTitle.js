import { useState } from "react";
import styled from "styled-components";

import AddNewPerson from "../../../pages/SelectedBarbecue/AddNewPerson";

export default function BarbecueTitle({ barbecueId, name, foodValue, drinkValue }) {
  const [shouldAddPerson, setShouldAddPerson] = useState(false);

  function addPerson() {
    setShouldAddPerson(true);
  }

  return (
    <Box>
      <h1>{name}</h1>
      <button onClick={addPerson}>Adicione uma pessoa</button>
      <AddNewPerson
        barbecueId={barbecueId}
        shouldAddPerson={shouldAddPerson}
        setShouldAddPerson={setShouldAddPerson}
        foodValue={foodValue}
        drinkValue={drinkValue}
      />
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
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
