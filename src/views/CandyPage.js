import React from 'react'
import CandyPreview from '../cmps/CandyPreview'
import { useEffect, useState } from 'react'


export default function CandyPage({ candys, setUserCart, userCart }) {
    const [filter, setFilter] = useState({ term: '' })
    const [candysForDisply, setCandysForDisply] = useState([...candys])

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setFilter({ term: value })
    }

    useEffect(() => {
        const tempCandys = candys.filter(candy => candy.name.toLowerCase().includes(filter.term.toLowerCase()))
        setCandysForDisply(tempCandys)
    }, [filter])

    return (
        <div>
            <h1 className="title"> OUR CANDYS </h1>
            <input className="search" placeholder="Search" type="Search" id="Search" name="Search" value={filter.term} onChange={handleChange} />
            <div className="candy-container">
                {candysForDisply.map((candy) => {
                    return <CandyPreview setUserCart={setUserCart} userCart={userCart} key={candy._id} candy={candy} />
                })}
            </div>
        </div>
    )
}
