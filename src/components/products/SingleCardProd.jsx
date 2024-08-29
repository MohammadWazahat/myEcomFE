import React from "react";
import StarRating from "../viewProduct/StarRating";


const SingleCardProd = (item) => {
  // console.log(Data[1].image2)
  return (
    <div className="">
      <div className="">
        <div>
          <div className="">
            <img className="border border-slate-700 h-64 w-full " src={item.cover_image} alt="" />
          </div>
          <div className="flex m-1 text-lg font-medium ">{item.model_name}</div>
          <div className="flex m-1">{item.brand_name}</div>
          <div className="flex m-1">
            <StarRating {...item }/>
          </div>
          <div className="flex justify-end mr-2">{item.price} $</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardProd;
