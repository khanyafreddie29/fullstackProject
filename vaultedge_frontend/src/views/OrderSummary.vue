<template>
  <div>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <form @submit.prevent="sendOrder" class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>
          
          <div class="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white">Billing & Delivery information</h4>
            <dl>
              <dt class="text-base font-medium text-gray-900 dark:text-white">Individual</dt>
              <dd class="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                {{ checkoutData.name }} - {{ checkoutData.phone }}, {{ checkoutData.city }}, {{ checkoutData.country }}, {{ checkoutData.address }}
              </dd>
            </dl>
            <button type="button" @click="openModal" class="text-base font-medium text-primary-700 hover:underline dark:text-primary-500">Edit</button>
          </div>
          <div class="mt-6 sm:mt-8">
            <div class="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
              <table class="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr v-if="cartItems.length === 0">
                    <td colspan="3" class="py-8 text-center text-gray-500 dark:text-gray-400">
                      Your cart is empty.
                    </td>
                  </tr>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td class="whitespace-nowrap py-4 md:w-[384px]">
                      <div class="flex items-center gap-4">
                        <a href="#" class="flex items-center aspect-square w-10 h-10 shrink-0">
                          <img class="h-auto w-full max-h-full" :src="item.imageSrc" :alt="item.name" />
                        </a>
                        <a href="#" class="hover:underline">{{ item.name }}</a>
                      </div>
                    </td>
                    <td class="p-4 text-base font-normal text-gray-900 dark:text-white">x{{ item.quantity }}</td>
                    <td class="p-4 text-right text-base font-bold text-gray-900 dark:text-white">{{ formatPrice(item.price * item.quantity) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4 space-y-6">
              <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>
              <div class="space-y-4">
                <div class="flow-root">
                  <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                    <dl class="flex items-center justify-between gap-4 py-3">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Subtotal</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(subtotal) }}</dd>
                    </dl>
                    <dl class="flex items-center justify-between gap-4 py-3" v-if="savings > 0">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                      <dd class="text-base font-medium text-green-500">-{{ formatPrice(savings) }}</dd>
                    </dl>
                    <dl class="flex items-center justify-between gap-4 py-3" v-if="checkoutData.deliveryFee">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Delivery Fee</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(checkoutData.deliveryFee) }}</dd>
                    </dl>
                    <dl class="flex items-center justify-between gap-4 py-3" v-if="checkoutData.tax">
                      <dt class="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd class="text-base font-medium text-gray-900 dark:text-white">{{ formatPrice(checkoutData.tax) }}</dd>
                    </dl>
                    <dl class="flex items-center justify-between gap-4 py-3 border-t border-gray-200 pt-2 dark:border-gray-700">
                      <dt class="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
                      <dd class="text-lg font-bold text-gray-900 dark:text-white">{{ formatPrice(finalTotal) }}</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Payment options</h2>
                  <ul class="flex flex-wrap items-center gap-2">
                    <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      <svg class="h-3.5 w-3.5 mr-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg> Secure
                    </li>
                    <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      <svg class="h-3.5 w-3.5 mr-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg> Fast confirmation
                    </li>
                    <li class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                      <svg class="h-3.5 w-3.5 mr-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg> Combined payments allowed
                    </li>
                  </ul>
                </div>
                <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 class="mb-2 text-base font-semibold text-gray-900 dark:text-white sm:mb-0">Recommended payment options</h3>
                </div>
                <div class="mt-4 flex flex-wrap items-center gap-4">
                  <div class="flex items-center">
                    <input id="credit-card" type="radio" name="paymentoption" value="credit-card" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="credit-card" class="ms-2">
                      <img class="w-28 h-14 object-contain" src="https://www.nelsonmandela.org/imager/files/169803/visa-logo_96996fc8f5518fbfa35c3a2f0d2f1c0f.webp" alt="Pay using Credit Card" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="instant-eft" type="radio" name="paymentoption" value="instant-eft" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="instant-eft" class="ms-2">
                      <img class="w-28 h-14 object-contain" src="https://www.nelsonmandela.org/imager/files/169802/etf-logo_96996fc8f5518fbfa35c3a2f0d2f1c0f.webp" alt="Pay using Instant EFT" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="capitec-pay" type="radio" name="paymentoption" value="capitec-pay" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="capitec-pay" class="ms-2">
                      <img class="w-28 h-14 object-contain" src="https://payfast.io/wp-content/uploads/2023/04/Capitec-Pay-colour.png.webp" alt="Pay using Capitec Pay" />
                    </label>
                  </div>
                </div>
                <div class="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h3 class="mb-2 text-base font-semibold text-gray-900 dark:text-white sm:mb-0">Other payment options</h3>
                </div>
                <div class="mt-4 flex flex-wrap items-center gap-4">
                  <div class="flex items-center">
                    <input id="pay-shap" type="radio" name="paymentoption" value="pay-shap" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="pay-shap" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="payshap" alt="Pay using PayShap" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="scan-to-pay" type="radio" name="paymentoption" value="scan-to-pay" checked class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="scan-to-pay" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="scanToPay" alt="Pay using Scan to Pay" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="nedbank-direct-eft" type="radio" name="paymentoption" value="nedbank-direct-eft" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="nedbank-direct-eft" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="nedbankDirectEft" alt="Pay using Nedbank Direct EFT" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="absa-pay" type="radio" name="paymentoption" value="absa-pay" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="absa-pay" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="absaPay" alt="Pay using Absa Pay" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="discoverymiles" type="radio" name="paymentoption" value="DISCOVERY_MILES_POINTS" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="discoverymiles" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="discoveryMiles" alt="Pay using Discovery Miles" />
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input id="snapscan" type="radio" name="paymentoption" value="SNAPSCAN" class="h-4 w-4 border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                    <label for="snapscan" class="ms-2">
                      <img class="w-20 h-10 object-contain" :src="snapscan" alt="Pay online using SnapScan" />
                    </label>
                  </div>
                </div>
                <div v-if="showQRCode" class="mt-6 flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Complete Your Payment</h4>
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.google.com" alt="Payment QR Code" class="mb-4">
                  <p class="text-sm text-gray-600 dark:text-gray-400 text-center">Scan this code with your app to complete your payment.</p>
                  <p class="text-xs text-gray-500 dark:text-gray-500 text-center mt-2">This code will expire in 10 minutes</p>
                </div>
              </div>
              <div class="flex items-start sm:items-center">
                <input id="terms-checkbox-2" type="checkbox" value="" class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600" />
                <label for="terms-checkbox-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree with the
                  <a href="#" title="" class="text-primary-700 underline hover:no-underline dark:text-primary-500">Terms and Conditions</a> of use of VaultEdge products and services
                </label>
              </div>
              <div class="gap-4 sm:flex sm:items-center">
                <button type="button" class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Shopping</button>
                <button type="submit" class="mt-4 flex w-full items-center justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0">Send the order</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>

    <div id="billingInformationModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0">
      <div class="relative max-h-full w-full max-w-lg p-4">
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Billing Information</h3>
            <button type="button" @click="closeModal" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="your_name" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                <input v-model="form.name" type="text" id="your_name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="John Doe" required />
              </div>
              <div>
                <label for="your_email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Your email*</label>
                <input v-model="form.email" type="email" id="your_email" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="john@edgevault.com" required />
              </div>
              <div>
                <label for="select-country-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Country*</label>
                <select v-model="form.country" id="select-country-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option v-for="country in Object.keys(countriesAndCities)" :key="country" :value="country">
                    {{ country }}
                  </option>
                </select>
              </div>
              <div>
                <label for="select-city-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">City*</label>
                <select v-model="form.city" id="select-city-input-3" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500">
                  <option v-for="city in cities" :key="city" :value="city">
                    {{ city }}
                  </option>
                </select>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-input-3" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Phone Number*</label>
                <div class="flex items-center">
                  <input v-model="form.phone" type="text" id="phone-input-3" class="z-20 block w-full rounded-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500" placeholder="123-456-7890" required />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="street_address" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Street Address</label>
                <input v-model="form.address" type="text" id="street_address" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="123 Jump Street" required />
              </div>
            </div>
          </div>
          <div class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <button type="button" @click="saveAndClose" class="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Save and close
            </button>
            <button type="button" @click="closeModal" class="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div id="paymentStatusModal" tabindex="-1" aria-hidden="true" class="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden p-4 md:inset-0">
      <div class="relative max-h-full w-full max-w-md p-4">
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-800">
          <div class="flex items-center justify-between rounded-t border-b border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ modalTitle }}
            </h3>
            <button @click="closePaymentModal" type="button" class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <div class="p-4 md:p-5">
            <p class="text-base leading-relaxed text-gray-600 dark:text-gray-400">
              {{ modalContent }}
            </p>
          </div>
          <div class="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-700 md:p-5">
            <button @click="closePaymentModal" type="button" class="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCheckout } from '@/composables/useCheckout';
import { useCart } from '@/composables/useCart';
import { Modal } from 'flowbite';
import payshap from '@/assets/payshap.png';
import scanToPay from '@/assets/Scan-to-pay.png';
import nedbankDirectEft from '@/assets/Nedbank.png';
import absaPay from '@/assets/absa-pay.png';
import discoveryMiles from '@/assets/Discovery_Miles.jpg';
import snapscan from '@/assets/snapscan.png';

// Data and State
const router = useRouter();
const { checkoutData } = useCheckout();
const { cartItems } = useCart();
const modal = ref(null);
const form = ref({});
const selectedPaymentOption = ref('scan-to-pay');
const showQRCode = ref(false);
const qrCodeImage = ref('https://upload.wikimedia.org/wikipedia/commons/f/f2/QR_code.svg');
const countriesAndCities = {
  'South Africa': ['Johannesburg', 'Cape Town', 'Durban'],
  'United States': ['New York', 'Los Angeles', 'Chicago'],
  'United Kingdom': ['London', 'Manchester', 'Birmingham'],
};
const showPhoneDropdown = ref(false);
const phoneOptions = [
  { label: 'United States (+1)', value: '+1', flag: 'https://flagcdn.com/w20/us.png' },
  { label: 'United Kingdom (+44)', value: '+44', flag: 'https://flagcdn.com/w20/gb.png' },
  { label: 'South Africa (+27)', value: '+27', flag: 'https://flagcdn.com/w20/za.png' },
];
const selectedPhoneOption = ref({ label: 'South Africa (+27)', value: '+27', flag: 'https://flagcdn.com/w20/za.png' });
const cities = computed(() => {
  return countriesAndCities[form.value.country] || [];
});

// New refs for the payment modal
const paymentModal = ref(null);
const modalTitle = ref('');
const modalContent = ref('');


// Watchers
watch(
  () => form.value.country,
  (newCountry) => {
    if (!cities.value.includes(form.value.city)) {
      form.value.city = cities.value.length > 0 ? cities.value[0] : null;
    }
  },
);
watch(
  () => checkoutData.value,
  (newVal) => {
    form.value = { ...newVal };
  }, {
    deep: true,
  },
);

// Lifecycle Hooks
onMounted(() => {
  const $modalElement = document.getElementById('billingInformationModal');
  const modalOptions = {
    backdrop: 'static',
    backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
  };
  if ($modalElement) {
    modal.value = new Modal($modalElement, modalOptions);
  }

  // New modal setup for payment status
  const $paymentModalElement = document.getElementById('paymentStatusModal');
  if ($paymentModalElement) {
    paymentModal.value = new Modal($paymentModalElement, modalOptions);
  }

  const paymentRadios = document.querySelectorAll('input[name="paymentoption"]');
  paymentRadios.forEach(radio => {
    radio.addEventListener('change', (event) => {
      selectedPaymentOption.value = event.target.value;
    });
  });
});

// Methods
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(price);
};
const openModal = () => {
  if (modal.value) {
    form.value = { ...checkoutData.value };
    modal.value.show();
  }
};
const closeModal = () => {
  if (modal.value) {
    modal.value.hide();
  }
};
const saveAndClose = () => {
  checkoutData.value = { ...form.value };
  closeModal();
};

const goToCheckout = () => {
  router.push({
    name: 'checkout',
    params: {
      id: 1,
    },
  });
};

// New methods to control the payment modal
const openPaymentModal = () => {
  if(paymentModal.value) {
    paymentModal.value.show();
  }
};
const closePaymentModal = () => {
  if(paymentModal.value) {
    paymentModal.value.hide();
  }
};

const sendOrder = () => {
  const termsCheckbox = document.getElementById('terms-checkbox-2');
  const selectedPayment = document.querySelector('input[name="paymentoption"]:checked');

  if (!termsCheckbox || !termsCheckbox.checked) {
    alert('Please agree to the Terms and Conditions to proceed.');
    return;
  }

  if (!selectedPayment) {
    alert('Please select a payment option.');
    return;
  }

  const paymentMethod = selectedPayment.value;
  
  // Reset QR code visibility
  showQRCode.value = false;

  switch (paymentMethod) {
    case 'credit-card':
      modalTitle.value = 'Payment Successful';
      modalContent.value = 'Message from Credit Card: Your payment has been successfully processed. An invoice has been sent to your email address.';
      break;
    case 'instant-eft':
      modalTitle.value = 'Action Required';
      modalContent.value = 'Message from Instant EFT: Your order has been placed. Please complete the EFT from your banking app to finalize your payment.';
      break;
    case 'capitec-pay':
      modalTitle.value = 'Processing Payment';
      modalContent.value = 'Message from Capitec Pay: Your payment is being processed. You will receive a notification on your Capitec app to confirm the payment.';
      break;
    case 'pay-shap':
      modalTitle.value = 'Payment Pending';
      modalContent.value = 'Message from PayShap: Your payment request is pending. Please approve the payment via your banking app.';
      break;
    case 'scan-to-pay':
      showQRCode.value = true;
      modalTitle.value = 'Scan to Complete Payment';
      modalContent.value = 'Message from Scan to Pay: A unique QR code has been generated on the page. Please scan the code with your banking app to complete the payment.';
      break;
    case 'nedbank-direct-eft':
      modalTitle.value = 'Action Required';
      modalContent.value = 'Message from Nedbank: Your direct EFT request has been received. Please authorize the payment through your Nedbank app.';
      break;
    case 'absa-pay':
      modalTitle.value = 'Authentication Required';
      modalContent.value = 'Message from Absa Pay: An authentication request has been sent to your Absa app. Please approve the transaction to continue.';
      break;
    case 'DISCOVERY_MILES_POINTS':
      modalTitle.value = 'Order Confirmed';
      modalContent.value = 'Message from Discovery Miles: Your order total has been deducted from your Discovery Miles balance. Your order is confirmed.';
      break;
    case 'SNAPSCAN':
      showQRCode.value = true;
      modalTitle.value = 'Scan to Complete Payment';
      modalContent.value = 'Message from SnapScan: A SnapCode has been generated on the page. Please open your SnapScan app and scan the code to complete your payment.';
      break;
    default:
      modalTitle.value = 'Order Sent';
      modalContent.value = 'Your order has been sent. Thank you for your purchase!';
      break;
  }

  openPaymentModal();
};

// Calculate subtotal (base cart total)
const subtotal = computed(() => {
  let total = 0;
  cartItems.value.forEach((item) => {
    total += (Number(item.price) || 0) * (item.quantity || 1);
  });
  return total;
});

// Calculate savings
const savings = computed(() => {
  let totalSavings = 0;
  cartItems.value.forEach((item) => {
    const itemSavings = packageSavings[item.id] || 0;
    totalSavings += itemSavings * (item.quantity || 1);
  });
  return totalSavings;
});

// Calculate final total (use checkout data if available, otherwise calculate)
const finalTotal = computed(() => {
  if (checkoutData.value && checkoutData.value.total) {
    return checkoutData.value.total;
  }
  const deliveryFee = checkoutData.value?.deliveryFee || 0;
  const tax = checkoutData.value?.tax || 0;
  return subtotal.value - savings.value + deliveryFee + tax;
});

const packageSavings = {
  'package-basic-office': 690,
  'package-standard-office': 2300,
  'package-smart-entry': 3600,
  'package-home-starter': 190,
  'package-home-full': 1455,
};
</script>