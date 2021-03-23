import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#4B2170',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Abigail Nicolas
            </Typography>
            <Button href="documents/Abigail_Nicolas_Resume" rel="noopener noreferrer" target="_blank" color="inherit">
              Resume
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    )   
}

export default Header;
