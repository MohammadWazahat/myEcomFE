import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import SingleCartItem from "./SingleCartItem";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { state, deleteAllCartItems } = useContext(CartContext);

  // console.log(state);
  //  console.log(state.cart)
  //  console.log(state.amount)
  const data = state.cart;
  const myCartData = state.cartProducts;
  // console.log(myCartData);

  if (state.isLoading) {
    return <div>...Loading</div>;
  }

  if (state.isError) {
    return <div>Error ..............</div>;
  }

  const checkoutHandler = async (amount) => {
    console.log(amount);
    const {
      data: { key },
    } = await axios.get("https://testnodebe.onrender.com/api/getkey");

    const {
      data: { order },
    } = await axios.post("https://testnodebe.onrender.com/api/checkout", {
      amount,
    });

    console.log(order);
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "M Wazahat Ali Rza",
      description: "My RazorPay",
      image: "",
      order_id: order.id,
      callback_url: "https://testnodebe.onrender.com/api/paymentverification",
      prefill: {
        name: "M Rza",
        email: "mwazahatrza@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    // console.log(razor)
    razor.open();
  };
  // console.log(state);
  // console.log(state.totalPrice + state.shippingFee);
  // console.log();
  const amount = state.totalPrice + state.shippingFee;
  // console.log(amount);

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-8 lg:mx-8 ">
        <div className=" lg:w-1/2">
          <section>
            <div>
              <div className="flex justify-center text-2xl font-medium my-12">
                My Cart
              </div>
            </div>
            <div className=" flex flex-col gap-8 mx-2">
              {myCartData.map((item, index) => {
                return (
                  <div key={index}>
                    <SingleCartItem {...item} />
                  </div>
                );
              })}
            </div>
            <div className="flex  m-2 mt-16  ">
              <button
                className="text-amber-100 border border-slate-700 rounded-full p-3 bg-red-900 w-full "
                onClick={() => deleteAllCartItems()}
              >
                Delete All Cart Items
              </button>
            </div>
          </section>
        </div>
        <div className="lg:w-1/2 mt-32 ">
          <section className="">
            <div className=" bgcOne  flex flex-col border border-slate-700 ">
              <div className="p-4 py-8 flex flex-col gap-4">
                <div className="">Cart Total : {state.totalPrice}$ </div>
                <div>Shipping Fee : {state.shippingFee}$</div>
                <div className="text-xl text-red-400">
                  Order Total : {state.totalPrice + state.shippingFee}${" "}
                </div>
                <div>
                  <button
                    className="w-full border border-slate-100 hover:border-red-400 rounded-full py-2"
                    onClick={() => checkoutHandler(amount)}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="mt-12 flex justify-center items-center ">
              <NavLink to="/allProducts">
                <button className="border border-slate-800 p-3 px-5 m-2 ">
                  Shop Now
                </button>
              </NavLink>
            </div>
          </section>
        </div>
      </div>

      <hr className="horizon border border-slate-800 mx-4 m-2 " />
    </>
  );
};

export default Cart;
