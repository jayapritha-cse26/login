#  Login System - Node.js + Express + EJS

This is a basic login system built using **Node.js**, **Express**, **EJS**, and **body-parser**. It displays a login form using EJS templates and handles form submissions via POST requests.

##  Project Structure

login-app/
├── views/
│ ├── base.ejs # Login form with EJS templating
│ ├── header.ejs # Reusable HTML head + opening body tag
│ └── footer.ejs # Reusable closing body and HTML tags
├── server.js # Main backend server code
├── package.json # Project configuration and dependencies


## Features

- Login form using HTML and EJS
- POST route to handle form submission
- Data passed using `body-parser`
- Console log for submitted email and password
- Modular header/footer with EJS includes

## Install dependencies:

   npm install

## Start the server:

npm start
## Open in browser:

http://localhost:3000

## Dependencies
Package	                     Version	                  Purpose
express	                     ^5.1.0             	Web server framework
ejs                        	 ^3.1.10	                Templating engine
body-parser	                 ^2.2.0              	Parse form data in POST requests

## Example Route Output
Form action: /submit

Output shown in terminal:
email: example@example.com, password: 12345
On webpage after submission:
Thank you, example@example.com.
## Author
S. Jayapritha

GitHub: jayapritha-cse26
LinkedIn: linkedin.com/in/jayapritha-s-44183526a

## License
This project is licensed under the ISC License.


