import styled from "styled-components";
import SupaLogoLight from "../../assets/SupaLogoLight.svg";
import SupaLogoAspectRatio from "../../assets/SupaLogoAspectRatio";
import RedirectButton from "../../components/redirectButton";

export default function Home() {

  const StyledHomeDiv = styled.div`
    position: relative;
    top: 0;
    left: 0;

    width: 100vw;
    min-height: 100vh;
    padding: 0 20vw;
    box-sizing: border-box;

    background-color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    .supa-logo {
      width: 400px;
      aspect-ratio: ${SupaLogoAspectRatio.SupaLogo};
      background-image: url(${SupaLogoLight});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }

    .redirect-button-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    p, h2 {
      color: #282828;
      text-align: left;
      width: 100%;

      &.close {
        margin-bottom: 0;
      }

      &.grey {
        color: #5A5A5A;
      }

      &.center {
        text-align: center;
      }
    }
  `;

  return (
    <StyledHomeDiv>
      <p className="grey center">Welcome to</p>
      <div className="supa-logo"></div>
      <h2 className="close">Overview:</h2>
      <p>Molecular is a cutting-edge web application designed to streamline the creation and management of markdown files. Powered by the MERN stack (MongoDB, Express.js, React, Node.js) and MARKDOWN, Molecular offers an intuitive and powerful platform for note-taking, documentation, and content creation.</p>
      <h2 className="close">Creators:</h2>
      <p>Molecular is developed by a talented team of students – Matthieu, Thomas, Remy, and Alleydine – as part of a school project. Their combined expertise in web development and passion for creating innovative solutions have driven the development of this unique app.</p>
      
      <div className="redirect-button-box">
        <RedirectButton name="Get Started" path="/register" />
        <RedirectButton name="Already connected" path="/login" />
      </div>
    </StyledHomeDiv>
  );
}
