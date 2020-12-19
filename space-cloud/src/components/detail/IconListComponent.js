import React from "react";
import styled from "styled-components";
import IconComponent from '../detail/IconComponent'
import { useState, useEffect } from 'react';
import datailAPI from '../../lib/api/detailAPI'

/*
서버에서 받아오기 때문에 이제 사용 안 함
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
*/

const Wrapper = styled.div`
    margin-bottom:64px;
    height:300px;
    @media (min-width: 768px) {
        width:100%auto;
        display:flex;
        justify-content:center;
        box-sizing: border-box;
        margin-bottom:110px;
    }
`

const Width = styled.div`
    //~1000px까지 960px 너비 고정
    //~768까지 마진 20px 두고 너비 좁혀지게

    @media (max-width:1000px) {
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
function IconListComponent () {

    const [ iconListState, setIconListState ] = useState({
        status: 'idle',
        data: null
    });

    useEffect(() => {
        (async () => {
            try {
                setIconListState({ status: 'pending', data: null });
                const data = await datailAPI.getDetailInfo(2);
                console.log(data.Facilities)
                setIconListState({ status: 'resolved', data: data });
            } catch (e) {
                setIconListState({ status: 'rejected', data: null});
            }
        })();
    }, []);  //나중에 main이랑 연결하면 id값 바뀔 때마다 불러오게 수정

    const IconList = () => (
        <Wrapper>
            <Width>
                <Content>
                    {iconListState.data.Facilities.map(
                        (icon, i) =>
                            <IconComponent key = {"icon-" + i} img={icon.iconImageUrl} text={icon.contents}/>
                        )
                    }
                </Content>
            </Width>
        </Wrapper>
    );

    switch (iconListState.status) {
        case 'pending':
            return <div></div>
        case 'rejected':
            return <h1>정보가 없습니다.</h1>;
        case 'resolved':
            return IconList();
        case 'idle':
        default: 
            return <div></div>
    }
};
/*
                {setIconListState.data.map((icon, i) => <IconComponent key = {i} img={icon.Facilities[i].iconImageUrl} text={icon.Facilities[i].contents}/>)}
*/

export default IconListComponent;