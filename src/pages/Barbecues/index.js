import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../../components/Barbecues/Container";
import PageTitle from "../../components/Barbecues/PageTitle";
import Box from "../../components/Barbecues/Box";
import { AddBarbecue, BbqIcon } from "../../components/Barbecues/AddBarbecue";
import Title from "../../components/Title";
import Background from "../../components/Barbecues/Background";

export default function Barbecues() {
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token;

  return (
    <>
      <Title />
      <Background>
        <Container>
          <PageTitle><h1>Meus Churrascos</h1></PageTitle>
          <Box />
          <AddBarbecue>
            <BbqIcon/>    
          </AddBarbecue>
        </Container>
      </Background>
    </>
  );
}
