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

    @media (max-width:1000px) {
        left:0;
        margin-left:20px;
    }

    @media (min-width: 1000px) {
        width:960px;
    }
`

const Title = styled.div`
    font-family:inherit;
    font-size:20px;
    font-weight:bold;
`

const Yellostroke = styled.div`
    width:24px;
    border: 2px solid #FFD014;
    background-color:#FFD014;
    margin-top:16px;
    margin-bottom:16px;
`

const TitleComponent = ({title}) => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Width>
                <Title>{title}</Title>
                <Yellostroke/>
            </Width>
        </Wrapper>
    );

};
export default TitleComponent;