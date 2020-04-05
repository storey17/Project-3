import React from "react";
import { MdPlaylistAdd } from 'react-icons/md';


export function FormBtn(props) {
  return (
    <button className="playlist-btn border-secondary btn-lg btn-light" style={{ color: 'black', float: "right", marginBottom: 10 }} {...props} >
      {props.children}
      <MdPlaylistAdd size={40}/> Save Podcast
    </button>
  );
};