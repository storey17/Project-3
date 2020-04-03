import React from "react";


export function Episode(props) {
  return (
    <div className="form-group">
      <input type="text" name="episode" className="form-control" id="episode" {...props} />
    </div>
  );
};

export function Podcast(props) {
  return (
    <div className="form-group">
      <input type="text" name="podcast" className="form-control" id="podcast" {...props} />
    </div>
  );
};

export function Genre(props) {
  return (
    <div className="form-group">
      <input type="text" name="genre" className="form-control" id="genre" {...props} />
    </div>
  );
};



