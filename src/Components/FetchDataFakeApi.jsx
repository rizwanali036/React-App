import { useState, useEffect } from "react";

function MyComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error message");
        const result = await response.json();
        setProducts(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[]);


return (
  <>
  <div>
        {loading && <p>Loading message</p>}
        {error && <p>error message {error}</p>}
        {!loading && !error && (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.title} — ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  </>
    
  );
}
  export default MyComponent;
