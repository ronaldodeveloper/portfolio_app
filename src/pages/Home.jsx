import React from 'react';
import { Link } from 'react-router-dom';
import {Menu} from '../Components/Menu.jsx'
import './home.scss';

export const Home= ()=>{
    return (
        <section className="container">
            <header className="menuContent">
                <div><p className="logo"><strong>r</strong><strong>m.</strong></p></div>
                <Menu/>
                {/* <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre</li>
                        <li>Portifólio</li>
                        <li>Contato</li>
                    </ul>
                </nav> */}
            </header>
            <main>
                  
            </main>
            <footer>
                <div>icon!</div>
                <nav>
                    <a href="">github</a>
                    <a href="">linkedin</a>
                    <a href="">whatsapp</a>
                    <a href="">instagram</a>
                </nav>
            </footer>
        </section>
    )
}