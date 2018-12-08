const express = require("express"),
	app = express(),
	bodyParser = require("body-parser");

// port
const PORT = 5000 || process.env.PORT,
	IP = process.env.IP;


require('dotenv').config();
//settings

app.use(bodyParser.urlencoded({
	extended: true
}));
app.set('views', __dirname);
// app.engine('html', require('ejs').renderFile);
app.set("view engine", 'ejs');
app.use(express.static(__dirname + '/public'));


app.get("/", (req, res) => {
	res.render("index")
});

app.post('/sendMail', (req, res) => {
	console.log('the body of form:', req.body)
	const output = `
	<h3>You have new message from Your Portfolio site</h3>
	<p>Contact details:</p>
	<ul>
	<li>Name: ${req.body.name}</li>
	<li>Email: ${req.body.email}</li>
	</ul>
	<h4>Message</h4>
	<p>Message: ${req.body.message}</p>
	`

	var api_key = process.env.MAILGUN_API
	var domain = process.env.MAILGUN_DOMAIN
	var mailgun = require('mailgun-js')({
		apiKey: api_key,
		domain: domain
	});

	var data = {
		from: 'PORTFOLIO SITE <me@samples.mailgun.org>',
		to: process.env.MAIL,
		subject: 'Hello from the App',
		text: 'Mailgun awesomeness!',
		html: output
	};

	mailgun.messages().send(data, function (error, body) {
		if (error) {
			res.status(500).send('Something went wrong');
		}
		res.status(200).send('<i class="far fa-check-circle"></i>');
	});

});



app.listen(PORT, IP, () => {
	console.log(`YelpCamp Server runs smoothly at ${PORT}`);
});