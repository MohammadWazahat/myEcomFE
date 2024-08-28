import React, { useContext, useState } from "react";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";

const ProdBrandButton = () => {
  const { AllProducts, Y: Y, FilterByBrand } = useContext(SortAndFilterContext);
  return (
    <div>
      <section>
        <div className="flex justify-center items-center my-4 text-xl font-bold">
          Brand
        </div>
        <div className="  grid grid-cols-1  m-2 gap-2">
          {Y.map((item, index) => {
            return (
              <button
                className="buttonFive w-full p-2  rounded "
                key={index}
                onClick={() => FilterByBrand(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="flex justify-center items-center mt-12 mb-8">
          <button
            className="buttonTwo m-2 p-2 px-4"
            onClick={() => AllProducts()}
          >
            All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProdBrandButton;
