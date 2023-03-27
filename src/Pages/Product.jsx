import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

const Product = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getProducts = async () => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await resp.json();
    if (data) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
      setData([data]);
    }
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {data.map((product) => {
        console.log(product);
        return (
          <div className="w-full h-screen pt-[8vh]">
            <div className="w-full h-full flex max-md:flex-col">
              <div className="w-full h-1/2 md:w-1/2 md:h-full p-8">
                <img
                  src={product.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col px-2">
                <div className="w-full h-1/6 text-xl text-sky-600 font-Bebas object-contain md:text-3xl">
                  {product.title}
                </div>
                <div className="w-full h-1/6 text-lg text-gray-500 flex items-center font-Bebas">
                  Catogories: {product.category}
                </div>
                <div className="w-full h-2/6 border-y border-sky-600 py-2 text-lg overflow-y-auto font-Bebas text-gray-500">
                  <span className="text-sky-600">Description:</span> <br />
                  {product.description}
                </div>
                <div className="w-full h-1/6 flex justify-between items-center">
                  <div className="h-5/6 md:h-2/6 w-40 flex">
                    <button className="w-1/3 h-full bg-sky-600 text-white hover:bg-white hover:text-sky-600 shadow-md rounded-sm transition-colors ease-in-out">
                      -
                    </button>
                    <span className="w-1/3 h-full flex items-center justify-center">
                      1
                    </span>
                    <button className="w-1/3 h-full bg-sky-600 text-white hover:bg-white hover:text-sky-600 shadow-md rounded-sm transition-colors ease-in-out">
                      +
                    </button>
                  </div>
                  <span className="text-gray-600 text-2xl font-Bebas">
                    ${product.price}
                  </span>
                </div>
                <div className="w-full h-1/6">
                  <button className="bg-sky-600 text-white shadow-md hover:bg-white hover:text-sky-600 w-full h-5/6 md:h-3/6 rounded-sm font-Bebas transition-colors ease-in-out">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
