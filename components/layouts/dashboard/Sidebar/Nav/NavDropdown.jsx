import pathToRegexp from 'path-to-regexp';
import PropTypes from 'prop-types';
import React, { Fragment, PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';

import { MenuList, MenuItem } from '../../../../Menu';
import ListItemIcon from './ListItemIcon';
import ListItemText from './ListItemText';

class SidebarNavDropdown extends PureComponent {
  state = { expanded: undefined };

  componentDidMount = () => {
    this.setExpanded();
  };

  componentDidUpdate = (prevProps) => {
    const { location, children } = this.props;

    if (prevProps.location.pathname !== location.pathname) {
      this.setExpanded();
    }
    if (React.Children.count(prevProps.children) !== React.Children.count(children)) {
      this.setExpanded();
    }
  };

  setExpanded = () => {
    const { children, location } = this.props;
    const isActive = dropdownItem => pathToRegexp(location.pathname).test(dropdownItem.props.to);

    this.setState({
      expanded: React.Children.toArray(children).some(isActive),
    });
  };

  toggleExpanded = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };

  render = () => {
    const { expanded } = this.state;
    const {
      classes, icon: Icon, text, children,
    } = this.props;

    return (
      <Fragment>
        <MenuItem
          selected={expanded}
          className={classes.mainNavItem}
          onClick={this.toggleExpanded}
        >
          {Icon && (
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
          )}
          <ListItemText>{text}</ListItemText>
          <svg
            style={{
              transform: expanded ? 'rotateZ(180deg)' : null,
              transition: 'all 0.5s ease 0s',
            }}
            width="12"
            height="6"
            viewBox="0 0 12 6"
          >
            <path
              d="M0.0944805 0.263158L0.285453 0.0873065C0.411871 -0.0291022 0.616293 -0.0291022 0.742711 0.0873065L5.99849 4.92941L11.257 0.0873065C11.3834 -0.0291022 11.5878 -0.0291022 11.7142 0.0873065L11.9052 0.263158C12.0316 0.379567 12.0316 0.567802 11.9052 0.684211L6.22981 5.91269C6.10339 6.0291 5.89897 6.0291 5.77255 5.91269L0.0971699 0.684211C-0.0319376 0.567802 -0.0319376 0.379567 0.0944805 0.263158Z"
              fill="white"
            />
          </svg>
        </MenuItem>
        <Collapse in={expanded}>
          <MenuList disablePadding className={classes.list}>
            {children}
          </MenuList>
        </Collapse>
      </Fragment>
    );
  };
}

SidebarNavDropdown.defaultProps = {};

SidebarNavDropdown.propTypes = {
  classes: PropTypes.shape().isRequired,
  icon: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default withStyles(theme => ({
  mainNavItem: {
    padding: '10px 20px',
    fontSize: '20px',
    color: theme.palette.common.white,
  },
  list: {
    backgroundColor: 'rgba(0, 0, 0, 0.14)',
    borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
  },
}))(withRouter(SidebarNavDropdown));
