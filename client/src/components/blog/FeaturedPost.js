import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Hidden,
} from '@material-ui/core';

import Moment from 'react-moment';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { featuredPost } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {featuredPost.name}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                <Moment format='LL'>{featuredPost.datePublished}</Moment>
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {featuredPost.name}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={featuredPost.image.url}
              title={featuredPost.category}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  featuredPost: PropTypes.object,
};
