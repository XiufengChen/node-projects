var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response){
	var str = JSON.stringify(tweets);   //obj convert to JSON text
	var obj = JSON.parse(str);          //JSON text convert to obj
	console.log(tweets);                //print javascript obj
	console.log(str);                   //print JSON text
	for(var i in obj.statuses){
		console.log(obj.statuses[i].text);     //print each text
	}
});
