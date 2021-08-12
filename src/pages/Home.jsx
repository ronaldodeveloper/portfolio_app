import React from 'react';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import { MdAdd } from "react-icons/md";
import './stylesheet/home.scss';

// IMAGE
import bgImage from '../assets/perfilblack.svg'
const bgPerfil= {
    backgroundImage: `url(${bgImage})`,
    backgroundPosition: '75%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '400px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    backgroundBlendMode: 'multiply',
}

export const Home= ()=>{
    return (
        <section className="container" style={bgPerfil}>
            <Menu/>
            <main className='home'>
                <section className='title'>
                    <p>OLÁ, EU SOU RONALDO MARIANO</p>
                    <h1>FRONT END <span>DEVELOPER</span></h1>
                    <p className='welcome'>Seja bem vindo ao meu website...</p>
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