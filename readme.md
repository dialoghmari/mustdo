# MustDo : Todo Node Express API

[![dependencies Status](https://david-dm.org/terrestris/node-project-template/status.svg)](https://david-dm.org/terrestris/node-project-template) [![devDependencies Status](https://david-dm.org/terrestris/node-project-template/dev-status.svg)](https://david-dm.org/terrestris/node-project-template?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple node express project template. This can be used as a starting point projects depending on API Rest Web-Services where the following is already
preconfigured:
* MVC
* Babel, toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript.
* [Mongoose](https://www.npmjs.com/package/mongoose), an elegant [mongodb](https://www.mongodb.com/) object modeling for node.js.

This project is not designed to be used for session-like auth, and  do not offer any cookie sessions.

## Useful commands

Install dependencies

    npm install



Start development server with hot reloading (open `http://localhost:3000/` and find your way through the directory listing)

    npm start

## Useful tests
First, create your first todo item by making a POST (application/x-www-form-urlencoded) request to 
> localhost:3000/todo

To see all todo item, make a get request to /todo. In the same way you can update(PUT), delete or add (POST) other items.

## Authors

* **[Dhiaeddine LOGHMARI](http://dialoghmari.com/)** - *Initial work* 

Feel free to contribute.

## License

This project is licensed under the MIT License.

