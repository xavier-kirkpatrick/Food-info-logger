import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

export default router
