require('./debug');
var randomAlphaNumeric = function randomAlphaNumeric()
{
    // var to receive new random id
    var rndID = "";
    // lists of lowercase letter and numbers
    var alphanumeric = "abcdefghijklmnopqrstuvwxyz0123456789";

    //loop 5 times
    for( var i=0; i < 5; i++ ) {
        //added each character grabbed at random locations from alphanumeric string
        rndID += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
    }
	
    console.log("New random ID created: " + rndID);
    return rndID;
};

module.exports = randomAlphaNumeric;