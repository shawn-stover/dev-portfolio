import ReactGA from 'react-ga'

export default function RouteChangeTracker() {
    return(
        history.listen((location) => {
            ReactGA.set({ page: location.pathname })
            ReactGA.pageview(location.pathname)
        })
    )
}