import "../styles/components/projetos.sass"
const Projetos = ()=>{
    return(
        <section className="projetos-container">
            <h2>Meus projetos</h2>
            <div className="listaProjetos">
                <li><a href="https://github.com/tarciana23/Flappy-Bird">Flappy Bird</a></li>
                <li><a href="https://formulario-js-chi.vercel.app/">Formulário JS</a></li>
                <li><a href="https://github.com/tarciana23/ProjetoBarbearia">Projeto Barbearia</a></li>
            </div>
           
        </section>
    )
}

export default Projetos