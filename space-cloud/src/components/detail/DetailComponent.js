import React from "react";
import { useEffect, useState } from 'react';
import listAPI from '../../lib/listAPI'
import DetailFloatingComponent from './DetailFloatingComponent'
import DetailTopComponent from './DetailTopComponent'
import IconListComponent from './IconListComponent'
import ContentComponent from "./ContentComponent";
import Slider from "./Slider";
import TitleComponent from "./TitleComponent";


const DetailComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <div>
            <Slider/>
            <DetailTopComponent/>
            <DetailFloatingComponent/>
            <ContentComponent title="예약 시 주의사항" content = "미리 용도와 인원 시간을 상의해주세요"/>
            <TitleComponent title="편의시설"/><IconListComponent/>
        </div>
        
    );

};
export default DetailComponent;
