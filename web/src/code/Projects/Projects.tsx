import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';

import { makeStyles } from '@material-ui/core/styles';
import { projectData } from '../../data/projectsData'

import "./Projects.css";

const colorsPalette = ['#f1948a', '#e59866', '#f7dc6f', '#45b39d', '#7fb3d5', '#bb8fce'];

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    flexDirection: 'column',
  },
  title: {
      textAlign: 'center',
      justifyContent: 'center',
  },
  chips: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'center',
  },
  links: {
      justifyContent: 'center'
  }
}));

let i = 0;
function changeColor() {
    i = i % 6;
    return colorsPalette[i++];
}

function Projects() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <br />
            {projectData.map(projectCategories => (
                <>
                    <div className='newSection' >
                        <hr />
                         <Typography component="h3" variant="h3">
                            {projectCategories.title}
                        </Typography>
                        <hr/>
                    </div>

                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={4}>
                            {projectCategories.information.map(cardData =>(
                                <Grid item key={cardData.name} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={cardData.srcImage}
                                            title={cardData.name}
                                        />
                                        
                                        <CardContent className={classes.cardContent}>
                                            <div className={classes.title} style={{background: changeColor()}}>
                                                <hr></hr>
                                                <Typography variant="h5" component="h2">
                                                    {cardData.name}
                                                </Typography>
                                                <hr></hr>    
                                            </div>
                                        
                                            <Typography>
                                                {cardData.text}
                                            </Typography>
                                        </CardContent>

                                        <CardContent>
                                            <div className='newSection' >
                                                <Typography>
                                                    Working with:
                                                </Typography>
                                            </div>
                                            <div className={classes.chips}>
                                                {cardData.teamWork.map(team => (
                                                    <Chip size="small" label={team.name} component="a" href={team.url} rel="noopener noreferrer" target="_blank" clickable />
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardActions className={classes.links}>
                                            {cardData.thereIsLink[0] && <Button size="small" color="primary" href={cardData.links[0]} rel="noopener noreferrer" target="_blank"> Github </Button>}
                                            {cardData.thereIsLink[1] && <Button size="small" color="primary" href={cardData.links[1]} rel="noopener noreferrer" target="_blank"> Demo </Button>}
                                            {cardData.thereIsLink[2] && <Button size="small" color="primary" href={cardData.links[2]} rel="noopener noreferrer" target="_blank"> Document </Button>}
                                            {cardData.thereIsLink[3] && <Button size="small" color="primary" href={cardData.links[3]} rel="noopener noreferrer" target="_blank"> Awards </Button>}
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </>
            ))}
            
        </React.Fragment>
    );
  }
  
export default Projects;
  