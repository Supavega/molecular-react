import styled from "styled-components";
import LanguageSwitcher from "../../components/languageSwitcher";

const StyledLoginScreen = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1e1e1e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Login() {
  return (
    <StyledLoginScreen>
      <LanguageSwitcher />
    </StyledLoginScreen>
  );
}
