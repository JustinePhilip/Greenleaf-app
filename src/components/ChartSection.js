import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import ChartStats from './ChartStats'
import chart from '../img/chart.svg'
import AnimatedButton from './AnimatedButton'


 function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                    
                <div className="chart-con">

                    <div className="chart-left">
                                <div className="stats">

                                    <div className="stats-money">

                                                {/* rendering the ChartStat */}
                                    <center>
                                        <ChartStats name={'Balance'} amount={'$250'}/>
                                    </center>
                                        <ChartStats name={'Last Transaction'} amount={'$1,000'}/>
                                        {/* end of rendering the ChartStat */}

                                    </div>
                                    <img src={chart} alt="" />
                                </div>
                    </div>

                    <div className="chart-right">
                        <h2 className="secondary-heading">
                            de Finibus Bonorum <br/>
                            et Malorum
                        </h2>

                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis 
                        et quasi architecto beatae vitae dicta sunt explicabo. 
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
                        </p>

                        <AnimatedButton name={'Learn More'}/>
                                
                    </div>

                </div>

            </InnerLayout>
            
        </ChartStyled>
    )
}

const ChartStyled = styled.section`

.chart-con{
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .chart-left{

        .stats{

            img{
                box-shadow: 0px 25px 50px rgba(22,25,79,0.05);
                border-radius: 50px;
                width: 30vw;
            }
            .stats-money{
                display: flex;
                padding-bottom: 2rem;
                /* justify-content: space-between; */
            }
        }
    }

    .chart-right{
        p{
            padding-top: 50px;
        }
    }
}
`;

export default ChartSection;