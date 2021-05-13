const Products = require('../models/productModel')

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const products = await Products.find({});
            res.json(products);

        }
        catch (err) {
            return res.status(500).json({ msg: err.message });

        }
    },
    postProduct: async (req, res) => {
        try {
            const newProduct = new Products(req.body);
            await newProduct.save();
            res.json('success')

        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const note = await Products.findByIdAndDelete(req.params.id);
            res.status(201).json('Delete successfull')

        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}
module.exports = productCtrl;