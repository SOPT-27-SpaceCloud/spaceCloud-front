import React from "react";
import './middle.scss';
import { useState, useEffect } from 'react';
import datailAPI from '../../lib/api/detailAPI'
import share from '../../assets/images/detail_place_ic_share.svg'
import heart from '../../assets/images/detail_place_ic_heart.svg'

    /*
        아직 메인페이지 서버 연결 전이어서
        임의의 id를 직접 넘겨주는 식으로 코드를 작성했습니다.
        await datailAPI.getFloatingInfo(/:postId);
        이곳의 postId에 들어가는 값에 따라 다른 정보가 플로팅 컴포넌트에 출력됩니다.
    */

    /*

    [GET] 세부 공간 선택 조회 - 이미지가 빠짐

    {
        "status": 200,
        "success": true,
        "message": "포스트 디테일 선택 생성 성공",
        "data": {
            "id": 3,
            "title": "미술 공방",
            "contents": "미술 공방은 대형테이블과 테이블 이젤로 구성되어 있습니다.",
            "reservationTime": "최소 3시간 전부터",
            "capacity": "최소 5명 ~ 최대 15명",
            "PostId": "31"
        }
    }

    */

function DetailMiddleComponent () {

   const [ floatingInfoState, setFloatingInfoState ] = useState({
        status: 'idle',
        data: null
   });

    useEffect(() => {
        (async () => {
            try {
                setFloatingInfoState({ status: 'pending', data: null });
                const data = await datailAPI.getFloatingInfo(2);
                setFloatingInfoState({ status: 'resolved', data: data });
            } catch (e) {
                setFloatingInfoState({ status: 'rejected', data: null});
            }
        })();
    }, []);  //나중에 main이랑 연결하면 id값 바뀔 때마다 불러오게 수정

    const FloatingElement = () => (
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
                        <div class = "semi-title"><input type="radio" class = "radioBtn"></input>{floatingInfoState.data.title}</div>
                        <div class = "place_detail">{floatingInfoState.data.contents}</div>
                        
                        <div class = "text">
                            <div class ="gray">예약시간</div><div class = "black">{floatingInfoState.data.reservationTime}</div>
                        </div>
                        <div class = "gray_stroke"/>
                        <div class = "text">
                            <div class ="gray">수용인원</div><div class ="black">{floatingInfoState.data.capacity}</div>
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

                    <div class = "mobile_purple_button">
                        <button class = "purple_btn">전화</button>
                        <button class = "purple_btn">예약 신청하기</button>
                    </div>
                    <div class = "pc_purple_button">
                        <button class = "purple_btn">전화</button>
                        <button class = "purple_btn">예약 신청하기</button>
                    </div>
                </div>
    );

    switch (floatingInfoState.status) {
        case 'pending':
            return <div></div>
        case 'rejected':
            return <h1>정보가 없습니다.</h1>;
        case 'resolved':
            return FloatingElement();
        case 'idle':
        default: 
            return <div></div>
    }

};

export default DetailMiddleComponent;