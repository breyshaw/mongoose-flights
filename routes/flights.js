//THIS IS THE FLIGHTS ROUTER
import { Router } from 'express'

//IMPORTING THE FLIGHTS CONTROLLER
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

//FLIGHTS ROUTES
router.get('/new', flightsCtrl.new)

export {
  router
}
