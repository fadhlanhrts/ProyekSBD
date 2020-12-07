import React from 'react'
import Kepentingan from './Kepentingan'
import Kepuasan from './Kepuasan'

const Penilaian = ({peserta}) => {
    return (
        <div
         
        className="row row-cols-3 mb-2">
            {peserta.map((peserta) => {
                return(
                   <div className="card text-white bg-primary mb-3 mr-4" style={{maxWidth: "30%"}}>
                <div className="card-header d-flex justify-content-between">
                    <span>{peserta.npm}</span>
                    <span><Kepentingan rate1={peserta.kepentingan}/></span>
                
                    <span><Kepuasan rate2={peserta.kepuasan}/></span>
                </div>
                <div className="card-body">
                    <p className="card-text">{peserta.komentar}</p>
                </div>
    </div>    
                )
            })}
                  
        </div>
    )
}

export default Penilaian
