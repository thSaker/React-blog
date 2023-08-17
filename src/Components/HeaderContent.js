import React from 'react';
import styled  from 'styled-components';
import SecondaryButton from './SecondaryButton';
import phone from '../img/phone.svg';
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg';  
import message2 from '../img/message_blue.svg';  



function HeaderContent() {
  return (
    <HeaderContentStyled>
      <div className='left-content'>
        <div className='left-text-container'>
            <h1>NGÂN HÀNG THÔNG MINH</h1>
            <p className='white'>
            Lorem Ipsum Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
            </p>
            <SecondaryButton name={'Đăng ký ngay'}/>
        </div>
      </div>
      <div className='right-content'>
        <img src={phone} alt="" className='phone'/>
        <img src={ring1} className="ring1" alt='' />
        <img src={message1} className="message1" alt='' />
        <img src={message2} className="message2" alt='' />



      </div>
    </HeaderContentStyled>
  )
}

const HeaderContentStyled = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top : 3rem;
    
    .left-content{
        display:flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size:4rem;
            font-weight: 600;
        }
        .white{
            padding : 1.4rem  0;
            line-height: 1.8rem;
        }
    }
    
    .right-content{
        position:relative;
        display:flex;
        justify-content:center;
        .phone{
            width:80%;
        }

        .ring1{
            position:absolute;
            bottom:10%;
            left:auto;
            right:0;
        }
        .message1{
            position:absolute;
            top:0;
            left:auto;
            right:0;
        }
        .message2{
            position:absolute;
            bottom:15% ;
            left:0;
            
        }
    }
`;


export default HeaderContent
