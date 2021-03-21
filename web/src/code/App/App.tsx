import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Projects from "../Projects/Projects"
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg"  style={{ backgroundColor: '#cfe8fc'}}>
        <Projects />
      </Container>
    </React.Fragment>
      
  );
}

export default App;
