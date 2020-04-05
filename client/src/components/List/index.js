import React from "react";
import "./style.css";


// export function List({ children }) {
//   return (
//     <div className="">
//       <ul className="list-group list-group-flush">{children}</ul>
//     </div>
//   );
// }

export function ListItem({ children }) {
  return <li className="list-group-item" style={{border: 'none'}}><h4>{children}</h4></li>
}

{/* <div class="col-md-6 col-lg-6">
  <div class="card card-body bg-primary-2 text-light">

    <div class="d-flex">
      <a href="#" class="btn btn-lg btn-primary btn-round flex-shrink-0"></a>
    <div class="ml-3">
      <h4 class="mb-1">An interesting discussion on design</h4>

      <span class="text-medium">Genre:</span>
    </div>
  </div>
</div>
              </div > */}