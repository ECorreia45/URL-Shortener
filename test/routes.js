const util = require('debug_utility_tool');
const expect = require('chai').expect;
const request = require('supertest');

const routes = [
  {
    desc: 'Server should load fine',
    path: '/',
    meth: 'GET'
  },
  {
    desc: '/api/ GET endpoint loads fine',
    path: '/api',
    meth: 'GET'
  },
  {
    desc: '/api/v1 GET endpoint loads fine',
    path: '/api/v1',
    meth: 'GET'
  },
  {
    desc: '/api/v1/urls GET endpoint loads fine',
    path: '/api/v1/urls',
    meth: 'GET'
  },
  {
    desc: '/api/v1/url/:id GET endpoint loads fine',
    path: '/api/v1/url/:id',
    meth: 'GET'
  },
  {
    desc: '/api/v1/urls/:id POST endpoint loads fine',
    path: '/api/v1/urls/:id',
    meth: 'POST'
  },
  {
    desc: '/api/v1/urls/:id DELETE endpoint loads fine',
    path: '/api/v1/urls/:id',
    meth: 'DELETE'
  },
];

/* global describe it:true */
// Test the server
describe('Server', () => {

  let server;
  // Starts the server before each test by calling it
  before(() => {
    server = require('../server.js');
  });
  // Closes the server after each test
  after(() => {
    server.close();
  });

  routes.forEach( (route) => {

    switch (route.meth){
      case 'GET':
        it(route.desc, (done) => {
          request(server)
            .get(route.path)
            .set('Accept', 'application/json')
            .set('Accept', 'text/html')
            .expect(200)
            .end(done);
        });
        util.debug(`Route: ${route.path} loads fine`, 2);
        break;
      case 'POST':
        it(route.desc, (done) => {
          request(server)
            .get(route.path)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
        });
        util.debug(`Route: ${route.path} loads fine`, 2);
        break;
      case 'DELETE':
        it(route.desc, (done) => {
          request(server)
            .get(route.path)
            .expect(200)
            .end(done);
        });
        util.debug(`Route: ${route.path} loads fine`, 2);
        break;
    }

  })
});
