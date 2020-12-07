import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {ContextProk} from "../context/ContextProk"
import Database from "../apis/Database"

const UpdateMhs = (props) => {
    const {id} = useParams()
    let history = useHistory()
    const {proker} = useContext(ContextProk)
    //const [id, setID] = useState("")
    const [nama_proker, setProk] = useState("")
    const [nama_bidang, setBidang] = useState("")

    useEffect(() => {
        const fetchData = async() => {
            const response = await Database.get(`/${id}`)
            console.log(response.data.data)
            //setID(response.data.data.proker.id)
            setProk(response.data.data.proker.nama_proker)
            setBidang(response.data.data.proker.nama_bidang)
        }

        fetchData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const update = await Database.put(`/${id}`, {
            id, 
            nama_proker, 
            nama_bidang: nama_bidang
        })
        history.push("/")
    }
    return (
        <div>
            
            <form action="">
                <div className="form-group">
                    <label htmlFor="nama">Nama Proker</label>
                    <input value={nama_proker} onChange={e => setProk(e.target.value)} 
                    id="nama" className="form-control" type="text"/>
                </div>

                <div className="form-group">
                    <label htmlFor="bidang">Nama Bidang</label>
                    <input value={nama_bidang} onChange={e => setBidang(e.target.value)} 
                    id="bidang" className="form-control" type="text"/>
                </div>

               {/* <div className="form-group">
                    <label htmlFor="angkatan">Angkatan</label>
                    <input value={angkatan} onChange={e => setAkt(e.target.value)}
                    id="angkatan" className="form-control" type="number"/>
    </div> */}
                
                <button onClick={handleSubmit} className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}

export default UpdateMhs
