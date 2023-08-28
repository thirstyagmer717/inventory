import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const itemSchema = new Schema({
  name: String, 
  vendor: String,
  qty_available: Number,
  date: { type: Date, default: Date.now },
});

export default itemSchema;