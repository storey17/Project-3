// CRUD for podcast table that accepts get, post, put, delete

var db = require("../models");
const axios = require("axios");

module.exports = function (app) {

  app.get("/api/podcast/:id", function (req, res) {
    console.log("got here with id of ", req.params.id);
    db.Podcast.findAll({
      where: {
        id: req.params.id
      }
    }).then(function (dbTrip) {
      res.send(dbTrip[0]);
    });
  });

  // getting all podcasts
  app.get("/api/index", function (req, res) {
    db.Podcast.findAll({
      where: {
        UserId: req.user.id
      },
      order: [
        ["date", "DESC"],
        ["time", "DESC"]
      ]
    })
      .then(function (dbPodcasts) {
        res.json(dbPodcasts);
      });
  });

  // post
  app.post("/api/podcasts", function (req, res) {
    console.log(req.body);
    console.log("checknamehere");
    db.Podcast.create({
      episodeTitle: req.body.episodeTitle,
      podcastTitle: req.body.podcastTitle,
      genre: req.body.genre,
      notes: req.body.notes,
      UserId: req.user.id
    })
      .catch((error) => {
        console.log(" error!");
        console.log(error);
      });
  });

  // put
  app.put("/api/podcasts", function (req, res) {
    console.log(req.body);
    db.Podcast.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      })
  });

  // DELETE route for deleting posts
  app.delete("/api/podcast/:id", function (req, res) {
    console.log(res);
    db.Podcast.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (rowDeleted) { // rowDeleted will return number of rows deleted
        if (rowDeleted === 1) {
          console.log("Deleted successfully");
          return;
        }
        else {
          console.log("didnt delete anything");
          return;
        }
      }, function (err) {
        console.log(err);
      });
  });

app.get("/api/search/:searchterm", function (req, res) {
  let searchTerm = req.params.searchterm;
  axios.get('https://listen-api.listennotes.com/api/v2/search?q='+searchTerm+'&only_in=title%2Cdescription&language=English', {headers: {
    'X-ListenAPI-Key': '2252a6101db34c99b55d6ca1043b3489'}})
.then(response => {
  res.json(response.data.results)
})
  .catch(err => res.json(err))
})


};