const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const count = req.body.item_sample;
      const line_items = [];
      if (count) {
        line_items.push({
          price: "price_1JT3HhAF9zx6jvxpJc0iyLEH",
          quantity: count,
          tax_rates: [ "txr_1JT3IAAF9zx6jvxpPbtcKrZH" ], // https://stripe.com/docs/payments/checkout/taxes?tax-calculation=tax-rates#fixed-tax-rates
        });
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
        payment_intent_data: {
          receipt_email: "test@hideo54.com",
        },
        shipping_address_collection: {
          allowed_countries: ["JP"],
        },
        shipping_rates: [
          "shr_1JT3JPAF9zx6jvxprtDfSe80",
        ],
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
