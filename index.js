const express = require("express");
const reactViews = require('express-react-views');
const app = express();
const port = 3000;

app.use('/public', express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

app.get('/', (req, res) => {
	res.render('index');
})
app.get('/home', (req, res) => {
	res.render('home');
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
