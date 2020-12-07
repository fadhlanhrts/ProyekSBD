import React from 'react'

const rating = ({rate1}) => {
    const star1 = []
 
    for(let i=1; i<=4; i++){
        if(i <= rate1){
            star1.push(<i key={i} className="fas fa-star text-warning"></i>)
        } 
        else if(i === Math.ceil(rate1) && !Number.isInteger(rate1)){
            star1.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>)
        }
        else {
            star1.push(<i key={i} className="far fa-star text-warning"></i>)
        }
    }

    return (
        <>{star1}</>
    )
}

export default rating
