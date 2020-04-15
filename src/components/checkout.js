import React from "react"
import { loadStripe } from "@stripe/stripe-js"
var quantity = 0;
const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "purple",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const apiKey = process.env.STRIPE_PUBLISHABLE_KEY
const stripePromise = loadStripe(apiKey)
return apiKey;
const redirectToCheckout = async event => {
  
  event.preventDefault()
  quantity += parseInt(prompt("QUANTITY"))
  if(quantity > 1000) {
      alert("Please contact us at the email address listed for orders over 1000 units.")
      return
  } 
  if(quantity <= 0){
      alert("Quantity must be at least 1 unit")
      return
  }
  const stripe = await stripePromise
  const { error } = await stripe.redirectToCheckout({
    items: [{ sku: "sku_H6Hip8Lv8riDd3", quantity: quantity }],
    successUrl: `http://localhost:8000/page-2/`,
    cancelUrl: `http://localhost:8000/`,
    shippingAddressCollection: {
        allowedCountries: ['US'],
    }
  })

  if (error) {
    console.warn("Error:", error)
  }
}
const Checkout = () => {
        return (
          <button style={buttonStyles} onClick={redirectToCheckout}>
              BUY THE GUPPIE CHORD
          </button>
        )
    }

export default Checkout