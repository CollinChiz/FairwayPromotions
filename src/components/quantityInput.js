import React from "react"
import { loadStripe } from "@stripe/stripe-js"

const QuantityInput = () => {
    return (
        <input type="number" onChange = {updateQuantity(this)}></input>
    )
}