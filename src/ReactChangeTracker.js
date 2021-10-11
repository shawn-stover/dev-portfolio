import React from 'React'
import { withRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

const RouterChangeTracker = ({ history }) => {
    history.listen((location, action) => {
        ReactGA.set({ page: location.pathname })
        ReactGA.pageView(location.pathname)
    })
    return<div></div>
}