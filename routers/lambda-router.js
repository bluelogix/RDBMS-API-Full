const router = require('express').Router();
const knex = require('knex'); 

const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development) 

////////// ENDPOINTS //////////
  
  // GET
  router.get('/', (req, res) => {
    db('cohorts')
    .then(cohort => {
      res.status(200).json(cohort)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  });
  
    //GET BY ID
  router.get('/:id', (req, res) => {
    db('cohorts')
    .where({ id: req.params.id })
    .then(cohort => {
      res.status(200).json(cohort)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  })

  //POST 
router.post('/', (req, res) => {
    db('cohorts')
    .insert(req.body)
    .then(cohortId => {
      const [id] = cohortId
      db('cohorts')
      .where({ id })
      .first()
      .then(cohort => {
        res.status(201).json(cohort)
      })
    })
    .catch(err => {
      res.status(500).json({err: 'Error adding new cohort name' })
    })
  })

  //DELETE
  router.delete('/:id', (req, res) => {
    db('cohorts')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if(count > 0 ) {
        res.status(200).json({ message: 'deleted correctly' })
      } else {
        res.status(404).json({ message: 'name cannot be found'})
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
    
  });
  
  
  

module.exports = router;
