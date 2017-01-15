var db = require('./db');

exports.create = (usrURL, err, success) => {
  db.siteLink.create(usrURL).then(success).catch(err);
};

exports.find = (usrURL, err, success) => {
  db.siteLink.find({
    where: {
      id: usrURL.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

exports.findAll = (err, success) => {
  db.siteLink.findAll().then(success).catch(err);
};

exports.update = (usrURL, err, success) => {
  db.siteLink.find({
    where: {
      id: usrURL.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(usrURL).then(success).catch(err);
  }).catch(err);
};

exports.destroy = (usrURL, err, success) => {
  db.siteLink.destroy({
    where: {
      id: usrURL.id,
    },
  }).then(success).catch(err);
};
