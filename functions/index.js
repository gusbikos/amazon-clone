const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const stripe = require("stripe")('sk_test_51JiKKIH7b3O07IfKtlsazhD6WnvbnUXPYSj7niQzv7rxLKG5aLhQeTPxlQw2GoTLiLSWVgXeeASwSY6cdjADzB8B00uuRhYogq')

// Set up API

// - App config
const app = express() // - Set up express server

// - Middlewares
app.use(cors({ origin: true }))
app.use(express.json()) // - Send and pass data in json format

// - API routes
app.get('/', (request, response) => response.status(200).send('hello world')) // - Dummy route to check if things are working

app.post('/payments/create', async (request, response) => { // This url is used in Payment.js
    const total = request.query.total
    console.log('Payment Request Received BOOM!!!!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency aka cents
        currency: "usd",
    })

    // 201 response request was OK and created something (created paymentIntent)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app) // - backend express app running on a cloud function 

// Example endpoint
// (http://localhost:5001/clone-a8e93/us-central1/api)






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
