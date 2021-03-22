import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';


import "./Projects.css"
import {projectData} from '../../data/projectsData'

const useStyles = makeStyles((theme) => ({ 
    rootCard: {
        maxWidth: 375,
        minWidth: 375,
        // background: 'blue',
        display: 'block',
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    media: {
        width: 375,
        height: 375,
        paddingTop: '56.25%',
        marginTop: '30'
    },
    
    workingWith: {
        flexDirection: 'column',
    },
    links: {
        flexWrap: 'wrap',
        alignItems: 'space-between',
    }

  }));

const colorsPalette = ['#f1948a', '#e59866', '#f7dc6f', '#45b39d', '#7fb3d5', '#bb8fce'];

function Projects() {
    const classes = useStyles();
    return (
        <div className='root'>
            {projectData.map(projectsCategories => ( // Aquí recorro el arreglo projectData
                <>
                <div className='newSection' style={{background: '#A569BD'}} >
                    <h1> {projectsCategories.title} </h1>
                </div>
                
                <Grid container spacing={3} className='cardsContainer' >
                    {projectsCategories.information.map(cardData => (
                        
                        <Grid item>
                            <Card className={classes.rootCard}>
                                <CardActionArea className={classes.imageContainer}>
                                    <CardMedia
                                        className={classes.media}
                                        image={cardData.srcImage}
                                        title={cardData.name}
                                    />
                                    
                                </CardActionArea>
                                <CardContent>
                                    <div className='cardTitle' style={{background: '#C39BD3'}}>
                                        <hr></hr>
                                        <h2>{cardData.name}</h2>
                                        <hr></hr>    
                                    </div>
                                    
                                    <div className='cardText'>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {cardData.text}
                                        </Typography>
                                    </div>                                    
                                </CardContent>
                                <CardActions className={classes.workingWith}>
                                    {/* Working with */}
                                    <div className='chipContainer'>
                                        {cardData.teamWork.map(team => (
                                            <Chip size="small" label={team.name} component="a" href={team.url} rel="noopener noreferrer" target="_blank" clickable />
                                        ))}
                                    </div>

                                    <div className={classes.links}>
                                        {cardData.thereIsLink[0] && <Button size="small" color="primary" href={cardData.links[0]} rel="noopener noreferrer" target="_blank"> Github </Button>}
                                        {cardData.thereIsLink[1] && <Button size="small" color="primary" href={cardData.links[1]} rel="noopener noreferrer" target="_blank"> Demo </Button>}
                                        {cardData.thereIsLink[2] && <Button size="small" color="primary" href={cardData.links[2]} rel="noopener noreferrer" target="_blank"> Document </Button>}
                                        {cardData.thereIsLink[3] && <Button size="small" color="primary" href={cardData.links[3]} rel="noopener noreferrer" target="_blank"> Awards </Button>}
                                    </div>
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
  