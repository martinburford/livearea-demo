import Axios from "axios";
import React from "react";

export const ApiRest: React.FC = () => {
  Axios.get("https://api.bigcommerce.com/stores/gpiw17bnmw/v3/catalog/products", {
    headers: { "X-Auth-Token": "a2iuhtb71dld85wjrzdxi023x3s8y2h" }
  }).then((response) => {
    console.log("Response", response);
  }).catch((error) => {
    console.log("Error", error);
  });
  
  return <p>API Rest</p>;
};

export default ApiRest;
