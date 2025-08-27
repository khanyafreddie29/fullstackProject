<template>
  <div v-if="deal" class="max-w-3xl mx-auto py-10 px-4">
    <div class="flex flex-col md:flex-row gap-8">
      <img :src="deal.image" :alt="deal.imageAlt || deal.title" class="w-full md:w-80 h-64 object-cover rounded-xl border" />
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ deal.title }}</h1>
        <p class="text-gray-600 mb-4">{{ deal.subtitle }}</p>
        <div class="flex items-end gap-3 mb-4">
          <span class="text-2xl font-extrabold">R{{ deal.price }}</span>
          <span class="line-through text-gray-400">R{{ deal.originalPrice }}</span>
          <span class="text-xs bg-gray-100 px-2 py-1 rounded">Save {{ deal.discount }}%</span>
        </div>
        <p class="text-sm text-gray-500 mb-4">Monitoring from R{{ deal.monitoring }}/mo. {{ deal.contractNote }}</p>
        <ul class="mb-4 space-y-2">
          <li v-for="(inc, i) in deal.includes" :key="i" class="flex items-start gap-2 text-sm">
            <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
            <span>{{ inc }}</span>
          </li>
        </ul>
        <button @click="addItemToCart(deal)" class="bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black transition">
          Add to cart
        </button>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-20 text-gray-500">Deal not found.</div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { useCart } from '@/composables/useCart'
import dIY_Life_Safety_Bundle from '@/assets/DIY Life Safety Bundle.png'
import smart_Video from '@/assets/Pro Install — Smart Video.png'

// Copy your deals array here (keep it in sync with DealsView.vue)
const deals = [
  {
    id: 'diy-1',
    title: 'Self-Setup Essentials',
    subtitle: 'Quick start kit for apartments & small homes',
    category: 'DIY',
    price: 1499, originalPrice: 1999, discount: 25, monitoring: 199,
    contractNote: 'DIY month-to-month.',
    includes: ['Smart hub', '2x Entry sensors', '1x Motion', 'Mobile app + alerts'],
    limited: true, bestValue: false,
    image: 'https://i5.walmartimages.com/seo/SwitchBot-Contact-Sensor-Smart-Bluetooth-Door-Sensor-With-Built-in-Motion-Sensor-White_5e728410-c0d4-412f-943b-5c196972192c.2eee36f6bb8451b187907f68da17a226.png?odnHeight=573&odnWidth=573&odnBg=FFFFFF',
    imageAlt: 'Self-Setup Essentials',
    ctaTo: '/shop',
  },
  {
    id: 'pro-1',
    title: 'Pro Install Complete',
    subtitle: 'Whole-home protection with expert setup',
    category: 'Pro Install',
    price: 4999, originalPrice: 6299, discount: 21, monitoring: 349,
    contractNote: '36-month monitoring may apply.',
    includes: ['Touchscreen panel', '4x Entry sensors', '2x Motion', 'Yard sign & decals'],
    limited: false, bestValue: true,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Pro Install Complete',
    ctaTo: '/quote',
  },
  {
    id: 'cam-1',
    title: '3-Cam Smart Video',
    subtitle: 'Crystal-clear video with cloud clips',
    category: 'Cameras',
    price: 3499, originalPrice: 4499, discount: 22, monitoring: 249,
    contractNote: 'DIY or pro install.',
    includes: ['2x Outdoor cams', '1x Indoor cam', 'Smart notifications', 'Cloud recording'],
    limited: true, bestValue: false,
    image: 'https://static.bhphoto.com/images/images500x500/1522146016_1365626.jpg',
    imageAlt: '3-Cam Smart Video',
    ctaTo: '/shop',
  },
  {
    id: 'doorbell-1',
    title: 'Video Doorbell + Chime',
    subtitle: 'Front-door awareness & smart alerts',
    category: 'Doorbells',
    price: 999, originalPrice: 1499, discount: 33, monitoring: 0,
    contractNote: 'No monitoring required.',
    includes: ['HD doorbell cam', 'Wireless chime', 'Two-way talk', 'Motion detection'],
    limited: false, bestValue: false,
    image: 'https://i0.wp.com/staceyoniot.com/wp-content/uploads/2018/10/Google-Home-Hub-Nest-Hello.png',
    imageAlt: 'Video Doorbell + Chime',
    ctaTo: '/shop',
  },
  {
    id: 'diy-2',
    title: 'DIY Life Safety Bundle',
    subtitle: 'Smoke, CO & intrusion alerts',
    category: 'DIY',
    price: 1999, originalPrice: 2699, discount: 26, monitoring: 249,
    contractNote: 'DIY month-to-month.',
    includes: ['Hub + app', '3x Entry sensors', '1x Motion', 'Smoke & CO alerts'],
    limited: false, bestValue: false,
    image: dIY_Life_Safety_Bundle,
    imageAlt: 'DIY Life Safety Bundle',
    ctaTo: '/shop',
  },
  {
    id: 'pro-2',
    title: 'Pro Install — Smart Video',
    subtitle: 'Full system + 2 cameras',
    category: 'Pro Install',
    price: 5799, originalPrice: 7399, discount: 22, monitoring: 399,
    contractNote: '36-month monitoring may apply.',
    includes: ['Panel + app', '5x Entry sensors', '2x Motion', '2x Smart cameras'],
    limited: false, bestValue: false,
    image: smart_Video,
    imageAlt: 'Pro Install Smart Video',
    ctaTo: '/quote',
  },
]

const route = useRoute()
const { addItemToCart } = useCart()
const deal = computed(() => deals.find(d => d.id === route.params.id))
</script>