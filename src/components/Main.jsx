import BGMAIN from '../img/main-img.png'

function Main() {
    return (
        <>
            <section className="main" id='LinkMain'>
                <div className='maxWidth'>

                    <div className='mainContainer'>
                        <div className='main-img'>
                            <img src={BGMAIN} alt="" />
                        </div>

                        <div className='main-content'>
                            <h1>Seus cabelos precisam dos cuidados certos.</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a vel dolor veritatis exercitationem</p>
                            <a href="">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className='lines'>
                <div className='line1'></div>
                <div className='line2'></div>
            </div>

        </>
    )
}

export default Main