import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Material UI Components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

//Import Styles
import styles from './styles.js'

class App extends Component {

  state= {
    hasUsedChunes: null,
    
  }

  render() {
    const {classes} = this.props
    return (
      <React.Fragment>
        <Container className={classes.container} maxWidth="md">
          <Paper>
            <Button variant="contained" color="primary">
              Take the Survey
            </Button>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
