import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));

    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.cantidad * cartItem.precioArticulo);
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

  const increaseCantidad = (id, cantidad) => {
    const newCart = [...cart].map((item) => {
      return item.id === id
        ? {
            ...item,
            cantidad: item.cantidad + cantidad,
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

  const addToCart = (newArticulo, cantidad) => {
    const { id, idArticulo, articulos, colores } = newArticulo[0];
    const { nomArticulo, precio, imgPreviewArticulos } = articulos;
    const { iva, costo } = precio;
    const { img } = imgPreviewArticulos;
    const { nomColor, precioColor, hexColor } = colores;

    const item = [...cart].find(
      (item) => item.id === id && item.idArticulo === idArticulo
    );

    if (item) {
      increaseCantidad(id, cantidad);
      return;
    } else {
      const newItem = {
        id,
        idArticulo,
        img,
        nomArticulo,
        precioArticulo: costo + precioColor,
        nomColor,
        hexColor,
        cantidad,
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
