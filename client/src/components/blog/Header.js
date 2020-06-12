import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Link,
} from '@material-ui/core';

import { Search as SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <Fragment>
      <Toolbar className={classes.toolbar}>
        <Button href='/' size='small'>
          Subscribe
        </Button>
        <Typography
          component='h2'
          variant='h5'
          color='inherit'
          align='center'
          noWrap
          className={classes.toolbarTitle}>
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button href='/login' variant='outlined' size='small'>
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component='nav'
        variant='dense'
        className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color='inherit'
            noWrap
            key={section.title}
            variant='body2'
            href={section.url}
            className={classes.toolbarLink}>
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
