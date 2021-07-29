import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import './stylesheet/portifolio.scss'

export const Portifolio= ()=>{
    return (
        <section className="container">
        <Menu/>
        <main className='portifolio'>
            <h1>Portifolio</h1>
        </main>
        <Footer/>
        </section>
    )
}