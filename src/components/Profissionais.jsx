import PERFIL1 from '../img/perfil01.png'


function Profissionais() {
    return (
        <>

            <section className="profissionais" id='LinkProf'>
                <div className="bg-left">
                    <div className='bg-left-text'>
                        <h4>Nossos</h4>
                        <h1>Profissionais</h1>
                        <p>Conheça todos nossos experts que estão a sua disposição para cuidar do seu cabelo.</p>
                    </div>
                </div>

                <div className='wrapper-profissionais'>

                    <div className='profissionais-single'>
                        <img src={PERFIL1} alt="" />
                        <h1>Sarah Nunes</h1>
                        <p>Hair Designer</p>
                    </div>

                </div>
            </section>



        </>
    )
}

export default Profissionais