import "tailwindcss/tailwind.css";
import Products from "./components/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { products as initialProducts } from "./mocks/products.json";
import useFilter from "./hooks/useFilter.js";
import Cart from "./components/Cart.jsx";
// import {IS_DEVELOPMENT} from "./config.js"
import CartProvider from "./context/cart.jsx";

function App() {
  const { filterProducts } = useFilter();

  const productsFiltered = filterProducts({ products: initialProducts });

  return (
    <CartProvider>
      <Header />
      <Cart/>
      <Products products={productsFiltered} />
      <Footer />
    </CartProvider>
  );
}

export default App;
