import React from 'react'
import styled from 'styled-components';

function Card({account,amount,text,button,card,active,inactive,check,checkDisabled,text1,
    text2,text3,text4,text5,text6,text7,text8
}) 
{
    return (
        < CardStyled>
        <h4 className="card-title">
            {account}
        </h4>

        <h4 className="card-title">
            {amount} <span>\m</span>
        </h4>

        <p>
            {text}
        </p>

       <button>
           {button}
       </button>

       <img src={card} alt=""/>

       <img src={active} alt=""/>

       <img src={inactive} alt=""/>

       <img src={check} alt=""/>

       <img src={checkDisabled} alt=""/>

       <p>
            {text1}
       </p>

       <p>
            {text2}
       </p>

       <p>
            {text3}
       </p>

       <p>
            {text4}
       </p>

       <p>
            {text5}
       </p>

       <p>
            {text6}
       </p>

       <p>
            {text7}
       </p>

       <p>
            {text8}
       </p>




        </ CardStyled>
    )
}

const CardStyled = styled.div`
`;

export default Card;
