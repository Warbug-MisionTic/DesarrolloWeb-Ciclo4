const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productos');

const router = Router();

// Obtener eventos 
router.get('/', getProductos);

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);
// Crear un nuevo evento
router.post(
    '/',
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('ubicar', 'La url de la imagen es obligatoria').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('idVenta', 'Id Venta es obligatorio').not().isEmpty(),
        check('fecha', 'Fecha es obligatorio').not().isEmpty(),
        check('stock', 'Stock es obligatorio').not().isEmpty(),
        check('descripcion', 'Descripcion es obligatorio').not().isEmpty(),
        validarCampos
    ],
    crearProducto
);

// Actualizar Evento
router.put(
    '/:id',
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('ubicar', 'La url de la imagen es obligatoria').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('idVenta', 'Id Venta es obligatorio').not().isEmpty(),
        check('fecha', 'Fecha es obligatorio').not().isEmpty(),
        check('stock', 'Stock es obligatorio').not().isEmpty(),
        check('descripcion', 'Descripcion es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarProducto
);

// Borrar evento
router.delete('/:id', eliminarProducto);


module.exports = router;