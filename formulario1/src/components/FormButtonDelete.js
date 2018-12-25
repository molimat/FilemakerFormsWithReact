import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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

function FormButtonDelete(props) {
  const { classes, pristine, reset, submitting  } = props;

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button} disabled={pristine || submitting} onClick={reset}>
        Delete
        <DeleteIcon className={classes.rightIcon} />
      </Button>  
    </div>
  );
}

FormButtonDelete.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormButtonDelete);
