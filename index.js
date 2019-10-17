const readStream = require('./src/streams/actions/readStream.js'),
      msgEmitter = require('./src/emitter/msgEmitter'),
      fetchWeatherData = require('./src/fetch/fetchWeatherData'),
      streamName = 'StartWeatherFetch';

readStream(streamName);
msgEmitter.on('streamMessage', msg => fetchWeatherData(msg));
