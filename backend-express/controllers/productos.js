const { response } = require('express');
const Productos = require('../models/Productos');

const getProductos = async (req, res = response) => {
    const productos = await Productos.find().sort({ title: 1 })

    res.json({
        ok: true,
        productos
    });
}

const crearProducto = async (req, res = response) => {

    const producto = new Productos(req.body);

    try {
        producto.setImgUrl(req.file.filename);
        producto.user = req.uid;

        const productoSave = await producto.save();

        res.json({
            ok: true,
            product: productoSave
        })


    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const actualizarProducto = async (req, res = response) => {
    const productoId = req.params.id;

    try {
        const producto = await Productos.findById(productoId);

        if (!producto) {
            return res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }
        producto.setImgUrl(req.file.filename);

        const nuevoProducto = {
            ...req.body,
            image: producto.image
        }


        const ProductoActualizado = await Productos.findByIdAndUpdate(productoId, nuevoProducto, { new: true });

        res.json({
            ok: true,
            product: ProductoActualizado
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}

const eliminarProducto = async (req, res = response) => {

    const productoId = req.params.id;

    try {

        const producto = await Productos.findById(productoId);

        if (!producto) {
            return res.status(404).json({
                ok: false,
                msg: 'Producto no existe por ese id'
            });
        }

        await Productos.findByIdAndDelete(productoId);

        res.json({ ok: true });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

}


module.exports = {
    getProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}