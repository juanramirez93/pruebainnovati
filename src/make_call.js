const accountSid = 'xxxxxxxx';
const authToken = 'xxxxxx';
const client = require('twilio')(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;


const response = new VoiceResponse();
response.say({
    voice: 'woman',
    language: 'es-US'
}, 'Hola, esta aplicación esta en desarrollo!');
client.calls.create.arguments.
    client.calls.create(
        {
            url: '',
            to: '+573193657406',
            from: '+12563776689',
        },
        (err, call) => {
            console.log(err.message);
        }
    );
