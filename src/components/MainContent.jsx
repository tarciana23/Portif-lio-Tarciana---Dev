import AboutContainer from './AboutContainer'
import Projetos from './Projetos'
import Tecnologias from './Tecnologias'
import '../styles/components/maincontent.sass'

const MainContent = ()=>{
    return(
        <main id="main-content">
            <AboutContainer/>
            <Tecnologias/>
            <Projetos/>
        </main>
    )
}

export default MainContent