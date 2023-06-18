const express = require("express");
const app = express();
const { resolve } = require("path");
const cors = require("cors");

// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});
app.use(cors())
app.use(express.static(process.env.STATIC_DIR));

app.get("/", (req, res) => {
  const path = resolve(process.env.STATIC_DIR + "/index.html");
  console.log("/ this path")
  res.sendFile(path);
});

app.get("/config", (req, res) => {
  console.log("/ this config file")

  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    console.log("/ intent")

    const paymentIntent = await stripe.paymentIntents.create({
      currency: "INR",
      amount: 1254,
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

app.listen(5252, () =>
  console.log(`Node server listening at http://localhost:5252`)
);
