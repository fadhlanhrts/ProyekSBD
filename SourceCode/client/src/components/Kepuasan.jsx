import React from 'react'

const rating = ({rate2}) => {
    const star2= []
 
    for(let i=1; i<=4; i++){
        if(i <= rate2){
            star2.push(<i key={i} className="fas fa-star text-warning"></i>)
        } 
        else if(i === Math.ceil(rate2) && !Number.isInteger(rate2)){
            star2.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>)
        }
        else {
            star2.push(<i key={i} className="far fa-star text-warning"></i>)
        }
    }

    return (
        <>{star2}</>
    )
}

export default rating