import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Projects from "../Projects/Projects"
import AboutMe from "../AboutMe/AboutMe"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
        <AboutMe />
        <Projects />
    </React.Fragment>
  );
}

export default App;
