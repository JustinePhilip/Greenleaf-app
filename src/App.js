import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
// import {OuterLayout} from './styles/Layout';
import {OuterLayout} from './styles/Layout';
import CardSection from './components/CardSection';
import Styled from 'styled-components';


function App(){
    return(
        <div className ="App">
            <Header/>
            <OuterLayout>
                <MainStyled>
                    <CardSection/>
                </MainStyled>
                
            </OuterLayout>

        </div>
    );
}

const MainStyled = Styled.main``;

export default App;