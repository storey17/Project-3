import React from "react";
export function FormBtn(props) {
  return (
    // <div className="card-footer text-center" id="card-footer-bg" style={{ fontSize: '15pt', textAlign: "center", background: "#ff8e88" }}>
  <button className="btn btn-primary btn-lg" style={{ color: 'black', float: "right", marginBottom: 10 }} {...props} >
    {props.children}
  </button>
  // </div>
  );
};

{/* <div className="card-footer text-center" id="card-footer-bg" style={{ fontSize: '15pt' }}>
  <button className="btn btn-primary btn-lg"><Link to="/login" style={{ color: 'white', }}>Login Page</Link></button>

</div> */}

// float: "right", marginBottom: 10 
// style={{ color: 'white' }}