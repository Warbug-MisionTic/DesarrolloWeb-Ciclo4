const {response} = require('express');
const Carrito = require('../models/Carrito');

 const finalizarCompra = async (req, res = response) =>{

    const carrito = new Carrito(req.body);
    try {
        carrito.user = req.uid;
        const carritoSave = await carrito.save();
        
        res.json({
            ok: true,
            carrito:  carritoSave // Este carrito a que hace referencia? 
        })

    }catch (error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }


 }

 module.exports = {
    finalizarCompra
 }