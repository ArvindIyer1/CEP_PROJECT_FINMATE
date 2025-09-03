const {Schema,mongoose} = require("mongoose");
mongoose.connect("");
const ObjectId = mongoose.ObjectId;

const userSchema = new Schema({
  email : {type :string , unique : true}
})
