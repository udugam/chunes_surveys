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

class Survey1 extends Component {

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
                  How much of a music enthusiast are you? *
                </Typography>
                <Select
                    value={this.props.s1q1}
                    onChange={handleInputChange('s1q1')}
                    id={'s1q1'}
                >
                  <MenuItem value={'1'}>1</MenuItem>
                  <MenuItem value={'2'}>2</MenuItem>
                  <MenuItem value={'3'}>3</MenuItem>
                  <MenuItem value={'4'}>4</MenuItem>
                  <MenuItem value={'5'}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Question 2 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
                Do you share music with others? If so how?
              </Typography>
              <TextField
                id={'s1q2'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q2}
                onChange={handleInputChange('s1q2')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 3 */}
            <Grid className={classes.question}>
              <FormControl className={classNames(classes.margin, classes.textFieldLarge)}>
                <Typography variant="h6">
                In the last month, how times did you share music with your friends?
                </Typography>
                <Select
                    value={this.props.s1q3}
                    onChange={handleInputChange('s1q3')}
                    id={'s1q3'}
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

            {/* Question 4 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How do you currently discover music?
              </Typography>
              <TextField
                id={'s1q4'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q4}
                onChange={handleInputChange('s1q4')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 5 */}
            <Grid className={classes.question}>
              <FormControl className={classNames(classes.margin, classes.textFieldLarge)}>
                <Typography variant="h6">
                  How do you consume music on Chunes?
                </Typography>
                <Select
                    value={this.props.s1q5}
                    onChange={handleInputChange('s1q5')}
                    id={'s1q5'}
                >
                  <MenuItem value={'Full Song'}>Full Song</MenuItem>
                  <MenuItem value={'30 Seconds'}>30 Seconds</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Question 6 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How often do you actively look for new music?
              </Typography>
              <TextField
                id={'s1q6'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q6}
                onChange={handleInputChange('s1q6')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 7 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How would you describe this application to someone?
              </Typography>
              <TextField
                id={'s1q7'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q7}
                onChange={handleInputChange('s1q7')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 8 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              If you can change one thing about Chunes, what would it be?
              </Typography>
              <TextField
                id={'s1q8'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q8}
                onChange={handleInputChange('s1q8')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 9 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How could we make Chunes better?
              </Typography>
              <TextField
                id={'s1q9'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q9}
                onChange={handleInputChange('s1q9')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 10 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What are your thoughts on Chunes?
              </Typography>
              <TextField
                id={'s1q10'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q10}
                onChange={handleInputChange('s1q10')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 11 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What are your favorite moments from the applications so far?
              </Typography>
              <TextField
                id={'s1q11'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q11}
                onChange={handleInputChange('s1q11')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 12 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What would you recommend we can improve on?
              </Typography>
              <TextField
                id={'s1q12'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q12}
                onChange={handleInputChange('s1q12')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 13 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              How do you see yourself using the application?
              </Typography>
              <TextField
                id={'s1q13'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q13}
                onChange={handleInputChange('s1q13')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 14 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What music streaming application are you currently using right now?
              </Typography>
              <TextField
                id={'s1q14'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q14}
                onChange={handleInputChange('s1q14')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 15 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              What's missing from the current music applications you are using?
              </Typography>
              <TextField
                id={'s1q15'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q15}
                onChange={handleInputChange('s1q15')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 16 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              If you haven't use the application, can you let know why?
              </Typography>
              <TextField
                id={'s1q16'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q16}
                onChange={handleInputChange('s1q16')}
                multiline
                fullWidth
              />
            </Grid>

             {/* Question 17 */}
             <Grid className={classes.question}>
              <Typography variant="h6">
              What are the current issues you see in the application at the moment?
              </Typography>
              <TextField
                id={'s1q17'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q17}
                onChange={handleInputChange('s1q17')}
                multiline
                fullWidth
              />
            </Grid>

             {/* Question 18 */}
             <Grid className={classes.question}>
              <Typography variant="h6">
              Did you have an challenges when posting a song?
              </Typography>
              <TextField
                id={'s1q18'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q18}
                onChange={handleInputChange('s1q18')}
                multiline
                fullWidth
              />
            </Grid>

            {/* Question 19 */}
            <Grid className={classes.question}>
              <Typography variant="h6">
              Would you recommend Chunes to a friend? Why or why not?
              </Typography>
              <TextField
                id={'s1q19'}
                label={'Answer Here'}
                className={classNames(classes.margin, classes.textFieldLarge)}
                value={this.props.s1q19}
                onChange={handleInputChange('s1q19')}
                multiline
                fullWidth
              />
            </Grid>

          </Grid>
    );
  }
}

export default withStyles(styles)(Survey1);
