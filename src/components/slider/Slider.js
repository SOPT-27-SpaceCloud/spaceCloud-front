import React, { useState, useEffect, useRef } from "react";
import Slide from "./Slide";
import styled from "styled-components";
import img1 from "../../assets/images/slider/img1.png";
import img2 from "../../assets/images/slider/img2.png";

const Container = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border: 1px solid red; 
    `;

    //버튼 조정후 height 450px 로 맞춰주기
const Button = styled.button`
    position: absolute;
    all: unset;
    border: 1px solid coral;
    padding: 0.5em 2em;
    color: coral;
    border-radius: 10px;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: coral;
        color: #fff;
    }
    `;
const SliderContainer = styled.div`
    border: 1px solid blue;
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

                <Button onClick={prevSlide}>Previous Slide</Button>
                <Button onClick={nextSlide}>Next Slide</Button>
                </Container>
            );
            }