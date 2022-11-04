const { Schema, model } = require('mongoose');

const ProductosSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    ubicar: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
});

ProductosSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});



module.exports = model('Productos', ProductosSchema);
