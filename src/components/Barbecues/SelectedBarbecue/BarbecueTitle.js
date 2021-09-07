import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";

export default function BarbecueTitle({ id, name }) {
  return (
    <Box>
      <h1>{name}</h1>
      <AddIcon id={id}/>
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 35px;
    font-weight: 800;
    line-height: 32px;
    color: #000;
  }
`;

const AddIcon = styled(IoAddCircle)`
  font-size: 35px;
  color: #ffd836;
`;
