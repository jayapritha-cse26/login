const express=require('express')
const bodyParser = require('body-parser');
const app =express();
const port=process.env.PORT||3000;
app.set('view engine','ejs')
//midlewarw using to pass the data
app.use(bodyParser.urlencoded({ extended: true }));
//home route
app.get('/',(req,res)=>{
    res.render('base',{title:"Login System"})
})

// Route to handle form submission
app.post('/submit', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Output to console or use it however you like
  console.log(`email: ${email}, password: ${password}`);
  res.send(`<h2>Thank you, ${email}.</h2>`);
})
app.listen(port,()=>{
    console.log("lostening to the server on http://localhost:3000")
})

  
