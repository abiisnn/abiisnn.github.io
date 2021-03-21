import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import "./Projects.css"
import {projectData} from '../../data/projectsData'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        alignItems: 'stretch',
        alignContent: 'stretch',
    },
    image: {
        alignItems: 'center',
    },
    rootCard: {
        maxWidth: 375,
        minWidth: 350,
        justifyContent: 'space-around'
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
        marginTop: '30'
    },

  }));

function Projects() {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <br></br>
            {projectData.map(projectsCategories => ( // Aquí recorro el arreglo projectData
                <>
                <h1> {projectsCategories.title} </h1>
                <Grid container spacing={3} className={classes.container} >
                    {projectsCategories.information.map(cardData => (
                        <Grid item>
                            <Card className={classes.rootCard}>
                                <CardActionArea className={classes.image}>                                
                                    <img
                                    src={cardData.srcImage}
                                    alt={cardData.name}
                                    style={{ width: '300px', height: '300px', margin: "auto" }}
                                    />
                                    <CardContent>
                                        <div className='title'>
                                            <hr></hr>
                                            <h2>{cardData.name}</h2>
                                            <hr></hr>    
                                        </div>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {cardData.text}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    {/* <a href={cardData.links[0]} rel="noopener noreferrer" target="_blank">		
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a> */}
                                    {cardData.thereIsLink[0] && <Button size="small" color="primary"> Github </Button>}
                                    {cardData.thereIsLink[1] && <Button size="small" color="primary"> Demo </Button>}
                                    {cardData.thereIsLink[2] && <Button size="small" color="primary"> Document </Button>}
                                    {cardData.thereIsLink[3] && <Button size="small" color="primary"> Awards </Button>}
                                    
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                </>
            ))}
        </div>
    );
  }
  
export default Projects;
  