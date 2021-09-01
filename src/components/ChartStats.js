import React from 'react'
import styled from 'styled-components';


// we passed a props inside the functions
function ChartStats({name, amount}) {
    return (
        <ChartStatsStyled>

          {/* here's where the props were implemented.   */}
          <center>
            <p><b>{name}</b></p>
          </center>
            <h4>{amount}</h4>
   
        </ChartStatsStyled>
    )
}


const ChartStatsStyled = styled.div` 

background-color: white;
border-radius: 20px;
border: 1px solid var(--border-color);
width: 12rem;
height: 10rem;
/* padding: 0.3rem 2rem;  */
padding: 0 1rem 0  1rem ;
margin-right: 2rem;
h4{
    font-size: 3rem;
    color: var(--purple-primary);
    padding-top: 25px;
}
p{
    color: var(--purple-primary);;
}

`;
export default ChartStats;
