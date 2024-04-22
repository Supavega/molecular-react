import styled from "styled-components";
import Choukram from "../../components/choukram";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e1e1e;
`;
const Title = styled.h1`
  font-size: 3rem;
  color: #b53746;
  margin-bottom: 20px;

  font-family: "Roboto Mono", monospace;
  font-weight: 1000;
`;
const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
  max-width: 800px;
  color: #ffffff;
  font-family: "Roboto Mono", monospace;
  font-weight: 100;
`;
const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #b53746;
  color: #ffffff;
  border: none;
  cursor: pointer;
  drop-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #8a2a35;
  }
`;
const StyledChoukram = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  aspect-ratio: 1;
  padding: 10px;
`;

export default function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <StyledChoukram>
          <Choukram />
        </StyledChoukram>
        <Title>{t("presentation.titre")}</Title>
        <Description>{t("presentation.description")}</Description>
        <Button onClick={() => navigate("/login")}>{t("bouton.texte")}</Button>
      </Container>
    </>
  );
}
