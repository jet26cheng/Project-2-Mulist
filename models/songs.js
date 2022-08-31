
  const mongoose = require('mongoose')

  const db = mongoose.connection;

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log(`Mongodb connected at ${db.host}:{db.port}`)
    }
    )


  // Schema 
  const songSchema = new mongoose.Schema({
    SongTitle: {type: String, required: true },
    Artist: {type: String, required: true },
    Year: {type: String, required: true },
    Album: {type: String, required: true },
    Finished: Boolean
  });


  //Model
  const Song = mongoose.model("Song", songSchema);

     module.exports = Song;

     // const songs = [
//     {
//     SongTitle: "All I Got",
//     Artist: "Said The Sky, Kwesi",
//     Year: "2018",
//     Finished: true
//     },
//     {
//      SongTitle: "Congratulations",
//      Artist: "Post Malone, Quavo",
//      Year: "2016",
//      Finished: true
//      },
//      {
  
//      SongTitle: "Brave Soul",
//      Artist: "Illenium",
//      Year: "2021",
//      Finished: true
//      },
//      {
//       SongTitle: "Eternity",
//       Artist: "Nurko",
//       Year: "2022",
//       Finished: true
//     },
//     {
//       SongTitle: "Bongo Bong",
//       Artist: "Manu Chao",
//       Year: "1998",
//       Finished: true
//     }
//      ]
  
// module.export = {
//     router: require('./Post')
// }