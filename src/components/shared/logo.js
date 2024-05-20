import styled from "styled-components";

export const Logo = styled.div`
    width: ${props => props.width || "400px"};
    aspect-ratio: ${props => props.aspectRatio || "1 / 1"};
    background-image: url(${props => props.image || ""});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;