import { ref } from 'vue';

const checkoutData = ref({
  name: '',
  email: '',
  phone: '',
  country: '',
  city: '',
  address: '',
  company: '',
});

export function useCheckout() {
  const setCheckoutData = (data) => {
    checkoutData.value = { ...checkoutData.value, ...data };
  };

  return {
    checkoutData,
    setCheckoutData
  };
}