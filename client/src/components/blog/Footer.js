import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Container, Typography } from '@material-ui/core';

import { Copyright } from '../../utils/Copyright';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>
          {title}
        </Typography>
        <Typography
          variant='subtitle1'
          align='center'
          color='textSecondary'
          component='p'>
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
