import React from "react";
import "./MainPage.scss";
import Card from "../../assets/images/Component1.svg";
function MainPage() {
  return (
    <>
      <div className="image-slider">저는 이미지 슬라이더에요</div>
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

export default MainPage;
