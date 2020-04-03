import React from "react";
import { MdPlaylistAdd } from 'react-icons/md';


export function FormBtn(props) {
  return (
    <div className="btn btn-light btn-lg" style={{ color: 'black', float: "right", marginBottom: 10 }} {...props} >
      {props.children}
      <MdPlaylistAdd size={75}/>
    </div>
  );
};



  // <div style={{ size: 35, color: 'black', float: "right", marginBottom: 10 }} {...props} >
  //   {props.children}
  //   <MdPlaylistAdd />
  // </div>