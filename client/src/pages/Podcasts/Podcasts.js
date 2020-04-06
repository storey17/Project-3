import React, { useState, useEffect } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron1 from "../../components/Jumbotron1/Jumbotron1";
import Footer from "../../components/Footer/Footer";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import { Episode, Podcast, Genre } from "../../components/Form";
import { FormBtn } from "../../components/Form/FormBtn";
import ThirdPartyAPI from "../../components/ThirdPartyAPI/ThirdPartyAPI";
import Nav from "../../components/Nav";
import { MdHearing } from 'react-icons/md';

function Podcasts() {
    // Setting our component's initial state
    const [podcasts, setPodcasts] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all podcasts and store them with setPodcasts
    useEffect(() => {
        loadPodcasts()
    }, [])

    // Loads all podcasts and sets them to podcasts
    function loadPodcasts() {
        console.log("loading worked");
        API.getPodcasts()
            .then(res =>
                setPodcasts(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a podcast from the database with a given id, then reloads podcasts from the db
    function deletePodcast(id) {
        API.deletePodcast(id)
            .then(res => loadPodcasts())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    };

    // When the form is submitted, use the API.savePodcast method to save the podcast data
    // Then reload podcasts from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.episodeTitle || formObject.podcastTitle || formObject.genre) {
            API.savePodcast({
                episodeTitle: formObject.episodeTitle,
                podcastTitle: formObject.podcastTitle,
                genre: formObject.genre,
            })
                .then(res => {
                    loadPodcasts()
                    setFormObject({ ...formObject, podcastTitle: "", episodeTitle: "", genre: "" })
                }
                )

                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <Nav />
            <Jumbotron1 />
            <div className="container-fluid px-md-0">
                <div className="row justify-content-between no-gutters mx-md-5">
                    <div className="col-12 col-md-4 position-md-sticky d-flex vh-md-100">
                        <aside className="flex-grow-1 py-8 py-md-10">
                            <section className="mt-5">
                                <div className="card mx-auto shadow-lg mb-5 bg-white rounded" style={{ width: '35rem' }}>
                                    <div className="card-header mb-3" id="card-header-bg" style={{ textAlign: 'center', background: '#ff8e88' }}>
                                        <h2>Podcasts Needing My Ears <MdHearing /></h2>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <Episode
                                                onChange={handleInputChange}
                                                name="episodeTitle"
                                                value={formObject.episodeTitle}
                                                placeholder="Episode Title (required)"
                                            />
                                            <Podcast
                                                onChange={handleInputChange}
                                                name="podcastTitle"
                                                value={formObject.podcastTitle}
                                                placeholder="Podcast Title (required)"
                                            />
                                            <Genre
                                                onChange={handleInputChange}
                                                name="genre"
                                                value={formObject.genre}
                                                placeholder="Genre"
                                            />
                                            <FormBtn
                                                disabled={!(formObject.episodeTitle || formObject.podcastTitle || formObject.genre)}
                                                onClick={handleFormSubmit}
                                            >
                                            </FormBtn>
                                        </form>
                                    </div>
                                </div>
                            </section>
                            <section className="mt-3">
                                <div className="card mx-auto shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '35rem' }}>
                                    {podcasts.length ? (
                                        <div>
                                            {podcasts.map(podcast => (
                                                <List>
                                                    <ListItem key={podcast.id}>
                                                        <div to={"/podcasts/" + podcast.id}>
                                                            <strong>Episode</strong>: {podcast.episodeTitle}<br />
                                                            <strong>Podcast</strong>: {podcast.podcastTitle}<br />
                                                            <strong>Genre</strong>: {podcast.genre}
                                                        </div>
                                                        <DeleteBtn onClick={() => deletePodcast(podcast.id)} />
                                                    </ListItem>
                                                </List>
                                            ))}
                                        </div>
                                    ) : (
                                            <h4 style={{ textAlign: 'center' }}>No Saved Podcasts</h4>
                                        )}
                                </div >
                            </section >
                        </aside >

                        <div className="col-12 col-md-7">
                            <section className="pt-md-10">
                                <ThirdPartyAPI />
                            </section>
                        </div>
                    </div >
                </div >
            </div>
            <Footer />
        </div>
    );
};

export default Podcasts;