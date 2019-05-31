const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:XzFdmPs73p42ZAHY@mongodbcluster-1jn2i.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use(require('./routes/data'));

app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
})