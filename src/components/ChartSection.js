import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layout';

function ChartSection(){

    return(

        <ChartSectionStyled>
           <InnerLayout>
                <div className="chart-left">
                    <div className="stats">

                    </div>

                </div>
                <div className="chart-right"></div>
           </InnerLayout>

        </ChartSectionStyled>
    )
}

const ChartSectionStyled = styled.section`

`;

export default ChartSection;