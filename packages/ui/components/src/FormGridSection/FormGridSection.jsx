import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const Title = ({ className, children }) => <h3 className={className}>{children}</h3>;

Title.defaultProps = {
  children: null,
  className: null,
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const FormGridSection = ({
  classes, className, children, ...props
}) => (
  <div {...props} className={cn(classes.root, className)}>
    {children}
  </div>
);

FormGridSection.defaultProps = {
  className: null,
};

FormGridSection.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape().isRequired,
};

FormGridSection.Title = Title;

export default withStyles({
  root: {},
})(FormGridSection);
