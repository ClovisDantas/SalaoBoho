import BGASSINE from '../img/bg-assine.png'

function Assine() {
    return (
        <>
            <section className="assine">
                <div className='maxWidth'>
                    <div className='wrapper-assine'>
                        <h1>Assine Nossa</h1>
                        <h2>Boho ateliê</h2>
                        <p>Cadastre-se para receber gratuitamente nossas promoções diretamente em seu e-mail.</p>
                    </div>

                    <div className='register-btn'>
                        <form action="https://api.sheetmonkey.io/form/oXWWsUV5fNSn3HrDJt8BEu" method="post">
                            <input placeholder='Informe seu e-mail' type="text" name="email" />
                            <button type="submit">Assinar Boho ateliê</button>
                        </form>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Assine
