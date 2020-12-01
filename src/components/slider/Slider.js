import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/images/slider/img1.png";
import img2 from "../../assets/images/slider/img2.png";
import leftButton from '../../assets/images/slider/leftButton.png';
import rightButton from '../../assets/images/slider/rightButton.png';
const Container = styled.div`
    position: absolute;
    width: 1920px;
    overflow: hidden;
    `;

    //버튼 조정후 height 450px 로 맞춰주기
const Button = styled.button`
    top: 260px;
    color: #ffd014;
    position: absolute;
    padding: 0.5em 1em;
    border-radius: 20px;
    font-weight: bold;
    border: 2px solid #ffd014;
    background-color: black;
    background-color: rgba( 255, 255, 255, 0.05 );
    `;
const SliderContainer = styled.div`
    width: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
    `;
const TOTAL_SLIDES = 1;
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
                <Container>
                <SliderContainer ref={slideRef}>
                    <Slide img={img1} />
                    <Slide img={img2} />
                </SliderContainer>

                <img src={leftButton} alt="leftButton" style={{position: "absolute", top: '50%', left: '20px'}} onClick={prevSlide}/>
                <img src={rightButton} alt="rightButton" style={{position: "absolute", top: '50%', right: '1020px'}} onClick={nextSlide}/>
                
                <div style = {{ position: 'absolute' , top: '16%', left: '320px', width: '380px', color: 'white'}}>
                        <div style = {{ paddingBottom: "12px", fontSize: '20px'}}>집중 잘되는 스터디 공간 모음</div>
                        <div style = {{paddingBottom: "12px", fontSize: '45px'}}>하루동안 공부할 시간이 필요하다면</div>
                    <Button>
                        <div>바로가기</div>
                    </Button>
                </div>
                
                </Container>
            );
            }