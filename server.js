const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Route for serving the home page
app.get('/', (req, res) => {
    res.render('home' ,{ title: 'Home' });
});

// Route for serving the contact form
// Route for serving the contact form
app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});

// Route for handling contact form submission
app.post('/contact', (req, res) => {
    // Handle contact form submission here
    console.log(req.body); // Output form data to console
    res.send('Contact form submitted successfully!');
});

// Route for serving the appointment form
app.get('/appointement', (req, res) => {
    res.render('appointement', { title: 'Appointement' });
});

// Route for handling appointment form submission
app.post('/appointement', (req, res) => {
    // Handle appointment form submission here
    console.log(req.body); // Output form data to console
    res.send('Appointment form submitted successfully! We will contact you shortly to confirm your appointment.');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
