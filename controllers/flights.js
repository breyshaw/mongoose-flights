//THIS IS MY FLIGHTS CONTROLLER

//.new function (this is being called by the /new flights route)
//It renders the flights/new VIEW
function newFlight(req, res) {
    res.render('flights/new')
}

export {
    newFlight as new
}