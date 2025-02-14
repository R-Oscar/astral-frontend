import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@astral-frontend/styles';

const AstralSquareLogo = ({ classes, color, ...props }) => {
  const oddClassName = cn({
    [classes.odd]: color === 'brand',
    [classes.monochrome]: color === 'monochrome',
  });
  const evenClassName = cn({
    [classes.even]: color === 'brand',
    [classes.monochrome]: color === 'monochrome',
  });

  return (
    <svg viewBox="0 0 158 158" {...props}>
      <path
        className={oddClassName}
        d="M115.3 50.8c-.2.6-.3 1-.4 1.3-1.1 3.5-.5 6.8 1.7 9.6 3.7 4.9 8.7 7.9 14.8 8.7 5.9.8 11.3-.7 16.4-3.6 2.1-1.2 4-2.8 6-4.2l1.5-1.2c2.9 7.4 2.7 29.2-.3 35.7-.4-.5-.7-.9-1-1.4-5.3-7.2-11.9-12.9-19.7-17.3-5.9-3.3-12.3-5.1-19.1-4.7-.6 0-1.2 0-1.7.1-1.8.6-3.2 0-4.7-1.1-4.7-3.3-9.1-6.9-13-11.1-2.7-3-5-6.3-6.6-10-2.8-6.3-3.3-12.7-.7-19.1 4.5-11.4 12.2-20.1 23.6-24.9 12.6-5.3 24.2-2.7 34.2 6.6 3 2.8 5.4 6.1 7.1 9.9 3.2 7.3 2.9 14.4-1 21.4-2.9 5.1-7 9-12.1 11.8-2.4 1.4-5 2.2-7.9 2.1-1.5-.1-2.8-.5-3.9-1.6-.9-.9-1.1-1.7-.3-2.7 1.1-1.3 2.4-2.6 3.8-3.6 5.8-4.4 11.6-8.6 17.4-12.9 2-1.5 2.2-1.7 1.1-3.9-4-8.2-9.7-14.8-18.3-18.4-13.1-5.5-27 .7-33.6 10.7-6.7 10.3-.2 20.1 8.9 22.9 1.8.5 3.7.6 5.6.8.6.2 1.3.1 2.2.1zM42.1 106.9c.1-.4.1-.6.2-.9 1.5-4 .7-7.6-2-10.8-5.4-6.4-12.3-9.1-20.6-8-6.2.8-11.4 3.7-16.1 7.7-.5.4-.9.8-1.4 1.2-2.9-4.9-2.9-26.2 0-35.8.4.6.8 1 1.2 1.5C8.7 68.9 15.2 74.6 22.9 79c7 3.9 14.6 5.7 22.6 4.5.5-.1 1.1.1 1.6.4 6.1 4 11.7 8.5 16.2 14.2 2 2.5 3.6 5.1 4.9 8 2.7 6.2 3.1 12.5.7 18.7-4.5 11.5-12.3 20.3-23.7 25.1-17.2 7.3-34.5-1.7-41.4-16.7-1.7-3.5-2.3-7.3-2-11.2.2-2.9.9-5.6 2.2-8.1 3.1-6.2 7.8-10.9 13.9-14.1 2.5-1.3 5.1-2 8-1.5.4.1.9.2 1.3.4 2.8 1.1 3.1 2.7 1.1 4.8-1 1-2.1 2-3.3 2.8L7.6 119.2c-1.5 1.1-1.7 1.4-1 3 4.7 10.1 11.7 17.6 22.9 20.4 4.4 1.1 8.8.9 13.2-.4 5.6-1.6 10.3-4.8 14.2-9.2 1.5-1.7 2.7-3.6 3.5-5.8 2-5.5 1.1-10.4-2.8-14.7-3.6-3.9-8.1-5.8-13.4-5.7-.6.1-1.3.1-2.1.1z"
      />
      <path
        className={evenClassName}
        d="M95.8 156c-11.8 2.6-23.3 2.6-35.2-.3.8-.6 1.3-1 1.8-1.4 7.9-6.2 14.3-13.7 18.4-23 2.7-6 3.6-12.4 2.7-19-.1-.6.1-1.3.4-1.7 4.2-6.5 9-12.5 15.3-17.2 4.2-3.2 8.9-5.4 14.2-6 4-.5 7.9 0 11.6 1.6 11.6 5 20.5 13 24.9 25.1 6.3 17.4-3.4 33.8-17.6 40.1-6.9 3.1-13.8 2.5-20.4-1.3-5.1-2.9-9-7-11.7-12.2-.9-1.7-1.5-3.7-2-5.7-.4-1.8-.1-3.6.9-5.3 1-1.7 2.1-1.9 3.5-.6 1.2 1.1 2.3 2.3 3.3 3.6 4.4 5.8 8.6 11.7 13 17.6 1.2 1.6 1.5 1.8 3.1 1 9.6-4.5 17.1-11.2 20-21.7 2.9-10.5-.2-19.7-7.6-27.5-2.7-2.8-5.9-4.9-9.7-5.8-3.9-.9-7.5-.1-10.7 2.2-4.7 3.4-7.2 8.1-7.4 13.9v2.9c-.6-.1-1-.1-1.4-.3-3.4-1.1-6.5-.4-9.3 1.6-5 3.7-8 8.7-8.9 15-1 6.8 1.1 12.9 4.7 18.6 1.1 2 2.6 3.7 4.1 5.8zM51 42.4c1.1.2 2 .5 2.9.6 3.1.4 6-.4 8.4-2.4 5.7-4.8 8.7-11 8.4-18.5-.2-7-3.3-13-7.6-18.3-.5-.6-.9-1.1-1.6-1.9 11.9-2.6 23.4-2.5 35.4.2-.8.6-1.3 1-1.7 1.4C87.3 9.7 81 17.1 76.8 26.3c-2.7 6-3.8 12.4-2.9 18.9.1 1 0 1.7-.6 2.5-3.2 4.8-6.8 9.4-11 13.4-3 2.8-6.3 5.2-10 7-6.6 3.1-13.4 3.6-20 .8C21.2 64.2 12.6 56.5 8 45.2 1.1 28.2 9.8 10.9 24.8 4 32.5.5 40.1 1.4 47.1 6.1c4 2.7 7.2 6.2 9.7 10.4 1.3 2.2 2.2 4.5 2.5 7.1.2 1.8-.1 3.5-1.1 5-1 1.4-1.9 1.6-3.1.5-1.3-1.1-2.4-2.4-3.4-3.7-4.4-5.8-8.6-11.7-13-17.6-1.2-1.6-1.6-1.8-3.3-1-9.7 4.6-17.1 11.4-20 22.2-3.3 12.2 3 24.7 12 30.4 10.5 6.8 20.3-.3 22.9-9.1.5-1.7.6-3.6.8-5.4 0-1-.1-1.7-.1-2.5zM79.1 59.3c5 8.1 11.6 14.3 19.1 19.9-8 5-14.2 11.6-19.8 19.2-5-8.1-11.5-14.3-19.1-19.9 8-4.9 14.2-11.5 19.8-19.2z"
      />
      <path
        className={oddClassName}
        d="M132.6 32.2c-3 2.3-5.9 4.5-8.9 6.6-1.5 1.1-3.3 1.9-5.2 2.1-1.3.1-2.7.1-3.9-.3-2.1-.7-2.8-2.8-1.9-4.7.2-.4.4-.8.7-1.1 3.3-3.9 7.3-6.3 12.5-6.1 2.7 0 4.9 1.1 6.7 3.5zM24.9 125.5c3.1-2.3 6.1-4.6 9.2-6.8 2.2-1.5 4.7-2.3 7.5-1.9.8.1 1.7.5 2.4 1 1.2.9 1.5 2.3.9 3.7-.1.2-.2.5-.3.7-2.5 4.6-9.6 7.8-14.7 6.6-2-.4-3.7-1.4-5-3.3z"
      />
      <path
        className={evenClassName}
        d="M125.3 132.7c-.4-.4-.7-.7-1-1.1-1.6-2.1-3.3-4.3-4.9-6.5-1.4-1.9-2.5-4.1-2.8-6.5-.1-1.2 0-2.5.3-3.7.6-2 2.7-2.7 4.6-1.7 2 1.1 3.4 2.7 4.6 4.6 1.9 3.1 3 6.5 2.1 10.2-.3 1.9-1.2 3.5-2.9 4.7zM32.2 25.1c.2.3.5.5.7.8 1.7 2.3 3.5 4.6 5.2 6.9 1.5 2 2.5 4.2 2.7 6.7.1.9 0 1.8-.2 2.6-.5 2.4-2.8 3.4-4.9 2.2-2.2-1.2-3.7-3.1-4.9-5.3-1.7-3-2.5-6.3-1.6-9.8.5-1.7 1.4-3 3-4.1z"
      />
    </svg>
  );
};

AstralSquareLogo.defaultProps = {
  color: 'brand',
};

AstralSquareLogo.propTypes = {
  classes: PropTypes.shape().isRequired,
  /**
   * Цвет
   */
  color: PropTypes.oneOf(['brand', 'monochrome']),
};

export default withStyles({
  odd: {
    fill: '#b14f46',
  },
  even: {
    fill: '#4a6693',
  },
  monochrome: {
    fill: 'currentColor',
  },
})(AstralSquareLogo);
