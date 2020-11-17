import './Header.scss';
import logo from "../../assets/images/header_logo_letter.svg";
import icSearch from "../../assets/images/header_ic_search.svg";
import icMenu from "../../assets/images/header_ic_menu.svg";
import logoPhone from "../../assets/images/header_ic_logo_symbol.png";

function Header(){
    return (
        <>
            <div className="header">
                <img className="header__logo" alt="logo" src={logo}/>
                <img className="header__phone-logo" alt="phoneLogo" src={logoPhone}/>
                <div className="header__search-bar">
                    <form>
                        <input className="header__search-bar input" placeholder="지역 또는 공간유형을 검색해보세요!"/>
                    </form>
                    <div className="header__empty"></div>
                    <img className="header__search-bar-ic_search" src={icSearch}/>
                </div>
                <div className="empty"></div>
                <img className="header__menu" alt="menu" src={icMenu}/>
            </div>
        </>
    );
}

export default Header;