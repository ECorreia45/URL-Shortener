require('dotenv').config();
const expect = require('chai').expect;
const alphaNum = require('../modules/alphanumeric');
const db = require('../modules/db');
// const debug = require('../modules/debug');
const urlGen = require('../modules/urlGen');

/* global describe it:true */
describe('Modules', () => {
  describe('Alphanumeric', () => {
    it('Should return a random ID of length 5', () =>{
      const id = alphaNum();
      expect(id).to.have.length('5');
    });
  });
  describe('URL Generator', () => {
    it('Should return a link with initial equal to: "/go/exa" ', () => {
      const url = urlGen('example.com');
      const found = url.includes('/go/exa');
      expect(found).to.equal(true);
    });
  });
  describe('Database', () => {
    it('Should match .env DB info with this database info', () => {
      expect(db.seq.config.database).to.equal(process.env.DB_name);
      expect(db.seq.config.username).to.equal(process.env.DB_user);
      expect(db.seq.config.password).to.equal(process.env.DB_pass);
      expect(db.seq.config.host).to.equal(process.env.DB_host);
      expect(db.seq.config.port).to.equal(process.env.DB_port);
      expect(db.seq.options.dialect).to.equal(process.env.DB_schema);
    });
  });
});
