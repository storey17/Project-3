import React, {useState, useEffect} from "react";
import axios from "axios";

function ThirdPartyAPI() {

    // Setting our component's initial state
    let [apiData, setApiData] = useState({
        searchTerm: "",
        data: []
      });

    useEffect(() => {
        console.log("use effect");
        //**DO I NEED THIS HERE OR ON HANDLE SUBMIT FUNCTION?
        // axios.get('/api/search/' + state.searchTerm)
        // .then(data => {
        //   console.log(data.data);
        //   setState({ ...state, data: data });
        // });
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
            <h1>Find New Podcasts</h1>
            <input
                value={apiData.searchTerm}
                name="searchTerm"
                onChange={handleChange}
            />

            <button onClick={handleSubmit}>Submit</button>

            <div>
                {apiData.data.map(item => {
                    return ( 
                        <div 
                        key={item.title_original}
                        className="card text-left">
                      <img className="card-img-top" src={item.thumbnail} alt="podcast image"/>
                      <div className="card-body">
                        <h4 className="card-title">{item.title_original} by {item.podcast_title_original}</h4>
                        <div className="card-text">
                            <div dangerouslySetInnerHTML={{__html: item.description_highlighted}}/>
                            </div>
                        <a href={item.audio}>Podcast Audio</a>
                      </div>
                    </div>
                    )
                })}
            </div>

        </div>

    );
};

export default ThirdPartyAPI;
