const got = require('got');
const axios = require('axios');
const fetch = require('fetch');
const request = require('request');
const promisify = require('promisify');
const requestPromise = require('request-promise');

const sadUrl = 'https://svc-helper-api-wrong.clause.io/multipart-upload';
const happyUrl = 'https://svc-helper-api.clause.io/';
const grumpyUrl = 'https://svc-helper-api.clause.io/errors';

const runRequest = async (url) => {
  console.log('---------------------------> START request');
  try {
    // await doesn't make sense for request...
    await request(url, (error, response, body) => {
	    console.log('REQUEST error:', error);
	    console.log('REQUEST statusCode:', response?.statusCode);
	    console.log('REQUEST body:', body);
      console.log('REQUEST DONE');
    });
  } catch (error) {
    console.log('REQUEST THROWS ', error);
  }
  console.log('---------------------------> FINISH request');
}

const runGot = async (url) => {
  console.log('---------------------------> START got');
  try {
    const response = await got.get(url)
    console.log('GOT statusCode:', response?.statusCode);
    console.log('GOT DONE');
  } catch (error) {
    console.log('GOT THROWS ', error);
  }
  console.log('---------------------------> FINISH got');
}

const run = async () => {
  await runGot(happyUrl);
  // await runGot(sadUrl);
  // await runRequest(sadUrl);
  // await runRequest(grumpyUrl);
}

run();
