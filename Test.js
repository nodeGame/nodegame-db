var node = require('../nodegame-client/index.js');

node.setup('nodegame', {});

var Database = require('nodegame-db').Database;

var ngdb = new Database(node);

var mdb = ngdb.getLayer('MongoDB');

mdb.connect(function() {
    console.log('Connected');
    mdb.disconnect();
});
