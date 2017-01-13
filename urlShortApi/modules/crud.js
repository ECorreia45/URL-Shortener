const db = require('./db');

exports.create = function(usrURL, err, success){
    db.siteLink.create(usrURL).then(success).catch(err);
};

exports.find = function( usrURL, err, success){
    db.siteLink.find({
        where: {
            id: usrURL.id
        },
        include: [{
            all: true,
            nested: true
        }]
    }).then(success).catch(err);
};

exports.findAll = function(err, success){
    db.siteLink.findAll().then(success).catch(err);
};

exports.update = function( usrURL, err, success){
    db.siteLink.find({
        where: {
            id: usrURL.id
        }
    }).then(function (existingData) {
        existingData.updateAttributes(usrURL).then(success).catch(err);
    }).catch(err);
};

exports.destroy = function( usrURL, err, success){
    db.siteLink.destroy({
        where: {
            id: usrURL.id
        }
    }).then(success).catch(err);
};