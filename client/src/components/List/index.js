import React from "react";
import "./style.css";
import { FaPodcast } from 'react-icons/fa';

export function List({ children }) {
  return (
    <ul className="list-group list-group-flush">{children}
    </ul>
  );
};

export function ListItem({ children }) {
  return (
    <li className="list-group-item">
      <h5 className="mb-0">{children}</h5>
    </li>
  );
};

