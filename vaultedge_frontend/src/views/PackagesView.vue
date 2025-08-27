Menu
PackagesView.vue
Zoe Petersen August 21, 2025 at 9:15 AM
40KB Plain Text snippet. This file is private.

<template>
  <div
    class="relative isolate flex items-center gap-x-10 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
    <div
      class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift"
      aria-hidden="true">
      <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-black via-gray-900 to-black opacity-25"
        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div
      class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift-reverse"
      aria-hidden="true">
      <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-30"
        style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>

    <div class="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl animate-pulse-slow"
      aria-hidden="true">
      <div class="aspect-square w-96 bg-gradient-to-br from-black via-gray-800 to-black opacity-18 rounded-full" />
    </div>

    <div class="absolute bottom-0 right-1/4 -z-10 transform-gpu blur-xl animate-gradient-float" aria-hidden="true">
      <div class="aspect-square w-64 bg-gradient-to-tl from-gray-900 via-black to-gray-800 opacity-20 rounded-full" />
    </div>

    <div class="flex flex-wrap items-center gap-x-50 gap-y-2">
      <div class="flex flex-col">
        <p class="text-sm/6 text-gray-900">
          <strong class="font-semibold">Get R3600 off the Smart Entry Essentials package</strong>
        </p>
        <p class="text-sm text-gray-700">
          Eligible purchase and plan required. Fees apply for early cancel. Install not available online.
          Expires 28/5/2025.
        </p>
      </div>
      <RouterLink to="deals"
        class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">View
        Deal<span aria-hidden="true">&rarr;</span></RouterLink>
    </div>
    <div class="flex flex-1 justify-end ml-10">
      <button type="button" class="-m-3 p-3 focus-visible:-outline-offset-4"></button>
    </div>
  </div>
  <div class="mx-auto max-w-2xl py-5 sm:py-5 lg:py-5">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
    </div>
    <div class="text-center">
      <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">DIY security kits
        to protect what matters.</h1>
      <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Easily set up your own security
        system and keep your home and loved ones safe.</p>
      <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-base">Packages starting at R1,590</p>
    </div>
  </div>
  <div class="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
    <div
      class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img src="@/assets/Package 1.png" alt="Security camera collection with Nest, Xiaomi cameras and doorbell"
        class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div
      class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img src="@/assets/Package 2.png" alt="Xiaomi indoor cameras, Google doorbell and fingerprint terminal"
        class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div
      class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img src="@/assets/Package 3.png" alt="Nest doorbell with fingerprint terminal showing ready status"
        class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div
      class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <img src="@/assets/Package 4.png" alt="Two indoor security cameras - Nest and Mi brand comparison"
        class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
    <div
      class="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 sm:col-span-3 lg:col-span-1">
      <img src="@/assets/Package 5.png" alt="Complete security system setup with cameras, hub and doorbell"
        class="aspect-square w-full object-cover group-hover:scale-110 transition-transform duration-300" />
    </div>
  </div>
  <div
    class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true">
    <div
      class="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
      style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
  </div>
  <div class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Protection Level</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Each VaultEdge package is designed to meet different security needs and budgets
        </p>
      </div>
<!-- 
      <div class="mb-20 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img :src="packages[0].imageSrc" :alt="packages[0].imageAlt"
              class="w-full rounded-2xl shadow-2xl" />
            <div class="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
              R690 OFF
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ packages[0].name }}</h3>
          <p class="text-lg text-gray-600 mb-6">Ideal for small offices and homes seeking essential monitoring
            capabilities.</p>
          <div class="flex items-baseline gap-2 mb-6">
            <div class="text-4xl font-bold text-gray-900">{{ packages[0].price }}</div>
            <div class="text-lg text-gray-500 line-through">R3,990</div>
          </div>
          <div class="space-y-4 mb-8">
            <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">2x Xiaomi White C200 Smart Cameras</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Cam (wired)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Doorbell (battery)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Mobile App Integration</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Bundle Discount: R690 OFF</span>
              </li>
            </ul>
          </div>
          <button @click="addItemToCart(packages[0])"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Choose Basic Office Package
          </button>
        </div>
      </div> -->

      <!-- START -->
       <div
    v-for="pkg in packages"
    :key="pkg.package_id"
    class="mb-20 flex flex-col lg:flex-row-reverse items-center gap-12"
  >
    <!-- IMAGE SECTION -->
    <div class="lg:w-1/2">
      <div class="relative">
        <img :src="pkg.package_url" :alt="pkg.package_name" class="w-full rounded-2xl shadow-2xl" />
        <div class="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
          R{{ pkg.discount_amount }} OFF
        </div>
      </div>
    </div>

    <!-- INFO SECTION -->
    <div class="lg:w-1/2">
      <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ pkg.package_name }}</h3>
      <p class="text-lg text-gray-600 mb-6">{{ pkg.package_descript }}</p>

      <div class="flex items-baseline gap-2 mb-6">
        <div class="text-4xl font-bold text-gray-900">R{{ pkg.package_price }}</div>
        <div class="text-lg text-gray-500 line-through">R{{ pkg.original_price }}</div>
      </div>

      <div class="space-y-4 mb-8">
        <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
        <ul class="space-y-3">
          <li
            v-for="(item, index) in pkg.includes"
            :key="index"
            class="flex items-center"
          >
            <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <span class="text-gray-700">{{ item }}</span>
          </li>
        </ul>
      </div>

      <button
        @click="addItemToCart(pkg)"
        class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors"
      >
        Choose {{ pkg.package_name }}
      </button>
    </div>
  </div>
      <!-- END -->

      <!-- <div class="mb-20 flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img :src="packages[1].imageSrc" :alt="packages[1].imageAlt"
              class="w-full rounded-2xl shadow-2xl" />
            <div class="absolute -top-4 -left-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
              R2,300 OFF
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ packages[1].name }}</h3>
          <p class="text-lg text-gray-600 mb-6">Ideal for indoor and outdoor monitoring systems with secure entry access
            control.</p>
          <div class="flex items-baseline gap-2 mb-6">
            <div class="text-4xl font-bold text-gray-900">{{ packages[1].price }}</div>
            <div class="text-lg text-gray-500 line-through">R9,500</div>
          </div>
          <div class="space-y-4 mb-8">
            <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Xiaomi White C200 Smart Camera</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Xiaomi White CW300 Outdoor Camera</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Doorbell (battery)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x EBZ101 Fingerprint Terminal</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Advanced Access Control</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Bundle Discount: R2,300 OFF</span>
              </li>
            </ul>
          </div>
          <button @click="addItemToCart(packages[1])"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Choose Standard Office Package
          </button>
        </div>
      </div>
      <div class="mb-20 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img :src="packages[2].imageSrc" :alt="packages[2].imageAlt"
              class="w-full rounded-2xl shadow-2xl" />
            <div class="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
              R3,600 OFF
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ packages[2].name }}</h3>
          <p class="text-lg text-gray-600 mb-6">Ideal for companies focused on secure access control and entry
            management.</p>
          <div class="flex items-baseline gap-2 mb-6">
            <div class="text-4xl font-bold text-gray-900">{{ packages[2].price }}</div>
            <div class="text-lg text-gray-500 line-through">R8,500</div>
          </div>
          <div class="space-y-4 mb-8">
            <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Doorbell (wired)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x EBZ101 Fingerprint Terminal</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Secure Entry Control System</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Visitor Management Features</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Bundle Discount: R3,600 OFF</span>
              </li>
            </ul>
          </div>
          <button @click="addItemToCart(packages[2])"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Choose Smart Entry Package
          </button>
        </div>
      </div>
      <div class="mb-20 flex flex-col lg:flex-row items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img :src="packages[3].imageSrc" :alt="packages[3].imageAlt" class="w-full rounded-2xl shadow-2xl" />
            <div class="absolute -top-4 -left-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
              R190 OFF
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ packages[3].name }}</h3>
          <p class="text-lg text-gray-600 mb-6">Ideal for small apartments or flats seeking basic home security
            coverage.</p>
          <div class="flex items-baseline gap-2 mb-6">
            <div class="text-4xl font-bold text-gray-900">{{ packages[3].price }}</div>
            <div class="text-lg text-gray-500 line-through">R1,590</div>
          </div>
          <div class="space-y-4 mb-8">
            <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Cam (wired)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Xiaomi White C200 Smart Camera</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Easy Setup & Installation</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Mobile App Access</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Bundle Discount: R190 OFF</span>
              </li>
            </ul>
          </div>
          <button @click="addItemToCart(packages[3])"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Choose Home Starter Pack
          </button>
        </div>
      </div>
      <div class="mb-20 flex flex-col lg:flex-row-reverse items-center gap-12">
        <div class="lg:w-1/2">
          <div class="relative">
            <img :src="packages[4].imageSrc" :alt="packages[4].imageAlt" class="w-full rounded-2xl shadow-2xl" />
            <div class="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg font-semibold">
              R1,455 OFF
            </div>
          </div>
        </div>
        <div class="lg:w-1/2">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">{{ packages[4].name }}</h3>
          <p class="text-lg text-gray-600 mb-6">Ideal for homes that want comprehensive access control and complete
            monitoring coverage.</p>
          <div class="flex items-baseline gap-2 mb-6">
            <div class="text-4xl font-bold text-gray-900">{{ packages[4].price }}</div>
            <div class="text-lg text-gray-500 line-through">R6,355</div>
          </div>
          <div class="space-y-4 mb-8">
            <h4 class="text-xl font-semibold text-gray-900">What's Included:</h4>
            <ul class="space-y-3">
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Xiaomi White C200 Smart Camera</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Xiaomi White CW300 Outdoor Camera</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Cam (battery)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">1x Google Nest Doorbell (battery)</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Complete Indoor/Outdoor Coverage</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Advanced Mobile App Features</span>
              </li>
              <li class="flex items-center">
                <div class="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1
                      1 0 011.414 0z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="text-gray-700">Bundle Discount: R1,455 OFF</span>
              </li>
            </ul>
          </div>
          <button @click="addItemToCart(packages[4])"
            class="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors">
            Choose Home Full Pack
          </button>
        </div>
      </div> -->
    </div>
  </div>
  <div class="bg-gray-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32 group">
        <h2 class="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Don't see a package that fits your needs?
        </h2>
        <div class="flex flex-1 justify-end">
          <RouterLink to="/products"
          
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white z-20">Customize
            your system
          </RouterLink>
        </div>
        <svg viewBox="0 0 1024 1024"
          class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true">
          <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e09e3200646)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="8d958450-c69f-4251-94bc-4e09e3200646">
              <stop stop-color="#7775D6" />
              <stop offset="1" stop-color="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';
import { XMarkIcon } from '@heroicons/vue/20/solid';
import { useCart } from '@/composables/useCart';

const { addItemToCart } = useCart();
const packages = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/packages');
    packages.value = response.data;
  } catch (error) {
    console.error('Failed to fetch packages:', error);
  }
}) 

// import { XMarkIcon } from '@heroicons/vue/20/solid';
// import { useCart } from '@/composables/useCart'; // Import useCart composable
// import package1Image from '@/assets/Package 1.png'; // Import package images
// import package2Image from '@/assets/Package 2.png';
// import package3Image from '@/assets/Package 3.png';
// import package4Image from '@/assets/Package 4.png';
// import package5Image from '@/assets/Package 5.png';


// // Destructure addItemToCart from the composable
// const { addItemToCart } = useCart();

// const packages = [
//   {
//     id: 'package-basic-office',
//     name: 'Basic Office Surveillance',
//     price: 'R3,300',
//     imageSrc: package1Image,
//     imageAlt: 'Basic Office Surveillance Package Image',
//   },
//   {
//     id: 'package-standard-office',
//     name: 'Standard Office Security',
//     price: 'R5,200',
//     imageSrc: package2Image,
//     imageAlt: 'Standard Office Security Package Image',
//   },
//   {
//     id: 'package-smart-entry',
//     name: 'Smart Entry Essentials',
//     price: 'R3,900',
//     imageSrc: package3Image,
//     imageAlt: 'Smart Entry Essentials Package Image',
//   },
//   {
//     id: 'package-home-starter',
//     name: 'Home Starter Pack',
//     price: 'R1,400',
//     imageSrc: package4Image,
//     imageAlt: 'Home Starter Pack Image',
//   },
//   {
//     id: 'package-home-full',
//     name: 'Home Full Pack',
//     price: 'R4,900',
//     imageSrc: package5Image,
//     imageAlt: 'Home Full Pack Image',
//   },
// ];
</script>

<style scoped>
@keyframes gradient-shift {

  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }

  33% {
    transform: translateY(-50%) translateX(10px) scale(1.05);
  }

  66% {
    transform: translateY(-50%) translateX(-5px) scale(0.98);
  }
}

@keyframes gradient-shift-reverse {

  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }

  33% {
    transform: translateY(-50%) translateX(-8px) scale(0.97);
  }

  66% {
    transform: translateY(-50%) translateX(12px) scale(1.08);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.15;
    transform: translateX(-50%) scale(1);
  }

  50% {
    opacity: 0.08;
    transform: translateX(-50%) scale(1.1);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 8s ease-in-out infinite;
}

.animate-gradient-shift-reverse {
  animation: gradient-shift-reverse 10s ease-in-out infinite;
}

@keyframes gradient-float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.20;
  }

  50% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.12;
  }
}

.animate-gradient-float {
  animation: gradient-float 7s ease-in-out infinite;
}

@keyframes gradient-shift {

  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }

  33% {
    transform: translateY(-50%) translateX(10px) scale(1.05);
  }

  66% {
    transform: translateY(-50%) translateX(-5px) scale(0.98);
  }
}

@keyframes gradient-shift-reverse {

  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }

  33% {
    transform: translateY(-50%) translateX(-8px) scale(0.97);
  }

  66% {
    transform: translateY(-50%) translateX(12px) scale(1.08);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    opacity: 0.15;
    transform: translateX(-50%) scale(1);
  }

  50% {
    opacity: 0.08;
    transform: translateX(-50%) scale(1.1);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 8s ease-in-out infinite;
}

.animate-gradient-shift-reverse {
  animation: gradient-shift-reverse 10s ease-in-out infinite;
}

@keyframes gradient-float {

  0%,
  100% {
    transform: translateY(0) scale(1);
    opacity: 0.20;
  }

  50% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.12;
  }
}

.animate-gradient-float {
  animation: gradient-float 7s ease-in-out infinite;
}

.group:hover::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.8);
}

.group::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 80%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 15%, rgba(0, 0, 0, 0) 40%);
  transform: translate(-50%, -50%) scale(0.1);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  z-index: 1;
}
</style>