import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import StarRating from "../viewProduct/StarRating";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const SingleCartItem = (item) => {
  console.log(item);
  const {
    state,
    deleteCartItem,
    deleteAllCartItems,
    increaseAmount,
    decreaseAmount,
  } = useContext(CartContext);
  const data = state.cart;
  return (
    <div className="cardTwo border border-slate-600">
      <div>
        <div className="flex gap-4 ">
          <div className="flex flex-col m-2">
            <div className="border border-slte-700a w-48">
              <img src={item.cover_image} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 m-2">
            <div className="text-xl font-semibold">
             {item.brand_name} {item.model_name}
            </div>
            <div className="flex gap-2 ">
              <StarRating {...item} />
              <span className="text-sm"> ( {item.rating_count} ratings ) </span>
            </div>
            <div className="">{item.price} $</div>

            {/* <div className="border border-slate-700">stock : {item.stock}</div> */}
            <div className=" ">Sub Total : {item.price * item.amount} $</div>
          </div>
        </div>
        <div className="flex justify-between m-2 items-center ">
          <div className=" mx-8">
            <div className="flex gap-2">
              <button
                className="flex items-center"
                onClick={() => decreaseAmount(item._id)}
              >
                <FaMinus />
              </button>
              <div className=" p-2">{item.amount}</div>
              <button
                className="flex items-center"
                onClick={() => increaseAmount(item._id)}
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="">
            <button
              type="button"
              className="border border-gray-800 rounded p-2 px-4 bg-red-700 text-gray-100"
              onClick={() => deleteCartItem(item._id)}
            >
              Delete From Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCartItem;
