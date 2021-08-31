import React from 'react';
import Styled from 'styled-components';
import arrow from '../img/arrow.svg';


function SecondaryButton({name}){
    return(
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt=""/>
        </SecondaryButtonStyled>
    )
}

const SecondaryButtonStyled = Styled.button`
    background-color: var(--dark-primary);
    color: white;
    font-family:inherit;
    font-size;inherit;
    padding: .6rem 1.8rem;
    border-radius: 15px;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;

    img{
        padding-left:1rem;
    }

`;

export default SecondaryButton;