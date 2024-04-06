export const setToLocalStorage = (key: string, token: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, token);
};

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.getItem(key);
};

// Add to cart
export const addToCart = (item: any) => {
  // Get Existing Cart data
  const existingItemsString = localStorage.getItem("cart");

  // check cart
  const existingItems = existingItemsString
    ? JSON.parse(existingItemsString)
    : [];

  // check if item already exists in cart
  const existingItemIndex = existingItems.findIndex(
    (cartItem: any) => cartItem.name === item.name
  );

  if (existingItemIndex !== -1) {
    // Item already exists
    console.log("Item already exists in the cart!");
  } else {
    existingItems.push({ ...item, quantity: 1 });

    // set
    localStorage.setItem("cart", JSON.stringify(existingItems));
  }
};

// Get Cart data
export const getCartItems = () => {
  // Get All Data from Cart
  const cartItemsString = localStorage.getItem("cart");

  // pars string to array
  return cartItemsString ? JSON.parse(cartItemsString) : [];
};

// remove from cart
export const removeCartItemById = (id: string) => {
  const cartItemsString = localStorage.getItem("cart");
  //
  const cartItems = cartItemsString ? JSON.parse(cartItemsString) : [];

  // Delete By ID
  const updatedCartItems = cartItems.filter((item: any) => item.id !== id);

  // Update local storage
  localStorage.setItem("cart", JSON.stringify(updatedCartItems));
};
