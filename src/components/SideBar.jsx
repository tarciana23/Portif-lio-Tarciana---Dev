import Avatar from '../img/tarciana.png'
import CurriculoPDF from '../img/Tarciana Souza Oliveira.pdf'

import "../styles/components/sidebar.sass"

import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./informationContainer"

const SideBar = ()=>{
    return(
        <side id="sidebar">
            <img src={Avatar} alt="Tarciana"/>
            <p className="title">Desenvolvedora Front-end</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href={CurriculoPDF} className="btn" download>Download currículo</a>
        </side>
    )
}

export default SideBar