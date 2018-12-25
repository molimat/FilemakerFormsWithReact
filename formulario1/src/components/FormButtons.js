import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';

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

function FormButtons(props) {
  const { classes } = props;
  return (
    <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>
    
    </div>
  );
}

FormButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormButtons);
