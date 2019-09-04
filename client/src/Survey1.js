import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//Material UI Components
import {Button, Typography, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

//Import Styles
import styles from './styles.js'

class Survey1 extends Component {

  state= {
    survey1: false,
    survey2: false
  }

  handleInputChange = keyName => event => {
    const keyValue = event.target.value     
    this.setState({[keyName]:keyValue})
  }

  handleSurveySelection = survey => {
    if(survey==='survey1') {
      this.setState({survey1:true,survey2:false})
    } else if(survey==='survey2') {
      this.setState({survey1:false,survey2:true})
    }

  }

  render() {
    const {classes} = this.props
    return (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Typography variant="h5">
                Hey! We're looking to get straight-forward feedback on your thoughts 
                of the Chunes application and its functions. We would love to get your 
                thoughts - good or bad in its rawest form as much as possible, so we 
                can use this insight to help structure, re-think, re-evaluate the 
                application.
            </Typography>
            <Button onClick={()=>this.handleSurveySelection('survey1')} className={classes.button} variant="contained" color="primary">
              I have used Chunes
            </Button>
            <Button onClick={()=>this.handleSurveySelection('survey2')} className={classes.button} variant="contained" color="primary">
              I haven't used Chunes
            </Button>
            {this.state.survey1 && 
              <Survey1 />
            }
            {this.state.survey2 && 
              <Survey2 />
            }
          </Grid>
    );
  }
}

export default withStyles(styles)(Survey1);
