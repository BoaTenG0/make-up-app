import axios from "axios";
import { useState } from "react";
const BASE_URL = "http://makeup-api.herokuapp.com/api/v1/products";
const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);

  //function to retrieve data from base url
  const getTopProducts = () => {
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          product_tags: "ecocert",
        },
      })
      .then((response) => setProducts(response.data));
  };

  //function to retrieve single product data from base url
  const getSingleProduct = (id) => {
    axios.get(`${BASE_URL}/${id}.json`).then((response) => {
      setSingleProduct(response.data);
      getRecommendedProducts(response.data);
    });
  };

  //function to recommend product
  const getRecommendedProducts = (product) => {
    let key;
    let value;
    if (product.product_type) {
      key = "product_type";
      value = product.product_type;
    } else {
      key = "brand";
      value = product.brand;
    }
    axios
      .get(`${BASE_URL}.json`, {
        params: {
          [key]: value,
        },
      })
      .then((response) => {
        setSingleProduct(response.data);
        // getRecommendedProducts(response.data);
      });
  };

  //   useEffect(() => {
  //     getTopProducts();
  //   }, []);
  return { products, getTopProducts, singleProduct, getSingleProduct };
};
export default useGetProducts;
