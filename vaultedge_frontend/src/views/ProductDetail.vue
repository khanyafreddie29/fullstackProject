<template>
  <div class="bg-white">
    <div v-if="product && product.videoUrl" class="video-container">
      <video
        ref="videoElement"
        :src="product.videoUrl"
        autoplay
        muted
        playsinline
        disablePictureInPicture
        class="video"
      ></video>
    </div>

    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div v-if="product" class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <div class="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
          <img :src="product.imageSrc"
               :alt="product.imageAlt"
               class="w-full h-full object-cover" />
        </div>
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>
          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">{{ product.priceFormatted }}</p>
          </div>
          <div class="mt-6">
            <h3 class="sr-only">Description</h3>
            <div class="text-base text-gray-700 space-y-6">
              <p>{{ product.descript }}</p>
            </div>
          </div>
          <div class="mt-10 flex">
            <button @click="addItemToCart(product)"
                    class="max-w-xs flex-1 bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:w-full">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-12">
        <p class="text-gray-500">Product not found</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCart } from '@/composables/useCart';

const { addItemToCart } = useCart();
const route = useRoute()
const product = ref(null)
const videoElement = ref(null);

const handleScroll = () => {
  if (videoElement.value) {
    const scrollPosition = window.scrollY;
    const scale = 1 + scrollPosition * 0.0005;
    videoElement.value.style.transform = `scale(${scale})`;
  }
};

onMounted(async () => {
  try {
    const productId = route.params.id;
    const response = await axios.get(`http://localhost:3000/products/id/${productId}`)
    const p = response.data
    product.value = {
      id: p.product_id,
      name: p.product_name,
      imageSrc: p.product_url,
      imageAlt: p.product_name,
      descript: p.product_description,
      price: p.product_price,
      priceFormatted: `R${p.product_price}`,
      videoUrl: p.video_url || null
    }
  } catch (error) {
    console.error('Failed to load product details:', error)
    product.value = null
  }
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  border-radius: 20px;
}

video {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 20px;
  will-change: transform;
  transition: transform 0.1s ease-out;
}
</style>