import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import creditcard from '../img/creditcard.svg';

function CardSection(){

    return(
        <CardSectionStyled>
            <InnerLayout>
                <div className="card-container">

                    <div className="left-card">
                        <h2 className="secondary-heading">One card for all payments</h2>
                        <p>
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
                        nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                        reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                        </p>
                    </div>
                    <div className="right-card">
                        <img src={creditcard} alt="" className="card"/>
                    </div>

                    </div>

            </InnerLayout>
        </CardSectionStyled>
    )
}

const CardSectionStyled = styled.section`

.card-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);

    .right-card{

        display: flex;
        justify-content: flex-end;
    }

    .left-card{
     margin-top: 45px;

     p{
         margin-top: 20px;
     }
    }
}

`;

export default CardSection;


