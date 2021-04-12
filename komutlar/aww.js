exports.run = (clients, message, args) => {
	const randomPuppy = require('random-puppy');
	randomPuppy('aww')
	    .then(url => {
	        message.channel.send(url);
	    })
}
