var express = require('express');
var router = express.Router();
var moviesDrawer = require('../models/movies').moviesDrawer;



router.get('/get-movies', function(req, res, next) {

  moviesDrawer.find({}, function(err, data){
    if(err){
      res.status(400).json({
        error: err.response
       });
    }
    else{
      res.status(200).json({
        docs: data
       });
    }
  });
    
});


router.get('/get-movie/:id', function(req, res, next) {

  const id = req.params.id || req.body.id;

  moviesDrawer.find({_id: id}, function(err, data){
    if(err){
      res.status(400).json({
        error: err.response
       });
    }
    else{
      res.status(200).json({
        docs: data
       });
    }
  });
    
});



router.post('/create-movie', function(req, res, next) {
  
  const body = req.body;


  const newMovie = new moviesDrawer({
    cover: body.cover || "",
    title: body.title || "",
    desc: body.desc || ""
  });

  newMovie.save(function(err){
    if(err){
      res.status(400).json({
        error: err.response
       });
    }
    else{
      res.status(200).json({
        message: "Done"
      });
    }
  });

});



router.put('/update-movie/:id', function(req, res, next) {

  const body = req.body;
  
  const id = req.params.id || req.body.id;


  let updateData = {
    cover: body.cover || "",
    title: body.title || "",
    desc: body.desc || ""
  };


  moviesDrawer.updateOne({_id: id}, updateData, function(err, response){
    if(err){
      res.status(400).json({
        error: err.response
       });
    }
    else{
      res.status(200).json({
        message: "Done"
      });
    }
  });

});



router.delete('/delete-movie/:id', function(req, res, next) {
  
  const id = req.params.id || req.body.id;

  if(!id){
     res.status(400).json({
      error: err.response
     });
     return false;
  }

  console.log(id)

  
  moviesDrawer.deleteOne({_id: id}, function(err){
    if(err){
      res.status(400).json({
        error: err.response
       });
    }
    else{
      res.status(200).json({
        message: "has been removed"
      });
    }
  });

});




module.exports = router;
