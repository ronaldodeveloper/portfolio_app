import React from 'react';
// import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
// import { Main } from '../Components/Main.jsx'
import { MdAdd } from "react-icons/md";
import './home.scss';
import bg from '../assets/perfil.svg'
import bgBlack from '../assets/perfilblack.svg'

const bgPerfil= {
    backgroundImage: `url(${bgBlack})`,
    backgroundPosition: '75%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '400px',
    backgroundColor: 'rgba(0,0,0, .8)',
    backgroundBlendMode: 'color-dodge',

}

export const Home= ()=>{
    return (
        <section className="container" style={bgPerfil}>
            <Menu/>
            <main>
                <section className='title'>
                    <p>OLÁ, EU SOU RONALDO MARIANO</p>
                    <h1>FRONT END <span>DEVELOPER</span></h1>
                    <p>Seja bem vindo ao meu website...</p>
                    <div><MdAdd/></div>
                </section>
                <section className='description'>
                    <p>front end developer</p>
                </section>
               
            </main>
            <Footer/>
      </section>
        
    )
}