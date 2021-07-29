const mongoose = require('mongoose');

	const seatSchema = new mongoose.Schema({
			number:  {
				type: Number,
			}, 
			row:  {
				type: Number,
			},
			busy:  {
				type: Boolean,
			}
			},{ timestamps: { createdAt: 'created_at' }});

const Seats = mongoose.model('Seats', seatSchema);
module.exports = Seats