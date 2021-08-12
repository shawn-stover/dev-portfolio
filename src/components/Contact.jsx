// Imports
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import { Helmet } from 'react-helmet'

// Contact Component
export default function Contact() {
    return(
        <div>
            <Helmet>
                <title>Shawn's Portfolio | Contact</title>
            </Helmet>
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <img className='avatar'
                            src='./img/ShawnPic.png'
                            alt='Shawn' 
                        />
                        <h2>Shawn Stover</h2>
                        <p style={{width: '75%', fontSize: '3.2vh', margin: 'auto', paddingTop: '1em'}}>
                            Feel free to ask me about any of the projects on the Projects page, my current projects and skill-building exercises, or simply to touch base with me at any of the contact points listed here.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '4.75vh', fontFamily: 'Anton', color: '#FFFFFF'}}>
                                        <i className='fas fa-phone-square' aria-hidden='true' />
                                        (951) 880-5982
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '4.75vh', fontFamily: 'Anton', color: '#FFFFFF'}}>
                                        <i className='fas fa-fax' aria-hidden='true' />
                                        (951) 845-2865
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '4.75vh', fontFamily: 'Anton', color: '#FFFFFF'}}>
                                        <i className='fas fa-envelope' aria-hidden='true' />
                                        shawn.stover.it.cs@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '4.75vh', fontFamily: 'Anton'}}>
                                        <i className='fab fa-slack' aria-hidden='true' />
                                        shawn.stover.it.cs@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>    
                    </Cell>
                </Grid>
            </div>
        </div>
    )
}