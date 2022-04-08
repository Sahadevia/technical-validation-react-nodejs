import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../store/actions/TestAction";

import Users from "../../components/Users";
import HelloWorld from "../../components/HelloWorld";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      <Users />
      <HelloWorld />
    </>
  );
};

export default Home;
