import { useState } from "react";
import { Header } from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ProductCount } from "./models/quantity-products";

function App() {

  const [productCountValue, setProductCountValue] = useState<number>(0);

  return (
    <>
      <ProductCount.Provider value={{ ProductCount: productCountValue, setProductCount: setProductCountValue }}>
        <Header />
        <ListingBody />
      </ProductCount.Provider>
    </>
  );
}

export default App
