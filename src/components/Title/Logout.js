import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Logout() {
  function deleteLocalStorage() {
    localStorage.removeItem("user");
  }

  return (
    <Box>
      <Link to="/" onClick={deleteLocalStorage}>
        <h2>Logout</h2>
      </Link>
    </Box>
  );
}

const Box = styled.div`
  width: 85px;
  height: 50px;
  padding: 17px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0px 0px 0px 20px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  background: #ffd836;
  position: absolute;
  top: 70px;
  right: 0;
  z-index: 100;

  h1,
  h2,
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: #000;
  }
`;
