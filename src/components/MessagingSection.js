import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import conversation from '../img/conversation.svg'
import circleBg from '../img/circleBg.svg'



function MessagingSection() {
    return (
        <MessagingStyled>

            <InnerLayout>
               

                <div className="message-con">
                    

                    <div className="left-item">

                        <h2 className="secondary-heading"> We offer services in five different languages.
                        </h2>

                        <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. 
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
                        Curabitur non nulla sit amet nisl 
                        tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. 
                        Vestibulum ante ipsum primis in 
                        faucibus orci luctus et ultrices posuere cubilia Curae; 
                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.	
                        </p>
                        <div className="images-con">
                            <img src={avatar1} alt=""className="image1"/>
                            <img src={avatar2} alt=""className="image2"/>
                            <img src={avatar3} alt=""className="image3"/>
                            <img src={avatar4} alt=""className="image4"/>
                            <img src={avatar5} alt=""className="image5"/>
                            <p>&nbsp; &nbsp; +20</p>
                            {/* &nbsp was used to give spacing between the group of images and the "+20" */}
                        </div>

                        <img src={circleBg} alt="" className="circleBg"/>

                    </div>
                    <div className="right-item">
                        <img src={conversation} alt="" className="chat"/>
                        <img src={circleBg} alt="" className="circleBg"/>
                        
                      
                        
                    </div>

                </div>
                
            </InnerLayout>
            
        </MessagingStyled>
    )
}

const MessagingStyled = styled.section`


.message-con{
    display: grid;
    grid-template-columns: repeat(2,1fr);
}


/* beginning of the right item */
.right-item{
    padding-left: 2rem;
    position: relative;

    .circleBg{
        position: absolute;
        bottom: 0;
        right: 0;
        /* using the z-index to place the circles behind the text */
        z-index: -1;
    }

   
}


/* beginning of the left items */
.left-item{
    padding-right: 5rem;
    position: relative;
    

    .circleBg{
        position: absolute;
        top: -10%;
        left: -10%;
        /* using the z-index to place the circles behind the text */
        z-index: -1;
    }

    p{
        padding: 2rem 0;
    }

    .images-con{
        display: flex;
        align-items: center;

        .image2, .image3, .image4, .image5{
            margin-left: -20px;
            margin-top: 10px;
          
    }

    }

    
}

`;

export default MessagingSection;
