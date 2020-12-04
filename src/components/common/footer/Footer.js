import './Footer.scss';
import footerLogo from '../../../assets/images/footer/footer_ic_logo.svg';
import logoSymbol from '../../../assets/images/footer/header_ic_logo_symbol.svg';
import arrowUp from '../../../assets/images/footer/footer_ic_arrow_up.svg';
import arrowDown from '../../../assets/images/footer/footer_ic_arrow_down.svg';
import desktopLine from '../../../assets/images/footer/line_desktop.svg';
import tabletLine from '../../../assets/images/footer/line_tablet.svg';

function Footer() {
    return (
        <>
            <div className = "footer">
                <div className = "footer_top">
                    <img className = "footer_top_logo" alt ="logo" src={footerLogo}/>
                    <div className="empty"></div>
                    <div className = "footer_top_list">블로그 | 이용약관 | 개인정보처리방침 | 운영정책  | 고객문의</div>
                    <img className="footer_top_line" alt="line" src={desktopLine}/>
                    <img className="footer_top_lineTablet" alt="line" src={tabletLine}/>
                    <div className = "footer_top_text1">상호명: 주식회사 앤스페이스 | 대표: 정수현 | 사업자등록번호: 230-81-03117 | 통신판매업신고번호: 2-18-서울강남 | 사업자등록정보</div>
                    <div className = "footer_top_text2">영업소재지: 서울특별시 강남구 삼성로 414 | 이메일: office@spacecloud.kr | 대표전화: 1599-4312(평일 오후 2시 ~ 오후 6시)</div>
                    <div className = "footer_top_text3">온라인 1:1문의바로가기(평일 오전 10시 ~ 오후 6시) *공간에 대한 문의사항은 해당 공간 호스트에게 직접 문의해주세요</div>
                    <div className="footer_top_bottom1">스페이스클라우드는 통신판매중개자이며 통신판매의 당사자가 아닙니다.따라서 스페이스클라우드는 공간 거래정보 및 거래에 대해 책임지지 않습니다.</div>
                    <div className="footer_top_bottom2">Copyright NSPLACE Corp. All Rights Reserved.</div>
                    </div>
            </div>
        </>
    )
}

export default Footer;