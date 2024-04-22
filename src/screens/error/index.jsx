import ErrorText from "../../components/errorText";
import Choukram from "../../components/choukram";
import styled from "styled-components";

const StyledErrorScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #5e1b34;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLogoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;
`;

export default function Error() {
  return (
    <StyledErrorScreen>
      <StyledLogoContainer>
        <Choukram />
      </StyledLogoContainer>
      <ErrorText />
    </StyledErrorScreen>
  );
}
