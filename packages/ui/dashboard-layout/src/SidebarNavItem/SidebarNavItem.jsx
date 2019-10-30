import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@astral-frontend/styles';

import LayoutContext from '../LayoutContext';
import SidebarContext from '../SidebarContext';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '20px 10px 20px 20px',
      lineHeight: theme.typography.pxToRem(20),
      textAlign: 'left',
      textDecoration: 'none',
      color: theme.palette.grey[600],
      margin: '0 5px',
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexShrink: 0,
      marginRight: '15px',
      width: '32px',
    },
    collapsedIcon: {
      margin: 0,
      '&:hover': {
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.light,
      },
    },
    text: {
      flexGrow: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxHeight: '20px',
    },
  }),
  {
    name: 'DashboardLayoutSidebarNavItem',
  },
);

const DashboardLayoutSidebarNavItem = React.forwardRef(
  ({
 className, component: Component, Icon, Text, ...props 
}, ref) => {
    const classes = useStyles();
    const { isSidebarOpen } = React.useContext(LayoutContext);
    const { isTransitioning } = React.useContext(SidebarContext);

    return (
      <Component ref={ref} className={cn(classes.root, className)} {...props}>
        {Icon && (
          <div
            className={cn(classes.icon, {
              [classes.collapsedIcon]: isSidebarOpen,
            })}
          >
            <Icon />
          </div>
        )}
        {!isTransitioning && isSidebarOpen ? (
          <Text className={classes.text} />
        ) : null}
      </Component>
    );
  },
);

DashboardLayoutSidebarNavItem.defaultProps = {
  className: null,
};

DashboardLayoutSidebarNavItem.propTypes = {
  className: PropTypes.string,
  component: PropTypes.oneOfType([
    PropTypes.shape(),
    PropTypes.string,
    PropTypes.func,
  ]).isRequired,
  Icon: PropTypes.func.isRequired,
  Text: PropTypes.func.isRequired,
};

export default DashboardLayoutSidebarNavItem;
