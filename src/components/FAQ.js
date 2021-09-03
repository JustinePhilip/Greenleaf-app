import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';

function FAQ() {
    return (
        <FAQStyled>
            <InnerLayout>
                <h4 className="small-heading">
                    Frequently <span>Asked Questions</span>
                </h4>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Repellendus quod odio magni, sit quaerat dolor ea ipsa corporis nam illo. 
                    Odio rem tempora architecto eligendi corrupti 
                    sapiente facere repellendus quas!
                </p>
            </InnerLayout>
            
        </FAQStyled>
    )
}

const FAQStyled = styled.section``;

export default FAQ;
