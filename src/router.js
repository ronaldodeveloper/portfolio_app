import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Portifolio } from './pages/Portifolio.jsx'
import { Contact } from './pages/Contact.jsx'

export const Router= ()=>{
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/sobre'  component={About}/>
            <Route path='/portifolio' component={Portifolio}/>
            <Route path='/contato' component={Contact}/>
        </Switch>
    )
}