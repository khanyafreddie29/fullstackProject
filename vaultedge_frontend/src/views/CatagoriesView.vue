<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900 text-center">Shop by brand</h2>

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
          <div v-for="callout in callouts" :key="callout.name" class="group relative">
            <img :src="callout.imageSrc" :alt="callout.imageAlt" class="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square" />
            <h3 class="mt-6 text-sm text-gray-500">
              <router-link :to="callout.href" class="hover:text-gray-700">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </router-link>
            </h3>
            <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const callouts = [
  {
    name: 'Google Smart Home',
    description: 'Google Devices',
    imageSrc: 'https://images.seeklogo.com/logo-png/42/1/google-home-logo-png_seeklogo-425509.png',
    imageAlt: 'Google Home Logo',
    href: '/google', // Updated to match your router path
  },
  {
    name: 'Xiaomi',
    description: 'Xiaomi Devices',
    imageSrc: 'https://images.seeklogo.com/logo-png/40/1/xiaomi-new-2021-logo-png_seeklogo-400999.png',
    imageAlt: 'Xiaomi Logo',
    href: '/xiaomi', // Add routes for these when ready
  },
  {
    name: 'ERS Biometric',
    description: 'ERS Biometric Devices',
    imageSrc: 'https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/309991352_488204746655239_8924044334166412398_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-dCfmnmLp5IQ7kNvwGKoujF&_nc_oc=Admb8hJA7jOjNIy7C6veZ3bC-m8zu2_FP-Dhz-RP54dSJuAEf5NZdw4iSy3y6_l9DVQ&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=ZUYnJ3gFVlQ390p83kgwbg&oh=00_AfUdV_6hF6WN6jqYhDqwcFVRFB52lgK2aaAlvJNIq2EwyQ&oe=68B1E144',
    imageAlt: 'ERS Biometric',
    href: '/ers', // Add routes for these when ready
  },
]
</script>