import { useState } from "react";
import axios from "axios";

import { AddPerson, Beer, Money } from "../../components/Barbecues/SelectedBarbecue/AddPerson";
import { Form } from "../../components/Form";
import Input from "../../components/Form/Input";

export default function AddNewPerson({
  barbecueId,
  shouldAddPerson,
  setShouldAddPerson,
  getBarbecue,
  foodValue,
  drinkValue,
}) {
  const [name, setName] = useState("");
  const [drinks, setDrinks] = useState(false);
  const [amountToPay, setAmountToPay] = useState(foodValue);
  const [payed, setPayed] = useState(false);
  const [loading, setLoading] = useState(false);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  function cancel() {
    setShouldAddPerson(false);
  }

  function addPerson(e) {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      name,
      drinks,
      amountToPay,
      payed,
      barbecueId,
    };

    const request = axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/barbecues/${barbecueId}/add-participants`,
      body,
      config,
    );
    request.then(response => {
      setShouldAddPerson(false);
      setName("");
      setLoading(false);
      getBarbecue(config);
    });
    request.catch(error => {
      alert("Dê um nome para o seu hábito");
      setLoading(false);
    });
  }

  function selectDrink() {
    setDrinks(true);
    setAmountToPay(foodValue + drinkValue);
  }

  return (
    <>
      {shouldAddPerson ? (
        <AddPerson>
          <Form onSubmit={addPerson}>
            <fieldset disabled={`${loading ? "disabled" : ""}`}>
              <Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
              <div>
                <div>
                  <Beer className={`${drinks ? "check" : ""}`} onClick={selectDrink} />
                  <Money className={`${payed ? "check" : ""}`} onClick={() => setPayed(true)} />
                </div>
                <div>
                  <button type="button" onClick={cancel}>
                    Cancelar
                  </button>
                  <button type="submit">Salvar</button>
                </div>
              </div>
            </fieldset>
          </Form>
        </AddPerson>
      ) : (
        <></>
      )}
    </>
  );
}
