import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { Container } from "../../components/Barbecues/Container";
import PageTitle from "../../components/Barbecues/PageTitle";
import Box from "../../components/Barbecues/Box";
import { AddNew, BbqIcon } from "../../components/Barbecues/AddNew";
import Title from "../../components/Title";
import Background from "../../components/Barbecues/Background";
import Message from "../../components/Barbecues/Message";

export default function Barbecues() {
  const [barbecues, setBarbecues] = useState([]);
  const [isThereABarbecue, setIsThereABarbecue] = useState(false);
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  const close = { autoClose: 3000 };

  function getBarbecues(config) {
    const request = axios.get(`${process.env.REACT_APP_API_BASE_URL}/barbecues`, config);
    request.then(response => {
      if (response.data.length > 0) setIsThereABarbecue(true);
      setBarbecues(response.data);
    });
    request.catch(error => {
      toast.error("Você não possui churrascos marcados. Marque um agora ou repense suas escolhas na vida", close);
    });
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getBarbecues(config);
  }, [token]);

  return (
    <>
      <Title />
      <Background>
        <Container>
          <PageTitle>
            <h1>Meus Churrascos</h1>
          </PageTitle>
          {isThereABarbecue ? (
            barbecues.map(b => <Box key={b.id} barbecues={b} />)
          ) : (
            <Message>
              <p>Marque agora o seu churrasco e seja feliz!</p>
            </Message>
          )}
          <Link to="/add-barbecue">
            <AddNew>
              <BbqIcon />
            </AddNew>
          </Link>
        </Container>
      </Background>
    </>
  );
}
