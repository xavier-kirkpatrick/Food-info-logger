import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  const { name, phone, allergy_details } = req.body
  const newUser = {
    name,
    phone,
    food_preference: allergy_details,
  }
  await db.addUser(newUser)

  res.redirect('/')
})

router.get('/food_info', async (req, res) => {
  const viewData = await db.getUsers()
  // console.log({ viewData })
  res.render('foodInfo', viewData)
  // res.send('Hello')
})

export default router
