import { createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import NavBar from './components/navBar';
import Sidebar from './components/sidenav';
import './App.css';
import React from 'react';
import { Home } from './Home';
import Issue  from './Issue';
import { View } from './View';
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
          <Route path="/Issue" component={Issue}/>
          <Route component={View}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
