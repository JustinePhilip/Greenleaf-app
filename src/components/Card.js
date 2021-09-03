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

               <div className="button-container"> <button>{button}</button></div>

              <div className="img-con"> <img src={card} alt=""/></div>

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

background-color: white;
padding: 2.5rem ;
border-radius: 50px;
box-shadow: 0px 25px 50px rgba(22,25,79,0.05);

h4{
     font-size: 2.0rem;
     color: #16194f;
     text-align: center;
     padding: 1rem 0;

     span{
          font-size: 1.0rem;
     }
}

.button-container{
    text-align:center;
    padding: 1.5rem 0;

    button{
         border: 1px solid #16194f;
         padding: 1rem 1.2rem;
         border-radius: 20px;
         cursor: pointer;
         background: transparent;
         font-size: inherit;
         color: #16194f;

         :hover{
              background-color:#16194f;
              color: white;
              transition: all .5s ease-in-out;
         }
    }
}

.img-con{
     display: flex;
     justify-content: center;
     img{
          width: 70%;
     }
}

.plan-container{
     text-align: center;
     padding: 1.5rem 0;

     img{
          padding: 0 .2rem;
     }
}

.text-check{
     text-align: left;
     display: flex;
     padding: .5rem 0;

     img{
          padding-right: .4rem;
          width: 4%;
     }

     :nth-child(6){
          color: #b7b7b7;
     }

     :nth-child(7){
          color: #b7b7b7;
     }

     :nth-child(8){
          color: #b7b7b7;
     }

}
`;

export default Card;
