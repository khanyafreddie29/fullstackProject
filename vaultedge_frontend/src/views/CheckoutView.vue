<template>
  <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <form @submit.prevent="submitCheckout" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <ol
        class="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li :class="stepClass(1)">
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-900 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-gray-900 dark:text-white">Cart</span>
          </span>
        </li>
        <li :class="stepClass(2)">
          <span
            class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-900 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span class="text-gray-900 dark:text-white">Checkout</span>
          </span>
        </li>
        <li :class="stepClass(3)">
          <svg class="me-2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Order summary
        </li>
      </ol>

      <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
        <div class="min-w-0 flex-1 space-y-8">
          <div class="space-y-4">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Details</h2>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your
                  name</label>
                <input v-model="form.name" type="text" id="your_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="John Doe" required />
              </div>
              <div>
                <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your
                  email*</label>
                <input v-model="form.email" type="email" id="your_email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="john@edgevault.com" required />
              </div>
              <div>
                <label for="select-country-input-3"
                  class="block text-sm font-medium text-gray-900 dark:text-white mb-2">Country*</label>
                <select v-model="form.country" id="select-country-input-3"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option v-for="country in Object.keys(countriesAndCities)" :key="country" :value="country">
                    {{ country }}
                  </option>
                </select>
              </div>
              <div>
                <label for="select-city-input-3"
                  class="block text-sm font-medium text-gray-900 dark:text-white mb-2">City*</label>
                <select v-model="form.city" id="select-city-input-3"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                  </option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone
                  Number*</label>
                <div class="flex items-center">
                  <button type="button" id="dropdown-phone-button-3" @click="togglePhoneDropdown"
                    class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                    <img src="https://flagcdn.com/w20/za.png" alt="South Africa Flag" class="me-2 h-3 w-4" />
                    +27
                    <svg class="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                      height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 9-7 7-7-7" />
                    </svg>
                  </button>
                  <div v-show="showPhoneDropdown" id="dropdown-phone-3"
                    class="z-10 w-56 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 absolute mt-32">
                    <ul class="p-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-phone-button-3">
                      <li v-for="option in phoneOptions" :key="option.value">
                        <button type="button"
                          class="inline-flex w-full rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                          @click="selectPhoneOption(option)">
                          <span class="inline-flex items-center">
                            <img v-if="option.flag" :src="option.flag" :alt="option.label" class="me-2 h-3 w-4" />
                            <span v-else class="me-2 h-4 w-4" v-html="option.icon"></span>
                            {{ option.label }}
                          </span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <input v-model="form.phone" type="text" id="phone-input-3"
                    class="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                    placeholder="123-456-7890" required />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="street_address" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Street Address</label>
                <input v-model="form.address" type="text" id="street_address"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="123 Jump Street" required />
              </div>
              <div class="sm:col-span-2">
                <label for="company_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Company
                  name</label>
                <input v-model="form.company" type="text" id="company_name"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Edgevault Pty" />
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Payment</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div v-for="method in paymentMethods" :key="method.id"
                class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div class="flex items-start">
                  <div class="flex h-5 items-center">
                    <input :id="method.id" :aria-describedby="`${method.id}-text`" type="radio" name="payment-method"
                      :value="method.id" v-model="form.paymentMethod"
                      class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      :checked="form.paymentMethod === method.id" />
                  </div>
                  <div class="ms-4 text-sm">
                    <label :for="method.id" class="font-medium leading-none text-gray-900 dark:text-white">
                      {{ method.label }}
                    </label>
                    <p :id="`${method.id}-text`" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                      {{ method.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Delivery Methods</h3>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div v-for="method in deliveryMethods" :key="method.id"
                class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div class="flex items-start">
                  <div class="flex h-5 items-center">
                    <input :id="method.id" :aria-describedby="`${method.id}-text`" type="radio" name="delivery-method"
                      :value="method.id" v-model="form.deliveryMethod"
                      class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      :checked="form.deliveryMethod === method.id" />
                  </div>
                  <div class="ms-4 text-sm">
                    <label :for="method.id" class="font-medium leading-none text-gray-900 dark:text-white">
                      {{ method.label }}
                    </label>
                    <p :id="`${method.id}-text`" class="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                      {{ method.desc }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label for="voucher" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Enter a gift card, voucher or promotional code
            </label>
            <div class="flex max-w-md items-center gap-4">
              <input v-model="form.voucher" type="text" id="voucher"
                class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="" />
              <button type="button"
                class="flex items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                @click="applyVoucher">Apply</button>
            </div>
          </div>
        </div>

        <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
          <div class="flow-root">
            <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(subtotal) }}</dd>
              </dl>
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd class="text-base font-medium text-green-500">{{ formatPrice(savings) }}</dd>
              </dl>
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Fee</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(deliveryFee) }}</dd>
              </dl>
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(tax) }}</dd>
              </dl>
              <dl class="flex items-center justify-between gap-4 py-3">
                <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                <dd class="text-base font-bold text-gray-900 dark:text-white">{{ formatPrice(total) }}</dd>
              </dl>
            </div>
          </div>
          <div class="space-y-3">
            <button type="submit" class="pay-btn">
              <span class="btn-text">Proceed to payment</span>
              <div class="icon-container">
                <svg viewBox="0 0 24 24" class="icon card-icon">
                  <path
                    d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.11 2.89,20 4,20H20C21.11,20 22,19.11 22,18V6C22,4.89 21.11,4 20,4Z"
                    fill="currentColor"></path>
                </svg>
                <svg viewBox="0 0 24 24" class="icon payment-icon">
                  <path
                    d="M2,17H22V21H2V17M6.25,7H9V6H6V3H18V6H15V7H17.75L19,17H5L6.25,7M9,10H15V8H9V10M9,13H15V11H9V13Z"
                    fill="currentColor"></path>
                </svg>
                <svg viewBox="0 0 24 24" class="icon dollar-icon">
                  <path
                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                    fill="currentColor"></path>
                </svg>

                <svg viewBox="0 0 24 24" class="icon wallet-icon default-icon">
                  <path
                    d="M21,18V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5V6H12C10.89,6 10,6.9 10,8V16A2,2 0 0,0 12,18M12,16H22V8H12M16,13.5A1.5,1.5 0 0,1 14.5,12A1.5,1.5 0 0,1 16,10.5A1.5,1.5 0 0,1 17.5,12A1.5,1.5 0 0,1 16,13.5Z"
                    fill="currentColor"></path>
                </svg>

                <svg viewBox="0 0 24 24" class="icon check-icon">
                  <path d="M9,16.17L4.83,12L3.41,13.41L9,19L21,7L19.59,5.59L9,16.17Z" fill="currentColor"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCart } from '@/composables/useCart';
import { useCheckout } from '@/composables/useCheckout';
import axios from 'axios';

const router = useRouter();

const { cartItems } = useCart();
const { checkoutData, setCheckoutData } = useCheckout();

// Fetch packages data to get discount amounts
const packages = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/packages');
    packages.value = response.data;
  } catch (error) {
    console.error('Failed to fetch packages for savings calculation:', error);
  }
});

const form = ref({
  name: checkoutData.value.name,
  email: checkoutData.value.email,
  country: checkoutData.value.country || 'South Africa',
  city: checkoutData.value.city || 'Cape Town',
  address: checkoutData.value.address,
  phone: checkoutData.value.phone,
  company: checkoutData.value.company,
  paymentMethod: 'credit-card',
  deliveryMethod: 'dhl',
  voucher: ''
});

const showPhoneDropdown = ref(false);

const phoneOptions = [
  {
    value: '+27',
    label: 'South Africa (+27)',
    flag: 'https://flagcdn.com/w20/za.png'
  },
  {
    value: '+44',
    label: 'United Kingdom (+44)',
    icon: `<svg fill="none" viewBox="0 0 20 15" width="20" height="15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#0A17A7" d="M0 .5h19.6v14H0z"/><path fill="#fff" fill-rule="evenodd" d="M-.898-.842L7.467 4.8V-.433h4.667V4.8l8.364-5.642L21.542.706l-6.614 4.46H19.6v4.667h-4.672l6.614 4.46-1.044 1.549-8.365-5.642v5.233H7.467V10.2l-8.365 5.642-1.043-1.548 6.613-4.46H0V5.166h4.672L-1.941.706-.898-.842z" clip-rule="evenodd"/><path stroke="#DB1F35" stroke-linecap="round" stroke-width=".667" d="M13.067 4.933L21.933-.9M14.009 10.088l7.947 5.357M5.604 4.917L-2.686-.67M6.503 10.024l-9.189 6.093"/><path fill="#E6273E" fill-rule="evenodd" d="M0 8.9h8.4v5.6h2.8V8.9h8.4V6.1h-8.4V.5H8.4v5.6H0v2.8z" clip-rule="evenodd"/></g></svg>`
  },
  {
    value: '+61',
    label: 'Australia (+61)',
    icon: `<svg fill="none" viewBox="0 0 20 15" width="20" height="15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6v4.666z" clip-rule="evenodd"/><path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6v4.667H0V9.833z" clip-rule="evenodd"/><path fill="#FFD521" fill-rule="evenodd" d="M0 .5h19.6v4.667H0V.5z" clip-rule="evenodd"/></g></svg>`
  },
  {
    value: '+49',
    label: 'Germany (+49)',
    icon: `<svg fill="none" viewBox="0 0 20 15" width="20" height="15"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.6" height="14" y=".5" fill="#fff" rx="2"/></mask><g mask="url(#a)"><path fill="#262626" fill-rule="evenodd" d="M0 5.167h19.6V.5H0v4.667z" clip-rule="evenodd"/><g filter="url(#filter0_d_374_135180)"><path fill="#F01515" fill-rule="evenodd" d="M0 9.833h19.6V5.167H0v4.666z" clip-rule="evenodd"/></g><g filter="url(#filter1_d_374_135180)"><path fill="#FFD521" fill-rule="evenodd" d="M0 14.5h19.6V9.833H0V14.5z" clip-rule="evenodd"/></g></g></svg>`
  },
  {
    value: '+33',
    label: 'France (+33)',
    icon: `<svg fill="none" viewBox="0 0 20 15" width="20" height="15"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#F5F5F5" stroke-width=".5" rx="1.75"/><mask id="a" style="mask-type:luminance" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse"><rect width="19.1" height="13.5" x=".25" y=".75" fill="#fff" stroke="#fff" stroke-width=".5" rx="1.75"/></mask><g mask="url(#a)"><path fill="#F44653" d="M13.067.5H19.6v14h-6.533z"/><path fill="#1035BB" fill-rule="evenodd" d="M0 14.5h6.533V.5H0v14z" clip-rule="evenodd"/></g></svg>`
  }
];

function togglePhoneDropdown() {
  showPhoneDropdown.value = !showPhoneDropdown.value;
}
function selectPhoneOption(option) {
  form.value.phone = option.value;
  showPhoneDropdown.value = false;
}

const paymentMethods = [
  { id: 'credit-card', label: 'Credit Card', desc: 'Pay with your credit card' },
  { id: 'pay-on-delivery', label: 'Payment on delivery', desc: '+R265 payment processing fee' },
  { id: 'paypal-2', label: 'Paypal account', desc: 'Connect to your account' }
];

const deliveryMethods = [
  { id: 'dhl', label: 'R265 - DHL Fast Delivery', desc: 'Get it by Tomorrow', price: 265 },
  { id: 'fedex', label: 'Free Delivery - FedEx', desc: 'Get it by Friday, 23 Aug 2025', price: 0 },
  { id: 'express', label: 'R862 - Express Delivery', desc: 'Get it today', price: 862 }
];

const countriesAndCities = {
  'South Africa': ['Cape Town', 'Johannesburg', 'Durban', 'Bloemfontein', 'Pretoria'],
  'USA': ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
  'Australia': ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
  'France': ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice'],
  'Spain': ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Zaragoza'],
  'UK': ['London', 'Birmingham', 'Manchester', 'Glasgow', 'Liverpool'],
};

const cities = computed(() => {
  return countriesAndCities[form.value.country] || [];
});

watch(() => form.value.country, (newCountry) => {
  form.value.city = countriesAndCities[newCountry]?.[0] || '';
});

const subtotal = computed(() => {
  let total = 0;
  cartItems.value.forEach(item => {
    total += (Number(item.price) || 0) * (item.quantity || 1);
  });
  return total;
});

const savings = computed(() => {
  let totalSavings = 0;
  cartItems.value.forEach(item => {
    // Find the corresponding package data to get the discount amount
    const packageData = packages.value.find(pkg => pkg.package_id === item.id);
    const itemSavings = packageData?.discount_amount || 0;
    totalSavings += itemSavings * (item.quantity || 1);
  });
  return totalSavings;
});

const deliveryFee = computed(() => {
  const selectedMethod = deliveryMethods.find(method => method.id === form.value.deliveryMethod);
  return selectedMethod ? selectedMethod.price : 0;
});

const tax = computed(() => {
  const taxRate = 0.15;
  return (subtotal.value - savings.value) * taxRate;
});

const total = computed(() => {
  return subtotal.value - savings.value + tax.value + deliveryFee.value;
});

function formatPrice(price) {
  return `R${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function applyVoucher() {
  alert('Voucher applied: ' + form.value.voucher);
}

function submitCheckout() {
  if (!form.value.name || !form.value.email || !form.value.phone) {
    alert('Please fill out all required fields (Name, Email, Phone).');
    return;
  }

  // Include the calculated totals in checkout data
  const checkoutDataWithTotals = {
    ...form.value,
    subtotal: subtotal.value,
    savings: savings.value,
    deliveryFee: deliveryFee.value,
    tax: tax.value,
    total: total.value
  };

  setCheckoutData(checkoutDataWithTotals);
  router.push('/order-summary');
}

function stepClass(step) {
  return "after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
}
</script>

<style>
.pay-btn {
  position: relative;
  padding: 12px 24px;
  font-size: 16px;
  background: #1a1a1a;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  width: 100%;
}

.pay-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
}

.icon-container {
  position: relative;
  width: 24px;
  height: 24px;
}

.icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  color: white;
  opacity: 0;
  visibility: hidden;
}

.default-icon {
  opacity: 1;
  visibility: visible;
}

.pay-btn:hover .icon {
  animation: none;
}

.pay-btn:hover .wallet-icon {
  animation: iconRotate 2.5s infinite;
  animation-delay: 0s;
}

.pay-btn:hover .card-icon {
  animation: iconRotate 2.5s infinite;
  animation-delay: 0.5s;
}

.pay-btn:hover .payment-icon {
  animation: iconRotate 2.5s infinite;
  animation-delay: 1s;
}

.pay-btn:hover .dollar-icon {
  animation: iconRotate 2.5s infinite;
  animation-delay: 1.5s;
}

.pay-btn:hover .check-icon {
  animation: iconRotate 2.5s infinite;
  animation-delay: 2s;
}

.btn-text {
  font-weight: 600;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

@keyframes iconRotate {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px) scale(0.5);
  }

  5% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  15% {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
  }

  20% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.5);
  }

  100% {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px) scale(0.5);
  }
}

@keyframes checkmarkAppear {
  0% {
    opacity: 0;
    transform: scale(0.5) rotate(-45deg);
  }

  50% {
    opacity: 0.5;
    transform: scale(1.2) rotate(0deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
</style>