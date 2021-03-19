const got = require('got');
const axios = require('axios');
const fetch = require('fetch');
const request = require('request');
const promisify = require('promisify');
const requestPromise = require('request-promise');

const sadUrl = 'https://svc-helper-api-wrong.clause.io/multipart-upload';
const grumpyUrl = `https://svc-helper-api.clause.io/errors/500`
const happyUrl = 'https://svc-helper-api.clause.io/';

const runRequest = (url) => {
  console.log('---------------------------> START request');

  request(happyUrl, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
  });
  console.log('---------------------------> FINISH request');
}

const runGot = async (url) => {
  console.log('---------------------------> START got with url ', url);
  try {
    const response = await got.get(url, { throwHttpErrors: false })
    // console.log('GOT statusCode:', response?.statusCode);
    // console.log('GOT body:', response?.body);
    console.log('GOT response:', response);
    console.log('GOT DONE');
  } catch (error) {
    console.log('GOT THROWS ', error);
  }
  console.log('---------------------------> FINISH got with url ', url);
}

const runCallbackLibraries = () => {
  // request
  // equivalent in got

  // await runRequest(sadUrl);
};

const runPromiseLibraries = async () => {
  // request-promise, promisifiy, etc.
  // equivalent in got
  // await runGot(happyUrl);
  await runGot(grumpyUrl);

};

const run = () => {

  // runCallbackLibraries();
  runPromiseLibraries();


  /*
    * Set up calls so they all 'do the same thing'
    * Collect response examples
    * Collect error examples
  */
}

run();
