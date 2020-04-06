import React from "react";
import { MdPlaylistAdd } from 'react-icons/md';


export function FormBtn(props) {
  return (
    <button className="btn btn-lg btn-primary" style={{ color: 'white', float: "right", marginBottom: 10 }} {...props} >
      {props.children}
      <MdPlaylistAdd size={40} /> Save Podcast
    </button>
  );
};