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
    }).then(function (dbPodcast) {
      res.send(dbPodcast[0]);
    });
  });

  // getting all podcasts
  app.get("/api/podcasts", function (req, res) {

    // console.log(req);
    db.Podcast.findAll({
      where: {
        UserId: req.user.id
      },
    })
      .then(function (dbPodcast) {
        res.json(dbPodcast);
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
      UserId: req.user.id
    }).then(data => res.json(data))

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
  app.delete("/api/podcasts/:id", function (req, res) {
    // console.log(res);
    db.Podcast.destroy({
      where: {
        id: req.params.id
      }
    }).then(data => res.json(data));
  });

app.get("/api/search/:searchterm", function (req, res) {
  let searchTerm = req.params.searchterm;
  axios.get('https://listen-api.listennotes.com/api/v2/search?q='+searchTerm+'&only_in=title%2Cdescription&language=English', {headers: {
    'X-ListenAPI-Key': process.env.PodcastAPIKey}})
.then(response => {
  res.json(response.data.results)
})
  .catch(err => res.json(err))
})


};