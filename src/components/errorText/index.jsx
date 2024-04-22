import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledErrorText = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;

  font-family: "Roboto Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 200;
  font-style: normal;
  font-size: 1.25rem;

  margin-bottom: 20px;

  & #title-container {
    width: 100px;
    aspect-ratio: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    transform: rotate(-90deg);
  }

  & #title {
    width: min-content;
    font-weight: 200;
    line-height: 20px;
  }

  & #paragraph {
    margin-bottom: 1rem;
  }

  & #sub-paragraph {
    color: hsla(0, 0%, 100%, 0.6);
  }

  & #underline {
    text-decoration: underline;
    color: hsla(0, 0%, 100%, 0.6);
    transition: 0.125s;
  }

  & #underline:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;
export default function ErrorText() {
  const { t } = useTranslation();
  return (
    <StyledErrorText>
      <div id="title-container">
        <h1 id="title">404</h1>
      </div>
      <p id="paragraph">{t("error.text1")}</p>
      <p id="sub-paragraph">
        {t("error.text2")}{" "}
        <a href="./" id="underline">
          {t("error.text3")}
        </a>
      </p>
    </StyledErrorText>
  );
}
