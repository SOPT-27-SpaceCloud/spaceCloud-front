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
    @media (max-width:1000px) {
        margin-left:20px;
    }
`

const ContentComponent = ({title, content}) => {

    return(
        <Wrapper>
            <Width>
                <TitleComponent title = {title}></TitleComponent>
                <Content>{content}</Content>
            </Width>
        </Wrapper>
        
    );

};
export default ContentComponent;
