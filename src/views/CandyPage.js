import React from 'react'
import CandyPreview from '../cmps/CandyPreview'


export default function CandyPage({candys}) {
    console.log(candys)
    return (
        <div> 
            <h1 className="title"> CANDYS </h1>
        <div className="candy-container">
            {candys.map((candy)=> {
                return <CandyPreview  key={candy._id} candy={candy}/>
            })}
        </div>
        </div>
    )
}
