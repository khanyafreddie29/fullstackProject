<template>
  <TransitionRoot as="template" :show="isCartOpen">
    <Dialog class="relative z-50" @close="closeCart">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="closeCart">
                          <span class="absolute -inset-0.5" />
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="size-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                          <li v-if="cartItems.length === 0" class="py-6 text-center text-gray-500">
                            Your cart is empty.
                          </li>
                          <li v-for="product in cartItems" :key="product.id" class="flex py-6">
                            <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                :src="product.imageSrc || product.image"
                                :alt="product.name || product.title || 'Product'"
                                class="w-full h-full object-cover"
                              />
                            </div>
                            <div class="ml-4 flex flex-1 flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {{ product.name || product.title || 'Product' }}
                                  </h3>
                                  <p class="ml-4">R{{ Number(product.price).toLocaleString(undefined, { minimumFractionDigits: 2 }) }}</p>
                                </div>
                              </div>
                              <div class="flex flex-1 items-end justify-between text-sm">
                                <p class="text-gray-500">Qty {{ product.quantity }}</p>
                                <div class="flex">
                                  <button type="button" class="font-medium text-red-600 hover:text-red-400" @click="removeItemFromCart(product.id)">Remove</button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div class="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>{{ formattedSubtotal }}</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div class="mt-6">
                      <button @click="handleCheckout" class="flex w-full items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-gray-900">Checkout</button>
                    </div>
                    <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{{ ' ' }}
                        <button type="button" class="font-medium text-black hover:text-gray-900" @click="closeCart">
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'; // Import useRouter
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useCart } from '@/composables/useCart';
import { useAuth } from '@/composables/useAuth'; // Import useAuth

// Get the shared state and functions from the composables
const { isCartOpen, closeCart, cartItems, removeItemFromCart } = useCart();
const { isAuthenticated } = useAuth();
const router = useRouter();

// Computed property to calculate the subtotal
const formattedSubtotal = computed(() => {
  let total = 0;
  cartItems.value.forEach(item => {
    total += (Number(item.price) || 0) * (item.quantity || 1);
  });
  return `R${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
});

// Method to handle the checkout process
const handleCheckout = () => {
  if (isAuthenticated.value) {
    router.push('/checkout');
    closeCart();
  } else {
    router.push('/login');
    closeCart();
  }
};
</script>