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
    height:150px;
    @media (max-width:1000px) {
        left:0;
        margin-left:20px;
    }

    @media (min-width: 1000px) {
        width:960px;
    }
`

const Title = styled.div`
    font-family: NanumBarunGothic;
    font-size:30px;
    font-weight:bold;
    line-height: 41px;
`


const TopComponent = ({title}) => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Width>
                <Title>{title}</Title>
                <div class = "text">
                    <div class ="gray">합정역 5분거리 테라스와 예쁜 포토존이 있는 카페</div>
                </div>
                <div class = "text">
                <div class ="purple">
                        <p><div class="tag">#연말모임</div> <div class="tag">#세미나</div> &nbsp; <div class="tag">#촬영</div>&nbsp;
                        <div class="tag">#취미모임</div> &nbsp;<div class="tag">#독서모임</div></p>
                        </div>
                    <p></p>
                </div>
                <div>
                
            </div>
            </Width>
            <div class = "purple_stroke"/>
        </Wrapper>
    );

};
export default TopComponent;