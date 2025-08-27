<template>
  <div class="bg-gray-50 text-gray-900 font-inter">
    <section class="relative overflow-hidden text-white">
      <div class="absolute inset-0 animate-gradient"></div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-12 gap-10">
        <div class="md:col-span-7">
          <p class="uppercase tracking-wide text-gray-300 text-sm mb-3">Limited-time</p>
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            Big savings on VaultEdge security bundles
          </h1>
          <p class="text-gray-200 mt-4 text-lg">
            Lock in pro-grade protection with flexible monitoring and
            no-fuss setup options.
          </p>

          <div class="mt-8 flex flex-wrap items-center gap-3">
            <span
              class="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm bg-white/10 backdrop-blur">
              No long-term DIY contracts
            </span>
            <span
              class="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm bg-white/10 backdrop-blur">
              Professional install available
            </span>
            <span
              class="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm bg-white/10 backdrop-blur">
              24/7 monitoring ready
            </span>
          </div>

          <div class="mt-10 flex flex-wrap gap-4">
            <button
              class="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              @click="addItemToCart(featured)">
              Add to cart
            </button>
            <RouterLink to="/deal/diy-2"
              class="inline-block border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              Learn More
            </RouterLink>


          </div>

          <p class="text-xs text-gray-300 mt-6">
            *Requires eligible equipment purchase and active monitoring. See terms below.
          </p>
        </div>

        <div class="md:col-span-5">
          <div class="bg-white text-gray-900 rounded-2xl shadow-xl overflow-hidden">
            <div class="p-6 border-b">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-xl font-bold">DIY Life Safety Bundle</h3>
                  <p class="text-gray-500 text-sm mt-1">
                    Break-in, fire & CO detection + app control
                  </p>
                </div>
                <span class="text-xs uppercase tracking-wide bg-gray-900 text-white px-2 py-1 rounded">
                  Hot deal
                </span>
              </div>
              <div class="mt-6 flex items-end gap-3">
                <span class="text-4xl font-extrabold tracking-tight">
                  R{{ featured.price }}
                </span>
                <span class="line-through text-gray-400">R{{ featured.originalPrice }}</span>
                <span class="text-xs bg-gray-100 px-2 py-1 rounded">
                  Save {{ featured.discount }}%
                </span>
              </div>
              <p class="text-sm text-gray-500 mt-2">Once-off equipment. Monitoring from R{{ featured.monitoring }}/mo.
              </p>
            </div>
            <ul class="p-6 grid grid-cols-1 gap-3">
              <li v-for="(item, i) in featured.includes" :key="i" class="flex items-start gap-3">
                <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
                <span class="text-sm">{{ item }}</span>
              </li>
            </ul>
            <div class="px-6 pb-6 flex items-center gap-3">
              <button @click="addItemToCart(featured)"
                class="inline-block bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black transition">
                Add to cart
              </button>
              <button class="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
                @click="showTerms = true">
                *Terms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-10">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          <button v-for="opt in categories" :key="opt" @click="activeCategory = opt"
            class="px-4 py-2 rounded-full border transition" :class="activeCategory === opt
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'">
            {{ opt }}
          </button>
        </div>

        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">Sort by:</label>
          <select v-model="sortBy" class="px-3 py-2 rounded-md border border-gray-300 bg-white text-sm">
            <option value="featured">Featured</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="savings">Biggest Savings</option>
          </select>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 pb-4">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="deal in sortedFilteredDeals" :key="deal.id"
          class="group bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
          <div class="relative">
            <img :src="deal.image" :alt="deal.imageAlt || deal.title" class="w-full h-48 object-cover" />
            <div v-if="deal.limited" class="absolute top-3 left-3 text-xs bg-gray-900 text-white px-2 py-1 rounded">
              Limited time
            </div>
            <div v-if="deal.bestValue"
              class="absolute top-3 right-3 text-xs bg-white text-gray-900 px-2 py-1 rounded shadow">
              Best value
            </div>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <h3 class="text-lg font-bold">{{ deal.title }}</h3>
            <p class="text-sm text-gray-600 mt-1">{{ deal.subtitle }}</p>

            <ul class="mt-4 space-y-2">
              <li v-for="(inc, i) in deal.includes" :key="i" class="flex items-start gap-3 text-sm">
                <span class="mt-1 h-2 w-2 rounded-full bg-gray-900"></span>
                <span>{{ inc }}</span>
              </li>
            </ul>

            <div class="mt-5 flex items-end gap-2">
              <span class="text-3xl font-extrabold">R{{ deal.price }}</span>
              <span class="line-through text-gray-400">R{{ deal.originalPrice }}</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded">Save {{ deal.discount }}%</span>
            </div>
            <p class="text-xs text-gray-500 mt-1">Monitoring from R{{ deal.monitoring }}/mo. {{ deal.contractNote }}</p>

            <div class="mt-6 flex gap-3">
              <button :to="deal.ctaTo"
                class="inline-block bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-black transition"
                @click="addItemToCart(deal)">
                Add to cart
              </button>
              <RouterLink :to="`/deal/${deal.id}`"
                class="inline-block border border-gray-300 bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Learn More
              </RouterLink>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-14">
      <div class="rounded-2xl border border-dashed border-gray-300 p-6 md:p-10 bg-white">
        <div class="grid md:grid-cols-3 gap-6 items-center">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-bold">Have an inactive alarm system?</h3>
            <p class="text-gray-600 mt-2">
              Ask about our discounted reactivation & inspection for eligible systems.*
            </p>
          </div>
          <div class="flex gap-3 md:justify-end">
            <RouterLink to="/contact"
              class="bg-gray-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-black transition">
              Reactivate now
            </RouterLink>
            <button @click="openTermsModal"
              class="px-5 py-3 rounded-lg font-semibold border border-gray-300 bg-white hover:bg-gray-100 transition">
              See terms
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-5xl mx-auto px-6 pb-20">
      <h2 class="text-3xl font-extrabold text-center">Deals — FAQs</h2>
      <div class="mt-10 divide-y divide-gray-200 bg-white rounded-2xl shadow">
        <details v-for="(faq, i) in faqs" :key="i" class="group p-6">
          <summary class="flex items-center justify-between cursor-pointer">
            <span class="font-semibold">{{ faq.q }}</span>
            <span class="text-gray-400 group-open:rotate-180 transition">⌄</span>
          </summary>
          <p class="mt-3 text-gray-700 leading-relaxed">{{ faq.a }}</p>
        </details>
      </div>
    </section>

    <section class="bg-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 class="text-3xl font-extrabold">Need help choosing a bundle?</h3>
          <p class="text-gray-300 mt-2">Talk to a VaultEdge specialist for a tailored recommendation.</p>
          <div class="mt-6 flex gap-3">
            <RouterLink to="/contact"
              class="bg-white text-gray-900 px-5 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book a consultation
            </RouterLink>
          </div>
          <p class="text-xs text-gray-400 mt-4">Typical response in under an hour on weekdays.</p>
        </div>
        <form class="bg-white text-gray-900 rounded-2xl p-6 shadow space-y-4">
          <div>
            <label class="text-sm text-gray-600">Name</label>
            <input type="text" class="w-full mt-1 px-3 py-2 rounded-md border"
              :class="formErrors.name ? 'border-red-500' : 'border-gray-300'" placeholder="Your name" v-model="name" />
            <p v-if="formErrors.name" class="mt-1 text-xs text-red-500">{{ formErrors.name }}</p>
          </div>
          <div>
            <label class="text-sm text-gray-600">Email</label>
            <input type="email" class="w-full mt-1 px-3 py-2 rounded-md border"
              :class="formErrors.email ? 'border-red-500' : 'border-gray-300'" placeholder="you@example.com"
              v-model="email" />
            <p v-if="formErrors.email" class="mt-1 text-xs text-red-500">{{ formErrors.email }}</p>
          </div>
          <div>
            <label class="text-sm text-gray-600">What are you looking for?</label>
            <select class="w-full mt-1 px-3 py-2 rounded-md border border-gray-300" v-model="lookingFor">
              <option>DIY bundle</option>
              <option>Pro install</option>
              <option>Cameras</option>
              <option>Full system</option>
            </select>
          </div>
          <button type="button"
            class="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-black transition"
            @click="submitForm">
            Send request
          </button>
          <p class="text-xs text-gray-500">By submitting, you agree to be contacted about VaultEdge offers.</p>
        </form>
      </div>
    </section>

    <div v-if="showTerms" class="fixed inset-0 bg-black/50 backdrop-blur-sm grid place-items-center p-6 z-50"
      @click.self="showTerms = false">
      <div class="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6">
        <div class="flex items-center justify-between">
          <h4 class="text-lg font-bold">Offer Terms & Disclosures</h4>
          <button class="text-gray-500 hover:text-gray-800" @click="showTerms = false">✕</button>
        </div>
        <div class="mt-4 space-y-3 text-sm text-gray-700">
          <p>*Requires eligible equipment purchase. DIY monitoring available month-to-month; pro install may require a
            fixed-term monitoring agreement. Early termination and installation fees may apply. Offers cannot be
            combined. Availability varies by area.</p>
          <p>Pricing shown is promotional and subject to change. Taxes and permit fees may apply. Mobile app features
            require compatible hardware and connectivity.</p>
        </div>
        <div class="mt-6 text-right">
          <button class="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100"
            @click="showTerms = false">
            Close
          </button>
        </div>
      </div>
    </div>

    <div v-if="showSuccessModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm grid place-items-center p-6 z-50"
      @click.self="showSuccessModal = false">
      <div class="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center">
        <svg class="mx-auto size-16 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h4 class="mt-4 text-xl font-bold">Request Sent!</h4>
        <p class="mt-2 text-sm text-gray-500">
          A VaultEdge specialist will be in touch shortly to help you with your
          request.
        </p>
        <div class="mt-6">
          <button class="px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 w-full"
            @click="showSuccessModal = false">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import dIY_Life_Safety_Bundle from '@/assets/DIY Life Safety Bundle.png';
import smart_Video from '@/assets/Pro Install — Smart Video.png';
import { useCart } from '@/composables/useCart';

const { addItemToCart: addToCart } = useCart(); // Rename the composable function to avoid name conflict

const showTerms = ref(false);
const showSuccessModal = ref(false);
const categories = ['All', 'DIY', 'Pro Install', 'Cameras', 'Doorbells'];
const activeCategory = ref('All');
const sortBy = ref('featured');

// Reactive form data and validation errors
const name = ref('');
const email = ref('');
const lookingFor = ref('DIY bundle'); // Set a default value
const formErrors = ref({ name: '', email: '' });

const deals = ref([
  {
    id: 'diy-1',
    title: 'Self-Setup Essentials',
    subtitle: 'Quick start kit for apartments & small homes',
    category: 'DIY',
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    monitoring: 199,
    contractNote: 'DIY month-to-month.',
    includes: ['Smart hub', '2x Entry sensors', '1x Motion', 'Mobile app + alerts'],
    limited: true,
    bestValue: false,
    image: 'https://i5.walmartimages.com/seo/SwitchBot-Contact-Sensor-Smart-Bluetooth-Door-Sensor-With-Built-in-Motion-Sensor-White_5e728410-c0d4-412f-943b-5c196972192c.2eee36f6bb8451b187907f68da17a226.png?odnHeight=573&odnWidth=573&odnBg=FFFFFF',
    imageAlt: 'Self-Setup Essentials',
    ctaTo: '/shop',
  },
  {
    id: 'pro-1',
    title: 'Pro Install Complete',
    subtitle: 'Whole-home protection with expert setup',
    category: 'Pro Install',
    price: 4999,
    originalPrice: 6299,
    discount: 21,
    monitoring: 349,
    contractNote: '36-month monitoring may apply.',
    includes: ['Touchscreen panel', '4x Entry sensors', '2x Motion', 'Yard sign & decals'],
    limited: false,
    bestValue: true,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Pro Install Complete',
    ctaTo: '/deal/:id',
  },
  {
    id: 'cam-1',
    title: '3-Cam Smart Video',
    subtitle: 'Crystal-clear video with cloud clips',
    category: 'Cameras',
    price: 3499,
    originalPrice: 4499,
    discount: 22,
    monitoring: 249,
    contractNote: 'DIY or pro install.',
    includes: ['2x Outdoor cams', '1x Indoor cam', 'Smart notifications', 'Cloud recording'],
    limited: true,
    bestValue: false,
    image: 'https://static.bhphoto.com/images/images500x500/1522146016_1365626.jpg',
    imageAlt: '3-Cam Smart Video',
    ctaTo: '/shop',
  },
  {
    id: 'doorbell-1',
    title: 'Video Doorbell + Chime',
    subtitle: 'Front-door awareness & smart alerts',
    category: 'Doorbells',
    price: 999,
    originalPrice: 1499,
    discount: 33,
    monitoring: 0,
    contractNote: 'No monitoring required.',
    includes: ['HD doorbell cam', 'Wireless chime', 'Two-way talk', 'Motion detection'],
    limited: false,
    bestValue: false,
    image: 'https://i0.wp.com/staceyoniot.com/wp-content/uploads/2018/10/Google-Home-Hub-Nest-Hello.png',
    imageAlt: 'Video Doorbell + Chime',
    ctaTo: '/shop',
  },
  {
    id: 'diy-2',
    title: 'DIY Life Safety Bundle',
    subtitle: 'Smoke, CO & intrusion alerts',
    category: 'DIY',
    price: 1999,
    originalPrice: 2699,
    discount: 26,
    monitoring: 249,
    contractNote: 'DIY month-to-month.',
    includes: ['Hub + app', '3x Entry sensors', '1x Motion', 'Smoke & CO alerts'],
    limited: false,
    bestValue: false,
    image: dIY_Life_Safety_Bundle,
    imageAlt: 'DIY Life Safety Bundle',
    ctaTo: '/shop',
  },
  {
    id: 'pro-2',
    title: 'Pro Install — Smart Video',
    subtitle: 'Full system + 2 cameras',
    category: 'Pro Install',
    price: 5799,
    originalPrice: 7399,
    discount: 22,
    monitoring: 399,
    contractNote: '36-month monitoring may apply.',
    includes: ['Panel + app', '5x Entry sensors', '2x Motion', '2x Smart cameras'],
    limited: false,
    bestValue: false,
    image: smart_Video,
    imageAlt: 'Pro Install Smart Video',
    ctaTo: '/deal/:id',
  },
]);

const featured = computed(() => deals.value.find((d) => d.id === 'diy-2'));

// Add FAQs data
const faqs = ref([
  {
    q: 'How long do these deals last?',
    a: 'Deal pricing is valid for a limited time and subject to change without notice. We recommend securing your preferred bundle as soon as possible.',
  },
  {
    q: 'Can I upgrade my system later?',
    a: 'Yes! All our systems are designed to be expandable. You can add more sensors, cameras, and smart home devices at any time.',
  },
  {
    q: "What's included with professional installation?",
    a: 'Pro install includes equipment setup, system configuration, user training, and a 12-month service warranty. Installation typically takes 2-4 hours.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No hidden fees! Equipment pricing is upfront. Monthly monitoring fees are clearly stated, and there are no activation fees for DIY systems.',
  },
]);

// Corrected function to add item to cart with proper image property
const addItemToCart = (deal) => {
  // Create a new object that includes all deal properties and maps 'image' to 'imageSrc'
  const cartItem = {
    ...deal,
    imageSrc: deal.image,
  };
  addToCart(cartItem);
};

// New function to open the terms modal
const openTermsModal = () => {
  showTerms.value = true;
};

// New function to handle form submission and show the success modal
const submitForm = () => {
  formErrors.value = {}; // Reset errors
  let isValid = true;

  if (!name.value) {
    formErrors.value.name = 'Please enter your name.';
    isValid = false;
  }

  if (!email.value) {
    formErrors.value.email = 'Please enter your email.';
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    formErrors.value.email = 'Please enter a valid email address.';
    isValid = false;
  }

  if (isValid) {
    // In a real application, you would add logic here to send the form data
    // For this example, we will just show the modal
    showSuccessModal.value = true;
  }
};

// sorting + filtering
const filteredDeals = computed(() => {
  if (activeCategory.value === 'All') return deals.value;
  return deals.value.filter((d) => d.category === activeCategory.value);
});

const sortedFilteredDeals = computed(() => {
  const arr = [...filteredDeals.value];
  switch (sortBy.value) {
    case 'priceLow':
      return arr.sort((a, b) => a.price - b.price);
    case 'priceHigh':
      return arr.sort((a, b) => b.price - a.price);
    case 'savings':
      return arr.sort((a, b) => b.discount - a.discount);
    default:
      // featured first, then price
      return arr.sort((a, b) => Number(b.bestValue) - Number(a.bestValue) || a.price - b.price);
  }
});

// (Optional) small animated tick for limited-time banners
onMounted(() => {
  // Placeholder if you want to add timed changes later
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.animate-gradient {
  background: radial-gradient(1200px 600px at -10% -10%, rgba(255, 255, 255, 0.08), transparent 60%), linear-gradient(270deg, #111827, #1f2937, #111827);
  background-size: 600% 600%;
  animation: gradientShift 16s ease infinite;
  min-height: 420px;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%, 0% 50%;
  }

  50% {
    background-position: 100% 50%, 100% 50%;
  }

  100% {
    background-position: 0% 50%, 0% 50%;
  }
}

/* details/summary caret animation */
details>summary {
  list-style: none;
}

details>summary::-webkit-details-marker {
  display: none;
}

.group[open] summary+p {
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>