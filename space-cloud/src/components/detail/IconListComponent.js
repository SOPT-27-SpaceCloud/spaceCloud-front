import React from "react";
import styled from "styled-components";
import IconComponent from '../detail/IconComponent'

import icon_beer from '../../assets/images/place_ic_beer.svg';
import icon_bowl from '../../assets/images/place_ic_bowl.svg';
import icon_cloth from '../../assets/images/place_ic_cloth.svg';
import icon_computer from '../../assets/images/place_ic_computer.svg';
import icon_cook from '../../assets/images/place_ic_cook.svg';
import icon_desk from '../../assets/images/place_ic_desk.svg';
import icon_dog from '../../assets/images/place_ic_dog.svg';
import icon_food from '../../assets/images/place_ic_food.svg';
import icon_mirror from '../../assets/images/place_ic_mirror.svg';
import icon_nosmoking from '../../assets/images/place_ic_nosmoking.svg';
import icon_print from '../../assets/images/place_ic_print.svg';
import icon_shower from '../../assets/images/place_ic_shower.svg';
import icon_terrace from '../../assets/images/place_ic_terrace.svg';
import icon_toilet from '../../assets/images/place_ic_toilet.svg';
import icon_wifi from '../../assets/images/place_ic_wifi.svg';

const Wrapper = styled.div`
    @media (min-width: 768px) {
        width:100%auto;
        display:flex;
        justify-content:center;
        box-sizing: border-box;

        border-bottom:110px;
    }
`

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게

    @media (min-width: 768px) and (max-width:1000px) {
        margin-left:20px;
        display:flex;
        position:absolute;
        left:0;
    }

    @media (min-width: 1000px) {
        width:960px;
        display:flex;
        position:absolute;
    }
`

const Content = styled.div`
    position:relative;
    width:386px;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 960px) {
        display:grid;
        width:580px;
        position:relative;
        display: flex;
        flex-wrap: wrap;
    }
`

const IconListComponent = () => {

    //나중에 서버 연결 후 정보 받아오는 것 구현

    return(
        <Wrapper>
            <Width>
                <Content>
                    <IconComponent img={icon_beer} text={"주류반입 가능"}/>
                    <IconComponent img={icon_bowl} text={"바베큐 시설"}/>
                    <IconComponent img={icon_cook} text={"취사시설"}/>
                    <IconComponent img={icon_print} text={"복사/인쇄기"}/>
                    <IconComponent img={icon_cloth} text={"탈의실"}/>
                    <IconComponent img={icon_mirror} text={"전신거울"}/>
                    <IconComponent img={icon_toilet} text={"내부 화장실"}/>
                    <IconComponent img={icon_nosmoking} text={"금연"}/>
                    <IconComponent img={icon_terrace} text={"테라스/루프탑"}/>
                    <IconComponent img={icon_shower} text={"샤워시설"}/>
                    <IconComponent img={icon_desk} text={"의자/테이블"}/>
                    <IconComponent img={icon_dog} text={"반려동물 동반가능"}/>
                    <IconComponent img={icon_food} text={"음식물 반입가능"}/>
                    <IconComponent img={icon_computer} text={"PC/노트북"}/>
                    <IconComponent img={icon_wifi} text={"인터넷/WIFI"}/>
                </Content>
            </Width>
        </Wrapper>
    );

};
export default IconListComponent;