import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

export default function Participants({ id, barbecueId, name, amountToPay, payed }) {
  const localstorage = JSON.parse(localStorage.user);
  const token = localstorage.token.token;

  const close = { autoClose: 3000 };

  function checkPayment() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (payed === false) {
      const request = axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/participant/${id}/check`,
        { barbecueId },
        config,
      );
      request.then(response => {
        window.location.reload();
      });
      request.catch(error => {
        toast.error("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.", close);
      });
    } else if (payed === true) {
      const request = axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/participant/${id}/uncheck`,
        { barbecueId },
        config,
      );
      request.then(response => {
        window.location.reload();
      });
      request.catch(error => {
        toast.error("Houve uma falha de comunicação com o servidor. Tente novamente em alguns minutos.", close);
      });
    }
  }
  return (
    <Box>
      <span>
        <div className={`${payed ? "check" : ""}`} onClick={checkPayment}></div>
        <h2>{name}</h2>
      </span>
      <h2>R${amountToPay},00</h2>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border-top: 1px solid #e5c231;

  > span {
    width: 70%;
    height: 100%;
    padding: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    margin-top: 1px;
    color: #000;
  }

  > span > div {
    width: 20px;
    height: 20px;
    border: 2px solid #e5c231;
    border-radius: 10px;
    margin-right: 10px;
    cursor: pointer;
  }
`;
