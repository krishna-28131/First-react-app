import { useState, useMemo, useCallback } from "react";
import ProductList from "./components/ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Mobile", price: 500 },
  { id: 3, name: "Headphone", price: 200 }
];

function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  /*
   🔹 useMemo
   Total price tabhi calculate hoga jab products change honge
  */
  const totalPrice = useMemo(() => {
    console.log("Total price calculate ho raha hai...");
    return products.reduce((total, item) => total + item.price, 0);
  }, [products]);

  /*
   🔹 useCallback
   Function reference same rahega
   ProductList unnecessary re-render nahi karega
  */
  const handleProductSelect = useCallback((product) => {
    console.log("Selected Product:", product);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Performance Optimization</h2>

      <h3>Total Price: ₹{totalPrice}</h3>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <hr />

      <ProductList
        products={products}
        onProductSelect={handleProductSelect}
      />
    </div>
  );
}

export default App;
