import styled from "styled-components";
import churrasBackground from "../../assets/images/churrasBackground.JPG";

const TitleStyle = styled.header`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${churrasBackground});
  background-position: center;

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

export default TitleStyle;
