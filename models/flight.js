
import mongoose from 'mongoose'
const Schema = mongoose.Schema

//THIS IS THE TICKET SCHEMA
const ticketSchema = new Schema({
    seat: { type: String, match: /[A-F][1-9]\d?/ },
    price: { type: Number, min: 0 }
}, {
    timestamps: true
})
//THIS IS THE FLIGHTS SCHEMA

const flightSchema = new Schema({
    airline: { type: String, enum: ['American', 'Southwest', 'United'] },
    airport: { type: String, default: 'DEN', enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'] },
    flightNo: Number,
    departs: Date,
    tickets: [ticketSchema],
    destination: [{ type: Schema.Types.ObjectId, ref: 'Destination' }]
})


const Flight = mongoose.model('Flight', flightSchema)

export {
    Flight
}