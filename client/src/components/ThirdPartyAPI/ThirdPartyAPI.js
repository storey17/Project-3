import React, { useState, useEffect } from "react";
import axios from "axios";
import './ThirdPartyAPI.css';
import { GoSearch } from 'react-icons/go';


function ThirdPartyAPI() {

    // Setting our component's initial state
    let [apiData, setApiData] = useState({
        searchTerm: "",
        data: []
    });

    useEffect(() => {
        console.log("use effect");
    }, []);

    const handleChange = e => {
        setApiData({ ...apiData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        axios.get('/api/search/' + apiData.searchTerm)
            .then(data => {
                console.log(data.data);
                setApiData({ ...apiData, data: data.data });
            });
    };



    return (
        <div>
            <section className="mt-5">
                <div className="card mx-auto shadow-lg mb-5 bg-white rounded" style={{ width: "48rem", }}><div className="card-header mb-3" id="card-header-bg" style={{ textAlign: "center", background: "#ff8e88" }}><h3>Find New Podcasts</h3></div><div className="card-body">
                    <form className="rounded">
                        <div className="input-group input-group-lg">
                            <div className="input-group-prepend">
                                <span className="input-group-text border-0 pr-2 pl-2">
                                    <GoSearch />
                                </span>
                            </div>
                            <input
                                value={apiData.searchTerm}
                                name="searchTerm"
                                onChange={handleChange}
                            />
                            <div className="input-group-append">
                                <span className="input-group-text border-0 py-0 pl-1 pr-3" style={{ background: 'transparent' }}>
                                    <button onClick={handleSubmit} className="btn btn-lg btn-primary">Search</button>
                                </span>
                            </div>
                        </div>
                    </form>

                    <input
                        value={apiData.searchTerm}
                        name="searchTerm"
                        onChange={handleChange}
                    />

                    <button onClick={handleSubmit}>Search</button>

                    <div>
                        {apiData.data.map(item => {
                            return (
                                <div className="col mt-2">
                                    <div key={item.title_original} className="card card-article-wide flex-md-row no-gutters hover-shadow-3d" style={{ width: "rem" }}>
                                        <div class="col-md-5 col-lg-6">
                                            <img src={item.thumbnail} className="card-img-top" alt="podcast image" />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title_original} by {item.podcast_title_original}</h5>
                                            <p className="card-text">
                                                <div dangerouslySetInnerHTML={{ __html: item.description_highlighted }} />
                                            </p>
                                            <a target="_blank" href={item.audio} className="btn btn-primary">Listen now!</a>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </section>
        </div>

    );
};

export default ThirdPartyAPI;
