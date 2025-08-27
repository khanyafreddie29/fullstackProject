import { ref } from 'vue';

// Shared state for the cart
const isCartOpen = ref(false);
const cartItems = ref([]); // New: Array to store items in the cart

// Cart composable function
export function useCart() {
  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value;
  };

  const openCart = () => {
    isCartOpen.value = true;
  };

  const closeCart = () => {
    isCartOpen.value = false;
  };

  // Updated: Function to add an item to the cart - handles products, packages, and deals
  const addItemToCart = (item) => {
    // Defensive: ensure item is not undefined and has an id
    const itemId = item?.id || item?.package_id || item?.product_id;
    if (!item || !itemId) return;

    const existing = cartItems.value.find(i => i.id === itemId);
    if (existing) {
      existing.quantity += 1;
    } else {
      cartItems.value.push({
        id: itemId,
        name: item.name || item.package_name || item.product_name || item.title || 'Product',
        price: Number(item.price || item.package_price || item.product_price) || 0,
        image: item.image || item.package_url || item.product_url || '', // for deals and products
        imageSrc: item.imageSrc || item.package_url || item.product_url || '', // for packages and products
        quantity: 1,
      });
    }
    openCart(); // Open cart automatically when an item is added
  };

  // New: Function to remove an item from the cart
  const removeItemFromCart = (itemId) => {
    cartItems.value = cartItems.value.filter(item => item.id !== itemId);
  };

  return {
    isCartOpen,
    cartItems, // Expose cartItems
    toggleCart,
    openCart,
    closeCart,
    addItemToCart, // Expose addItemToCart
    removeItemFromCart // Expose removeItemFromCart
  };
}