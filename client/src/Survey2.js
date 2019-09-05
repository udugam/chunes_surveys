import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import classNames from 'classnames'


//Material UI Components
import {FormControl, Card, Typography, Select, MenuItem, Grid, TextField} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

//Import Styles
import styles from './styles.js'

class Survey2 extends Component {

  render() {
    const {classes, handleInputChange} = this.props
    return (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >

            {/* Question 1 */}
            <Grid className={classes.question}>
              <FormControl className={classNames(classes.margin, classes.textFieldLarge)}>
                <Typography variant="h6">
                In the last month, how times did you share music with your friends?
                </Typography>
                <Select
                    value={this.props.s2q1}
                    onChange={handleInputChange('s2q1')}
                    id={'s2q1'}
                >
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                  <MenuItem value={'3'}>3</MenuItem>
                  <MenuItem value={'4'}>4</MenuItem>
                  <MenuItem value={'5'}>5</MenuItem>
                  <MenuItem value={'6'}>6</MenuItem>
                  <MenuItem value={'7'}>7</MenuItem>
                  <MenuItem value={'8'}>8</MenuItem>
                  <MenuItem value={'9'}>9</MenuItem>
                  <MenuItem value={'10'}>10</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Question 2 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              Why did you not use Chunes?
              </Typography>
              <TextField
                id={'s2q2'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q2}
                onChange={handleInputChange('s2q2')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 3 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What music streaming application are you currently using right now?              </Typography>
              <TextField
                id={'s2q3'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q3}
                onChange={handleInputChange('s2q3')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 4 */}
            <Grid className={classes.question}>
              <FormControl className={classNames(classes.margin, classes.textFieldLarge)}>
                <Typography variant="h6">
                How often do you listen to music?
                </Typography>
                <Select
                    value={this.props.s2q4}
                    onChange={handleInputChange('s2q4')}
                    id={'s2q4'}
                >
                  <MenuItem value={'Daily'}>Daily</MenuItem>
                  <MenuItem value={'Weekly'}>Weekly</MenuItem>
                  <MenuItem value={'Monthly'}>Monthly</MenuItem>
                  <MenuItem value={'Bi-Weekly'}>Bi-Weekly</MenuItem>
                  <MenuItem value={'Twice a Week'}>Twice a Week</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Question 5 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              Do you share music with others? If so how?
              </Typography>
              <TextField
                id={'s2q5'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q5}
                onChange={handleInputChange('s2q5')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 6 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What's missing from the current music applications you are using?
              </Typography>
              <TextField
                id={'s2q6'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q6}
                onChange={handleInputChange('s2q6')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 7 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              Would you recommend Chunes to a friend? Why or why not?
              </Typography>
              <TextField
                id={'s2q7'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q7}
                onChange={handleInputChange('s2q7')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 8 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
                How do you currently discover music?
              </Typography>
              <TextField
                id={'s2q8'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q8}
                onChange={handleInputChange('s2q8')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 9 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How would you describe this app to someone?
              </Typography>
              <TextField
                id={'s2q9'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q9}
                onChange={handleInputChange('s2q9')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 10 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              I would use this app if...
              </Typography>
              <TextField
                id={'s2q10'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q10}
                onChange={handleInputChange('s2q10')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 11 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              Did you have any challenges when posting a song?
              </Typography>
              <TextField
                id={'s2q11'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s2q11}
                onChange={handleInputChange('s2q11')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 12 */}
            <Grid className={classes.question}>
              <FormControl className={classNames(classes.margin, classes.textFieldLarge)}>
                <Typography variant="h6">
                How much of a music enthusiast are you?
                </Typography>
                <Select
                    value={this.props.s2q12}
                    onChange={handleInputChange('s2q12')}
                    id={'s2q12'}
                >
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                  <MenuItem value={'3'}>3</MenuItem>
                  <MenuItem value={'4'}>4</MenuItem>
                  <MenuItem value={'5'}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

          </Grid>
    );
  }
}

export default withStyles(styles)(Survey2);
