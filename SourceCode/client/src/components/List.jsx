import React, {useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Database from "../apis/Database"
import { ContextProk } from '../context/ContextProk'
import Kepentingan from './Kepentingan'
import Kepuasan from './Kepuasan'

const List = (props) => {
   const {proker, setProk} = useContext(ContextProk)
   let history = useHistory()
    useEffect(() => {
        async function fetchData(){
            try {
            const response = await Database.get("/")
            console.log(response.data.data)
            setProk(response.data.data.proker)
        } catch (error) {}
    
        }
        fetchData()
    }, []);


    const handleUpdate = (e, id) => {
        e.stopPropagation()
        history.push(`/proker/${id}/update`)
    }
    const handleSelect = (id) => {
        history.push(`/proker/${id}`)
    }

    const kepenProk = (proker) => {
        if(proker.kepentingan == null){
            return <span className="text-warning">0 tanggapan</span>
        }
        return(
            <>
            <Kepentingan rate1={proker.kepentingan}/>
        <span className="text-warning ml-1">({proker.kepentingan})</span>
            </>
        )
        
    }

    const kepuProk = (proker) => {
        if(proker.kepuasan == null){
            return <span className="text-warning">0 tanggapan</span>
        }
        return(
            <>
            <Kepuasan rate2={proker.kepuasan}/>
        <span className="text-warning ml-1">({proker.kepuasan})</span>
            </>
        )
        
    }

    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">ID</th>
                        <th scope="col">Nama Proker</th>
                        <th scope="col">Nama bidang</th>
                        <th scope="col">Kepentingan</th>
                        <th scope="col">Kepuasan</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>  
                    {proker && proker.map(proker => {

                        return(
                        <tr onClick={() => handleSelect(proker.id)} key={proker.id}>
                            <td>{proker.id}</td>
                            <td>{proker.nama_proker}</td>
                            <td>{proker.nama_bidang}</td>
                            <td>{kepenProk(proker)}</td>
                            <td>{kepuProk(proker)}</td>
                            <td>
                                <button onClick={(e) => handleUpdate(e, proker.id)}className="btn btn-warning">Update</button>
                                </td>
                            
                         </tr> 
                        )     
                    })}             
                 
                </tbody>
            </table>
        </div>
    )
}

export default List
