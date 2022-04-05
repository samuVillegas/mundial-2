const express = require('express')
const router = express.Router()
const pool = require('../db/index')

// router.get('/products', async (req,res)=>{
//     const [rows] = await pool.query('SELECT * FROM Product');
//     return res.json(rows)
// })

//Federacion

router.post('/federacion', async (req, res) => {
    try {
        const { codigo_federacion, acronimo, nombre, cantidad_selecciones, fecha_creacion } = req.body;
        await pool.query(`INSERT INTO federaciones VALUES(?,?,?,?,?)`, [codigo_federacion, acronimo, nombre, cantidad_selecciones, fecha_creacion]);
        return res.json({ message: 'Federación creada correctamente' })
    } catch (e) {
        console.log(e)
        return res.json({ error: 'Internal server error', message: e })
    }
})

router.get('/federacion', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM federaciones');
    return res.json(rows)
})


//Selecciones

router.post('/selecciones', async (req, res) => {
    try {
        const { codigo_seleccion, cod_federacion, nombre, ranking_fifa, fecha_clasificacion, img } = req.body;
        await pool.query(`INSERT INTO selecciones VALUES(?,?,?,?,?,?)`, [codigo_seleccion, cod_federacion, nombre, ranking_fifa, fecha_clasificacion, img]);
        return res.json({ message: 'Selección creada correctamente' })
    } catch (e) {
        console.log(e)
        return res.json({ error: 'Internal server error', message: e })
    }
})

router.get('/selecciones', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM selecciones');
    return res.json(rows)
})


//Sorteos

router.post('/sorteos', async (req, res) => {
    try {
        const { nombre, descripcion} = req.body;
        await pool.query(`INSERT INTO sorteos(nombre,descripcion) VALUES(?,?)`, [nombre, descripcion]);
        return res.json({ message: 'Sorteo creado correctamente' })
    } catch (e) {
        console.log(e)
        return res.json({ error: 'Internal server error', message: e })
    }
})

router.get('/sorteos', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM sorteos');
    return res.json(rows)
})

//Grupos
router.post('/grupos', async (req, res) => {
    try {
        const { cod_seleccion, id_sorteo, letra} = req.body;
        await pool.query(`INSERT INTO grupos(cod_seleccion,id_sorteo,letra) VALUES(?,?,?)`, [cod_seleccion, id_sorteo, letra]);
        return res.json({ message: 'Grupo creado correctamente' })
    } catch (e) {
        console.log(e)
        return res.json({ error: 'Internal server error', message: e })
    }
})

router.get('/grupos', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM grupos');
    return res.json(rows)
})

module.exports = router;