import React, { Component } from "react";
import axios from "axios";
const unirest = require('unirest');
import { object } from "prop-types";

function ThirdPartyAPI() {

    // Setting our component's initial state
    let [state, setState] = useState({
        searchTerm: "",
        url: "",
        data: {}
      });


    useEffect(() => {
        console.log("use effect");



        axios.get('/api/search/' + state.searchTerm)
        .then(data => {
          console.log(data.data);
          setState({ ...state, data: object.body.results });
        });
      }, []);

    const handleChange = e => {
        const { searchTerm } = event.target;
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        setState({
            ...state,
            url: "https://listen-api.listennotes.com/api/v2" + state.searchTerm
        });
    };

    return (
        <div>
            <h1>Find New Podcasts</h1>
            <input
                value={state.searchTerm}
                name="searchTerm"
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Submit</button>

            <ul>
                {state.data.map(item => {
                    return 
                    <li 
                    title={item.title}
                    title={item.title} 
                    
                    />;
                })}
            </ul>

        </div>
    );


};


export default ThirdPartyAPI;
