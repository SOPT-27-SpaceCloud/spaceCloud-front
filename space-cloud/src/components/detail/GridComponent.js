import React, { useEffect,useState } from "react";
import './middle.scss';
import styled from "styled-components";
import img1 from '../../assets/images/place_img_thumbnail_1.svg';
import img2 from '../../assets/images/place_img_thumbnail_2.svg';
import img3 from '../../assets/images/place_img_thumbnail_3.svg';
import img4 from '../../assets/images/place_img_thumbnail_4.svg';
import img5 from '../../assets/images/place_img_thumbnail_5.svg';
import datailAPI from '../../lib/api/detailAPI'
const Wrapper = styled.div`
height:100px;
margin-left:20px;
justify-content: space-between;
    @font-face {
        font-family: "space-cloud";
        src: url("../../assets/font/NanumBarunGothicBold.ttf") format("truetype");
        src: url("../../assets/font/NanumBarunGothic.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }

    @media (min-width: 768px) and (max-width:1000px) {
        width:100%auto;
        display:flex;
        justify-content: space-between;
    }

    @media (min-width: 1000px) {
        width:100%auto;
        display:flex;
        justify-content:center;
    }
    @media (max-width: 768px) {
    display: none;
  }
`


const Image = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  padding-right:5px;
  position:relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`
const Image2 = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  padding-right:5px;
  position:relative;
  top:170px;
  left:-330px;
  background-position: center;
  background-size: cover;

`

const Image3 = styled.div`
  width: 360px;
  height: 360px;
  border-radius: 8px;
  padding-right:5px;
  position:relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;


`
function GridComponent(){
  const [gridState, setGridState]=useState({
    status:'idle',
    data:null
  });
  useEffect(()=>{
    (async()=>{
      try{
        setGridState({status:'pending',data:null});
        const data=await datailAPI.getBannerInfo();
        setGridState({status:'resolved',data:data});
      }catch(e){
        setGridState({status:'rejected',data:null});
      }
    })();
  },[]);

  const GridList=()=>(
    <Wrapper>
        <Image3><img src={img1} width= '360' height='360px'  /></Image3>
        <Image><img src={img2} width= '160' height='160px'  /> </Image>
        <Image><img src={img3} width= '160' height='160px'   /> </Image>
        <Image2><img src={img4} width= '160' height='160px' /> </Image2>
        <Image2><img src={img5} width= '160' height='160px'   /> </Image2> 
   </Wrapper>
  );

  switch (gridState.status) {
    case 'pending':
        return <div></div>
    case 'rejected':
        return <h1>정보가 없습니다.</h1>;
    case 'resolved':
        return GridList();
    case 'idle':
    default: 
        return <div></div>
  }
}
export default GridComponent;