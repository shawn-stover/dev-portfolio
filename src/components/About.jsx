// Imports
import { Helmet } from 'react-helmet'
import { Grid, Cell } from 'react-mdl'

// About Component
export default function About() {
    return(
        <div>
            <Helmet>
                <title>Shawn's Portfolio | About</title>
            </Helmet>
            <div className='about-body'>
                <Grid className='about-grid' style={{overflow: 'auto'}}>
                    <Cell col={6}>
                        <img className='avatar-about'
                            src='./img/ShawnPic.png'
                            alt='Shawn' 
                        />
                        <h2>Shawn Stover</h2>
                    </Cell>
                    <Cell col={6}>
                        <h2>About Me</h2>
                        <hr/>
                        <div className='about-me'>
                            <p>I am a software engineer with a passion for learning and developing. I consider myself a "forever student". I believe that I can always learn something new and improve my abilities. I believe that mindfulness, selflessness, teamwork and communication are keys to workplace success.</p>
                            <br/>
                            <p>Outside of work, I enjoy spending time with my family. I have a wife and two kids, as well as two dogs and a bird. I greatly enjoy the time I spend with my family, so a proper work-life balance is important to me. Outside of these interests, I enjoy sports, talking to my friends and playing video games when my time allows. I love talking about software development, or my family and pets, feel free to drop my a line at any of the contact points on the contact page.</p>
                        </div>    
                    </Cell>
                </Grid>
            </div>
        </div>
    )
}