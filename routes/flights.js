//THIS IS THE FLIGHTS ROUTER
import { Router } from 'express'

//IMPORTING THE FLIGHTS CONTROLLER
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

//localhost:3000/flights
//ALL FLIGHTS
router.get('/', flightsCtrl.index)

//FLIGHTS ROUTES
// localhost:300/flights/new
router.get('/new', flightsCtrl.new)


//localhost:3000/flights (this is the endpoint)
//This is so the created flight goes to the flights route (flights is implied)
router.post('/', flightsCtrl.create)

export {
  router
}
