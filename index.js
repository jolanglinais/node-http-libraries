const got = require('got');
const axios = require('axios');
const fetch = require('fetch');
const request = require('request');
const promisify = require('promisify');
const requestPromise = require('request-promise');

const sadUrl = 'https://svc-helper-api-wrong.clause.io/multipart-upload';
const grumpyUrl = 'https://httpstat.us/500'
const happyUrl = 'https://httpstat.us/200';

const runRequest = (url) => {
  console.log('---------------------------> START request');

  request({
    uri: url,
    headers: { 'Accept': 'application/json' },
  }, function (error, response, body) {
    console.error('error:', error);
    console.log('REQUEST statusCode:', response?.statusCode);
    console.log('REQUEST statusMessage:', response?.statusMessage);
    console.log('REQUEST body:', response?.body);
  });
  console.log('---------------------------> FINISH request');
}

const runGot = async (url) => {
  console.log('---------------------------> START got with url ', url);
  try {
    const response = await got.get(url, {
      headers: { 'Accept': 'application/json' },
      throwHttpErrors: false
     })
    console.log('GOT statusCode:', response?.statusCode);
    console.log('GOT statusMessage:', response?.statusMessage);
    console.log('GOT body:', response?.body);
    console.log('GOT error:', response?.error);
    // console.log('GOT response:', response);
    console.log('GOT DONE');
  } catch (error) {
    console.log('GOT THROWS ', error);
  }
  console.log('---------------------------> FINISH got with url ', url);
}

const runCallbackLibraries = async () => {
  // request
  // equivalent in got

  await runRequest(grumpyUrl);
};

const runPromiseLibraries = async () => {
  // request-promise, promisifiy, etc.
  // equivalent in got
  // await runGot(happyUrl);
  await runGot(grumpyUrl);

};

const run = () => {

  runCallbackLibraries();
  runPromiseLibraries();


  /*
    * Set up calls so they all 'do the same thing'
    * Collect response examples
    * Collect error examples
  */
}

run();
