import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx';
import { Footer } from '../Components/Footer.jsx';
import { FaMobileAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

import './stylesheet/contact.scss'

export const Contact= ()=>{
    const [nome, setNome]= useState('')
    const [email, setEmail]= useState('')
    const [mensagem, setMensagem]= useState('')

    const handlerSubmit= (e)=>{
        e.preventDefault()
        const user= {
            'nome': nome,
            'email': email,
            'mensagem': mensagem
        }
        console.table(user)
       
    }

    return (
        <section className="container">
         <Menu/>
          <main className='contact'>

              <div className="detalhesContato"></div>
              <section className="boxContact">
                  <form onSubmit={handlerSubmit}>
                      <h2>Contato</h2>
                      <h3>Envie-me uma mensagem para saber mais!</h3>
                      <input 
                      type="text" 
                      name={nome} 
                      placeholder="Nome Completo..." 
                      onChange={e=> setNome(e.target.value)}/>
                      <input 
                      type="text" 
                      name={email} 
                      placeholder="Email..." 
                      onChange={e=> setEmail(e.target.value)}/>
                      <textarea 
                      nome={mensagem} 
                      placeholder="Envie uma mensagen..." 
                      maxLength="200" 
                      onChange={e=> setMensagem(e.target.value)}></textarea>
                      <input type="submit" value="enviar"/>
                  </form>
                  <article>
                      <div>
                          <FaMobileAlt/>
                          <p>(21) 98728-2039</p>
                      </div>
                      <div>         
                          <HiOutlineMailOpen/>
                          <p>rgm.frontend@hotmail.com</p>
                      </div>
                  </article>
              </section> 
          </main>
         <Footer/>
        </section>
    )
}