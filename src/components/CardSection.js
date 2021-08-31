import React from 'react';
import Styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import card from '../img/creditcard.svg';

function CardSection(){

    return(
     
        <CardSectionStyled>
          <InnerLayout>
              <div className="card-container">
                    <div className="left-card">

                        <h2 className="secondary-heading">One card for all payments</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliquaAnd that’s why a 15th century typesetter might 
                        have scrambled a passage of Cicero;  he wanted people to focus on his fonts, 
                        to imagine their own content on the pages. 
                        He wanted people to see, and to get them to see he had to keep them from reading.
                        </p>

                    </div>

                    <div className="right-card">

                        <img src={card} alt="" className="card"/>

                    </div>
              </div>
               
          </InnerLayout>

        </CardSectionStyled>
    )
   
}

const CardSectionStyled = Styled.section`

.card-container{
    display:grid;
    grid-template-columns:repeat(2, 2fr);

    
.left-card{
    margin-top:50px;
}

.card{
    float:right;
}

}




`;

export default CardSection;