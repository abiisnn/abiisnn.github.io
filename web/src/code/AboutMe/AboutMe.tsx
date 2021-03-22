import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./AboutMe.css"
// import {projectData} from '../../data/projectsData'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: 1300,
    width: 1300,
    minWidth: 375,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    // paddingLeft: theme.spacing(1),
    // paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  imageContainer: {
      width: 300,
      height: 500,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
      background: 'cyan',
  },
  avatar: {
      width: 250,
      height: 'auto',
  }
}));

function AboutMe() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <div className='rootAboutMe'>
            <br></br>
            <Grid container spacing={3} className='containerAboutMe'>
                <Grid item>
                    <Card className={classes.root}>
                        <div className='imageAboutMeContainer'>
                            <Avatar alt="Abigail" src="/images/avatar/4.jpg" className={classes.avatar} />
                        </div>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography variant="subtitle1" color="textSecondary">
                                    A little about me!!
                                </Typography>
                                <Typography component="h3" variant="h3">
                                    Hi, I'm Abigail Nicolas Sayago
                                </Typography>
                                <Typography component="h5" variant="h5">
                                    A Junior Web Design & Developer. Love UI, React & Competitive Programming
                                </Typography>
                                <div>
                                    <a href="https://github.com/abiisnn" rel="noopener noreferrer" target="_blank">
                                        <GitHubIcon style={{ fontSize: 70 }}  />
                                    </a>
                                    <a href="www.linkedin.com/in/abigail-nic-say" rel="noopener noreferrer" target="_blank">
                                        <LinkedInIcon style={{ fontSize: 70 }} />
                                    </a>
                                    <a href="https://github.com/abiisnn" rel="noopener noreferrer" target="_blank">
                                        <GitHubIcon style={{ fontSize: 70 }} />
                                    </a>
                                </div>
                            </CardContent>

                        </div>

                        {/* <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                Live From Space
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon className={classes.playIcon} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>
                            </div>
                        </div>
                         */}
                    </Card>
                </Grid>
            </Grid>
            
        </div>
    );
  }
  
export default AboutMe;
  