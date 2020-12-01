import React from "react";
import './middle.scss';
import share from '../../assets/images/detail_place_ic_share.svg'
import heart from '../../assets/images/detail_place_ic_heart.svg'


const DetailMiddleComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <div id = "purple_outline">
            

            <div class = "margin">
                <div class = "tap">
                    <div class = "title">세부공간 선택</div>
                    <div class = "right">
                        <img class="icon" src={share}></img>
                        <img class="icon" src={heart}></img>
                    </div>
                </div>

                <div class = "gray_stroke"/>

                <div id = "place"></div>
                <div class = "semi-title"><input type="radio" class = "radioBtn"></input>미술 공방</div>
                <div class = "place_detail">미술 공방은 대형테이블과 테이블 이젤로 구성되어 있고, 벽에는 팝아트부터 유화까지 다양한 그림들이 전시되어 있습니다. 독서모임, 취미활동 모임과 세미나 회의 등 진행하기 좋은 공간입니다. 통유리로 채광이 좋아 분위기가 매우 쾌적합니다.</div>
                
                <div class = "text">
                    <div class ="gray">예약시간</div><div class = "black">최소 3시간 전부터</div>
                </div>
                <div class = "gray_stroke"/>
                <div class = "text">
                    <div class ="gray">수용인원</div><div class ="black">최소 5명 ~ 최대 15명</div>
                </div>
            </div>

            <div id = "purple_stroke_slim"/>

            <div class = "margin">
                <div class = "tap">
                    <div class = "title">예약선택</div>
                </div>
                <div id = "gray_stroke_middle"/>
                <div class = "option"><input type="radio" class = "radioBtn"></input>시간 단위 예약하기(최소 3시간 전)</div>
                <div class = "option"><input type="radio" class = "radioBtn"></input>패키지로 예약하기</div>
            </div>
            
            <div class = "purple_stroke"/>
        </div>
    );

};
export default DetailMiddleComponent;
