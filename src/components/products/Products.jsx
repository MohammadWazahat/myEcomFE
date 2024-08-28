import React, { useContext, useState } from "react";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";
import { IoMdGrid } from "react-icons/io";
import { FaList } from "react-icons/fa";
import SortButton from "./SortButton";
import ProdBrandButton from "./ProdBrandButton";
import ProductByBrand from "./ProductByBrand";

const Products = () => {
  const [mode, setMode] = useState(true);

  const { isLoading, isError, productsByBrand } =
    useContext(SortAndFilterContext);

  // console.log(state)
  // console.log(newData);
  if (isLoading) {
    return <div>...Loading</div>;
  }

  if (isError) {
    return <div>Error ..............</div>;
  }

  return (
    <div>
      <section className="flex gap-2 ">
        <div className=" w-2/5 sm:w-1/4 xl:1/5 ">
          <section>
            <ProdBrandButton />
          </section>
          <section className="mt-12">
            <SortButton />
          </section>
          <section className="mt-12">
            <div className="flex flex-col justify-end items-center gap-4 mx-4">
              <div className="flex justify-center items-center my-4 text-xl font-bold">
                View By
              </div>
              <button
                className=" buttonThree w-full gap-2"
                onClick={() => setMode(true)}
              >
                <div className="">Grid</div>
                <IoMdGrid className="h-8 w-8 " />
              </button>
              <button
                className=" buttonThree w-full gap-2"
                onClick={() => setMode(false)}
              >
                <div className="">List </div>
                <FaList className="h-7 w-7 " />
              </button>
            </div>
          </section>
        </div>
        <div className=" w-3/5 sm:w-3/4 xl-4/5 ">
          <section className="mt-12">
            <div className="flex justify-center items-center text-2xl font-bold">
              Choose Your Brand
            </div>
            <div className="fc mt-12">
              <div
               className={
                mode
                  ? `grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-2 `
                  : `flex flex-col gap-8 `
              }
              // className={mode ? `` : ` `}
              // className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              >
                {productsByBrand.map((item) => {
                  return (
                    <div
                      className="cardOne border border-slate-800 "
                      key={item._id}
                    >
                      <ProductByBrand {...item} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>

      <hr className="horizon border border-slate-800  mt-24" />
    </div>
  );
};

export default Products;
