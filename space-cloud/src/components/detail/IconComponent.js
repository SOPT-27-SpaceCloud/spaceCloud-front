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
    width:151px;
    height: 40px;
    border-width: 0 10px 10px 0;
    display:flex;
    border: 0 solid transparent;
    
    @media (min-width: 768px) {
        width:170px;
        border-width: 0 20px 10px 0;
    }
`

const Icon = styled.img`
    width:40px;
`

const Content = styled.div`
    width:118px;
    margin-left:8px;
    height: 40px;
    margin-top:10px;
`

const Text = styled.div`
    font-family:inherit;
    font-size:14px;
    justify-content:center;
`

const DetailFloatingComponent = ({img, text}) => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Icon src = {img}/>
            <Content>
                <Text>{text}</Text>
            </Content>
        </Wrapper>
    );

};
export default DetailFloatingComponent;