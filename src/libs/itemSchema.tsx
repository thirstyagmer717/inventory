import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const itemSchema = new Schema({
  name: { type: String },
  vendor: { type: String },
  Date: { type: Date, default: Date.now() }
});
export default itemSchema;