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
                 <h3>PORTFÓLIO</h3>
                 <h2>LAYOUTS</h2>
                 <p>Conheça alguns dos  meus projetos mais recentes</p>
             </article>
             <div>
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
                 <div className="portifolioCard">
                     <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
                 <div className="portifolioCard">
                     <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                     </div>
             </a>
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
                 <div className="portifolioCard">
                 <h2>TÍTULO</h2>
                     <p>subtitulo</p>
                 </div>
             </a>
             <a href="https://www.linkedin.com/in/ronaldo-mariano">
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