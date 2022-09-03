



const express = require("express");

const router = express.Router()



const Song = require("../models/songs.js")




//Index
router.get("/", (req, res) => {
    // console.log("before")
    // let songs = await Song.find({})
    //   console.log("songs", songs)
    //   res.render("index.ejs", {songs});
    
    Song.find({}, (error, Song) => {
        console.log("inside")
      res.render("index.ejs", { Song});
      })
      console.log("after")
  }); 



// router.get("/", (req, res) => {
//     const today = new Date();
//     res.send(`
//     <h1> Welcome to Mulist</h1>
//     <p> Thank You for using this site to build your Mulist</p>
//     <p>${today}</p>
//     `);
// });

//Seed 
router.get("/seed", (req,res) => {
    Song.create(
      [
        {
        
      SongTitle: "All I Got",
      Artist: "Said The Sky, Kwesi",
      Year: "2018",
      Album: "Wide-Eyed",
      Finished: true
      },
      {
       SongTitle: "Congratulations",
       Artist: "Post Malone, Quavo",
       Year: "2016",
       Album: "Stoney (Deluxe)",
       Finished: true
       },
       {
       SongTitle: "Brave Soul",
       Artist: "Illenium",
       Year: "2021",
       Album: "Fallen Embers",
       Finished: true
       },
       {
        SongTitle: "Eternity",
        Artist: "Nurko , Dayce Williams",
        Year: "2022",
        Album: "Eternity",
        Finished: true
      },
      {
        SongTitle: "Bongo Bong",
        Artist: "Manu Chao",
        Year: "1998",
        Album: "Clandestino",
        Finished: true
      }], (err, data) => {
        res.redirect("/music")
      })
  })

  // New 
router.get("/new", (req, res) => {
    res.render("new.ejs")
  });


  //Create 
router.post("/", (req, res) => {

    if (req.body.Finished === "on") {
      req.body.Finished = true;
    } else {
      req.body.Finished = false;
    }
  
    Song.create(req.body, (err, createdSong) => {
      if(error) {
        console.log("error", error)
        res.send(error)
      } else {
        res.redirect("/music");
      }
    });
  
  });


  //Show
router.get("/:id", (req,res) => {
    Song.findById(req.params.id, (err, song) => {
      res.render("show.ejs", {
        Song: song,
      })
    })
    });


    // //Destroy
router.delete("/:id", (req, res) => {
// res.send("deleting item")
    Song.findByIdAndDelete(req.params.id, (err, deleteSong)=> {
      if (err) {
        console.log("error", error);
      } else {
        res.redirect('/music');
      }
    })
    
  })


  //Edit 
router.get("/:id/edit", (req, res) => {
    Song.findById(req.params.id, (err, foundSong) => {
      res.render("edit.ejs", {song: foundSong})
    })
  })



  //Update 
router.put("/:id", (req, res) => {
    if(req.body.Finished === "on") {
      req.body.Finished = true
    } else {
      req.body.Finished = false
    }
    Song.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, 
      updatedModel) => {
        res.redirect("/music")
    })
  })






module.exports = router

