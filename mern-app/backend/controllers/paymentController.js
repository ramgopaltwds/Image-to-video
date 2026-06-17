import { stripe } from "../config/stripe.js";

export const createCheckoutSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Pro Plan - Unlimited Videos",
          },
          unit_amount: 999, // $9.99
          recurring: {
            interval: "month",
          },
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.CLIENT_URL}/dashboard`,
    cancel_url: `${process.env.CLIENT_URL}/dashboard`,
    metadata: {
      userId: req.user.id,
    },
  });

  res.json({ url: session.url });
};