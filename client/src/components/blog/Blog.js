import { Container, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import {
  Facebook as FacebookIcon,
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
} from '@material-ui/icons';
import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import MainFeaturedPost from './MainFeaturedPost';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Technology', url: '/' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [mainFeaturedPost, setMainFeaturedPost] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/api/trendingtopics');
      setIsLoading(true);
      console.log(result.data.value);

      setFeaturedPosts(result.data.value);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTopStory = async () => {
      const result = await axios('/api/topstory');
      console.log('topstory', result.data.value);

      setMainFeaturedPost(result.data.value);
    };
    fetchTopStory();
  }, []);

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='Blog' sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {isLoading ? (
            <div>loading....</div>
          ) : (
            <Grid container spacing={4}>
              {featuredPosts.map((featuredPost) => (
                <FeaturedPost
                  key={featuredPost.name}
                  featuredPost={featuredPost}
                />
              ))}
            </Grid>
          )}
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title='From the firehose' posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </Fragment>
  );
}
