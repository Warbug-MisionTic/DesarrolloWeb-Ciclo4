const { response } = require('express');
const Carrito = require('../models/Carrito');
const Productos = require('../models/Productos');

const getCarrito = async (req, res = response) => {
    const carrito = await Carrito.find().sort({ title: 1 })

    res.json({
        ok: true,
        carrito
    });
}


const finalizarCompra = async (req, res = response) => {
    const carrito = new Carrito(req.body);
    try {
        carrito.user = req.uid;
        carrito.userName = req.name;
        const carritoSave = await carrito.save();
        carrito.productos.map(async(producto)=> {

            const productBuscar = await Productos.findById(producto.id);
            const nuevoProducto = {
                ...req.body,
                stock: productBuscar.stock - producto.stock
            }

             Productos.findByIdAndUpdate(producto.id, nuevoProducto, { new: true });
        })

        res.json({
            ok: true,
            carrito: carritoSave // Este carrito a que hace referencia? 
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }


}

module.exports = {
    finalizarCompra,
    getCarrito
}