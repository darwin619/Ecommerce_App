export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return (
    cartItems.filter(items => 
      items.id !== cartItemToRemove.id));
}

export const removeCheckoutItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(items => items.id === cartItemToRemove.id);


if(existingItem.quantity === 1) {
return (
    cartItems.filter(items => 
      items.id !== cartItemToRemove.id));
}

return cartItems.map(items => items.id === cartItemToRemove.id ? {...items, quantity: items.quantity - 1} : items)
}