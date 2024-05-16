import { styled } from "styled-components";
import { Button } from "primereact/button";



export const CenterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 50px;
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

export const FormButton = styled(Button)`
  width: 100%;
  
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;