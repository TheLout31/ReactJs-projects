import React from "react";
import "./styles.css";
const ListItem = () => {
  return (
    <div className={"MainContainer"}>
      <div className={"ImgContianer"}>
        <img
          className={"img"}
          src="https://images.unsplash.com/photo-1707823947330-07441585bc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"
        />
        <div>
          <span>$35</span>
          <small>
            <strike>$30</strike>
          </small>
        </div>
        <div>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
