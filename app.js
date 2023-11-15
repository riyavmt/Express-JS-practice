const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/404');
const contactRoutes = require('./routes/contact-us');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);


app.use(errorController.get404Page);


app.post('/success',(req,res)=>{
  res.status(200).send('<h1>Form Submitted Successfully!</h1>');
})


app.listen(3000);
