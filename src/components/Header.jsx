import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Mail, Phone, } from 'lucide-react';
import { Link } from 'react-scroll';


function Header() {

    // function isSocialBarVisible() {
    //     let socialBar = document.querySelector(".header-social");
    //     let socialBarRect = socialBar.getBoundingClientRect();
    //     let windowHeight = window.innerHeight || document.documentElement.clientHeight;

    //     return socialBarRect.top >= 0 && socialBarRect.bottom <= windowHeight;
    // }

    // function adjustNavPosition() {
    //     let nav = document.querySelector("header");

    //     if (isSocialBarVisible()) {
    //         nav.style.top = "33px";  //45px
    //     } else {

    //         nav.style.top = "0";
    //     }
    // }

    // window.addEventListener("scroll", adjustNavPosition);

    // window.addEventListener("resize", adjustNavPosition);

    return (
        <>
            <section className="header-social">
                <div className='maxWidth'>

                    <div className='wrapper_headerSocial'>

                        <div className="wrapper-social">
                                <p><FontAwesomeIcon icon={faEnvelope} size="xl" />contato@hotmail.com</p>
                                <p><FontAwesomeIcon icon={faPhone} color='white' size="lg" />(00)1234-1234</p>
                        </div>

                        <div className="social-redes">
                            <p>Siga-nos:</p>
                            
                            <div className='fontaw'><a href=""><FontAwesomeIcon icon={faInstagram} color='white' size="xl" /></a></div>
                          <a href=""><FontAwesomeIcon icon={faWhatsapp} color='white' size="xl"/></a>
                        </div>

                    </div>  

                </div>
            </section>

            {/* NAV-BAR */}
            <header className='header-nav'>
                <div className='maxWidth'>

                    <div className='nav-menu'>

                        <div className='logo-tipo'>
                            <p>BOHO ATELIÊ</p>
                        </div>

                        <nav className='menu-desktop'>
                            <ul>
                                <Link to='LinkMain' smooth={true} spy={true} offset={-60} duration={500}>
                                    <li><span href="">Home</span></li>
                                </Link>
                                <Link to='LinkSobre' smooth={true} spy={true} offset={-90} duration={500}>
                                    <li><span href="">Sobre nós</span></li>
                                </Link>
                                <Link to='LinkServ' smooth={true} spy={true} offset={-100} duration={500}>
                                    <li><span href="">Serviços</span></li>
                                </Link>
                                <Link to='LinkProf' smooth={true} spy={true} offset={-120} duration={500}>
                                    <li><span href="">Profissionais</span></li>
                                </Link>
                                <Link to='LinkForm' smooth={true} spy={true} offset={-200} duration={500}>
                                    <li><span href="">Contato</span></li>
                                </Link>
                            </ul>
                        </nav>

                    </div>
                </div>
            </header>
            {/* NAV-BAR */}

        </>
    )
}

export default Header