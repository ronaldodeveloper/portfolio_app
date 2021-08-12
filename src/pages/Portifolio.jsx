import React from 'react';
// import { Link } from 'react-router-dom';
import { Menu } from '../Components/Menu.jsx'
import { Footer } from '../Components/Footer.jsx'
import './stylesheet/portifolio.scss'

export const Portifolio= ()=>{
    return (
        <section className="container">
        <Menu/>
         <main className='portifolio'>
             <article>
                 <h3>TEMPLATE</h3>
                 <h2>PORTFÓLIO</h2>
                 <p>Conheça alguns dos  meus projetos mais recentes</p>
             </article>
             <div>
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                     <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                     <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                     </div>
             </a>
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://themeforest.net/category/site-templates/creative">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>

             </div>
             
            
         </main>
        <Footer/>
        </section>
    )
}