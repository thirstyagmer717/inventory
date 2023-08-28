import mongoose from 'mongoose';
const { Schema } = mongoose;

const itemSchema = new Schema({
  name: String, 
  vendor: String,
  qty_available: Number,
  date: { type: Date, default: Date.now },
});