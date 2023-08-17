import React from 'react'
import styled  from 'styled-components'
import { InnerLayout } from '../styles/Layout';
import card from '../img/creditcard.svg'

function CardSection() {
  return (
    <CardSectionStyled>
      <InnerLayout>
        <div className="card-container">
            <div className="card-left">
                <h2 className="secondary-heading">
                    THANH TOÁN MỌI NGÂN HÀNG
                </h2>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className="card-right">
                <img src={card} alt=''/>
            </div>
        </div>
      </InnerLayout>
    </CardSectionStyled>
  )
}


const CardSectionStyled = styled.section`
    .card-container{
        display: grid;
        grid-template-columns: repeat(2,1fr);
    }
    .card-right{
        display:flex;
        justify-content:flex-end;
    }
    .card-left{
        padding:1rem 0;
    }
`;

export default CardSection;
