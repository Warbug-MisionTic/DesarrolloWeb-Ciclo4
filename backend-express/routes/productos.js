const { Router } = require('express');
const { check, checkSchema } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const upload = require('../libs/storage');
const { getProductos, crearProducto, actualizarProducto, eliminarProducto } = require('../controllers/productos');

const router = Router();

// Obtener producto 
router.get('/', getProductos);

// Todas tienes que pasar por la validación del JWT
router.use(validarJWT);
// Crear un nuevo Producto
router.post(
    '/',
    upload.single('image'),
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('fecha', 'Fecha es obligatorio').not().isEmpty(),
        check('stock', 'Stock es obligatorio').not().isEmpty(),
        check('descripcion', 'Descripcion es obligatorio').not().isEmpty(),
        checkSchema({
            'image': {
                custom: {
                    options: (value, { req, path }) => !req.file[path],
                    errorMessage: 'La imagen es obligatoria',
                },
            }
        }),
        validarCampos,

    ],
    crearProducto
);

// Actualizar Producto
router.put(
    '/:id',
    upload.single('image'),
    [
        check('titulo', 'El titulo es obligatorio').not().isEmpty(),
        check('precio', 'El precio es obligatorio').not().isEmpty(),
        check('fecha', 'Fecha es obligatorio').not().isEmpty(),
        check('stock', 'Stock es obligatorio').not().isEmpty(),
        check('descripcion', 'Descripcion es obligatorio').not().isEmpty(),
        checkSchema({
            'image': {
                custom: {
                    options: (value, { req, path }) => !req.file[path],
                    errorMessage: 'La imagen es obligatoria',
                },
            }
        }),
        validarCampos
    ],
    actualizarProducto
);

// Borrar Producto
router.delete('/:id', eliminarProducto);


module.exports = router;