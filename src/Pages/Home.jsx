import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import Slider from "../Components/Slider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=9`)
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
    <div className="w-full min-h-screen pt-[14vh] flex flex-col bg-white dark:bg-slate-900">
      <h1 className="text-3xl my-3 text-sky-600 font-Bebas block mx-auto">
        Looking for jewelry?
      </h1>
      <Slider />
      <div className="flex w-1/2 justify-end mx-auto py-4">
        <Link
          to="/jewelry"
          className="w-1/2 lg:w-1/4 h-4/5 bg-sky-600 text-white font-Bebas text-md flex items-center justify-center hover:bg-white shadow-md hover:text-sky-600 transition ease-in-out"
        >
          See more
          <AiFillCaretRight />
        </Link>
      </div>
      <h2 className="px-4 text-lg text-sky-600 font-medium font-Bebas py-4">
        Lastest Products:
      </h2>
      <div className="w-full max-sm:px-2 px-4 py-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {products.map(function (product) {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="w-full shadow-md hover:shadow-lg transition ease-in-out md:hover:scale-90 md:hover:-translate-y-4 duration-500 bg-white"
            >
              <img
                src={product.image}
                alt=""
                className="w-full h-[25vh] object-contain"
              />
              <div className="w-full h-[8vh] flex px-2 text-sky-600 text-sm font-Bebas">
                {product.title.slice(0, 55)}
              </div>
              <div className="w-full h-[5vh] items-center flex   px-2 text-gray-500 text-lg font-Bebas justify-end">
                ${product.price}
              </div>
              <div className="w-full h-[8vh] max-sm:h-[7vh] flex p-2 text-sm">
                <button className="w-full bg-sky-600 hover:bg-white text-white hover:text-sky-600 rounded-sm shadow-md transition ease-in-out font-Bebas">
                  Add to cart
                </button>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
