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
  
  


module.exports = router;
