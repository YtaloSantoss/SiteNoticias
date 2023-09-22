import { useState } from 'react';
import './contato.css';
import emailjs from '@emailjs/browser'

function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_um8370n", "template_v73wt2w", templateParams, "pZgcQQHX3WOgjp4Pl")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err) => {
        console.log("ERRO: ", err)
      })
  }

  return (

    <>
      <div className='anuciocontato'>
        <div className='anuciocontato2'>
          <img src="./campanha.png" alt="anuncio" className='imgfone' ></img >
          <p className='textefone'>Anuncie aqui</p>
        </div>
        <div className='anuciocontato2'>
          <img src="./chamada-telefonica.png" alt="fone" className='imgfone'></img>
          <p className='textefone'>(79) 99863-2155</p>
        </div>
      </div>
      <div className='iconscontato1'>
        <div className='iconscontato'>
          <a href="instagram://user?username=seu_propriaaconteceofc" target="_blank" rel="noopener"> <img src="./instagram.png" alt="insta" /></a>
          <a href="https://www.facebook.com/groups/882315565186750" target="_blank" rel="noopener"> <img src="./facebook.png" alt="face" /></a>
          <a href="https://wa.me/5579999999" target="_blank" rel="noopener"> <img src="./whatsapp.png" alt="whats" /></a>
        </div>
      </div>

      <div className="containerc">

        <h1 className="titlec">Formulário de Contato</h1>
        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome ou Empresa"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu Email ou Telefone"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />


          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="buttonc" type="submit" value="Enviar" />
        </form>

      </div>

    </>
  );
}

export default Contato;