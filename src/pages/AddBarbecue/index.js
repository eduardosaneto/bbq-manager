import { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

import Input from "../../components/Form/Input";
import { Form } from "../../components/Form";
import Background from "../../components/Barbecues/Background";
import Button from "../../components/Form/Button";
import Title from "../../components/Title";

import UserContext from "../../context/UserContext";
import FoodContext from "../../context/FoodContext";
import DrinkContext from "../../context/DrinkContext";

export default function AddBarbecue() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [foodMoney, setFoodMoney] = useState(null);
  const [drinkMoney, setDrinkMoney] = useState(null);
  const [description, setDescription] = useState("");
  const [observations, setObservations] = useState("");
  const [loading, setLoading] = useState(false);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;
  const userId = localstorage.token.user.id;
  const { user } = useContext(UserContext);
  const { setFood } = useContext(FoodContext);
  const { setDrink } = useContext(DrinkContext);

  const close = { autoClose: 3000 };

  function send(e) {
    e.preventDefault();

    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      name,
      date,
      description,
      observations,
      amountCollected: 0,
      totalParticipants: 0,
      userId,
    };

    const request = axios.post(`${process.env.REACT_APP_API_BASE_URL}/send-barbecue`, body, config);
    request.then(response => {
      setFood(foodMoney);
      setDrink(drinkMoney);
      history.push("/barbecues");
    });
    request.catch(error => {
      toast("Há algum erro no envio do seu churrasco", close);
      setLoading(false);
    });
  }

  return (
    <>
      <Title />
      <Background>
        <Form onSubmit={send}>
          <fieldset disabled={`${loading ? "disabled" : ""}`}>
            <span>
              <h1>Insira os dados do seu churrasco</h1>
            </span>
            <Input
              id="Nome"
              type="text"
              placeholder="Nome do churras"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <Input
              label="Data"
              type="date"
              placeholder="Data do churras"
              onChange={e => setDate(e.target.value)}
              required
            />
            <Input
              label="Comida"
              type="number"
              placeholder="Valor para comida"
              min="0"
              max="9999"
              step="0.01"
              onChange={e => setFoodMoney(e.target.value)}
              required
            />
            <Input
              label="Bebida"
              type="number"
              placeholder="Valor para bebida"
              min="0"
              max="9999"
              step="0.01"
              onChange={e => setDrinkMoney(e.target.value)}
              required
            />
            <Input
              label="Descrição"
              type="text"
              placeholder="Descrição do churras"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <Input
              label="Observação"
              type="text"
              placeholder="Observações"
              value={observations}
              onChange={e => setObservations(e.target.value)}
            />
            <Button type="submit" color="primary" disabled={loading}>
              Enviar
            </Button>
          </fieldset>
        </Form>
      </Background>
    </>
  );
}
