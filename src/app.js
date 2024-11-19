
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Set the directory for views
app.set('views', path.join(__dirname)); // Pointing to the `src` directory
app.set('view engine', 'ejs'); // Setting EJS as the template engine

// Route to render the report
app.get('/report', (req, res) => {
    console.log('Inside /report route');

    // Read JSON data
    const reportData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8'));
    console.log('Report Data:', reportData);

    // Render the EJS template
    res.render('template', { data: reportData }); // template.ejs
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));



// const express = require('express');
// const ejs = require('ejs');
// const app = express();

// app.set('view engine', 'ejs');

// // Serve the report
// app.get('/report', (req, res) => {
//     console.log('res',res);
//     const reportData = require('./data.json'); // Path to your JSON data
//     console.log('reportData',reportData);
//     res.render('report', { data: reportData });
// });

// app.listen(3000, () => console.log('Server Tunning on http://localhost:3000'));


// app.use((req, res, next) => {
//     console.log(`Request URL: ${req.url}`);
//     next();
// });

// app.get('/html-report', (req, res) => {
//     console.log('Inside /report route');
//     const reportData = require('./data.json'); // Path to your JSON data
//     res.render('report', { data: reportData });
// });

// app.listen(3000, () => console.log('Server running on http://localhost:3000'));