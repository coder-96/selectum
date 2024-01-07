import { faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {

    return (
        <footer className="pt-10 bg-c3">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
              
                <div className="mt-10 py-10 border-t border-gray-700 items-center justify-between sm:flex flex">
                    <p className="text-gray-300">© 2024 J-Tech UI Inc. All rights reserved.</p>
                    <div className="flex items-center gap-x-6 text-gray-400 mt-6 footerClass">
                        <a href="http://wa.me/996550069798">
                            <FontAwesomeIcon icon={faWhatsapp} size="2xl" color="red" />
                        </a>
                        <a href="https://t.me/SELECTUMkg">
                            <FontAwesomeIcon icon={faTelegram} size="2xl" color="red" />
                        </a>
                        <a href="https://www.instagram.com/selectum.kg/">
                            <FontAwesomeIcon icon={faInstagram} size="2xl" color="red" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}