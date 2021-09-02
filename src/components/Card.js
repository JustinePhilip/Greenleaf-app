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

               <p>{text}</p>

               <button>{button}</button>

               <img src={card} alt=""/>

               <div className="plan-container">
                    <img src={active} alt=""/>
                    <img src={inactive} alt=""/>
               </div>
               

               <div className="list-container">
                         <p className="text-check">
                              <img src={check} alt=""/>
                                   {text1}
                         </p>
                         <p className="text-check">
                              <img src={check} alt=""/>
                                   {text2}
                         </p>
                         <p className="text-check">
                              <img src={check} alt=""/>
                                   {text3}
                         </p>
                         <p className="text-check">
                              <img src={check} alt=""/>
                                   {text4}
                         </p>
                         <p className="text-check">
                              <img src={check} alt=""/>
                                   {text5}
                         </p>
                         <p className="text-check">
                              <img src={checkDisabled} alt=""/>
                                   {text6}
                         </p>
                         <p className="text-check">
                              <img src={checkDisabled} alt=""/>
                                   {text7}
                         </p>
                         <p className="text-check">
                              <img src={checkDisabled} alt=""/>
                                   {text8}
                         </p>
               </div>
        </ CardStyled>
    )
}

const CardStyled = styled.div`
`;

export default Card;
