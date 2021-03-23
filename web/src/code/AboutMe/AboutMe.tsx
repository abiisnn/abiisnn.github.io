import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

import "./AboutMe.css";

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: '#EDBBDC',
      padding: theme.spacing(8, 0, 6),
    },
    avatar: {
        width: '100%',
        height: 'auto',
    },
    links: {
      backgroundColor: 'red',
      width:'100%',
      display: 'flex',
      flex: 'wrap',
      alignItems: 'center',
      alignContent: 'center',
    }
  }));

function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.heroContent}>
          <br /> <br />
          <Container maxWidth="lg">
            <Grid container spacing={4} justify="center" >
              
              <Grid item xs={12} sm={6} md={4} lg={3} justify="center">
                <Avatar alt="Abigail" src="/images/avatar/4.jpg" className={classes.avatar} />
              </Grid>
              
              <Grid item xs={12} sm={5} md={8} lg={7}>
                <div>
                  <br />
                  <Typography component="h6" variant="h6">
                    A little about me & my projects!!
                  </Typography>
                  <Typography component="h3" variant="h3">
                    Hi, I'm Abigail Nicolas Sayago
                  </Typography>
                  <Typography component="h5" variant="h5">
                    A Software Engineer, Junior Developer, Rookie Competitive Programmer & Girl in tech. 
                    Lover of UI & Web Development. 
                  </Typography>
                  <br/>
                  <Typography component="h5" variant="h5">
                    I enjoy learning & teaching Computer Science. I'm a believer that you never stop learning & life is better if
                    you share what you know. 
                  </Typography>
                </div>
                <br />
                <div className={'links'}>
                  <a href="https://github.com/abiisnn" rel="noopener noreferrer" target="_blank">
                      <GitHubIcon style={{ fontSize: 40 }}  />
                  </a>
                  <a href="www.linkedin.com/in/abigail-nic-say" rel="noopener noreferrer" target="_blank">
                      <LinkedInIcon style={{ fontSize: 40 }} />
                  </a>
                  <a href="https://twitter.com/Abii_Snn" rel="noopener noreferrer" target="_blank">
                      <TwitterIcon style={{ fontSize: 40 }} />
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
          </div>
    );
  }
export default AboutMe;
