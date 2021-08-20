import React from 'react'
import {Card , Button} from 'react-bootstrap';
export default function CandyPreview({ candy, userCart, setUserCart }) {

    const onAddToCart = (candy) =>{
        const userCopy = Array.from (userCart)
        setUserCart (userCopy => [...userCopy, candy])
    }

    // setMyArray(oldArray => [...oldArray, newElement]);


    return (
        <div className="candy-card">
            <Card>
                <Card.Img variant="top" src={candy.url} />
                <Card.Body>
                    <Card.Title>{candy.name}</Card.Title>
                    <Card.Text>
                       <span className="candy-price"> {candy.price}$ </span>
                    </Card.Text>
                    {/* <Card.Text>
                       <span className="in-stock"> {candy.inStock? 'In Stock' : 'Out of stock'} </span>
                    </Card.Text> */}
                </Card.Body>
                    <Button onClick={() => {onAddToCart(candy)}} title ={`${candy.inStock? 'In stack' : 'Out of Stock'}`} className={`${candy.inStock}`} variant="outline-success">{`${candy.inStock? 'Add to cart' : 'Out of Stock'}`}</Button>
            </Card>

        </div>
    )
}
