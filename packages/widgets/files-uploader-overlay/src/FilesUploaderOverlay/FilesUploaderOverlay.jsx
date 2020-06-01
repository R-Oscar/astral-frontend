/* eslint-disable react/jsx-props-no-spreading */
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useDropzone } from 'react-dropzone';

import { Box } from '@astral-frontend/components';
import { makeStyles } from '@astral-frontend/styles';

import FilesUploaderOverlayContext from '../FilesUploaderOverlayContext';
import FilesUploaderOverlayIcon from './FilesUploaderOverlayIcon';

const useStyles = makeStyles(
  theme => ({
    '@keyframes pulse': {
      from: {
        boxShadow: `0 0 0 0 ${theme.palette.primary.main}20`,
      },
      to: {
        boxShadow: `0 0 0 ${theme.spacing(8)}px ${
          theme.palette.primary.main
        }20`,
      },
    },
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#1D3F6655',
      outlineColor: theme.palette.common.white,
      outlineOffset: '-20px',
      outlineStyle: 'dashed',
      outlineWidth: 2,
      zIndex: 10000,
    },
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 108,
      height: 108,
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      animationName: '$pulse',
      animationDuration: '1s',
      animationIterationCount: 'infinite',
    },
    icon: {
      width: 40,
      height: 40,
      fill: theme.palette.common.white,
    },
  }),
  { name: 'FilesUploaderOverlay' },
);

const FilesUploaderOverlay = ({ className, Icon, children, ...config }) => {
  const classes = useStyles();
  const { isDragActive, getRootProps, getInputProps, open } = useDropzone(
    config,
  );
  const inputProps = getInputProps();
  const rootProps = getRootProps();
  const openFileDialog = React.useCallback(() => {
    open();
  }, []);

  return [
    <FilesUploaderOverlayContext.Provider
      key="overlay"
      value={{ openFileDialog }}
    >
      <Box {...rootProps} css={{ outline: 'none' }}>
        {isDragActive && (
          <div className={cn(classes.root, className)}>
            <div className={classes.iconWrapper}>
              <Icon className={classes.icon} />
            </div>
          </div>
        )}
        {children}
      </Box>
    </FilesUploaderOverlayContext.Provider>,
    <input key="input" {...inputProps} />,
  ];
};

FilesUploaderOverlay.defaultProps = {
  Icon: FilesUploaderOverlayIcon,
  className: null,
};

FilesUploaderOverlay.propTypes = {
  Icon: PropTypes.func,
  className: PropTypes.string,
};

export default FilesUploaderOverlay;
