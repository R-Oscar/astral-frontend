import React from 'react';

import { TableCell as MuiTableCell } from '@astral-frontend/core';
import { makeStyles } from '@astral-frontend/styles';

const useStyles = makeStyles(
  () => ({
    root: {
      padding: '10px 20px',
      // FIXME
      color: 'rgba(29, 63, 102, 0.62)',
    },
    head: {
      padding: '20px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  }),
  { name: 'TableCell' },
);

const TableCell = (props) => {
  const classes = useStyles();

  return <MuiTableCell classes={classes} {...props} />;
};

export default TableCell;
