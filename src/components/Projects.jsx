// Imports
import { React, Component } from 'react'
import { Tab , Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// Projects Component
export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }
    }
        
    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className='projects-grid'>
                    <Card className='card' shadow={5}>
                        <CardTitle style={{color: '#000000', height: '25vh', background: 'url(https://media.giphy.com/media/HroASiJhtF9ZrZ7kYI/giphy.gif) center / cover'}}>Survival Chess</CardTitle>
                        <CardText>
                            Survival Chess used HTML / CSS and Javascript. It is chess with a twist. It is written in Javascript and uses the chessboard.js and chess.js libraries to control basic game logic and functions. The player plays against never ending computers and their board state is preserved between games until they lose.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <Link to={{ pathname: 'https://www.github.com/shawn-stover/Survival-Chess' }} target='_blank' style={{textDecoration: 'none'}}>Github</Link>
                            </Button>
                            <Button colored>
                                <Link to={{ pathname: 'https://shawn-stover.github.io/Survival-Chess/' }} target='_blank' style={{textDecoration: 'none'}}>Live Site</Link>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffffff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>    
            ) 
        } else if(this.state.activeTab === 1) {
            return(
                <div className='projects-grid'>
                    <Card className='card' shadow={5}>
                        <CardTitle style={{color: '#ffffff', height: '176px', background: 'url(https://media.giphy.com/media/0y3wefCTDjA1WdeWft/giphy.gif) center / cover'}}>Final Fantasy 14 Note App</CardTitle>
                        <CardText>
                            Final Fantasy 14 Note App uses EJS, NodeJs and SQL. It was written so that users can search their characters and keep character advancement notes and tasks separated by class. This way users can stay organized.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <Link to={{ pathname: 'https://github.com/shawn-stover/final-fantasy-14-app' }} target='_blank' style={{textDecoration: 'none'}}>Github</Link>
                            </Button>
                            {/* <Button colored style={{marginLeft: '130px'}}>
                                <Link to={{ pathname: 'https://shawn-stover.github.io/Survival-Chess/' }} target='_blank' style={{textDecoration: 'none'}}>Live Site</Link>
                            </Button> */}
                        </CardActions>
                        <CardMenu style={{color: '#ffffff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            ) 
        } else if(this.state.activeTab === 2) {
            return(
                <div className='projects-grid'>
                    <Card className='card' shadow={5}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://media.giphy.com/media/MvdNxKTCzTLv7O9wOh/giphy.gif) center / cover'}}>Falendar</CardTitle>
                        <CardText>
                            Falendar was written as a MERN Stack collaboration project not only as a group of four students from my class, but a pair of UX/UI Designers from another class as well. The app was written as a way for families to begin to plan their lives back out again post pandemic and allow them to make their scheduling easier.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <Link to={{ pathname: 'https://github.com/EllieLissner/Collab-MERN-Server' }} target='_blank' style={{textDecoration: 'none'}}>GH Server</Link>
                            </Button>
                            <Button colored>
                                <Link to={{ pathname: 'https://github.com/EllieLissner/Collab-MERN-Client' }} target='_blank' style={{textDecoration: 'none'}}>GH Client</Link>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffffff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    <Card className='card' shadow={5}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://media.giphy.com/media/KNy3Z6MmzaDk9hnjyL/giphy.gif'}}>Final Fantasy 14 Note App Refactor</CardTitle>
                        <CardText>
                            This was my final project during my bootcamp. In this project, I took the ap written in EJS, NodeJs and SQL and have refactored it into a MERN stack app controlled by a backend Mongo database that serves a frontend React client for users. This app includes authentication that the EJS app did not, and a much better looking website and file structure.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <Link to={{ pathname: 'https://github.com/shawn-stover/final-fantasy-14-app-refactor-server' }} target='_blank' style={{textDecoration: 'none'}}>GH Server</Link>
                            </Button>
                            <Button colored>
                            <Link to={{ pathname: 'https://github.com/shawn-stover/final-fantasy-14-app-refactor-client' }} target='_blank' style={{textDecoration: 'none'}}>GH Client</Link>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffffff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>
            ) 
        } else {
            return(
                <div className='projects-grid'>
                    <Card className='card' shadow={5}>
                        <CardTitle  style={{color: '#ffffff', height: '25vh', background: 'url(https://media.giphy.com/media/MOyHcpdL4zIFf1YUCt/giphy.gif) center / cover'}}>Space Invaders Clone</CardTitle>
                        <CardText>
                            Space Invaders Clone was a personal project I did for skill building after my bootcamp. I am still cleaning up bugs, but the game is functional. You can clone down the repo and run the code in an IDE to play the game.
                        </CardText>
                        <CardActions border>
                            <Button colored>
                                <Link to={{ pathname: 'https://github.com/shawn-stover/Space_Invaders_Clone_Python3' }} target='_blank' style={{textDecoration: 'none'}}>Github</Link>
                            </Button>
                        </CardActions>
                        <CardMenu style={{color: '#ffffff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>
                </div>    
            )
        }     
    }

    render() {
        return(
            <div className='category-tabs'>
                <Helmet>
                    <title>Shawn's Portfolio | Projects</title>
                </Helmet>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>EJS</Tab>
                    <Tab>MERN</Tab>
                    <Tab>Python</Tab>
                </Tabs>
                <Grid classname='projects-grid'>
                    <Cell col={12}>
                        <div className='content'>
                            {this.toggleCategories()}
                        </div> 
                    </Cell>
                </Grid>
            </div>
        )
    }                
}