// const express = require("express");
// const app = express();
// const { resolve } = require("path");
// const cors = require("cors");

// // Replace if using a different env file or config
// const env = require("dotenv").config({ path: "./.env" });

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });
// app.use(cors())
// app.use(express.static(process.env.STATIC_DIR));

// app.get("/", (req, res) => {
//   const path = resolve(process.env.STATIC_DIR + "/index.html");
//   console.log("/ this path")
//   res.sendFile(path);
// });

// app.get("/config", (req, res) => {
//   console.log("/ this config file")

//   res.send({
//     publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// app.post("/create-payment-intent", async (req, res) => {
//   try {
//     console.log("/ intent")

//     const paymentIntent = await stripe.paymentIntents.create({
//       currency: "INR",
//       amount: 1254,
//     });

//     // Send publishable key and PaymentIntent details to client
//     res.send({
//       clientSecret: paymentIntent.client_secret,
//     });
//   } catch (e) {
//     return res.status(400).send({
//       error: {
//         message: e.message,
//       },
//     });
//   }
// });

// app.listen(5252, () =>
//   console.log(`Node server listening at http://localhost:5252`)
// );



const dotenv = require('dotenv');
const mongoose=require('mongoose');
//it has to be on the top because if error occurs before it then the app would crash
// if the console.log(x) written at the end is written above the process.on('uncaughtException') then app would have crashed with its stack trace
process.on('uncaughtException',err=>{
  console.log(err.name,err.message);
  process.exit(1);
})
const port = 3001;
dotenv.config({ path: './.env' });
const app = require('./app');

// console.log(app.get('env'));//environment is development, it depends for eq it can be production or anything
// console.log(process.env);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB sucessfully connected!!!!'));
 


const server=app.listen( port||process.env.PORT, () => {
  console.log('listening on port : 3001');
});

// note : to add any environment variable use-

// $env:NODE_ENV="production"  here NODE_ENV is varaible name


// process.on('unhandledRejection', err => {
//   const fullMessage = err.message;
//   const errmsgStart = 0; // Start at the beginnning
//   const newline = /\n/; // new line character
//   const errmsgStop = fullMessage.search(newline); // Find new line
//   const errmsgLen = errmsgStop - errmsgStart;
//   const errorText = fullMessage.substr(errmsgStart, errmsgLen);
//   console.log(`💥Error Name💥: ${err.name}`);
//   console.log(`💥💥Error Text: ${errorText}`);
//   console.log('UNHANDLED REJECTION! Shutting down!');
//   server.close(() => {
//     process.exit(1);
//   });
// });



// // console.log(x);// it is written to test the uncaught exception hander at the top of the code
