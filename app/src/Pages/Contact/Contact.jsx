import React from 'react'
import './Contact.css'
import Button from '../../Components/Button/Button'
import { FiSend } from "react-icons/fi";

function Contact() {
  return (
    <div className="form">
      <h1>Mande sua mensagem!</h1>
      <div className="port__text">
        <p>Queremos ouvir você! Mande sua mensagem, tire suas dúvidas ou compartilhe seu amor pelos nossos bolos. Estamos aqui para atender você com carinho e dedicação.</p> 
        <p>Aguardamos ansiosos pelo seu contato!</p>
      </div>
      <div className="port__contact">
        <div className="input-form">
          <label htmlFor="name">Seu nome</label>
          <input type='text' id='name' placeholder='Nome' required='required' />
        </div>
        <div className='input-form'>
          <label htmlFor="email">Seu e-mail</label>
          <input type='text' id='email' placeholder='E-mail' required='required' />
        </div>

        <div className="port__input-message">
            <div className='input-form'>
                <label htmlFor="message">Sua mensagem</label>
                <textarea type='text' id='message' placeholder='Mensagem' rows='10' required='required' />
            </div>
        </div>
      </div>
      <div className="port__btn">
        <Button color="noicon" text="Enviar&nbsp;mensagem" icon={<FiSend />}/>
      </div>
    </div>
  )
}

export default Contact