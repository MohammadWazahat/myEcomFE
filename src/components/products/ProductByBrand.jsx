import React, { useContext, useState } from "react";
import { AllDataContext } from "../../contexts/AllDataContext";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import SingleCardProd from "./SingleCardProd";

const ProductByBrand = (item) => {
  const { AddToPage } = useContext(AllDataContext);
  const { AddToMyCart } = useContext(CartContext);
  return (
    <div>
      <section>
        <div className="cardOne border border-slate-800 " key={item._id}>
          <div className="">
            <SingleCardProd {...item} />
          </div>
          <div className="flex justify-center items-center gap-4 m-2 p-2 ">
            <button
              className="buttonThree flex justify-center items-center p-2 "
              onClick={() => AddToMyCart({ ...item })}
            >
              Add to cart
            </button>
            <NavLink to={`/viewProduct/${item.id}`}>
              <button
                className="buttonThree p-2"
                onClick={() => AddToPage({ ...item })}
              >
                More details ...
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductByBrand;
