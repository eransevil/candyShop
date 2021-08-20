import React from 'react'
import CandyPreview from '../cmps/CandyPreview'
import { useEffect, useState } from 'react'


export default function CandyPage({ candies, setUserCart, userCart }) {
    const [filter, setFilter] = useState({ term: '' })
    const [candiesForDisply, setCandiesForDisply] = useState([...candies])

    const handleChange = ({ target }) => {
        const value = target.type === 'number' ? +target.value : target.value
        setFilter({ term: value })
    }

    useEffect(() => {
        const tempCandies = candies.filter(candy => candy.name.toLowerCase().includes(filter.term.toLowerCase()))
        setCandiesForDisply(tempCandies)
    }, [filter]) 

    return (
        <div>
            <h1 className="title"> OUR CANDIES </h1>
            <input className="search" placeholder="Search" type="Search" id="Search" name="Search" value={filter.term} onChange={handleChange} />
            <div className="candy-container">
                {candiesForDisply.map((candy) => {
                    return <CandyPreview setUserCart={setUserCart} userCart={userCart} key={candy._id} candy={candy} />
                })}
            </div>
        </div>
    )
}
