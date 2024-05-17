const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')("sk_test_51NfTG9SF9JKNtGSaXexRp2Fsqjljbzc6KyaUSYhCqAudYZ9NVgW2YBP7ENCQep8QZt0hal8uCzOb6jVWu5MmVZof0093ovPb8F");
const app = express();
app.use(cors());
app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", (req, res) => {
    res.send("Welcome into react shop website");
});

app.post('/checkout', async (req, res) => {
    let error;
    let status;
    try {
        const { product, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const key = uuidv4();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email,
                description: 'all products',
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            { idempotencyKey: key });
        status = "success";

    }
    catch (error) {
        console.log(error);
        status = "error"
    }
    res.json({ status });
})

app.listen(8080, () => {
    console.log('Your app is running on port number 8080');
});