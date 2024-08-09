import React, { useState } from "react";
import CartCard from "./Component/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: "5.0",
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      image: "https://pbs.twimg.com/media/ETRanUuWAAEtL8w.jpg:large",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ... ",
      price: 899,
      discountPercentage: 17.94,
      rating: "5.0",
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail. jpg",
      image: "https://ringke.co.in/cdn/shop/files/61LoHQ9gpdL._SL1500_6e1233db-a8df-48c1-8f1b-9dace60e8187.jpg?v=1690962996",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: "4.0",
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      image: "https://i.pinimg.com/originals/88/3a/e0/883ae0b37dc5304ef7ef8153e935c466.jpg",
    },
    {
      id: 4,
      title: "OPPO F19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: "4.0",
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      image: "https://m.media-amazon.com/images/I/71X3PvspusS.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei's re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK",
      price: 499,
      discountPercentage: 10.58,
      rating: "4.0",
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail. jpg",
      image: "https://images.fonearena.com/blog/wp-content/uploads/2019/03/HUAWEI-P30-Lite-1.jpg",
    },
  ]);

  return (
    <>
    <h1 className="site">Mobiles Shopping site</h1>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}
export default App;