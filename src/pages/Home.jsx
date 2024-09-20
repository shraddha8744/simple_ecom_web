import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Product from "../components/Product";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    setProduct(data.data);
  }, [data]);

  return (
    <div>
      <Banner />
      <Product products={product} />
    </div>
  );
};

export default Home;
