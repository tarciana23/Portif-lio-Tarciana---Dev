import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from 'react-icons/ai'

import "../styles/components/infoContainer.sass"

const informationContainer = () =>{
    return (
        <section id="info">
            <div className="info-card">
                <AiFillPhone id="phone-icon"/>
                <div>
                    <h3>Telefone</h3>
                    <p>(77)98844-4393</p>
                </div>
            </div>
            <div className="info-card">
                <AiOutlineMail id="email-icon"/>
                <div>
                    <h3>Email</h3>
                    <p>tarcianasoliveira23@gmail.com</p>
                </div>
            </div>
            <div className="info-card">
                <AiFillEnvironment id="pin-icon"/>
                <div>
                    <h3>Localização</h3>
                    <p>Vitória da Conquista - Bahia</p>
                </div>
            </div>
        </section>
    )
}

export default informationContainer