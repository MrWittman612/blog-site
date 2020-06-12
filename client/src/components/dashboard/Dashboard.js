import React from 'react';
import { makeStyles, CssBaseline } from '@material-ui/core';

import TopNavBar from './TopNavBar';
import SideNav from './SideNav';
import DashboardMain from './DashboardMain';
import NavBarProvider from '../../context/NavBarProvider';

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <NavBarProvider>
      <div className={classes.root}>
        <CssBaseline />
        <TopNavBar />
        <SideNav />

        <DashboardMain />
      </div>
    </NavBarProvider>
  );
}
