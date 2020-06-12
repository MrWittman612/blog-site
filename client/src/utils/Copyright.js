import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

export function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' to={'/pricing'}>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
