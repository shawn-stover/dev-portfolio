// Imports
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import dotenv from './env'
import RouteChangeTracker from './components/RouteChangeTracker.jsx'
import Routes from './components/Routes.jsx'
import ReactGA from 'react-ga' 
import { Link } from 'react-router-dom'

const TRACKING = process.env.REACT_APP_TRACKING_ID
ReactGA.initialize(TRACKING)

// App template using react-mdl
export default function App() {
  return(
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title='Shawn.Stover' scroll>
              <Navigation>
                  <Link to='/' target='_blank'>Home</Link>
                  <Link to='/about' target='_blank'>About Me</Link>
                  <Link to='/projects' target='_blank'>Projects</Link>
                  <Link to='/contact' target='_blank'>Contact</Link>
              </Navigation>
            </Header>
            <Drawer className ='drawer-color' title='Shawn.Stover'>
                <Navigation>
                  <Link to='/' target='_blank'>Home</Link>
                  <Link to='/about' target='_blank'>About Me</Link>
                  <Link to='/projects' target='_blank'>Projects</Link>
                  <Link to='/contact' target='_blank'>Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Routes />
            </Content>
        </Layout>
        <RouteChangeTracker />
    </div>
  )
}
