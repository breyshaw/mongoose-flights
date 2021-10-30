//THIS IS THE FLIGHTS SCHEMA

import mongoose from 'mongoose'
const Schema = mongoose.Schema
const flightSchema = new Schema( {
    airline: {type: String, enum: ['American','Southwest','United']},
    airport: {type: String, default: 'DEN', enum: ['DEN','AUS','DFW','LAX','SAN']},
    flightNo: Number,
    departs: Date
})

const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}