import Axios from "axios";
import React, { useEffect, useState } from "react";

// Styles
import styles from "./api-rest.module.scss";

interface IUseState {
  products: {
    description: string;
    name: string;
    price: number;
    sku: string;
  }[];
}

export const ApiRest: React.FC = () => {
  const [state, updateState] = useState<IUseState>({
    products: []
  });

  const { products } = state;

  useEffect(() => {
    Axios.get("https://cors.bridged.cc/https://api.bigcommerce.com/stores/gpiw17bnmw/v3/catalog/products", {
      headers: { "X-Auth-Token": "a2iuhtb71dld85wjrzdxi023x3s8y2h" }
    }).then((response) => {
      const { data: { data: results } } = response;
      console.log("Response", results);

      const cleanProducts: any[] = [];

      results.map((result) => {
        const { name, description, price, sku } = result;
        cleanProducts.push({
          description,
          name,
          price,
          sku
        });
      })

      // Save the results from the API to local component state
      updateState({
        products: [...cleanProducts]
      });
    }).catch((error) => {
      console.log("Error", error);
    });
  }, []);

  function createMarkup(markup) {
    return {__html: markup};
  }

  return products.length === 0 ? (
    <h1>Fetching from API</h1>
  ) : (
    <>
      <h1>Results from API</h1>
      <ul className={styles["api-rest"]}>
        {state.products.map((result, index) => {
          return (
            <li key={index}>
              <h4>{result.name}</h4>
              <ul>
                <li><strong>Price:</strong>${result.price} USD</li>
                <li><strong>SKU:</strong>{result.sku}</li>
              </ul>
              <div dangerouslySetInnerHTML={createMarkup(result.description)} />;
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default ApiRest;
