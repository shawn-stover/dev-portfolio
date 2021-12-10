// Imports
import { Switch, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

export default function Routes() { 
    return(
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
        </Switch>
    )
}    