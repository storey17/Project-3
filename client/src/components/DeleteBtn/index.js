import React from "react";
import "./style.css";
import { MdDelete } from 'react-icons/md';


function DeleteBtn(props) {
  return (
    <span className="delete-btn btn-lg float-right" {...props} role="button" tabIndex="0" style={{color: 'red'}}>
      <MdDelete size={35}/>
    </span>
  );
}

export default DeleteBtn;

