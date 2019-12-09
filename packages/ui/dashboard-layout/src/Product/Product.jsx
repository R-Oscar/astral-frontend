import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { AstralSquareLogo } from '@astral-frontend/components';
import { withStyles } from '@astral-frontend/styles';

const DefaultLogo = props => <AstralSquareLogo color="monochrome" {...props} />;

const DashboardLayoutProduct = ({
  classes,
  className,
  Logo,
  title,
  ...props
}) => (
  <div className={cn(classes.root, className)} {...props}>
    <Logo className={classes.logo} />
    <div className={classes.title}>{title}</div>
  </div>
);

DashboardLayoutProduct.defaultProps = {
  className: null,
  Logo: DefaultLogo,
};

DashboardLayoutProduct.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  Logo: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default withStyles(
  theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      height: '75px',
      padding: '0 20px',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.dark,
    },
    logo: {
      flexShrink: 0,
      width: '32px',
      height: '32px',
      marginRight: '15px',
    },
    title: {
      flexGrow: 1,
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(32),
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  }),
  { name: 'DashboardLayoutProduct' },
)(DashboardLayoutProduct);
