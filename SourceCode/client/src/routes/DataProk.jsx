import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Database from '../apis/Database'
import Penilaian from '../components/Penilaian'
import Tambahkomen from '../components/Tambahkomen'
import { ContextProk } from '../context/ContextProk'
import Kepentingan from '../components/Kepentingan'
import Kepuasan from '../components/Kepuasan'

const DataProk = () => {
    const {id} = useParams()
    const {selectProk, setSelectProk} = useContext(ContextProk)

    useEffect(() => {
        const fetchData = async() => {
            
            try {
                const response = await Database.get(`/${id}`)
                console.log(response)
            
            setSelectProk(response.data.data)
            } catch (error) {
                console.log(error)
            }
            
         } 
        
        fetchData()
    }, [])
    
    return (
        <div>
            {selectProk && (
                <>
                <h1 className="text-center display-1">{selectProk.proker.nama_proker}
                </h1>
                <div className="text-center">
                    Kepentingan <Kepentingan rate1={selectProk.proker.kepentingan}/>
                    <span className="text-warning">
                        {selectProk.proker.kepentingan ? 
                            `(${selectProk.proker.kepentingan})`
                            : "(0)"}
                    </span>
                </div>
                <div className="text-center">
                    Kepuasan <Kepuasan rate2={selectProk.proker.kepuasan}/>
                    <span className="text-warning">
                        {selectProk.proker.kepuasan ? 
                            `(${selectProk.proker.kepuasan})`
                            : "(0)"}
                    </span>
                </div>
                <div className="mt-3">
                    <Penilaian peserta={selectProk.peserta}/>
                </div>
                <Tambahkomen/>
                </>
            )}
        </div>
    )
}

export default DataProk
