import axios from "axios";

export default {
    // Gets all podcasts
    getPodcasts: function () {
        return axios.get("/api/podcasts");
    },
    // Gets the podcast with the given id
    getPodcast: function (id) {
        return axios.get("/api/podcasts/" + id);
    },
    // Deletes the podcast with the given id
    deletePodcast: function (id) {
        return axios.delete("/api/podcasts/" + id);
    },
    // Saves a podcast to the database
    savePodcast: function (podcastData) {
        return axios.post("/api/podcasts", podcastData);
    }
};
