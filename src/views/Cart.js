import React from 'react'
import Alert from 'react-bootstrap/Alert';
export default function Cart({ userCart }) {
    console.log('userCarttttttt', userCart)

    const submitCart = () => {
        // <Alert severity="success">This is a success alert — check it out!</Alert>
        alert ('succes!')

    }

    return (
        <div className="cart-container">
            <tr> 
                <th> Image</th>
                <th> Name</th>
                <th> Price</th>
            </tr>
            {userCart.map((item) => {
                return <tr> 
                   <td>  <img className="item-in-cart-image" src={item.url}/>  </td>
                   <td> {item.name} </td>
                   <td> {item.price} $ </td>
                    </tr>
            })}

        <button onClick={submitCart} className="special-btn cart-btn"> Buy</button>
        </div>
    )


    // {candysForDisply.map((candy) => {
    // return <CandyPreview setUserCart={setUserCart} userCart={userCart} key={candy._id} candy={candy} />
    // })}
}
