import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa"

import "../styles/components/socialNetworks.sass"

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/tarciana-souza-oliveira-72127021a/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/tarciana23" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/tarci_aba/" },
];


const  SocialNetworks = () =>{
    return(
        <section id="social-networks">
            {socialNetworks.map((network) =>
            <a href={network.link} target="_blank" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
            )}
        </section>
    )
}

export default SocialNetworks;