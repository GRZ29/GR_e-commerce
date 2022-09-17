import { createContext, useState, useEffect } from "react";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CardContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [cartItems, setCartItems] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPerArticulo, setTotalPerArticulo] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.cantidad * cartItem.costo);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);

    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.cantidad);
    }, 0);
    setCartItems(newCartItems);
  }, [cart]);

  const removeItem = (id) => {
    setCart([...cart].filter((item) => item.id !== id));
  };

  const newTotalArticulo = (cantidad, costo) => {
    console.log(costo);
  };

  const increaseCantidad = (id) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? {
            ...item,
            cantidad: item.cantidad + 1,
          }
        : { ...item };
    });
    setCart(newCart);
  };

  const decreaseCantidad = (id, cantidad) => {
    if (cantidad === 1) {
      return;
    } else {
      const newCart = [...cart].map((item) => {
        return item.id === id
          ? { ...item, cantidad: item.cantidad - 1 }
          : { ...item };
      });

      setCart(newCart);
    }
  };

  const addToCart = (articulo) => {
    const { id, nomArticulo, precio, imgPreviewArticulos } = articulo[0];
    const { iva, costo } = precio;
    const { img } = imgPreviewArticulos;

    const item = [...cart].find((item) => item.id === id);

    if (item) {
      increaseCantidad(id);
      return;
    } else {
      const newItem = {
        id,
        img,
        nomArticulo,
        costo,
        cantidad: 1,
      };
      setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CardContext.Provider
      value={{
        total,
        cart,
        cartItems,
        addToCart,
        increaseCantidad,
        decreaseCantidad,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export { CardContext, CartProvider };
