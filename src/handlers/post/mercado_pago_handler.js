const mercado_pago = require('../../controllers/post/mercado_pago_controller');

async function mercado_pago_handler(req, res) {
    try {
        const { id, product_id, sub_category_id, category_id, } = req.body;

        if (!id ||!product_id ||!sub_category_id ||!category_id) throw new Error ("Missing data");

        const response = await mercado_pago(req.body);

        if (!response) throw new Error()
        res.status(200).json(("Category created successfully", response));

    } catch (error) {
        if (error.message === 'Missing data') {
            res.status(400).json((error.message));
        }
        res.status(500).json((error.message));
    }
}

module.exports = {
    mercado_pago_handler,
}