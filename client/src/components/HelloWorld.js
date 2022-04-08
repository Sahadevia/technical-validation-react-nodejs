import React from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../store/actions/TestAction";

const HelloWorld = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      <h1 style={{ margin: "auto" }}>Hello World !</h1>
      <button
        onClick={() => {
          console.log("etst");
          dispatch(getAllPosts());
        }}
      >
        test
      </button>
    </div>
  );
};

export default HelloWorld;
