const should = require('chai'),
expect = require('chai').expect,
supertest = require('supertest'),
app = supertest('http://localhost:3000');

// Test the server
describe('Server', () => {
  // Test the server homepage
  it('Server loads fine', (done) => {
    app.get('/').expect(200).end(done);
  });
  // Test the Routes
  describe('Routes', () => {
    // Test the /api endpoint
    it('/api loads fine', (done) => {
      app.get('/api').expect(200).end(done);
    });
    // Test the /api/v1 endpoint
    it('/api/v1 loads fine', (done) => {
      app.get('/api/v1').expect(200).end(done);
    });
  });
  // Test CRUD capabilities
  console.log('Make sure you setup a test Database on your .env file');
  describe('CRUD', () => {
    // Test posting the data to the DB
    it('Post through /api/v1/url/:url just fine', (done) => {
      app.post('/api/v1/url/elsoncorreia.com').expect(200).end(done);
    });
    // Test updating one data on DB
    it('Update through /api/v1/urls/1 just fine', (done) => {
      app.post('/api/v1/urls/1').set('Content-Type','application/json')
        .send({id: '2', url: 'unittest.com', shortURL: '/go/uni00ezg'})
        .expect(200)
        .end(done);
    });
    // Test getting one data from DB
    it('Get url through /api/v1/urls/2 just fine', (done) => {
      app.get('/api/v1/urls/2').expect(200).end(done);
    });
    // Test if all the data is returned
    it('Get all data through /api/v1/urls just fine', (done) => {
      app.get('/api/v1/urls').expect(200).end(done);
    });
    // Test deleting one data from DB
    it('Delete through /api/v1/urls/2 just fine', (done) => {
      app.delete('/api/v1/urls/2').expect(200).end(done);
    });
  })
});
