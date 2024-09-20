import axios from "axios";

export const productData = async () => {
  const response = await axios.get(
    "https://fakestoreapiserver.reactbd.com/products"
  );
  return response
};
