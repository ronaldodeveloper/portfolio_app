import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import './stylesheet/about.scss'

export const About= ()=>{
    return (
        <section className="container">
        <Menu/>
        <main className='about'>
            <h1>About</h1>
        </main>
        <Footer/>
        </section>
    )
}