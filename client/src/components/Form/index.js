import React from "react";


export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea1(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="1" {...props} />
    </div>
  );
}

export function TextArea2(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
    </div>
  );
}


