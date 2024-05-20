import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledButtonBox =  styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
`

const StyledButton =  styled.p`
    display: block;
    padding: 8px;
    background-color: #7A64B5;
    width: 200px;
    text-align:center;
    border-radius: 4px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF !important;
    text-transform: uppercase;
    cursor: pointer;
`

export default function RedirectButton(props) {
    const navigate = useNavigate();

    return(
        <StyledButtonBox>
            <StyledButton onClick={() => {navigate(props.path)}}>{props.name}</StyledButton>
        </StyledButtonBox>
    )
}