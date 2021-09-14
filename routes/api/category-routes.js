const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories (GET api/categories)
  // be sure to include its associated Products
  Category.findAll({
    include: [
      {
        model: Product
      }
    ]
  })
  .then(data => {
    console.log('route to find all categories', data)
    res.json(data)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value (GET api/categories/:id)
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product
      }
    ]
  })
  .then(data => {
    console.log('route to find category by id', data)
    res.json(data)})
});

router.post('/', (req, res) => {
  // create a new category (POST api/categories)
  Category.create(req.body)
  .then(data => {
    console.log('route to create category', data)
    res.json(data)})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value (PUT api/categories/:id)
  Category.update(req.body, {
    where: {
      id: req.body.id
    }
  })
  .then(data => {
    console.log('route to update category by id', data)
    res.json(data)})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value (DELETE api/categories/:id)
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => 
    console.log('route to delete category by id', data),
    res.json(data))
});

module.exports = router;
