import React from 'react';
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg';
import message1 from '../img/message_pink.svg';
import message2 from '../img/message_blue.svg';


function HeaderContent(){


    return(
        <HeaderContentStyled>
              <div className="left-content">

                   <div className="left-text-content">

                        <h1>Smart Banking for Freelancing</h1>
                        <p className="white">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <SecondaryButton name={'Register Now'}/>

                   </div>

              </div>
            
            <div className="right-content">
                    <img src={phone} alt="" className="phone"/>
                    <img src={ring1} alt="" className="ring1"/>
                    <img src={message1} alt=""className="message1"/>
                    <img src={message2} alt=""className="message2"/>
            </div>

        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`

    display:grid;
    grid-template-columns:repeat(2, 1fr);
    padding-top:2rem;

    .left-content{
        display:flex;
        align-items:center;
        margin-top:-10rem;

     
    
    h1{
        font-weight:700;
        font-size:3rem;
    }

    .white{
        padding:2rem 0;
        line-height:1.8rem;
        margin-top:-20.5px;
        color: white;
    }
    }

       
    .right-content{
        position:relative;
        display:flex;
        justify-content:center;

        .phone{
            width:80%;
            }
        

        .ring1{
            position:absolute;
            bottom:10%;
            right:0;
            left:auto;
        }

        .message1{
            position:absolute;
            top:0;
            right:0;
            left:auto;
        }

        .message2{
            position:absolute;
            bottom:15%;
            left:0;
        }

       

    }

    
`;

export default HeaderContent;