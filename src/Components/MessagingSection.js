import React from 'react'
import { InnerLayout } from '../styles/Layout';
import  styled  from 'styled-components';
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg'
import messaging from '../img/conversation.svg'


function MessagingSection() {
  return (
    <MessageStyle>
        <InnerLayout>
            <div className='message-con'>
                <div className='left-items'>
                  <h2 className='secondary-heading'>
                     Hỗ trợ 5 loại ngôn ngữ khác nhau 
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                     ut labore et dolore magna aliqua. Commodo elit at imperdiet dui accumsan. 
                     Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Elementum
                      facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
                  </p>
                </div>

                <div className='images-con'>
                  <img src={avatar1} alt="" className="image-1"/>
                  <img src={avatar2} alt="" className="image-2"/>
                  <img src={avatar3} alt="" className="image-3"/>
                  <img src={avatar4} alt="" className="image-4"/>
                  <img src={avatar5} alt="" className="image-5"/>  
                  <p>&nbsp; +25</p>
                </div>

                <div className='right-items'>
                  <img src={messaging} alt="" />  
                </div>
            </div>
        </InnerLayout>
    </MessageStyle>
  )
}

const MessageStyle = styled.section`
  .message-con{
    display: grid;
    grid-template-columns:  repeat(2,1fr);
  }

  .left-items{
    padding-right:2rem;
    .images-con{
      display:flex;
      align-items:center;
      .image-2,.image-3,.image-4,.image-5{
        margin-left:-22px;
      }
    }
  }
  .right-items{

  }

`;

export default MessagingSection
