import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faTelegram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/selectum-logo.jpg";
import menu from "../images/burger-icon.svg";
import menuClose from "../images/close-icon.svg";
import { useState } from "react";

function Navbar() {
    const [clicked, setClick] = useState(false);

    function handleClick() {
        setClick(!clicked);
    }

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" width={50} height={32} />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="#main">Главная</a>
                </li>
                <li className="nav-item">
                    <a href="#aboutinfo">О нас</a>
                </li>
                <li className="nav-item">
                    <a href="#vacancy">Вакансии</a>
                </li>
                <li className="nav-item">
                    <a href="#service">Услуги</a>
                </li>
            </ul>
            <div className="sm">
                <a href="http://wa.me/996550069798">
                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" color="red" />
                </a>
                <a href="https://t.me/SELECTUMkg">
                    <FontAwesomeIcon icon={faTelegram} size="2xl" color="red" />
                </a>
                <a href="https://www.instagram.com/selectum.kg/">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="2xl"
                        color="red"
                    />
                </a>
                {/* <a className="download-btn" href={cv} download="jalga_cv">Download CV</a> */}
            </div>

            {/* dropdown */}

            <div className="md:hidden menu-div">
                <button className="menu-btn" onClick={handleClick}>
                    {clicked ? (
                        <div className="menu">
                            <img src={menuClose} alt="close svg" />
                        </div>
                    ) : (
                        <div className="menu">
                            <img src={menu} alt="menu svg" />
                        </div>
                    )}
                </button>
            </div>

            {/* <div className={"dropdown" + (clicked ? 'show': 'hide')}> */}
            <div className={`dropdown ${clicked ? "block" : "hidden"}`}>
                <ul className="drop-nav-items">
                    <li className="drop-nav-item">
                        <a href="#main">Главная</a>
                    </li>
                    <li className="drop-nav-item">
                        <a href="#aboutinfo">О нас</a>
                    </li>
                    <li className="drop-nav-item">
                        <a href="#vacancy">Вакансии</a>
                    </li>
                    <li className="drop-nav-item">
                        <a href="#service">Услуги</a>
                    </li>
                </ul>
                <div className="drop-sm">
                    <a href="http://wa.me/996550069798">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            size="2xl"
                            color="red"
                        />
                    </a>
                    <a href="https://t.me/SELECTUMkg">
                        <FontAwesomeIcon
                            icon={faTelegram}
                            size="2xl"
                            color="red"
                        />
                    </a>
                    <a href="https://www.instagram.com/selectum.kg/">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            size="2xl"
                            color="red"
                        />
                    </a>
                    {/* <a className="download-btn" href={cv} download="jalga_cv">Download CV</a> */}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
