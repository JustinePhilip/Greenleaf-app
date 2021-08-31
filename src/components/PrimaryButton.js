import React from 'react';
import styled from 'styled-components';



function PrimaryButton({name}){


    return(

        < ButtonStyled>
            {name}
        </ ButtonStyled>
    )
}

const ButtonStyled = styled.button`
        background-color: var(--accent-pink);
        color: white;
        font-family:inherit;
        font-size;inherit;
        padding: .6rem 1.8rem;
        border-radius: 15px;
        outline:none;
        border:none;
        cursor:pointer;
        

`;

export default PrimaryButton;