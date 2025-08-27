<template>
  <div class="relative bg-gray-50 min-h-screen">
    <!-- Gradient backgrounds -->
    <div
      class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 blur-2xl animate-gradient-shift"
      aria-hidden="true"
    >
      <div
        class="aspect-577/310 w-144.25 bg-gradient-to-r from-black via-gray-900 to-black opacity-25"
      ></div>
    </div>
    <div
      class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 blur-2xl animate-gradient-shift-reverse"
      aria-hidden="true"
    >
      <div
        class="aspect-577/310 w-144.25 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-30"
      ></div>
    </div>

    <!-- Title and Description Section -->
    <div class="text-center py-16 relative z-10 px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        Compare Our Packages
      </h1>
      <p class="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
        Find the perfect security solution that fits your needs and budget.
      </p>
    </div>

    <!-- Comparison table -->
    <div class="overflow-x-auto relative z-10 p-4 sm:p-6 lg:p-8">
      <table class="w-full max-w-6xl mx-auto rounded-lg shadow-xl overflow-hidden bg-white">
        <thead>
          <tr class="bg-gray-800 text-white">
            <th class="px-6 py-4 text-left font-semibold text-lg border-b border-gray-700 rounded-tl-lg">
              Features
            </th>
            <th
              v-for="pkg in packages"
              :key="pkg.name"
              class="px-6 py-4 text-center font-semibold text-lg border-b border-gray-700"
              :class="{'rounded-tr-lg': pkg === packages[packages.length - 1]}"
            >
              <img :src="pkg.image" :alt="pkg.name" class="w-24 h-24 mx-auto mb-2 rounded-lg object-cover shadow-sm" />
              <div class="text-xl font-bold">{{ pkg.name }}</div>
              <div class="text-gray-300 text-base mt-1">{{ pkg.price }}</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(feature, index) in allFeatures" :key="feature"
              :class="{'bg-gray-50': index % 2 === 0, 'bg-white': index % 2 !== 0}">
            <td class="px-6 py-3 border-b border-gray-200 text-gray-800 font-medium">
              {{ feature }}
            </td>
            <td
              v-for="pkg in packages"
              :key="pkg.name + feature"
              class="px-6 py-3 border-b border-gray-200 text-center"
            >
              <span v-if="pkg.features.includes(feature)" class="text-black inline-block w-7 h-7">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-7 h-7">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </span>
              <span v-else class="text-gray-400 text-xl">
                —
              </span>
            </td>
          </tr>

          <!-- CTA row -->
          <tr class="bg-gray-100">
            <td class="px-6 py-4"></td>
            <td
              v-for="pkg in packages"
              :key="pkg.name + '-cta'"
              class="px-6 py-4 text-center"
            >
              <RouterLink to="/packages"
                class="w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 ease-in-out shadow-md hover:shadow-lg"
              >
                Get Started
          </RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    </div>

    <!-- Customize Card Section -->
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
              your system</RouterLink>
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
import { computed } from 'vue';
import package1Image from '@/assets/Package 1.png';
import package2Image from '@/assets/Package 2.png';
import package3Image from '@/assets/Package 3.png';
import package4Image from '@/assets/Package 4.png';
import package5Image from '@/assets/Package 5.png';

const packages = [
  {
    name: "Smart Entry Essentials",
    image: package3Image,
    features: [
      "Door Sensor",
      "Motion Detector",
      "24/7 Monitoring",
      "Mobile App Access",
    ],
  },
  {
    name: "Smart Security Plus",
    image: package2Image,
    features: [
      "Door Sensor",
      "Motion Detector",
      "24/7 Monitoring",
      "Mobile App Access",
      "Indoor Camera",
    ],
  },
  {
    name: "Ultimate Home Guard",
    image: package5Image,
    features: [
      "Door Sensor",
      "Motion Detector",
      "24/7 Monitoring",
      "Mobile App Access",
      "Indoor Camera",
      "Outdoor Camera",
      "Smart Door Lock",
    ],
  },
  {
    name: "Basic Office Surveillance",
    image: package1Image,
    features: [
      "Mobile App Integration",
    ],
  },
  {
    name: "Home Starter Pack",
    image: package4Image,
    features: [
      "Easy Setup & Installation",
      "Mobile App Access",
    ],
  },
];

// Dynamically create a unique set of all features for the first column
const allFeatures = computed(() => {
  const featuresSet = new Set();
  packages.forEach(pkg => {
    pkg.features.forEach(feature => {
      featuresSet.add(feature);
    });
  });
  return Array.from(featuresSet);
});
</script>
  <!-- Animations CSS -->
<style scoped>
  @keyframes gradient-shift {
    0%, 100% { transform: translateY(-50%) translateX(0) scale(1); }
    33% { transform: translateY(-50%) translateX(10px) scale(1.05); }
    66% { transform: translateY(-50%) translateX(-5px) scale(0.98); }
  }

  @keyframes gradient-shift-reverse {
    0%, 100% { transform: translateY(-50%) translateX(0) scale(1); }
    33% { transform: translateY(-50%) translateX(-8px) scale(0.97); }
    66% { transform: translateY(-50%) translateX(12px) scale(1.08); }
  }

  .animate-gradient-shift {
    animation: gradient-shift 8s ease-in-out infinite;
  }

  .animate-gradient-shift-reverse {
    animation: gradient-shift-reverse 10s ease-in-out infinite;
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
.group:hover::after {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.8);
}
</style>
