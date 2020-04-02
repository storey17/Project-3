import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea1} from "../components/Form";
import { FormBtn } from "../components/Form/FormBtn";
import ThirdPartyAPI from "../components/ThirdPartyAPI";
import Nav from "../components/Nav";

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
        setFormObject({ ...formObject, [name]: value })
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
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h2>Podcasts To Listen To</h2>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="episodeTitle"
                            value={formObject.episodeTitle}
                            placeholder="Episode Title (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="podcastTitle"
                            value={formObject.podcastTitle}
                            placeholder="Podcast Title (required)"
                        />
                        <TextArea1
                            onChange={handleInputChange}
                            name="genre"
                            value={formObject.genre}
                            placeholder="Genre (Optional)"
                        />
                        <FormBtn
                            disabled={!(formObject.episodeTitle || formObject.podcastTitle || formObject.genre)}
                            onClick={handleFormSubmit}
                        >
                            Submit Podcast
                        </FormBtn>
                    </form>

                <ThirdPartyAPI />
                
            </Col>

                <Col size="md-6 sm-12">
                    <Jumbotron>
                        <h2>Podcasts Needing My Ears</h2>
                    </Jumbotron>
                    {podcasts.length ? (
                        <List>
                            {podcasts.map(podcast => (
                                <ListItem key={podcast.id}>
                                    <span to={"/podcasts/" + podcast.id}>
                                            <strong>Episode</strong>: {podcast.episodeTitle}<br/>
                                            <strong>Podcast</strong>: {podcast.podcastTitle}<br/>
                                            <strong>Genre</strong>: {podcast.genre}
                                    </span>
                                    <DeleteBtn onClick={() => deletePodcast(podcast.id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
        </div>
    );
}


export default Podcasts;
