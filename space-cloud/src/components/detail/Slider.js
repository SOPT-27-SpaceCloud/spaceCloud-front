import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import './middle.scss';
import img1 from '../../assets/images/place_img_thumbnail_1.svg';
import img2 from '../../assets/images/place_img_thumbnail_2.svg';
import img3 from '../../assets/images/place_img_thumbnail_3.svg';
import img4 from '../../assets/images/place_img_thumbnail_4.svg';
import img5 from '../../assets/images/place_img_thumbnail_5.svg';
import GridComponent from "./GridComponent";

const Container = styled.div`
position: relative;
border-radius: 4px;
width: 360px;
height: 300px;
overflow: hidden; 
justify-content: space-between;
align-items: center;
margin:0 auto 
`;
const SliderContainer = styled.div`
  width: 99%;
  display: flex; 
  @media (max-width:1000px) {
    left:0;
}
@media (min-width: 768px) {
    display: none;
  }
 
`;
const Button = styled.button`
  position:absolute;
  top: 150px;
	left: 50px;
  border: 1px solid ;
  z-index: 1;
  background-color: transparent !important;
  border: none;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Button2 = styled.button`
  position:absolute;
  top: 150px;
	left: 250px;
  border: 1px solid ;
  z-index: 1;
  background-color: transparent !important;
  border: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const TOTAL_SLIDES = 5;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };
  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);
return (
  <div class = "margin">
  <GridComponent />
    <Container>
      <Button onClick={prevSlide} > <b>	&#60;</b></Button>
      <Button2 onClick={nextSlide} ><b>	&#62;</b></Button2>
      <SliderContainer ref={slideRef}>
        <Slide img={img1} />
        <Slide img={img2} />
        <Slide img={img3} />
        <Slide img={img4} />
        <Slide img={img5} />
      </SliderContainer>
      
    </Container>
    
    </div>
  );
}
