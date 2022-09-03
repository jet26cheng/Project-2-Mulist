// const mongoose = require("mongoose")
// const db = mongoose.connection;

// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log(`Mongodb connected at ${db.host}:${db.port}`)
//     })
//     .catch((err) => console.log(err))


require("dotenv").config()


const express = require('express');

const app = express();

const Song = require("./models/songs.js");

const methodOverride = require('method-override');

const { render } = require('ejs');


const PORT = process.env.PORT || 5001

const songController = require("./controllers/songs.js");

//Setup Mongoose
// const mongoose = require("mongoose");
// const mongoURI = process.env.MONGODB_URI
// mongoose.connect(mongoURI);
// mongoose.connection.once("open", () => {
//   console.log("connected to mongo");
// }); 
// const mongoURI = process.env.MONGODB_URI

//Middleware
app.use(express.static('public'));

app.use("/images", express.static( "images"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(methodOverride("_method"))

app.use('/music', songController)

// app.use((req, res, next) => {
//   console.log("req", req.path, req.params, req.query,req.method, req.originalMethod)
//   next()
// })

// const songs = require("./models/songs.js")


// app.use(methodOverride('_method'))

app.use((req, res, next) => {
  console.log("req", req.path, req.params, req.query,req.method, req.originalMethod)
  next()
})

// //Seed 
// app.get("/music/seed", (req,res) => {
//   Song.create(
//     [
//       {
      
//     SongTitle: "All I Got",
//     Artist: "Said The Sky, Kwesi",
//     Year: "2018",
//     Album: "Wide-Eyed",
//     Finished: true
//     },
//     {
//      SongTitle: "Congratulations",
//      Artist: "Post Malone, Quavo",
//      Year: "2016",
//      Album: "Stoney (Deluxe)",
//      Finished: true
//      },
//      {
//      SongTitle: "Brave Soul",
//      Artist: "Illenium",
//      Year: "2021",
//      Album: "Fallen Embers",
//      Finished: true
//      },
//      {
//       SongTitle: "Eternity",
//       Artist: "Nurko , Dayce Williams",
//       Year: "2022",
//       Album: "Eternity",
//       Finished: true
//     },
//     {
//       SongTitle: "Bongo Bong",
//       Artist: "Manu Chao",
//       Year: "1998",
//       Album: "Clandestino",
//       Finished: true
//     }], (err, data) => {
//       res.redirect("/music")
//     })
// })



// //Index
// app.get("/music", (req, res) => {
//   // console.log("before")
//   // let songs = await Song.find({})
//   //   console.log("songs", songs)
//   //   res.render("index.ejs", {songs});
  
//   Song.find({}, (error, Song) => {
//       console.log("inside")
//     res.render("index.ejs", { Song});
//     })
//     console.log("after")
// }); 

// New 
// app.get("/music/new", (req, res) => {
//   res.render("new.ejs")
// });


// //Create 
// app.post("/music", (req, res) => {

//   if (req.body.Finished === "on") {
//     req.body.Finished = true;
//   } else {
//     req.body.Finished = false;
//   }
 
//   Song.create(req.body, (error, createdSong) => {
//     if(error) {
//       console.log("error", error)
//       res.send(error)
//     } else {
//       res.redirect("/music")
//     }
//   })

//   // res.redirect("/music")
// });

// //Show
// app.get("/music/:id", (req,res) => {
//   Song.findById(req.params.id, (error, song) => {
//     res.render("show.ejs", {
//       Song: song,
//     })
//   })
//   });



// // //Destroy
// app.delete("/music/:id", (req,res) => {
//   Song.findByIdAndRemove(req.params.id, (err, data) => {
//     if (err) {
//       console.log("error");
//     } else {
//       res.redirect('/music')
//     }
//   })
  
// })
// //Edit 
// app.get("/music/:id/edit", (req, res) => {
//   Song.findById(req.params.id, (err, foundSong) => {
//     res.render("edit.ejs", {song: foundSong})
//   })
// })

// //Update 
// app.put("/music/:id", (req, res) => {
//   if(req.body.Finished === "on") {
//     req.body.Finished = true
//   } else {
//     req.body.Finished = false
//   }
//   Song.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, 
//     updatedModel) => {
//       res.redirect("/music")
//   })
// })



// app.put("/music/:indexOfSongArray", (req, res) => {
//   if(req.body.Finished === "on") {
//     req.body.Finished = true; 
//   } else {
//     req.body.Finished = false;
//   } 
//   songs[req.params.indexOfSongArray] = req.body
//   res.redirect("/music")
//   })



app.use("/music", songController);

/* ====  Server Listener  ==== */
app.listen(PORT, function () {
	console.log(`App is live at http://localhost:${PORT}/`);
});