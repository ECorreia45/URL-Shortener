const db = require('./db');

exports.find = function( usrURL, err, success){
    db.siteLink.find({
        where: {
            shortURL: usrURL.shortURL
        },
        include: [{
            all: true,
            nested: true
        }]
    }).then(success).catch(err);
};