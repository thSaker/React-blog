import React from "react";
import { styled } from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ChartStats from "./ChartStats";
import chart from '../img/chart.svg'
import AnimatedButton from "./AnimatedButton";


function ChartSection() {
  return (
    <ChartStyled>
      <InnerLayout>
        <div className="chart-con">
          <div className="chart-left">
            <div className="stats">
              <div className="stats-money">
                <ChartStats name={'Balance'} amount={'250$'}/>
                <ChartStats name={'Last Transaction'} amount={'1000$'}/>
              </div>
              <img src={chart} alt=""/>
            </div>
          </div>
          <div className="chart-right">
              <h2 className="secondary-heading">
                Quản lí tài chính một cách dễ dàng
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <AnimatedButton name={'Xem chi tiết'}/>
          </div>
        </div>
      </InnerLayout>
    </ChartStyled>
  );
}

const ChartStyled = styled.section`
  .chart-con{
    display:grid;
    grid-template-columns:repeat(2,1fr);
    .chart-left{
      width:80%;
      .stats{
        img{
          
          box-shadow:0px 25px 50px rgba(22,25,79, 0.05);
          border-radius:62px;
          width:100%
        }
        .stats-money{
          display:flex;
          padding-bottom:1.3rem;
          justify-content:space-between;
        }
      }
    }
  }
  .chart-right{
    padding-left:2rem;
    p{
      padding:1.3rem 0;
    }
  }
`;

export default ChartSection;
