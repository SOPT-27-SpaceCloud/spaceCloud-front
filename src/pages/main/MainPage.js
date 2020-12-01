
import "./MainPage.scss";
import Card from "../../assets/images/Component1.svg";
import React, { useState, useEffect, useRef } from "react";
import Slider from "../../components/slider/Slider";
//import Slider from "./Slider";
//import leftBtn from "../../assets/images/slider/leftButton.png";
//import rightBtn from "../../assets/images/slider/rightButton.png";

function MainPage() {
  return (
    <> 
      <div className="image-slider">
        <Slider/>
      </div>
      {/* main__container 중앙정렬 위한 container */}
      <div className="container">
        <div className="main__container">
          {" "}
          {/* container는 고정 1200px */}
          <div className="main__table">
            <div className="main__table-head">
              <div className="title">어떤 공간을 찾고 있나요?</div>
            </div>
            <div className="main__table-body">
              <table>
                <tbody>
                  <tr>
                    <td>루프탑</td>
                    <td>촬영스튜디오</td>
                    <td>엠티장소</td>
                  </tr>
                  <tr>
                    <td>브라이덜샤워</td>
                    <td>회의실</td>
                    <td>세미나실</td>
                  </tr>
                  <tr>
                    <td>다목적홀</td>
                    <td>공연장</td>
                    <td>코워킹스페이스</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card">
            {/* 그리드 컨테이너 */}
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
            <img src={Card} />
          </div>
        </div>
      </div>
    </>
  );
}
export default MainPage
/*import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Slide from "../../components/slider/Slide";

const Container = styled.div`
    width: 100%;
    height: 450px;
    overflow: hidden; 
    `;
const Button = styled.button`
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
    width: 100%;
    height: 100%;
    display: flex; //이미지들을 가로로 나열합니다.
    `;
*/

  /*const TOTAL_SLIDES = 1;
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
  }, [currentSlide]);*/

  {/*<Container>
  <SliderContainer ref={slideRef}>
      <Slide img={img1} />
      <Slide img={img2} />
  </SliderContainer>
  <Button onClick={prevSlide}>Previous Slide</Button>
  <Button onClick={nextSlide}>Next Slide</Button>
  </Container>
  */}

  {/*<div class="carousel-container">
          <div class="img">
            <img src = {img2} id ="lastClone"/>
            <img src = {img1} />
            <img src = {img2}/>
            <img src = {img1} id="firstClone"/>
          </div>
          <div class = "textBox">
            <p id ="subtext">집중 잘 되는 스터디 공간 모음</p>
            <h1 id = "mainText1">하루동안 공부할 </h1>
            <h1 id = "mainText2">시간이 필요하다면 </h1> 
          </div>
          <div class = "slide-controls">
            <button id = "prev-btn">
              <img src = {prevBtn}></img>
            </button>
            <button id = "next-btn">
              <img srt = {nextBtn}></img>
            </button>
          </div>
        </div> */}