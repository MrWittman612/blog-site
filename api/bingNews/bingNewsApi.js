const axios = require('axios');
const { Router } = require('express');
const key = require('../../config/keys').rapidapiKey;

const router = Router();

const headersConfig = {
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'microsoft-azure-bing-news-search-v1.p.rapidapi.com',
    'x-rapidapi-key': key,
  },
  // params: {
  //   count: '1',
  //   q: 'Most Recent',
  // },
};

router.get('/trendingtopics', async (req, res) => {
  const config = headersConfig;
  try {
    const url =
      'https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/trendingtopics';
    const response = await axios.get(url, config);
    console.log(response.data);
    return res.status(200).send(response.data);
  } catch (e) {
    console.error(e);
  }
});

router.get('/news', async (req, res) => {
  const config = headersConfig;
  try {
    const url = 'https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/';
    let response = await axios.get(url, config);
    return res.status(200).send(response.data);
  } catch (e) {
    console.error(e);
  }
});

router.get('/topstory', async (req, res) => {
  const config = headersConfig;
  try {
    const url =
      'https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/search';
    const response = await axios(url, config);
    return res.status(200).send(response.data);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
