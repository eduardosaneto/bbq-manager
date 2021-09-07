import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";

import Input from "../../components/Form/Input";
import { Form } from "../../components/Form";
import Background from "../../components/Barbecues/Background";
import Button from "../../components/Form/Button";
import Title from "../../components/Title";
import { Container } from "../../components/Barbecues/Container";
import BarbecueInfo from "../../components/Barbecues/SelectedBarbecue/BarbecueInfo";
import BarbecueTitle from "../../components/Barbecues/SelectedBarbecue/BarbecueTitle";

export default function AddBarbecue() {
  const history = useHistory();
  const { id } = useParams();
  const [barbecue, setBarbecue] = useState([]);
  const [people, setPeople] = useState([]);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  const close = { autoClose: 3000 };

  function getBarbecue(config) {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/barbecues/${id}`, config);
    request.then(response => {
      setBarbecue(response.data[0]);
    });
    request.catch(() => {
      toast.error("Não foi possível carregar o seu churrasco", close);
    });
  }

  function getBarbecuePeople(config) {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/barbecues/${id}/participants`, config);
    request.then(response => {
      setPeople(response.data);
    });
    request.catch(() => {
      toast.error("Não foi possível carregar os participantes do churrasco", close);
    });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getBarbecue(config);
    getBarbecuePeople(config);
  }, [token]);

  return (
    <>
      <Title />
      <Background>
        <Container>
          <BarbecueTitle id={id} name={barbecue.name} />
          <BarbecueInfo
            id={id}
            userId={barbecue.userId}
            date={barbecue.date}
            amount={barbecue.amountCollected}
            totalPeople={barbecue.totalParticipants}
            obs={barbecue.observations}
            description={barbecue.description}
            people={people}
          />
        </Container>
      </Background>
    </>
  );
}
