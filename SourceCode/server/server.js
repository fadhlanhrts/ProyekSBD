require('dotenv').config()

const express = require("express")
const cors = require("cors")
const db = require("./db")
const morgan = require("morgan")
const app = express()

app.use(cors())
app.use(express.json())

//get all proker
app.get("/api/v1/proker", async(req, res) => {
    
    try {
      
        const nilaiProker = await db.query("select proker.id, proker.nama_proker, proker.nama_bidang, trunc(avg(kepentingan), 1) as kepentingan, trunc(avg(kepuasan), 1) as kepuasan from proker left join peserta on proker.id = peserta.kode_proker group by proker.id")
        
        console.log("nilaiProker", nilaiProker)
    res.json({
        status: "successful",
        result: nilaiProker.rows.length,
        data: {
            proker: nilaiProker.rows, 
        }, 
    })
    } catch (error) {
        console.log(error)
    }
    
})

//get one proker
app.get("/api/v1/proker/:id", async (req, res) => {
    console.log(req.params.id)

    try {
        const proker = await db.query(
            `select proker.id, proker.nama_proker, proker.nama_bidang, trunc(avg(kepentingan), 1) as kepentingan, trunc(avg(kepuasan), 1) as kepuasan from proker left join peserta on proker.id = peserta.kode_proker where proker.id=$1 group by proker.id`, 
        [req.params.id]);

        const peserta = await db.query("select * from peserta where kode_proker = $1", 
        [req.params.id]); 
    res.status(200).json({
        status: "successful", 
        data: {
            proker: proker.rows[0],
            peserta: peserta.rows
        },
    })
        
    } catch (error) {
        console.log(error)
    }
    
});

//add proker
app.post("/api/v1/proker", async (req, res) => {
    console.log(req.body)

    try {
        const result = await db.query(`insert into proker values($1, $2, $3) returning *`, 
        [req.body.id, req.body.nama_proker, req.body.nama_bidang])
        console.log(result)
res.status(201).json({
        status: "successful", 
        data: {
            proker: result.rows[0]
        }
    })

    } catch (error) {
        console.log(error)
    }
    
})

//update proker
app.put("/api/v1/proker/:id", async (req, res)=>{
    console.log(req.params.id)
    console.log(req.body)
    try {
        const result = await db.query("UPDATE proker SET nama_proker=$1 WHERE id=$2 returning *", 
        [req.body.nama_proker, req.params.id])
        console.log(result)
 res.status(200).json({
        status: "successful", 
        data: {
            proker: result.rows[0]
        }
    })

    } catch (error) {
        console.log(error)
    }
   
})



app.post("/api/v1/proker/:id/tambahkomen", async (req, res) => {
    try {
        const nilaibaru = await db.query(`INSERT INTO peserta VALUES($1, $2, $3, $4, $5)
        returning *`, 
        [req.body.npm, req.params.id, req.body.kepentingan, req.body.kepuasan, 
        req.body.komentar])

        console.log(nilaibaru)
        res.status(201).json({
            status: "successful", 
            data: {
                peserta: nilaibaru.rows[0]
            }
        })

    } catch (error) {
        console.log(error)
    }
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`)
});


