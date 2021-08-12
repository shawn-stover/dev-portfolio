// Imports
import { Grid, Cell } from 'react-mdl'
import { Helmet } from 'react-helmet'

// Landing Component
export default function Landing() {
    return(
        <div className='landing'>
            <Helmet>
                <title>Shawn's Portfolio | Welcome</title>
            </Helmet>
            <Grid className='landing-grid'>
                {/* Single Column for page width */}
                <Cell col={12}>
                    <img className='avatar'
                        src='/img/ShawnPic.png'
                        alt='Shawn'
                    />
                    <div className='banner-text'>
                        <h1>Backend Dev Ready to Make an Impact</h1>
                        <hr/>
                        <p>HTML/CSS | React | Python | MongoDb | PostgresSQL | NodeJs | Typescript | EJS</p>
                        <div className='social-links'>
                            {/* CodePen */}
                            <a href='http://www.codepen.io/Shawn-Stover' rel='noopener noreferrer' target='_blank'>
                                <i className='fab fa-codepen' aria-hidden='true' />
                            </a>
                            {/* Github */}
                            <a href='http://www.github.com/shawn-stover' rel='noopener noreferrer' target='_blank'>
                                <i className='fab fa-github' aria-hidden='true' />
                            </a>
                            {/* Linkedin */}
                            <a href='http://www.linkedin.com/in/shawn-stover-se' rel='noopener noreferrer' target='_blank'>
                                <i className='fab fa-linkedin' aria-hidden='true' />
                            </a>
                        </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}