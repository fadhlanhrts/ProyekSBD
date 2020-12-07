import React, { useState } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import Database from '../apis/Database'

const Tambahkomen = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    console.log(location)
    console.log(id)
    
    const [npm, setNPM] = useState("")
    const [kepentingan, setKepentingan] = useState("Kepentingan")
    const [kepuasan, setKepuasan] = useState("Kepuasan")
    const [komen, setKomen] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
             const response = await Database.post(`/${id}/tambahkomen`, {
            npm,   
            kepentingan: kepentingan, 
            kepuasan: kepuasan, 
            komentar: komen
            })
            history.push("/")
            history.push(location.pathname)
        } catch (error) {}
       
    }

    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-3">
                        <label htmlFor="npm">NPM</label>
                        <input 
                        value={npm}
                        onChange={e => setNPM(e.target.value)}
                        id="npm" placeholder="npm" type="text" className="form-control"/>
                    </div>
            
                    <div className="form-group col-2">
                        <label htmlFor="kepentingan">Nilai Kepentingan</label>
                        <select 
                         value={kepentingan}
                         onChange={e => setKepentingan(e.target.value)}
                        id="kepentingan" className="custom-select">
                            <option disabled>Nilai</option>
                            <option value="1">1 (Tidak penting)</option>
                            <option value="2">2 (Cukup penting)</option>
                            <option value="3">3 (Penting) </option>
                            <option value="4">4 (Sangat penting)</option>
                        </select>
                    </div>
                    <div className="form-group col-2">
                        <label htmlFor="kepuasan">Nilai Kepuasan</label>
                        <select 
                         value={kepuasan}
                         onChange={e => setKepuasan(e.target.value)}
                        id="kepuasan" className="custom-select">
                        <option disabled>Nilai</option>
                            <option value="1">1 (Tidak puas)</option>
                            <option value="2">2 (Cukup puas)</option>
                            <option value="3">3 (Puas) </option>
                            <option value="4">4 (Sangat puas)</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="komentar">Komentar</label>
                    <textarea 
                     value={komen}
                     onChange={e => setKomen(e.target.value)}
                    id="komentar" className="form-control"></textarea>
                </div>
                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Tambahkomen
