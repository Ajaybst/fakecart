import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./Card";
const Home = () => {
  const [prod, setProd] = useState();
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setProd(data);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Card prod={prod} />
    </>
  );
};

export default Home;
