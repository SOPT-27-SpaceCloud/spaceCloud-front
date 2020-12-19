import React from "react";
import DetailPlaceComponent from './DetailPlaceComponent'
import styled from "styled-components";

//전체를 wrapper로 감싸면 좋을텐데 이미 작업을 시작해서 일단 이것만 감쌌어요!
const Wrapper = styled.div`
    @media (min-width: 768px) {
        width:100%auto;
        display:flex;
        justify-content:center;
    }
`

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게

    @media (min-width: 768px) and (max-width:1000px) {
        margin-right : 20px;
        display:flex;
        position:absolute;
        right:0;
    }

    @media (min-width: 1000px) {
        width:960px;
        display:flex;
        position:absolute;
    }
`

const DetailPlace = styled.div`
    @media (min-width: 768px) {
        position:absolute;
        right:0;
    }
`

const DetailFloatingComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Width>
                <DetailPlace>
                <DetailPlaceComponent/>
                </DetailPlace>
            </Width>
        </Wrapper>
    );

};
export default DetailFloatingComponent;