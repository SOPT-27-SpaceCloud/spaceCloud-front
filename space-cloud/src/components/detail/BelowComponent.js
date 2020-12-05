import React from "react";
import styled from "styled-components";

//전체를 wrapper로 감싸면 좋을텐데 이미 작업을 시작해서 일단 이것만 감쌌어요!
const Wrapper = styled.div`
    @font-face {
        font-family: "space-cloud";
        src: url("../../assets/font/NanumBarunGothicBold.ttf") format("truetype");
        src: url("../../assets/font/NanumBarunGothic.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }

    @media (min-width: 768px) and (max-width:1000px) {
        justify-content:left;
    }

    @media (min-width: 1000px) {
        width:100%auto;
        display:flex;
        justify-content:center;
    }
`

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게
    height: 600px;
    @media (max-width:1000px) {
        left:0;
        margin-left:20px;
    }

    @media (min-width: 1000px) {
        width:960px;
    }
`




const BelowComponent = ({t8,t7,t6,t5,t4,t3,t2,t1,t0}) => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Width>
                <div class = "text">
                    <div class ="red">이용당일(첫날) 이후에 환불 관련 사항은 호스트에게 직접 문의하셔야 합니다.</div>
                    </div>
                    <div class = "text">
                    결제 후 2시간 이내에는 100% 환불이 가능합니다. (단, 이용시간 전까지만 가능) </div>
                    <div class = "text">
                    <div class ="gray">이용 8일전 &emsp;</div> {t8} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 7일전  &emsp; </div> {t7} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 6일전  &emsp; </div> {t6} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 5일전  &emsp; </div> {t5} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 4일전  &emsp; </div> {t4} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 3일전  &emsp; </div> {t3} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 2일전  &emsp; </div> {t2} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 전날  &emsp; </div> {t1} </div> <div class = "gray_stroke"/>
                    <div class = "text">
                    <div class ="gray">이용 당일  &emsp; </div> {t0} </div> 
            </Width>
        </Wrapper>
    );

};
export default BelowComponent;