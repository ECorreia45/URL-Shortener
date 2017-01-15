require('dotenv').config();
const expect = require('chai').expect,
alphaNum = require('../modules/alphanumeric'),
db = require('../modules/db'),
debug = require('../modules/debug'),
urlGen = require('../modules/urlGen');

describe('Modules', () => {
  describe('Alphanumeric', () => {
    it('Should return a random ID of length 5', () =>{
      let id = alphaNum();
      expect(id).to.have.length('5');
    })
  });
  describe('URL Generator', () => {
    it('Should return a link with initial equal to: "/go/exa" ', () => {
      let url = urlGen('example.com');
      let found = url.includes('/go/exa');
      expect(found).to.equal(true);
    })
  });
  describe('Database', () => {
    it('Should match .env DB info with this database info', () => {
      expect(db.seq.config.database).to.equal(process.env.DB_name);
      expect(db.seq.config.username).to.equal(process.env.DB_user);
      expect(db.seq.config.password).to.equal(process.env.DB_pass);
      expect(db.seq.config.host).to.equal(process.env.DB_host);
      expect(db.seq.config.port).to.equal(process.env.DB_port);
      expect(db.seq.options.dialect).to.equal(process.env.DB_schema);
    })
  });
  describe('Debug', () => {
    it('Debug should be fine');
  })
});