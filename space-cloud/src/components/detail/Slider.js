import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import './middle.scss';
import img1 from '../../assets/images/place_img_thumbnail_1.svg';
import img2 from '../../assets/images/place_img_thumbnail_2.svg';
import img3 from '../../assets/images/place_img_thumbnail_3.svg';
import img4 from '../../assets/images/place_img_thumbnail_4.svg';
import img5 from '../../assets/images/place_img_thumbnail_5.svg';

const Container = styled.div`
border-radius: 8px;
width: 80%;
overflow: hidden; 
justify-content: space-between;
align-items: center;
margin:0 auto 
`;
const SliderContainer = styled.div`
  width:100%;
  display: flex; 
  @media (max-width:1000px) {
    left:0;
    margin-left:20px;
}
@media (min-width: 1000px) {
    width:960px;
}
 
`;
const Button = styled.button`
  position:relative;
  border: 1px solid ;
  z-index: 10;
  background: url("../../assets/images/banner_ic_arrow_right.svg");
  background-color: #ffffff;
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
    <Container>
    <Button onClick={prevSlide} > pre</Button>
    <Button onClick={nextSlide} >next</Button>
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
