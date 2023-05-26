import React from 'react'
import './Contact.css'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qbdcyrj', 'template_c4nclpw', form.current, 'YpWnUyUwo0YQ8u_aW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <div className="form">
      <h1>Mande sua mensagem!</h1>
      <div className="port__text">
        <p>Queremos ouvir você! Mande sua mensagem, tire suas dúvidas ou compartilhe seu amor pelos nossos bolos. Estamos aqui para atender você com carinho e dedicação.</p> 
        <p>Aguardamos ansiosos pelo seu contato!</p>
      </div>

      <div className="port__contact">
        <form ref={form} onSubmit={sendEmail} className='form-imput'>
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

          <div className="port__btn">

              <Grid container justifyContent="right">
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#FF7BAC',
                    color: 'white',
                    borderRadius: 10,
                    minWidth: '150px',
                    '&:hover': { backgroundColor: '#EA4E8D' },
                    padding: '10px 40px'}}

                  endIcon={<MarkunreadRoundedIcon />}> 
                  Enviar
                </Button>
              </Grid>
          </div>

      </form>
      </div>
    </div>
  )
}

export default Contact