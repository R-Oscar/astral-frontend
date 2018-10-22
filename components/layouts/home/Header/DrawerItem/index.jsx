import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { MenuItem } from '../../../../Menu';

const HomeLayoutNavLink = ({ classes, ...props }) => (
  <MenuItem component={NavLink} activeClassName={classes.selected} classes={classes} {...props} />
);

HomeLayoutNavLink.defaultProps = {
  className: null,
};

HomeLayoutNavLink.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default withStyles({
  root: {
    // display: 'flex',
    // alignItems: 'center',
    // height: 'auto',
    // padding: '0 30px',
    // fontSize: '18px',
    // color: theme.palette.common.white,
    // textDecoration: 'none',
  },
  selected: {
    // background: theme.palette.primary.main,
    // '&:hover': {
    //   background: theme.palette.primary.main,
    // },
  },
})(HomeLayoutNavLink);
