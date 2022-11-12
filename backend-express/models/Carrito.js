const { Schema, model } = require("mongoose");

const CartProductosSchema = Schema({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  id:{
    type: String,
    required:true,
  }, 
  quantity:{
    type: Number,
    required: true,
  }
});
const CartSchema = Schema({
  userName:{
    type: String,
    required: true
  }, 
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true, 
  },
  totalProductos: {
    type: Number,
    required: true,
  },
  productos:{
    type: [CartProductosSchema],
    required: true,
  }
});

CartSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Carrito", CartSchema);
