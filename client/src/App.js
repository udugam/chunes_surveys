import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

//Material UI Components
import {Button, Typography, Grid} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

//Import Styles
import styles from './styles.js'

//Import Surveys
import Survey1 from './Survey1'
import Survey2 from './Survey2'

//Import API
import API from './API.js'

class App extends Component {

  state= {
    survey1: false,
    survey2: false
  }

  handleInputChange = keyName => event => {
    const keyValue = event.target.value     
    this.setState({[keyName]:keyValue})
  }

  submitAnswers = () => {
    API.submit(this.state, window.location.href)
        .then(res=> {
          if(res.data===true) {
            this.setState({survey1:false, survey2:false, submitted:true})
          }
        })
        .catch(err=>{console.log(err)})
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
        <Container className={classes.container} maxWidth="md">
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

           {!this.state.submitted && 
              <Fragment>
                <Button onClick={()=>this.handleSurveySelection('survey1')} className={classes.button} variant="contained" color={this.state.survey1 ? "primary" : "secondary"}>
                  I have used Chunes
                </Button>
                <Button onClick={()=>this.handleSurveySelection('survey2')} className={classes.button} variant="contained" color={this.state.survey2 ? "primary" : "secondary"}>
                  I haven't used Chunes
                </Button>
              </Fragment>
            }

            {this.state.survey1 && 
              <Survey1 handleInputChange={this.handleInputChange} {...this.state}/>
            }
            {this.state.survey2 && 
              <Survey2 handleInputChange={this.handleInputChange} {...this.state}/>
            }

            {(this.state.survey1 || this.state.survey2) && 
              <Button onClick={()=>this.submitAnswers()} className={classes.button} variant="contained" color="primary">
                Submit
              </Button>
            }

            {this.state.submitted && 
              <Typography variant="h4">
                Thank You!
              </Typography>
            }
          </Grid>
        </Container>
    );
  }
}

export default withStyles(styles)(App);
