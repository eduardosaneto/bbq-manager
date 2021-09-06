import styled from "styled-components";
import { GiBarbecue } from "react-icons/gi";

export const AddNew = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  background: #ffd836;
  position: relative;
  position: fixed;
  bottom: 30px;
  right: 18px;
  z-index: 5;
  cursor: pointer;
`;

export const BbqIcon = styled(GiBarbecue)`
  font-size: 40px;
  color: #fafafa;
  position: absolute;
  top: 10px;
  right: 10px;
`;
