import React from "react";
import DetailFloatingComponent from './DetailFloatingComponent'
import IconListComponent from './IconListComponent'
import ContentComponent from "./ContentComponent";
import Slider from "./Slider";
import TitleComponent from "./TitleComponent";
import TopComponent from "./TopComponent";
import BelowComponent from "./BelowComponent";

const DetailComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <div>
            <Slider/>
            <TopComponent title="드로잉 카페 보이드 블랭킷"/>
            <DetailFloatingComponent/>
            <ContentComponent title="공간소개" content = {<p> 음료와함께 맞춤도안 서비스로 유명한 드로잉 카페입니다. 야외테라스와 채광 좋은 통유리의 실내 독보적인 포토존이 있는 곳으로 합정역에서 5분거리에 위치해 있고 소규모 취미모임 또는 이색모임으로 대관하기에 아주 적합한 장소입니다.<br></br><br></br>* 인스타 : @void_blanket <br></br><br></br>특히 그림그리는 취미모임장소로 적합하지만 다른 모임 목적에 맞게 이용가능하니 문의 주시면 답변해드리겠습니다!</p>}
             default1="영업시간   "time="0-24시" default2="휴무일   "day="없음"/>
            <ContentComponent title="예약 시 주의사항" content = "미리 용도와 인원 시간을 상의해주세요"/>
            <TitleComponent title="편의시설"/><IconListComponent/>
            <TitleComponent title="환불규정안내" />
            < BelowComponent t8="총금액의 100% 환불" t7="환불불가"  t6="환불불가"  t5="환불불가"  t4="환불불가"  t3="환불불가"  t2="환불불가"  t1="환불불가"  t0="환불불가" />
        </div>
        
    );

};
export default DetailComponent;
