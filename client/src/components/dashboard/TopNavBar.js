import React, { useContext } from 'react';
import clsx from 'clsx';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  makeStyles,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
} from '@material-ui/icons';

import { NavBarContext } from '../../context/NavBarProvider';

import { drawerWidth } from './Dashboard';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopNavBar() {
  const classes = useStyles();
  const { open, handleDrawerOpen } = useContext(NavBarContext);

  return (
    <AppBar
      position='absolute'
      className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            open && classes.menuButtonHidden
          )}>
          <MenuIcon />
        </IconButton>
        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}>
          Dashboard
        </Typography>
        <IconButton color='inherit'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
