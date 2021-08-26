import React from 'react';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import { MdAdd } from "react-icons/md";
import './stylesheet/home.scss';

export const Home= ()=>{
    return (
        <section className="container" id='homebg'>
            <Menu/>
            <main className='home'>
                <section className='title'>
                    <p className='subTitle'>OLÁ, EU SOU RONALDO MARIANO</p>
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