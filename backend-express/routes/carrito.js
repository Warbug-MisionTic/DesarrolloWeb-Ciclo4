const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getCarrito, finalizarCompra } = require('../controllers/carrito');

const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);

// Obtener carrito 
router.get('/', getCarrito);

// Crear un nuevo carrito
router.post(
    '/',
    [

        //check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        //('ubicar', 'La url de la imagen es obligatoria').not().isEmpty(),
        //check('precio', 'El precio es obligatorio').not().isEmpty(),
        //check('idVenta', 'Id Venta es obligatorio').not().isEmpty(),
        check('fecha', 'Fecha es obligatorio').not().isEmpty(),
        //check('stock', 'Stock es obligatorio').not().isEmpty(),
        //check('descripcion', 'Descripcion es obligatorio').not().isEmpty(),
        check('total', 'El total de los precios es obligatorio').not().isEmpty(),
        check('totalProductos', 'El total de los productos es obligatorio').not().isEmpty(),
        check('productos', 'Es necesario que hayan productos').not().isEmpty(),

        validarCampos
    ],
    finalizarCompra// FUNCION DE AGREGAR COMPRA index -> ruta -> controlador -> schemma
);



module.exports = router;