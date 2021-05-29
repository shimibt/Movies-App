const monggose = require('mongoose');

monggose.connect('mongodb://localhost:27017/usersDB', {useNewUrlParser : true, useUnifiedTopology: true }, () =>
{
})