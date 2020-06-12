import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Paper, Typography, Grid, Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  console.log('post props', post);

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(${post})`,
      }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post} alt={post} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component='h1'
              variant='h4'
              color='inherit'
              gutterBottom={true}>
              {post.name}
            </Typography>
            <Typography variant='h6' color='inherit' paragraph>
              {post.description}
            </Typography>
            <Link variant='subtitle1' href='#'>
              {post.linkText}
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
