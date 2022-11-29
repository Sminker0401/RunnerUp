const router = require('express').Router();

const apiRoutes = require('./api');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

// const Handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils"}));

// var source = document.getElementById("entry-template").innerHTML;
// var template = Handlebars.compile(source);

// var context = { title: "My New Post", body: "This is my first post!" };
// var html = template(context);