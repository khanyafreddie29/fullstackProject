<template>
  <div class="bg-gray-50 text-gray-900 font-inter">

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20">
      <div class="absolute inset-0 animate-gradient"></div>
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">Securing Your World, One Step Ahead</h1>
        <p class="text-lg md:text-xl mb-8">VaultEdge — Your trusted partner for security equipment, devices, and services since 2018.</p>
        <RouterLink to="/packages">
        <button class="bg-gray-900 hover:bg-gray-800 px-6 py-3 rounded-lg text-white font-medium transition-all">Get Started</button>
        </RouterLink>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="py-16 max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl font-bold mb-12">Our Mission</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(value, index) in missionValues" :key="index"
          class="p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-transform transform hover:scale-105">
          <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
          <p class="text-gray-700">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Company Stats -->
    <section class="bg-gray-900 text-white py-16">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
        <div v-for="(stat, index) in stats" :key="index">
          <p class="text-5xl font-bold">{{ stat.count }}</p>
          <p class="text-lg">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 max-w-5xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-6">Our Story</h2>
      <p class="text-lg text-gray-700 leading-relaxed">
        Founded in 2018, VaultEdge began with a single mission: to provide reliable, top-quality security solutions to
        homes and businesses. Over the years, we’ve expanded our product line to include advanced cameras, smart sensors,
        and subscription services that empower our clients to protect what matters most. Today, we are proud to serve
        our customers with a commitment to innovation, integrity, and customer satisfaction.
      </p>
    </section>

    <!-- Team Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-12">Meet the Team</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(member, index) in team" :key="index"
            class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition hover:scale-105">
            <img :src="member.photo" alt="team member" class="w-24 h-24 mx-auto rounded-full mb-4">
            <h3 class="font-semibold text-lg">{{ member.name }}</h3>
            <p class="text-gray-600">{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-16 max-w-6xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-12 text-center">Our Core Principles</h2>
      <div class="grid md:grid-cols-4 gap-8 text-center">
        <div v-for="(value, index) in coreValues" :key="index" class="p-6 rounded-lg bg-white shadow hover:shadow-xl transition">
          <h3 class="text-xl font-semibold mb-4">{{ value.title }}</h3>
          <p class="text-gray-700">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Call-to-Action -->
    <section class="bg-gray-900 text-white py-16 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Secure Your Future?</h2>
      <p class="mb-8">Book a free consultation with our experts today.</p>
      <RouterLink to="/contact">
      <button class="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">Contact Us</button>
      </RouterLink>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 max-w-4xl mx-auto px-6">
      <h2 class="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
        <h3 class="font-semibold text-lg mb-2">{{ faq.question }}</h3>
        <p class="text-gray-700">{{ faq.answer }}</p>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const missionValues = ref([
  { title: "Quality First", description: "We deliver only the highest quality security products and services." },
  { title: "Expert Support", description: "Our team provides expert advice and 24/7 customer support." },
  { title: "Fair Pricing", description: "We ensure fair and transparent pricing for all our solutions." }
])

const stats = ref([
  { count: 0, label: "Clients Served" },
  { count: 0, label: "Devices Installed" },
  { count: 0, label: "Years in Service" }
])

const team = ref([
  { name: "Rick Sanchez", role: "CEO", photo: "https://www.jacketscreator.com/wp-content/uploads/2024/08/rick-sanchez-rick-and-morty-black-coat.jpg.webp" },
  { name: "Khanya Freddie", role: "CTO", photo: "https://i.pinimg.com/736x/d0/53/31/d05331f37a313acf7b616df6d08577c5.jpg" },
  { name: "Serjunior Kabongo", role: "Lead Engineer", photo: "https://i.pinimg.com/1200x/5a/c7/91/5ac791c36537b382a4ba800fd5aeb355.jpg" },
  { name: "Peter Griffin", role: "Customer Success Manager", photo: "https://scontent-cpt1-1.xx.fbcdn.net/v/t39.30808-6/401803535_934707438207225_6577008036302691421_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oMPGDImigRAQ7kNvwFW-qkc&_nc_oc=AdmqK9cU6zEUpDLBVCuUh1SiQvTd6yszqof40g4HxfzsqTO-Msum4gmDju4URtzbwkY&_nc_zt=23&_nc_ht=scontent-cpt1-1.xx&_nc_gid=gEbyIaSZpObii0CCfK4REw&oh=00_AfUhinSpsIX13yiFDsOxknXIgjl4nzL-VW8o2t4N9EURyg&oe=68A34DC9" }
])

const coreValues = ref([
  { title: "Integrity", description: "We conduct our business with honesty and transparency." },
  { title: "Excellence", description: "We strive for excellence in everything we do." },
  { title: "Community", description: "We value and support our community of customers and partners." },
  { title: "Innovation", description: "We embrace innovation to stay ahead in security technology." }
])

const faqs = ref([
  { question: "Do you offer installation services?", answer: "Yes, our certified technicians can install and set up all equipment." },
  { question: "Are your cameras cloud-connected?", answer: "Yes, our cameras support cloud storage and remote access." },
  { question: "Do you provide warranty?", answer: "Yes, all products come with a minimum 1-year warranty." }
])

onMounted(() => {
  let targetCounts = [50, 225, 3]
  targetCounts.forEach((target, index) => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.ceil(target / 50)
      if (current >= target) {
        current = target
        clearInterval(interval)
      }
      stats.value[index].count = current
    }, 40)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

.font-inter {
  font-family: 'Inter', sans-serif;
}

.animate-gradient {
  background: linear-gradient(270deg, #111827, #1f2937, #111827);
  background-size: 600% 600%;
  animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
