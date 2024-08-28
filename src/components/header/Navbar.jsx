import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div>
      {/* <section className="fixed top-0 w-full"> */}
      <section className="">
        <header className="">
          <div className=" navbarColor flex  justify-around items-center p-2">
            <div className=" text-2xl font-bold">
              <span className="text-green-700 text-3xl">M</span>OBILE
              <span className="text-green-700 text-3xl"> W</span>ORLD
            </div>
            <div className="flex item-center justify-center ">
              <ul className="flex gap-6 ">
                <li className="">
                  <Link to="/" className="">
                    <IoHomeOutline
                      color="rgb(0, 68, 254)"
                      className=" h-8 w-8 "
                    />
                  </Link>
                </li>
                <li className="">
                  <Link to="/allProducts" className="">
                    <BiCategory color="rgb(0, 68, 254)" className="h-8 w-8 " />
                  </Link>
                </li>
                <li className="">
                  <Link to="/cart" className="">
                    <div className="flex">
                      <div>
                        <MdOutlineShoppingCart
                          color="rgb(0, 68, 254)"
                          className="h-8 w-8 "
                        />
                      </div>
                      <span>{state.totalItems} </span>
                    </div>
                  </Link>
                </li>
                <li className="">
                  <Link to="/logIn" className="">
                    <MdOutlineAccountCircle
                      color="rgb(0, 68, 254)"
                      className="h-8 w-8 "
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <hr className="horizon boder border-slate-800 " />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
