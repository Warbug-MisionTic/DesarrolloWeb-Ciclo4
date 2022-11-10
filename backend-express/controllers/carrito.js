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
            //console.log(producto)
            const productBuscar = await Productos.findById(producto.id);
            //console.log(productBuscar)
            const nuevoProducto = {...productBuscar, stock: productBuscar.stock - producto.quantity}
            Productos.findByIdAndUpdate(producto.id, nuevoProducto, { new: true });
            console.log(nuevoProducto)
        })
       
        res.json({
            ok: true,
            carrito: carritoSave, // Este carrito a que hace referencia?      
            product: Productos 
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