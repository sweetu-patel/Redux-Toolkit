import React from "react";
import { useDispatch } from "react-redux";
import { Deposit, Withdraw } from "../redux/slices/cartSlice";
import ListItem from "./ListItem";

const Addtocart = () => {
  const dispatch = useDispatch();
  const withdrawClick = (rs) => {
    console.log("-50");
    dispatch(Withdraw(rs));
  };
  const depositClick = (rs) => {
    console.log("+50");
    dispatch(Deposit(rs));
  };

  return (
    <div className="container my-4">
      <div className="row">
        <ListItem
          withdrawClick={withdrawClick}
          depositClick={depositClick}
          amt={20}
        ></ListItem>
        <ListItem
          withdrawClick={withdrawClick}
          depositClick={depositClick}
          amt={50}
        ></ListItem>
        <ListItem
          withdrawClick={withdrawClick}
          depositClick={depositClick}
          amt={80}
        ></ListItem>
      </div>
    </div>
  );
};

export default Addtocart;
