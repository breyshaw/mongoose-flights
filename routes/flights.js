//THIS IS THE FLIGHTS ROUTER
import { Router } from 'express'

//IMPORTING THE FLIGHTS CONTROLLER
import * as flightsCtrl from '../controllers/flights.js'
const router = Router()

//ALL FLIGHTS
//localhost:3000/flights
router.get('/', flightsCtrl.index)

// localhost:300/flights/new
router.get('/new', flightsCtrl.new)

//localhost:3000/flights/:id
router.get('/:id', flightsCtrl.show)

//localhost:3000/flights (this is the endpoint)
//This is so the created flight goes to the flights route (flights is implied)
router.post('/', flightsCtrl.create)

//localhost:3000/flights/:id/tickets
router.post('/:id/tickets', flightsCtrl.createTicket)

//localhost:3000/flights/:id/destinations
router.post('/:id/destinations', flightsCtrl.addToFlight)

export {
  router
}
