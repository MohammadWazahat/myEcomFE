import React, { useState } from "react";
import HomeProdSingle from "./HomeProdSingle";

const HomeProducts = () => {
  const [myItems, setMyItems] = useState([
    {
      image:
        "https://images.pexels.com/photos/8113002/pexels-photo-8113002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Men's Clothes",
      off: "60",
    },
    {
      image:
        "https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Women's Clothes",
      off: "70",
    },
    {
      image:
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Smartphone",
      off: "40",
    },
    {
      image:
        "https://images.pexels.com/photos/1682519/pexels-photo-1682519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "TV",
      off: "50",
    },
    {
      image:
        "https://images.pexels.com/photos/22434763/pexels-photo-22434763/free-photo-of-bag-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Accesories",
      off: "70",
    },
    {
      image:
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Furniture",
      off: "40",
    },
    {
      image:
        "https://images.pexels.com/photos/1370082/pexels-photo-1370082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Appliances",
      off: "60",
    },
    {
      image:
        "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Jewellery",
      off: "30",
    },
    {
      image:
        "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Groceries",
      off: "70",
    },
  ]);

  const [grocery, setMyGrocery] = useState([
    {
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Tea",
      off: "60",
    },
    {
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Coffee",
      off: "70",
    },
    {
      image:
        "https://images.pexels.com/photos/266706/pexels-photo-266706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Biscuits",
      off: "55",
    },
    {
      image:
        "https://images.pexels.com/photos/27643179/pexels-photo-27643179/free-photo-of-tea-time.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Namkeen",
      off: "50",
    },
    {
      image:
        "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Nuts",
      off: "40",
    },
    {
      image:
        "https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Veggies",
      off: "60",
    },
    {
      image:
        "https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Spices",
      off: "50",
    },
    {
      image:
        "https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Oils & Ghee",
      off: "45",
    },
  ]);

  const [mobileBrands, setMobileBrands] = useState([
    {
      image: "https://www.logo.wine/a/logo/Samsung/Samsung-Logo.wine.svg",
      title: "Samsung",
      off: "20",
    },
    {
      image: "https://www.logo.wine/a/logo/Redmi/Redmi-Logo.wine.svg",
      title: "Redmi",
      off: "30",
    },
    {
      image: "https://www.logo.wine/a/logo/Vivo_(technology_company)/Vivo_(technology_company)-Logo.wine.svg",
      title: "Vivo",
      off: "25",
    },
    {
      image: "https://www.logo.wine/a/logo/Oppo/Oppo-Logo.wine.svg",
      title: "Oppo",
      off: "35",
    },
    {
      image: "https://www.logo.wine/a/logo/Sony/Sony-Logo.wine.svg",
      title: "Sony",
      off: "40",
    },
    {
      image: "https://www.logo.wine/a/logo/Motorola_Razr/Motorola_Razr-Motorola-White-Dark-Background-Logo.wine.svg",
      title: "Motorola",
      off: "35",
    },
    {
      image: "https://www.logo.wine/a/logo/OnePlus/OnePlus-Logo.wine.svg",
      title: "OnePlus",
      off: "25",
    },
    {
      image: "https://www.logo.wine/a/logo/IPhone/IPhone-Logo.wine.svg",
      title: "Iphone",
      off: "15",
    },
  ]);

  return (
    <div>
      <section>
        <div className="fc text-2xl my-4">Shop By Category</div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {myItems.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <HomeProdSingle {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <div className="fc text-2xl my-4">Groceries</div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
          {grocery.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <HomeProdSingle {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <div className="fc text-2xl my-4">Shop By Brand</div>
      </section>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
          {mobileBrands.map((item, index) => {
            return (
              <div key={index}>
                <div>
                  <HomeProdSingle {...item} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeProducts;
