import React from "react";
import { useEffect, useState } from 'react';
import listAPI from '../../lib/listAPI'
import DetailMiddleComponent from './DetailMiddleComponent'
import DetailTopComponent from './DetailTopComponent'
import Slider from "./Slider";
const DetailComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <div>
            <Slider/>
            <DetailTopComponent/>
            <DetailMiddleComponent/>
        </div>
    );

};
export default DetailComponent;
