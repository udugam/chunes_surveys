import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames'


//Material UI Components
import {Button, Typography, Grid, TextField} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

//Import Styles
import styles from './styles.js'

class Survey1 extends Component {

  render() {
    const {classes, handleInputChange} = this.props
    return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <TextField
              key={1} 
              id={'question1'}
              label={'Question 1'}
              className={classNames(classes.margin, classes.textFieldLarge)}
              value={this.props.s1q1}
              onChange={handleInputChange('s1q1')}
              multiline
              fullWidth
            />
          </Grid>
    );
  }
}

export default withStyles(styles)(Survey1);
