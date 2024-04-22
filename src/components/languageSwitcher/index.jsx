import i18n from "../../i18n.js";
import styled from "styled-components";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const StyledLanguageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1000;
  background-color: #282828;
  color: #fff;
  filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  border-left: 2px solid #b53746;
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  padding: 5px;
  margin: 5px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Arrow = styled.span`
  display: block;
  cursor: pointer;
`;

const LanguagePopup = styled.div`
  width: 80%;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: inherit;
  border-left: 2px solid #b53746;
  display: ${(props) => (props.arrow === "expand_more" ? "none" : "block")};
`;

const StyledLanguageButton = styled.button`
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
  padding: 5px;
  color: #fff;
  font-family: "Roboto Mono", monospace;
  font-weight: 200;
  transition: 0.125s;

  &:hover {
    font-weight: 400;
  }
`;

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [arrow, setArrow] = useState("expand_more");

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <StyledLanguageContainer>
      <TextContainer>
        <p>{t("languages")}</p>
        <Arrow
          className="material-symbols-outlined"
          onClick={() => {
            setArrow(arrow === "expand_more" ? "expand_less" : "expand_more");
          }}
        >
          {arrow}
        </Arrow>
      </TextContainer>
      <LanguagePopup arrow={arrow}>
        <StyledLanguageButton onClick={() => handleChangeLanguage("en")}>
          {t("en")}
        </StyledLanguageButton>
        <StyledLanguageButton onClick={() => handleChangeLanguage("fr")}>
          {t("fr")}
        </StyledLanguageButton>
      </LanguagePopup>
    </StyledLanguageContainer>
  );
};

export default LanguageSelector;
