import React from 'react'
import Header from './components/Header'
// import {OuterLayout} from './styles/Layout';
import {OuterLayout} from './styles/Layout';
import Styled from 'styled-components';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';



function App(){
    return(
        <div className ="App">
            <Header/>
            <OuterLayout>
                <MainStyled>
                  <CardSection/>
                  <ChartSection/>
                </MainStyled>
                
            </OuterLayout>

        </div>
    );
}

const MainStyled = Styled.main``;

export default App;