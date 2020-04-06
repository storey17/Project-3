import React from "react";
import "./style.css";
import { GoTrashcan} from 'react-icons/go'


function DeleteBtn(props) {
  return (
    <span className="delete-btn btn-lg float-right" {...props} role="button" tabIndex="0">
      <GoTrashcan size={30}/>
    </span>
  );
}

export default DeleteBtn;

