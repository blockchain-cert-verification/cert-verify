import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/navBar';
import Sidebar from './components/sidenav';
import './App.css';
import React from 'react';
import {Home} from './components/Home';
import Issue from './components/Issue';
import View from './components/View';
import Certificate from './components/certificate';
import Display from './components/verifycert';
import { BrowserRouter as Router, Route, Link, withRouter, Switch } from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar/>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/issue" component={Issue}/>
          <Route path="/view" component={View}/>
          <Route path="/cert" component={Certificate}/>
          <Route path="/display" component={Display}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
