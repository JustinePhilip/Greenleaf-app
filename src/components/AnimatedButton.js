import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import blob1 from '../img/blob_top.svg';
import blob2 from '../img/blob_bottom.svg';

function AnimatedButton({name}) {
    return (
      <center>
            <AnimatedButtonStyled >
                {name}
                <img src={arrow} alt="" className="arrow"/>
                <img src={blob1} alt="" className="blob1"/>
                <img src={blob2} alt=""  className="blob2"/>
            </AnimatedButtonStyled>
      </center>
    )
}

const AnimatedButtonStyled = styled.button`

    background-color: var(--dark-primary);
    color: white;
    font-family:inherit;
    font-size:inherit;
    padding: .9rem 1.8rem;
    border-radius: 15px;
    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-top: 40px;
    position: relative;

    /* this is to hover the animatedbutton */
   &:hover{
            color: var(--accent-pink);

        
        .blob1{
            transform: translateX(-80px);
            transition: all .5s ease-in-out;
           
        }

        .blob2{
            transform: translateX(80px);
            transition: all .5s ease-in-out;
      
        }

        .arrow{
            color: orange;
            padding-left: 2rem;
            transition: all .5s ease-in-out;
        }
    }
      /* this is the end of the hover animatedbutton transform and transition */

    .arrow{
        padding-left: 0.9rem;
    }

 



.blob1, .blob2{
    position: absolute;
    pointer-events: none;
    transition: all .5s ease-in-out;
}

.blob1{
    top: 0;
    right: 0;
}



.blob2{
    bottom: 0;
    left: 0;
}

img{
        padding-left:1rem;
    }
`;

export default AnimatedButton;
