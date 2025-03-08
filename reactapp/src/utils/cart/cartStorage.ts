export const loadCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const saveCart = (cart: any[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };
