import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Cart({ userCart , loggedInUser, setUserCart}) {

    const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    : '//localhost:3030/api/'

    const [sumPrice, setSumPrice] = useState(0)

    const tax = () => {
        const temp = sumPrice * 1.17
        return parseInt(temp - sumPrice)
    }

    const total = () => {
        const taxAmount = tax()

        return taxAmount + sumPrice
    }

    const submitCart = async () => {
        const payload = {loggedInUser, userCart}
        
        await axios.post(`${BASE_URL}user/submitCart`, payload) 
        setUserCart([])
        alert('success!')

    }


    useEffect(() => {
        const sum = userCart.reduce((acc, candy) => {
            return acc + parseInt(candy.price)
        }, 0)
        setSumPrice(sum)
    }, [userCart])

    return (
        <div className="cart-container">
            <h1>🛒 MY CART 🛒</h1>
            <tr className="main-row-cart">
                <th> Image</th>
                <th> Product</th>
                <th> Price</th>
            </tr>

            {userCart.length? userCart.map((item,idx) => {
                return <tr key={idx}>
                    <td>  <img className="item-in-cart-image" src={item.url} />  </td>
                    <td> {item.name} </td>
                    <td> {item.price} $ </td>
                </tr>
            }): <h2> No items yet</h2>}
            <div className="sum-section">
                <span>  Subtotal  <span className="sum-item"> {sumPrice} $ </span>   </span>
                <span> Tax <span className="sum-item">  {tax()} $ </span> </span>
                <span> Total <span className="sum-item"> {total()} $ </span>  </span>
                <button onClick={submitCart} className="special-btn cart-btn pay-btn"> Buy</button>
            </div>
        </div>
    )


    // {candiesForDisply.map((candy) => {
    // return <CandyPreview setUserCart={setUserCart} userCart={userCart} key={candy._id} candy={candy} />
    // })}
}
