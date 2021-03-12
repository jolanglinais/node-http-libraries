const got = require('got');
const axios = require('axios');
const fetch = require('fetch');
const request = require('request');
const promisify = require('promisify');
const requestPromise = require('request-promise');

const wrongUrl = 'https://svc-helper-api-wrong.clause.io/multipart-upload';

const tryRequest = async (url) => {
  try {
    console.log('---------------------------> tryRequest');
    await request(url, (error, response, body) => {
	    console.log('REQUEST error:', error);
	    console.log('REQUEST statusCode:', response?.statusCode);
	    console.log('REQUEST body:', body);
      console.log('REQUEST DONE');
    });
  } catch (error) {
    console.log('REQUEST THROWS ', error);
  }
}

const tryAxios = async (url) => {
  try {
    console.log('---------------------------> tryAxios');
    const response = await axios.get(url)
    console.log('AXIOS statusCode:', response?.statusCode);
    console.log('AXIOS DONE');
  } catch (error) {
    console.log('AXIOS THROWS ', error);
  }
}

const run = async () => {
  await tryAxios(wrongUrl);
  await tryRequest(wrongUrl);
}

run();