const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const APIroutes = require('./APIroutes');
const HTMLroutes = require('./HTMLroutes');

// Middleware
app.use(express.urlencoded( { extended: true }));
app.use(express.json());
app.use(express.static('public'));

// use apiRoutes
app.use('/api', APIroutes);
app.use('/', HTMLroutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});