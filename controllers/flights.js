//THIS IS MY FLIGHTS CONTROLLER

import { Flight } from '../models/flight.js'

//.new function (this is being called by the /new flights route)
//It renders the flights/new VIEW
function newFlight(req, res) {
    res.render('flights/new', {
        title: 'Add Flight'
    })
}
//The model is responsible for creating data. Need access to the model. Imported above.

function create(req, res) {
    const flight = new Flight(req.body)
    flight.save(function (err) {
        if (err) {
            return res.redirect('/flights/new')
        }
        res.redirect(`/flights/${flight._id}`)
})
}

function index(req,res) {
    Flight.find({}, function(err, flights) {
        res.render('flights/index', {
            flights,
            title: 'All Flights'
        })
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('flights/show.ejs', {
            flight,
            title: 'Flight Detail'
        })
    })
}

function createTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.tickets.push(req.body)
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`)
        })
    })
}

export {
        newFlight as new,
        create,
        index,
        show,
        createTicket
    }