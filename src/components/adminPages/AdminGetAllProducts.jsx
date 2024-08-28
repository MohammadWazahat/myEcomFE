import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AdminSingleCard from "./AdminSingleCard";

const AdminGetAllProducts = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    // console.log("i m useeffetct");
    const fetchData = async () => {
      try {
        const res = await axios.get("https://testnodebe.onrender.com/users/myProducts/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tks")}`,
          },
        });
        // console.log(res.data);
        setMyUser(res.data);
      } catch (err) {
        console.log(err);
        setMyUser(null);
      }
    };
    fetchData();
  }, []);

  // console.log(myUser);

  return (
    <div>
      <div>
        <div className="flex justify-center text-2xl font-medium mt-6 mx-2">
          Admin Product Page
        </div>

        <div className=" flex justify-end">
          <Link to="/adminAddProduct">
            <button className="buttonOne p-2 m-12 ">Admin Add Product</button>
          </Link>
        </div>
        <div>
          <div className="">
            {!myUser ? (
              <div className="">
                <div className="flex text-red-600 text-3xl justify-center">
                  {" "}
                  Session Expired{" "}
                </div>
                <div className="flex justify-center">
                  Please{" "}
                  <NavLink to="/logIn" className="text-blue-600 mx-2">
                    LogIn Again
                  </NavLink>
                </div>
              </div>
            ) : (
            <div className="fc">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {
                 myUser.map((user, index) => {
                  return (
                    <div className="" key={index}>
                      <AdminSingleCard {...user} />
                    </div>
                  );
                })
              }
             </div>
            </div>
            )}
          </div>
          <hr className="horizon border border-slate-800  mt-24" />
        </div>
      </div>
    </div>
  );
};

export default AdminGetAllProducts;
