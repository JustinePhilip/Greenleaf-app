import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';
import Card from './Card'
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkDisabled from '../img/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentSectionStyled>

            <InnerLayout>

                    <h3 className="small-heading">
                        An exceptional service 
                        <span>, at the right price</span>
                    </h3>

                    <p>Start with our free plan, and switch to a premium plan as you grow.</p>

                    <div className="card-container">
                        <Card
                            account={'free'}
                            amount={'$0'}
                            text={'Lorem Ipsum text in your editor or CMS of choice'}
                            button={'Get Started'}
                            card={card}
                            active={active}
                            inactive={inactive}
                            check={check}
                            checkDisabled={checkDisabled}
                            text1={'is Provides an elegant and quick way'}
                            text2={'anywhere in my PC it spits out a couple of paragraphs'}
                            text3={'fill your text layers with dummy text'}
                            text4={'If you have a sense of humor and want to'}
                            text5={'This is a shortcut I use a lot in my workflow to boost'}
                            text6={'If you want to clone a line'}
                            text7={'I could not find a duplicate line command per say'}
                            text8={'Insert cursor at end of each line selected'}

                        />

                        <Card 
                            account={'Premium'}
                            amount={'$0'}
                            text={'Lorem Ipsum text in your editor or CMS of choice'}
                            button={'Get Started'}
                            card={card}
                            active={active}
                            inactive={inactive}
                            check={check}
                            checkDisabled={checkDisabled}
                            text1={'is Provides an elegant and quick way'}
                            text2={'anywhere in my PC it spits out a couple of paragraphs'}
                            text3={'fill your text layers with dummy text'}
                            text4={'If you have a sense of humor and want to'}
                            text5={'This is a shortcut I use a lot in my workflow to boost'}
                            text6={'If you want to clone a line'}
                            text7={'I could not find a duplicate line command per say'}
                            text8={'Insert cursor at end of each line selected'}

                        />
                    </div>

                   
                

            </InnerLayout>
            
        </PaymentSectionStyled>
    )
}

const PaymentSectionStyled = styled.section`
.card-container{
    display: flex;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-top: 4rem;
 

   
}


p{
    text-align: center;
}
`;

export default PaymentSection;
