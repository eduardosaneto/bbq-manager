import styled from "styled-components";
import churrasBackground from "../../assets/images/churrasBackground.JPG";
import { AiOutlineMenu } from "react-icons/ai";
import Logout from "./Logout";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Title() {
  const location = useLocation();
  const [showBox, setShowBox] = useState(0);

  function toggleBox() {
    showBox === 0 ? setShowBox(1) : setShowBox(0);
  }

  return (
    <>
      <TitleStyle>
        <span>
          <div>
            <Link to="/barbecues">
              <h1>BBQ Manager</h1>
            </Link>
          </div>
          {location.pathname === "/sign-up" || location.pathname === "/" ? (
            <></>
          ) : (
            <Options onClick={toggleBox} />
          )}
          {showBox === 1 && <Logout />}
        </span>
      </TitleStyle>
    </>
  );
}

const TitleStyle = styled.header`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${churrasBackground});
  background-position: center;

  span {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  div {
    width: 150px;
  }

  h1 {
    font-size: 32px;
    line-height: 38px;
    font-weight: 800;
    text-align: center;
    color: #000;
  }
`;

const Options = styled(AiOutlineMenu)`
  font-size: 35px;
  margin-left: 150px;
  position: absolute;
  top: 45px;
  right: 30px;
  cursor: pointer;
`;
