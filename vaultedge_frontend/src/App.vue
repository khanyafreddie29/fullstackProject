<template>
  <div id="app">
    <div :class="{ 'blur-background': isModalOpen }">
      <header :class="['nav-header z-20', { 'scrolled': isScrolled }]">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
            <RouterLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-12 w-auto object-contain" src="@/assets/logo.png" alt="Your Company" />
            </RouterLink>
          </div>
          <div class="flex lg:hidden">
            <button type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50"
              @click="mobileMenuOpen = true">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <PopoverGroup class="hidden lg:flex lg:gap-x-8">
            <Popover class="relative">
              <PopoverButton :class="['product-btn flex items-center gap-x-1 text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50',
                isScrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900']">
                Solutions
                <ChevronDownIcon class="size-4 flex-none text-gray-500" aria-hidden="true" />
              </PopoverButton>

              <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                <PopoverPanel
                  class="absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-gray-900/5">
                  <div class="p-6">
                    <div v-for="item in products" :key="item.name"
                      class="group relative flex items-center gap-x-4 rounded-xl p-3 text-sm hover:bg-gray-50 transition-colors duration-200">
                      <div
                        class="flex size-10 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <component :is="item.icon" class="size-5 text-gray-600 group-hover:text-black"
                          aria-hidden="true" />
                      </div>
                      <div class="flex-auto">
                        <RouterLink :to="item.href" class="block font-medium text-gray-900">
                          {{ item.name }}
                          <span class="absolute inset-0" />
                        </RouterLink>
                        <p class="mt-1 text-gray-600">{{ item.description }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    <RouterLink v-for="item in callsToAction" :key="item.name" :to="item.href"
                      class="flex items-center justify-center gap-x-2.5 p-4 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors duration-200">
                      <component :is="item.icon" class="size-4 flex-none text-gray-400" aria-hidden="true" />
                      {{ item.name }}
                    </RouterLink>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>

            <RouterLink to="/deals" :class="['nav-link text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50',
              isScrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900']">
              Deals</RouterLink>
            <RouterLink to="/about-us" :class="['nav-link text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50',
              isScrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900']">
              About Us</RouterLink>
            <RouterLink to="/contact" :class="['nav-link text-base font-medium transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50',
              isScrolled ? 'text-gray-800 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900']">
              Contact Us</RouterLink>
          </PopoverGroup>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
            <button @click="toggleCart"
              class="text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 px-3 rounded-md hover:bg-gray-50">
              <ShoppingCartIcon class="size-6" aria-hidden="true" />
              <span class="sr-only">Cart</span>
            </button>

            <RouterLink v-if="!isAuthenticated" to="/login"
              class="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2 px-4 rounded-md hover:bg-gray-50">
              Log in
              <span aria-hidden="true" class="ml-1">&rarr;</span>
            </RouterLink>
            <RouterLink v-if="!isAuthenticated" to="/register" class="btn-23-link">
              <button class="btn-23">
                <span class="text">Register</span>
                <span aria-hidden="true" class="marquee">Register</span>
              </button>
            </RouterLink>

            <div v-if="isAuthenticated" class="relative">
              <Popover class="relative">
                <PopoverButton class="flex items-center gap-x-2 rounded-full bg-gray-100 p-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors duration-200">
                  <div class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                    {{ userInitials }}
                  </div>
                  <ChevronDownIcon class="size-4 flex-none text-gray-500" aria-hidden="true" />
                </PopoverButton>

                <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
                  <PopoverPanel
                    class="absolute right-0 z-30 mt-3 w-48 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div class="p-2">
                      <div class="px-4 py-3 border-b border-gray-100">
                        <p class="text-sm font-medium text-gray-900">{{ user?.name || 'User' }}</p>
                        <p class="text-xs text-gray-500">{{ user?.email || '' }}</p>
                      </div>
                      <button @click="handleLogout"
                        class="flex w-full items-center gap-x-3 rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                        <ArrowRightOnRectangleIcon class="size-4 flex-none text-gray-400" aria-hidden="true" />
                        Sign out
                      </button>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
          </div>
        </nav>
        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
          <div class="fixed inset-0 z-50 bg-black/25" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div class="flex items-center justify-between">
              <RouterLink to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-10 w-auto object-contain" src="@/assets/logo.png" alt="Your Company" />
              </RouterLink>
              <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-50"
                @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="size-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-8 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                    <DisclosureButton
                      class="flex w-full items-center justify-between rounded-lg py-3 pl-3 pr-3.5 text-base font-medium text-gray-900 hover:bg-gray-50">
                      Solutions
                      <ChevronDownIcon
                        :class="[open ? 'rotate-180' : '', 'size-5 flex-none transition-transform duration-200']"
                        aria-hidden="true" />
                    </DisclosureButton>
                    <DisclosurePanel class="mt-2 space-y-2">
                      <RouterLink v-for="item in [...products, ...callsToAction]" :key="item.name" :to="item.href"
                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-900 hover:bg-gray-50">{{
                          item.name }}</RouterLink>
                    </DisclosurePanel>
                  </Disclosure>
                  <RouterLink to="/deals"
                    class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">Deals
                  </RouterLink>
                  <RouterLink to="/about-us"
                    class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">About Us
                  </RouterLink>
                  <RouterLink to="/contact"
                    class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">Contact
                    Us
                  </RouterLink>
                </div>
                <div class="py-6">
                  <button @click="toggleCart"
                    class="-mx-3 flex items-center gap-x-2.5 rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                    <ShoppingCartIcon class="size-6" aria-hidden="true" />
                    Cart
                  </button>

                  <div v-if="!isAuthenticated" class="space-y-2">
                    <RouterLink to="/login"
                      class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">Log in
                    </RouterLink>
                    <RouterLink to="/register"
                      class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                      Register
                    </RouterLink>
                  </div>

                  <div v-else class="space-y-2">
                    <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                      <DisclosureButton
                        class="flex w-full items-center justify-between rounded-lg py-3 pl-3 pr-3.5 text-base font-medium text-gray-900 hover:bg-gray-50">
                        <div class="flex items-center gap-x-3">
                          <div
                            class="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white text-sm font-bold">
                            {{ userInitials }}
                          </div>
                          <span>{{ user?.name || 'User' }}</span>
                        </div>
                        <ChevronDownIcon
                          :class="[open ? 'rotate-180' : '', 'size-5 flex-none transition-transform duration-200']"
                          aria-hidden="true" />
                      </DisclosureButton>
                      <DisclosurePanel class="mt-2 space-y-2">
                        <button @click="handleLogout"
                          class="flex w-full items-center gap-x-2.5 rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                          <ArrowRightOnRectangleIcon class="size-6" aria-hidden="true" />
                          Sign out
                        </button>
                      </DisclosurePanel>
                    </Disclosure>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  
      <main class="flex-1">
        <RouterView />
      </main>

      <CartView />
    </div>

    <footer class="custom-footer">
      <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="text-white">
            <img class="h-12 w-auto object-contain" src="@/assets/logo_white.png" alt="Your Company" />
          </div>

          <ul class="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            <li>
              <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" class="text-gray-400 transition hover:text-white">
                <span class="sr-only">Facebook</span>

                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/accounts/login/?hl=en" rel="noreferrer" target="_blank" class="text-gray-400 transition hover:text-white">
                <span class="sr-only">Instagram</span>

                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416 1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353-.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>

            <li>
              <a href="https://x.com/i/flow/login" rel="noreferrer" target="_blank" class="text-gray-400 transition hover:text-white">
                <span class="sr-only">Twitter</span>

                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="grid grid-cols-1 gap-8 border-t border-gray-700 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p class="font-medium text-white">Services</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <RouterLink to="packages" class="text-gray-400 transition hover:text-white"> Packages </RouterLink>
              </li>

              <li>
                <RouterLink to="products" class="text-gray-400 transition hover:text-white"> Products </RouterLink>
              </li>

              <li>
                <RouterLink to="monitoring" class="text-gray-400 transition hover:text-white"> 24/7 Monitoring </RouterLink>
              </li>

              <li>
                <RouterLink to="installations" class="text-gray-400 transition hover:text-white"> Installations</RouterLink>
              </li>

            </ul>
          </div>

          <div>
            <p class="font-medium text-white">About Us</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <RouterLink to="/why-vaultedge" class="text-gray-400 transition hover:text-white"> Why Vaultedge </RouterLink>
              </li>

              <li>
                <RouterLink to="/about-us" class="text-gray-400 transition hover:text-white"> About Us </RouterLink>
              </li>

            </ul>
          </div>

          <div>
            <p class="font-medium text-white">Helpful Links</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <RouterLink to="/contact" class="text-gray-400 transition hover:text-white"> Contact </RouterLink>
              </li>

            </ul>
          </div>

          <div>
            <p class="font-medium text-white">Legal</p>

            <ul class="mt-6 space-y-4 text-sm">
              <li>
                <a href="https://chromewebstore.google.com/detail/equalweb-accessibility-ch/imemciokfejbnonkkinhcdfigdilcllg?utm_source=chrome-ntp-icon&pli=1"
                  class="text-gray-400 transition hover:text-white"> Accessibility </a>
              </li>

              <li>
                <a href="https://adt.co.za/wp-content/uploads/2023/10/Compliance_Notice_in_terms_of_section_833d_of_PAIA_docx_docx.pdf"
                  class="text-gray-400 transition hover:text-white"> PAIA Access Form </a>
              </li>

              <li>
                <button @click="openModal('termsAndConditions')" class="text-gray-400 transition hover:text-white focus:outline-none"> Terms and Conditions </button>
              </li>

              <li>
                <button @click="openModal('privacyPolicy')" class="text-gray-400 transition hover:text-white focus:outline-none"> Privacy Policy </button>
              </li>

              <li>
                <button @click="openModal('legalUsage')" class="text-gray-400 transition hover:text-white focus:outline-none"> Terms Of Legal Use </button>
              </li>
            </ul>
          </div>
        </div>

        <p class="text-xs text-gray-500">&copy; 2025. VaultEdge All rights reserved.</p>
      </div>
    </footer>
  </div>

  <LegalModal v-model="isModalOpen" :title="modalTitle" :content="modalContent" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'
import {
  ArrowPathIcon,
  Bars3Icon,
  GiftIcon,
  ShoppingBagIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingCartIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, ScaleIcon } from '@heroicons/vue/20/solid'
import CartView from '@/views/CartView.vue'
import { useCart } from '@/composables/useCart'
import { useAuth } from '@/composables/useAuth'
import LegalModal from '@/components/LegalModal.vue';

const products = [
  { name: 'Packages', description: 'DIY home security kits to safeguard your most important assets.', href: '/packages', icon: GiftIcon },
  { name: 'Products', description: 'Find a suitable product ', href: '/products', icon: ShoppingBagIcon },
  { name: 'Security', description: 'Your customer data will be safe and secure', href: '/security', icon: FingerPrintIcon },
  { name: 'Installations', description: 'Secure your space with expert installation tailored to your needs', href: '/installations', icon: SquaresPlusIcon },
  { name: '24/7 Monitoring', description: 'Always on guard. 24/7 monitoring for real-time alerts and peace of mind, day or night.', href: '/monitoring', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Compare packages', href: '/compare', icon: ScaleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Use the cart composable
const { isCartOpen, toggleCart, closeCart } = useCart()

// Use the auth composable
const { isAuthenticated, user, userInitials, logout, initializeAuth } = useAuth()
const router = useRouter() // Initialize useRouter

// Modal state
const isModalOpen = ref(false);
const modalTitle = ref('');
const modalContent = ref('');

const legalContent = {
  privacyPolicy: `
    <p>This Privacy Policy describes how Vaultedge collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.</p>
    <h4>1. Information We Collect</h4>
    <p>When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. This may include your IP address, browser type, and details of products viewed. We also collect personal details such as your name, billing address, shipping address, and payment information when you make a purchase.</p>
    <h4>2. How We Use Your Information</h4>
    <p>We use your Personal Information to provide our services to you, which includes offering products for sale, processing payments, shipping your order, and keeping you up to date on new products, services, and offers.</p>
    <h4>3. Your Rights</h4>
    <p>You have the right to access the personal information we hold about you, to port it to a new service, and to ask that your personal information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the information below.</p>
  `,
  termsAndConditions: `
    <p>Welcome to Vaultedge! These Terms and Conditions outline the rules and regulations for the use of our website and services.</p>
    <h4>1. Acceptance of Terms</h4>
    <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Vaultedge's website if you do not accept all of the terms and conditions stated on this page.</p>
    <h4>2. Products and Services</h4>
    <p>Vaultedge provides security equipment and related services. All products are subject to availability. We reserve the right to discontinue any product at any time. All descriptions of products or product pricing are subject to change at any time without notice.</p>
    <h4>3. User Obligations</h4>
    <p>You agree not to use the website for any purpose that is unlawful or prohibited by these terms. You are responsible for all activity that occurs under your account. You must notify us immediately of any unauthorized use of your account.</p>
  `,
  legalUsage: `
    <p>This section provides information on the legal use of our site and its content.</p>
    <h4>1. Intellectual Property</h4>
    <p>The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary laws. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.</p>
    <h4>2. Disclaimer</h4>
    <p>The information on this website is provided "as is." Vaultedge makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.</p>
    <h4>3. Limitation of Liability</h4>
    <p>In no event shall Vaultedge or its suppliers be liable for any damages arising out of the use or inability to use the materials on Vaultedge's website, even if Vaultedge or a Vaultedge authorized representative has been notified orally or in writing of the possibility of such damage.</p>
  `
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleLogout = async () => {
  await logout()
  mobileMenuOpen.value = false
  router.push('/login') // Redirect to login page after logout
}

// Function to open the modal
const openModal = (type) => {
  switch (type) {
    case 'privacyPolicy':
      modalTitle.value = 'Privacy Policy';
      modalContent.value = legalContent.privacyPolicy;
      break;
    case 'termsAndConditions':
      modalTitle.value = 'Terms and Conditions';
      modalContent.value = legalContent.termsAndConditions;
      break;
    case 'legalUsage':
      modalTitle.value = 'Terms of Legal Use';
      modalContent.value = legalContent.legalUsage;
      break;
    default:
      modalTitle.value = 'Legal Information';
      modalContent.value = '<p>No specific content found for this link.</p>';
  }
  isModalOpen.value = true;
};

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
  await initializeAuth()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.custom-footer {
  background-color: black;
  color: white;
  padding: 24px;
}

 .btn-23,
 .btn-23 *,
 .btn-23 :after,
 .btn-23 :before,
 .btn-23:after,
 .btn-23:before {
   border: 0 solid;
   box-sizing: border-box;
 }
 
 .btn-23 {
   -webkit-tap-highlight-color: transparent;
   -webkit-appearance: button;
   background-color: #000;
   background-image: none;
   color: #fff;
   cursor: pointer;
   font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
     Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
     Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
   font-size: 100%;
   font-weight: 500; /* UPDATED from 900 */
   line-height: 1.5;
   margin: 0;
   -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
   padding: 0;
   /* text-transform: uppercase; <-- REMOVED this line */
 }
 
 .btn-23:disabled {
   cursor: default;
 }
 
 .btn-23:-moz-focusring {
   outline: auto;
 }
 
 .btn-23 svg {
   display: block;
   vertical-align: middle;
 }
 
 .btn-23 [hidden] {
   display: none;
 }
 
 .btn-23 {
   border-radius: 99rem;
   border-width: 2px;
   overflow: hidden;
   padding: 0.5rem 1rem;
   position: relative;
 }
 
 .btn-23 span {
   display: grid;
   inset: 0;
   place-items: center;
   position: absolute;
   transition: opacity 0.2s ease;
 }
 
 .btn-23 .marquee {
   --spacing: 5em;
   --start: 0em;
   --end: 5em;
   -webkit-animation: marquee 1s linear infinite;
   animation: marquee 1s linear infinite;
   -webkit-animation-play-state: paused;
   animation-play-state: paused;
   opacity: 0;
   position: relative;
   text-shadow: #fff var(--spacing) 0, #fff calc(var(--spacing) * -1) 0,
     #fff calc(var(--spacing) * -2) 0;
 }
 
 .btn-23:hover .marquee {
   -webkit-animation-play-state: running;
   animation-play-state: running;
   opacity: 1;
 }
 
 .btn-23:hover .text {
   opacity: 0;
 }
 
 @-webkit-keyframes marquee {
   0% {
     transform: translateX(var(--start));
   }
 
   to {
     transform: translateX(var(--end));
   }
 }
 
 @keyframes marquee {
   0% {
     transform: translateX(var(--start));
   }
 
   to {
     transform: translateX(var(--end));
   }
 }

.blur-background {
  filter: blur(4px);
  transition: filter 0.3s ease-in-out;
}
</style>