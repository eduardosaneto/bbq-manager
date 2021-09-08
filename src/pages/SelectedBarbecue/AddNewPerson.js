import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AddPerson, Beer, Money } from "../../components/Barbecues/SelectedBarbecue/AddPerson";
import { Form } from "../../components/Form";
import Input from "../../components/Form/Input";
import AmountToPayContext from "../../context/AmountToPayContext";

export default function AddNewPerson({ barbecueId, shouldAddPerson, setShouldAddPerson, foodValue, drinkValue }) {
  const { amountToPay, setAmountToPay } = useContext(AmountToPayContext);
  const [name, setName] = useState("");
  const [drinks, setDrinks] = useState(false);
  const [payed, setPayed] = useState(false);
  const [loading, setLoading] = useState(false);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  const close = { autoClose: 3000 };

  function cancel() {
    setShouldAddPerson(false);
  }

  function addPerson(e) {
    e.preventDefault();

    setLoading(true);

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
      toast.success("Uhull, partiu churras!", close);
      setShouldAddPerson(false);
      setName("");
      setLoading(false);
      window.location.reload();
    });
    request.catch(error => {
      toast.error("Houve algum erro", close);
      setLoading(false);
    });
  }

  function selectDrink() {
    if (!drinks) {
      setDrinks(true);
      setAmountToPay(foodValue + drinkValue);
    } else {
      setDrinks(false);
      setAmountToPay(foodValue);
    }
  }

  return (
    <>
      {shouldAddPerson ? (
        <AddPerson>
          <Form onSubmit={addPerson}>
            <fieldset disabled={`${loading ? "disabled" : ""}`}>
              <Input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} required />
              <div>
                <div>
                  <Beer className={`${drinks ? "selected" : ""}`} onClick={selectDrink} />
                  <Money
                    className={`${payed ? "selected" : ""}`}
                    onClick={() => (!payed ? setPayed(true) : setPayed(false))}
                  />
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
