import React from 'react'
import {Card , Button} from 'react-bootstrap';
export default function CandyPreview({ candy }) {
    return (
        <div className="candy-card">
            <Card>
                <Card.Img variant="top" src={candy.url} />
                <Card.Body>
                    <Card.Title>{candy.name}</Card.Title>
                    <Card.Text>
                       <span className="candy-price"> {candy.price}$ </span>
                    </Card.Text>
                </Card.Body>
                    <Button variant="outline-primary">Add to cart</Button>
            </Card>

        </div>
    )
}
