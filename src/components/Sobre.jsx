import BGSOBRE from '../img/sobre-img.png'
import HAIR from '../img/hair.png'
import SALON from '../img/salon.png'
import SHAMPOO from '../img/shampoo.png'
import TOILETRIES from '../img/toiletries.png'

function Sobre() {
    return (
        <>
            <section className="sobre" id='LinkSobre'>
                <div className='maxWidth'>
                    <div className='sobreContainer'>

                        <div className="wrapper-sobre-content">
                            
                            <div className='sobreText'>
                                <h4>Sobre a</h4>
                                <h1>Boho ateliê</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum inventore accusamus officia facere ipsa blanditiis sit sed! Ab, nam!</p>
                            </div>

                            <div className='wrapper-sobre-mini'>

                                <div className='sobre-mini-single'>
                                    <img src={HAIR} alt="" />
                                    <h5>Seu serviço aqui</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, praesentium!</p>
                                </div>

                                <div className='sobre-mini-single'>
                                    <img src={SALON} alt="" />
                                    <h5>Seu serviço aqui</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, praesentium!</p>
                                </div>

                                <div className='sobre-mini-single'>
                                    <img src={SHAMPOO} alt="" />
                                    <h5>Seu serviço aqui</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, praesentium!</p>
                                </div>

                                <div className='sobre-mini-single'>
                                    <img src={TOILETRIES} alt="" />
                                    <h5>Seu serviço aqui</h5>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, praesentium!</p>
                                </div>
                            </div>
                        </div>

                        <div className='sobre-img'>
                            <img src={BGSOBRE} alt="" />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Sobre