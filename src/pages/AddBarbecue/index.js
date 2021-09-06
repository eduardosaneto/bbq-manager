import { useState } from "react";
import axios from "axios";
import Input from "../../components/Form/Input";
import { Form } from "../../components/Form";
import Background from "../../components/Barbecues/Background";
import Button from "../../components/Form/Button";
import Title from "../../components/Title";

export default function AddBarbecue() {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [foodMoney, setFoodMoney] = useState("");
  const [drinkMoney, setDrinkMoney] = useState("");
  const [description, setDescription] = useState(null);
  const [observations, setObservations] = useState(null);
  const [loading, setLoading] = useState(false);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  function send(e) {
    e.preventDefault();

    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const body = {
      name: "Eu",
      date: "23/06",
      description: "é isso",
      observations: "Fé",
      amountCollected: 200,
      totalParticipants: 10,
      userId: 2,
    };
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
            <Input label="Data" type="date" placeholder="Data do churras" onChange={e => setSelectedDate(e)} required />
            <Input
              label="Comida"
              type="number"
              placeholder="Valor para comida"
              value={foodMoney}
              onChange={e => setFoodMoney(e)}
              required
            />
            <Input
              label="Bebida"
              type="number"
              placeholder="Valor para bebida"
              value={drinkMoney}
              onChange={e => setDrinkMoney(e)}
              required
            />
            <Input
              label="Descrição"
              type="text"
              placeholder="Descrição do churras"
              value={description}
              onChange={e => setDescription(e)}
              required
            />
            <Input
              label="Observação"
              type="text"
              placeholder="Observações"
              value={observations}
              onChange={e => setObservations(e)}
              required
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
