const express = require('express')
const candyService = require('./candy.service.js')

const router = express.Router()

 
router.get('/', (req, res) => {
    const filterBy = req.query
    candyService.query(filterBy)
        .then(candies => {
            res.json(candies)
        })
})
 
// Get a single candy by id
router.get('/:candyId', (req, res) => {
    const candyId = req.params.candyId
    candyService.getById(candyId)
        .then(candy => {
            res.json(candy)
        })
})
 
// add a new candy
router.post('/', (req, res) => {
    const {name, price, url , inStock} = req.body
    const candy = {name, price, url , inStock }

    candyService.save(candy)
        .then((savedcandy) => {
            res.json(savedcandy)
        })
})
 

router.put('/:candyId', (req, res) => {
    const {name, price, url , inStock ,_id} = req.body
    const candy = {name, price, url , inStock , _id}
    candyService.save(candy)
        .then((savedcandy) => {
            res.json(savedcandy)
        }).catch(err => res.status(401).send('invalid'))
})
 
// remove candy by id
router.delete('/:candyId', (req, res) => {
    // const {nickname} = req.cookies
    const candyId = req.params.candyId
    candyService.remove(candyId)
        .then(() => {
            res.json('Deleted...')
        })
        .catch(err => res.status(401).send(err))
})

function _createcandy(name) {
    return {
      _id: utilService.makeId(),
      name,
      price: 0,
      url: "",
      inStock: true
    };
  }

module.exports = router