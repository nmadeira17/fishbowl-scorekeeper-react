const express = require('express');
const path = require('path');
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.js');

const compiler = webpack(config);

const port = 8000;
const publicPath = path.join(__dirname, '../public');

app.get('/', function(req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/newGame', function(req, res) {
    res.sendFile(path.join(publicPath, 'newGame.html'));
});

app.get('/api', function(req, res) {
    res.send('<p>This is a api Data</p>');
});

app.use(webpackMiddleware(
    compiler,
    {
        noInfo: true,
        publicPath: config.output.publicPath
    }
));

app.listen(port, function(error) {
    if (error) {
        console.log(error);
    } else {
        console.log(`Application running on port: ${port}`);
    }
})