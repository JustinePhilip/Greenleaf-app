import React from 'react';
import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';

function Navigation(){

    return(
        <NavigationStyled>

            <div className="logo" className="logo">
                <img src={logo} alt=""></img>
            </div>
            <ul>
              
                <li>
                    <a href="#">Home</a>
                </li>

                <li>
                    <a href="#">Features</a>
                </li>

                <li>
                    <a href="#">Pricing</a>
                </li>
               

                <PrimaryButton name={'Register'}/>
            </ul>

        </NavigationStyled>

    )
}

const NavigationStyled = styled.nav`

      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 10vh;
    
      .logo{
          cursor:pointer;
      }

      ul{
          display: flex;
          justify-content: space-between;
          width:50%;
          
      }

      .logo{
          margin-top:20px;
      }
     
`

export default Navigation;