import React from 'react'
import Header from './components/Header'
// import {OuterLayout} from './styles/Layout';
import {OuterLayout} from './styles/Layout';
import Styled from 'styled-components';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import MessagingSection from './components/MessagingSection'
import PaymentSection from './components/PaymentSection';



function App(){
    return(
        <div className ="App">
            <Header/>
            <OuterLayout>
                <MainStyled>
                  <CardSection/>
                  <ChartSection/>
                  <MessagingSection/>
                  <PaymentSection/>
                </MainStyled>
                
            </OuterLayout>

        </div>
    );
}

const MainStyled = Styled.main``;

export default App;