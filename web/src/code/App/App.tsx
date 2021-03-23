import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Projects from "../Projects/Projects";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../Header/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <main>
        <AboutMe />
        <Projects />
      </main>
    </React.Fragment>
    
  );
}

export default App;
