import React from "react";

const ListItem = (props) => {
  const { withdrawClick, depositClick, amt } = props;
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={`https://via.assets.so/game.jpg?w=250&h=250`}
          alt={`Adidas Shoes`}
          className="card-img-top"
          style={{ objectFit: "cover", height: "250px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">Adidas Shoes</h5>
          <p className="card-text text-success fw-bold">Rs. {amt}</p>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-danger mx-2"
              onClick={() => withdrawClick(amt)}
            >
              -
            </button>
            <b>Add to cart</b>
            <button
              className="btn btn-success mx-2"
              onClick={() => depositClick(amt)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
