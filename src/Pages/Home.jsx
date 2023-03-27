import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import Slider from "../Components/Slider";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setTimeout(() => {
              setLoading(false);
            }, 2000);
            setProducts(data);
            console.log(data);
          }
        });
    }, []);
    if (loading) {
      return <Loader />;
    }
  return (
    <div className="w-full min-h-screen py-[14vh] flex flex-col ">
      <h1 className="text-3xl my-3 text-sky-600 font-Bebas block mx-auto">Looking for jewelry?</h1>
      <Slider />
      <h2 className="px-4 text-lg text-sky-600 font-medium font-Bebas py-4">All Products:</h2>
      <div className="w-full max-sm:px-2 px-4 py-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products.map(function (product) {
          {console.log(product)}
          return (
            <div className="w-full border shadow-md hover:shadow-lg rounded-md transition ease-in-out">
              <img src={product.image} alt="" className="w-full h-[25vh]" />
              <div className="w-full h-[8vh] flex px-2 text-sky-600 text-sm">
                {product.title.slice(0, 55)}
              </div>
              <div className="w-full h-[5vh] items-center flex   px-2 text-gray-500 text-lg font-Bebas justify-end">
                ${product.price}
              </div>
              <div className="w-full h-[8vh] max-sm:h-[7vh] flex p-2 text-sm">
                <button className="w-full bg-sky-600 hover:bg-white text-white hover:text-sky-600 rounded-sm shadow-md transition ease-in-out">
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Home;
