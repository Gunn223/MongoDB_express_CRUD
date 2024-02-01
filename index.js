const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 9000;
const Product = require('./models/ProductModel');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
mongoose
  .connect('mongodb://127.0.0.1:27017/try-store')
  .then((res) => {
    console.log(`Connected to MongoDB`);
  })
  .catch((e) => {
    console.log(`err connection mongodb ${e}`);
  });

app.get('/', (req, res) => {
  res.send('Hallo Dunia');
});
// all Product
app.get('/products', async (req, res) => {
  try {
    const data = await Product.find({});

    res.status(200).json({
      message: 'All Data Product',
      statusCode: 200,
      data: data, 
    });
  } catch (error) {
    res.status(500).json({
      message: `Error retrieving products: ${error.message}`,
      statusCode: 500,
    });
  }
});

app.get('/product/:id', async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);

    if (!data) {
      res.status(404).json({
        message: 'Data not found',
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: 'Data Product',
        statusCode: 200,
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      statusCode: 500,
    });
  }
});

app.get('/product/:id/edit', async (req, res) => {
  try {
    const data = await Product.findById(req.params.id);

    if (!data) {
      res.status(404).json({
        message: 'Data not found',
        statusCode: 404,
      });
    } else {
      res.status(200).json({
        message: 'Data Product',
        statusCode: 200,
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      statusCode: 500,
    });
  }
});

app.post('/product', async (req, res) => {
  try {
    const product = new Product(req.body);

    await product.validate();

    await product.save();

    res.status(200).json({
      message: 'Success Add Data',
      statusCode: 200,
      data: product,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation Error',
        statusCode: 400,
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error',
        statusCode: 500,
        error: error.message,
      });
    }
  }
});
// PUT
app.put('/product/:id', async (req, res) => {
  try {
    if (req.method !== 'PUT') {
      return res.status(405).json({
        message: 'Method Not Allowed',
        statusCode: 405,
      });
    }

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid Product ID',
        statusCode: 400,
      });
    }

    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
        statusCode: 404,
      });
    }

    res.status(200).json({
      message: 'Success Update Data',
      statusCode: 200,
      data: product,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({
        message: 'Validation Error',
        statusCode: 400,
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        message: 'Internal Server Error',
        statusCode: 500,
        error: error.message,
      });
    }
  }
});

// DELETE
app.delete('/product/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: 'Invalid Product ID',
        statusCode: 400,
      });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: 'Product not found',
        statusCode: 404,
      });
    }

    res.status(200).json({
      message: 'Success Delete Data',
      statusCode: 200,
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal Server Error',
      statusCode: 500,
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`server berjalan di PORT: ${PORT}`);
});
