import React, { useContext, useState } from "react";
import { SortAndFilterContext } from "../../contexts/SortAndFilterContext";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";

const SortButton = () => {
  const {
    SortAscRed,
    SortDescRed,
    SortLowestRed,
    SortHighestRed,
    Y: Y,
  } = useContext(SortAndFilterContext);
  return (
    <div>
      <section className="mt-12">
        <div className="flex justify-center items-center my-4 text-xl font-bold">
          Sort By
        </div>
        <div className="fc   ">
          <div className="fc flex-col gap-4  ">
            <button
              className="buttonThree w-full "
              onClick={() => SortLowestRed()}
            >
              <FaLongArrowAltUp />
              Highest
            </button>
            <button
              className="buttonThree w-full "
              onClick={() => SortHighestRed()}
            >
              <FaLongArrowAltDown />
              Lowest
            </button>
            <button
              className="buttonThree w-full "
              onClick={() => SortAscRed()}
            >
              A to Z
            </button>
            <button
              className="buttonThree w-full "
              onClick={() => SortDescRed()}
            >
              Z to A
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SortButton;
