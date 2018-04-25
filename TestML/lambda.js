let AWS = require('aws-sdk');
const ml = new AWS.MachineLearning();
exports.handler = function (event, context, callback) {
	ml.predict({
		MLModelId: 'ml-WM5vFQuGvpg',
		PredictEndpoint: 'https://realtime.machinelearning.us-east-1.amazonaws.com',
		Record: {
			Var01: 32,
			Var02: services,
			Var03: divorced
		}
	}, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred
		else console.log(data);           // successful response
	});


	callback(null, 'Successfully executed');
}