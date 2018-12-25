import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import { submit } from 'redux-form'
import { connect } from 'react-redux'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function FormButtonSend(props) {
  const { classes, submitting, pristine, dispatch } = props;
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <Button 
        variant="contained" color="primary" 
        className={classes.button} 
        disabled={pristine || submitting}
        onClick={() => dispatch(submit('MaterialUIForm'))}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>    
    </div>
  );
}

FormButtonSend.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(FormButtonSend));
