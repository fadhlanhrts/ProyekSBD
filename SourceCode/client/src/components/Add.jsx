import React, { useContext, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Database from "../apis/Database"
import { ContextProk } from '../context/ContextProk'

const Add = () => {
    const history = useHistory()
    const location = useLocation()
    const {tambahProk} = useContext(ContextProk)
    const [id, setID] = useState("")
    const [nama_proker, setNamaProk] = useState("")
    const [nama_bidang, setBidang] = useState("Bidang")
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await Database.post("/", {
                id, 
                nama_proker,
                nama_bidang: nama_bidang
            })
            history.push("/")
            history.push(location.pathname)
            tambahProk(response.data.data)
            
        } catch (error) {
            
        }
    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input value={id} 
                        onChange={(e) => setID(e.target.value)}
                        type="text" 
                        className="form-control" 
                        placeholder="ID"/>
                    </div>
                    <div className="col">
                        <input value={nama_proker} 
                        onChange={(e) => setNamaProk(e.target.value)}
                        type="text" 
                        className="form-control" 
                        placeholder="Nama Proker"/>
                    </div>
                    <div className="col">
                    <select value={nama_bidang} 
                        onChange={(e) => setBidang(e.target.value)}
                    className="custom-select my-1 mr-sm-2">
                            <option disabled>Bidang</option>
                            <option value="Akpro">Akpro</option>
                            <option value="Kastrat">Kastrat</option>
                            <option value="Kema">Kema</option>
                            <option value="Kesma">Kesma</option>
                            <option value="Kestari">Kestari</option>
                            <option value="Kewirus">Kewirus</option>
                            <option value="Kominfo">Kominfo</option>
                            <option value="Litbang">Litbang</option>
                            <option value="Pengmas">Pengmas</option>
                            <option value="PIPTEK">PIPTEK</option>
                            <option value="Retro">Retro</option>
                            <option value="Siwa">Siwa</option>
                        </select>   
                    </div>
                    
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Tambah</button>
                </div>
            </form>
        </div>
    )
}

export default Add
