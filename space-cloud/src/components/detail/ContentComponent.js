import React from "react";
import styled from "styled-components";
import TitleComponent from "./TitleComponent";

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
        margin-bottom:110px;
    }

    @media (min-width: 1000px) {
        width:100%auto;
        display:flex;
        justify-content:center;
        margin-bottom:110px;
    }

    @media (max-width:768px){
        margin-bottom:64px;
    }
`

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게
    
    @media (min-width: 768px) and (max-width:1000px) {
        left:0;
    }

    @media (min-width: 1000px) {
        width:960px;
    }
`

const Content = styled.div`
    font-family:inherit;
    font-size:17px;
    font-weight:normal;
    .p{
    white-space : pre-wrap;
    }
    @media (min-width: 768px) and (max-width:1000px) {
        left:0;
        width:350px;
        margin-left:20px;
        margin-right:10px;
    }

    @media (min-width: 1000px) {
        width:460px;
        margin-left:0px;
        margin-right:10px;

    }
    @media (max-width: 768px) {
        margin-left:10px;
        margin-right:10px;
    }
`

const ContentComponent = ({title, content,default1,time,default2,day}) => {

    return(
        <Wrapper>
            <Width>
                <TitleComponent title = {title}></TitleComponent>
                <Content>{content}</Content>
                <Content><p> <b> {default1} &emsp;</b> {time}</p></Content>
                <Content><p> <b> {default2} &emsp;</b><t></t> {day}</p></Content>
            </Width>
        </Wrapper>
        
    );

};
export default ContentComponent;
