import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/test666");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!") 
});
const Schema = mongoose.Schema;
const palyListSchema = new Schema({
    name : String,
    list:[{text:String,url : String}],
    type: Number
});
const createMdodel = ({name,list}) =>{
const PlayerInfo = mongoose.model(name,palyListSchema)
// PlayerInfo.findOne({ 'name': name }, 'name occupation', function (err, person) {
//   // if (err) return handleError(err);
//   // Prints "Space Ghost is a talk show host".
//   console.log(person,"ssname");
//   if(person.name===name){
//   }else{
//     const playerInfo = new PlayerInfo({name,list})
// playerInfo.save();
//   }
// });
const playerInfo = new PlayerInfo({name,list})
playerInfo.save();
}

export default createMdodel;