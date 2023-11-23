import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(async () => {
    const data = await fetch("http://localhost:3000/users");

    const users = await data.json();

    const cartData = users[0].cart.map(async (product, index) => {
      const responseCart = await fetch(
        "http://localhost:3000/products/" + product
      );

      const cartData = await responseCart.json();
      users[0].cart[index] = cartData;
    });
    console.log(users, "this is the updated users data with cart data in it");
  }, []);

  return <></>;
}

export default App;
