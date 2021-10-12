// Imports
import { Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import Landing from './Landing.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

// Create History Variable
const history = createBrowserHistory()

// Initialize Google Analytics Tracker
const TRACKING_ID = process.env.REACT_APP_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

// Initialize pageview tracking
history.listen(location => {
  
  // Update current page
  ReactGA.set({ page: location.pathname })

  // Record a page view
  ReactGA.pageview(location.pathname)
})

export default function Routes() { 
    return(
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </Router>
    )
}    