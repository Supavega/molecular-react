import styled from "styled-components";
import SupaLogoLight from "../../assets/SupaLogoLight.svg";
import SupaLogoAspectRatio from "../../assets/SupaLogoAspectRatio";
import RedirectButton from "../../components/redirectButton";
import { Paragraph, ParagraphGrey, SubTitle } from "../../components/shared/text";
import { Logo } from "../../components/shared/logo";

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
    
    .redirect-button-box {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  `;

  return (
    <StyledHomeDiv>
      <ParagraphGrey>Welcome to</ParagraphGrey>
      <Logo aspectRatio={SupaLogoAspectRatio.SupaLogo} width={'400px'} image={SupaLogoLight}/>
      <SubTitle>Overview:</SubTitle>
      <Paragraph>Molecular is a cutting-edge web application designed to streamline the creation and management of markdown files. Powered by the MERN stack (MongoDB, Express.js, React, Node.js) and MARKDOWN, Molecular offers an intuitive and powerful platform for note-taking, documentation, and content creation.</Paragraph>
      <SubTitle>Creators:</SubTitle>
      <Paragraph>Molecular is developed by a talented team of students – Matthieu, Thomas, Remy, and Alleydine – as part of a school project. Their combined expertise in web development and passion for creating innovative solutions have driven the development of this unique app.</Paragraph>
      
      <div className="redirect-button-box">
        <RedirectButton name="Get Started" path="/register" />
        <RedirectButton name="Already connected" path="/login" />
      </div>
    </StyledHomeDiv>
  );
}
