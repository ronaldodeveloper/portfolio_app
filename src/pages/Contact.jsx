import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import './stylesheet/contact.scss'

export const Contact= ()=>{
    return (
        <section className="container">
        <Menu/>
        <main className='contact'>
            <h1>contato</h1>
        </main>
        <Footer/>
        </section>
    )
}