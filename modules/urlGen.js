var randomId = require("./alphanumeric");

var generateUrl = function(url){

    //grab the first 3 char of the link
    var newUrl = "ly/" + url.substr(0,3);

    //generate a random alphanumeric length of 4
    newUrl += randomId();

    return newUrl;
};

module.exports = generateUrl;