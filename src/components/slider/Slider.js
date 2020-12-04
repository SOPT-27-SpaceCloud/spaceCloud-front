import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/images/slider/img1.png";
import img2 from "../../assets/images/slider/img2.png.PNG";
import leftButton from '../../assets/images/slider/leftButton.png';
import rightButton from '../../assets/images/slider/rightButton.png';

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    `;

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
    cursor: pointer;
    `;

const SliderContainer = styled.div`
    width: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
    `;

const TextBox = styled.div`
    position: absolute;
    top: 16%;
    left: 17%;
    width: 380px;
    color: white;
    @media(max-width: 768px) {
        width: 280px;
    }

    `;

const SubText = styled.div`
    padding-bottom: 12px;
    font-size: 20px;
    font-weight: bold;  
    @media(max-width: 768px){
        font-size: 15px;
    }
    }
    `;

const MainText = styled.div`
    top: 400px;
    font-size: 45px;
    @media (max-width: 768px) {
        font-size: 33px;
    }
    @media (max-width: 375px) {
        font-size: 20px;
    }
    `;

const TOTAL_SLIDES = 1;
    export default function Slider() {
        const [currentSlide, setCurrentSlide] = useState(0);
        const slideRef = useRef(null);
        const nextSlide = () => {
            if (currentSlide >= TOTAL_SLIDES) { 
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
            slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; 
            }, [currentSlide]);
            return (
                <Container>
                    <SliderContainer ref={slideRef}>
                        <Slide img={img1} />
                        <Slide img={img2} />
                    </SliderContainer>

                    <img src={leftButton} alt="leftButton" style={{position: "absolute", top: '50%', left: '20px'}} onClick={prevSlide}/>
                    <img src={rightButton} alt="rightButton" style={{position: "absolute", top: '50%', right: '20px'}} onClick={nextSlide}/>
                    
                    <TextBox>
                            <SubText>
                                <div>집중 잘되는 스터디 공간 모음</div>
                            </SubText>
                            <MainText>
                                <div>하루동안 공부할 시간이 필요하다면</div>
                            </MainText>
                        <Button>
                            <div>바로가기</div>
                        </Button>
                    </TextBox>
                
                </Container>
            );
            }