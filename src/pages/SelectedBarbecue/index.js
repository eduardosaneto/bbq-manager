import { useContext, useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

import Input from "../../components/Form/Input";
import { Form } from "../../components/Form";
import Background from "../../components/Barbecues/Background";
import Button from "../../components/Form/Button";
import Title from "../../components/Title";
import { Container } from "../../components/Barbecues/Container";
import BarbecueInfo from "../../components/Barbecues/SelectedBarbecue/BarbecueInfo";

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

  const close = { autoClose: 3000 };

  return (
    <>
      <Title />
      <Background>
        <Container>
          <BarbecueInfo />
        </Container>
      </Background>
    </>
  );
}
