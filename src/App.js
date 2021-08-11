// Imports
import React from 'react'
import './App.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import Routes from './components/Routes.jsx'
import { Link } from 'react-router-dom'

// App template using react-mdl
export default function App() {
  return(
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title='Shawn.Stover' scroll>
              <Navigation>
                  <Link to='/' target='_blank'>Home</Link>
                  <Link to='/about' target='_blank'>About Me</Link>
                  <Link to='/resume' target='_blank'>Resume</Link>
                  <Link to='/projects' target='_blank'>Projects</Link>
                  <Link to='/contact' target='_blank'>Contact</Link>
              </Navigation>
            </Header>
            <Drawer className ='drawer-color' title='Shawn.Stover'>
                <Navigation>
                  <Link to='/' target='_blank'>Home</Link>
                  <Link to='/about' target='_blank'>About Me</Link>
                  <Link to='/resume' target='_blank'>Resume</Link>
                  <Link to='/projects' target='_blank'>Projects</Link>
                  <Link to='/contact' target='_blank'>Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Routes />
            </Content>
        </Layout>
    </div>
  )
}
