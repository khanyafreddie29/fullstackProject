<template>
  <div class="bg-gray-50 min-h-screen font-sans">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-4">
          Custom Device Installations, Tailored for You
        </h1>
        <p class="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Whether it’s smart cameras, sensors, or alarms — VaultEdge ensures
          every device fits your space and your needs perfectly.
        </p>
      </div>
    </section>

    <!-- How It Works -->
    <section class="max-w-7xl mx-auto px-6 py-16 space-y-20">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <transition name="fade-up" appear>
          <img
            src="https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Custom home installation"
            class="rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
          />
        </transition>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Step 1: Consultation & Design
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Our experts work with you to assess your space and understand your
            security needs. We then design a customized installation plan that
            ensures every device is positioned for optimal coverage.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
        <transition name="fade-up" appear>
          <img
            src="https://skiessolutionsgroup.com/wp-content/uploads/2022/07/istock-673967530.jpg"
            alt="Technician configuring device"
            class="rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
          />
        </transition>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Step 2: Professional Installation
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Our certified technicians install your devices with precision,
            ensuring minimal disruption to your home or business. Every cable is
            hidden, every sensor perfectly aligned.
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <transition name="fade-up" appear>
          <img
            src="https://images.pexels.com/photos/27523028/pexels-photo-27523028.jpeg"
            alt="Smartphone showing security app"
            class="rounded-2xl shadow-lg hover:scale-105 transform transition duration-500"
          />
        </transition>
        <div>
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Step 3: Customization & Training
          </h2>
          <p class="text-gray-600 leading-relaxed">
            Once installed, we customize your system’s settings to your
            preferences. We’ll train you on using your security dashboard so you
            can control and monitor devices from anywhere.
          </p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-black text-white py-16">
      <div class="max-w-3xl mx-auto text-center px-6">
        <h3 class="text-3xl font-bold mb-4">
          Ready for a Security System Made for You?
        </h3>
        <p class="mb-6 opacity-90">
          From start to finish, VaultEdge ensures your devices are perfectly
          placed and configured for ultimate protection.
        </p>
        <RouterLink to="contact"
          class="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Book Your Installation
      </RouterLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "InstallationPage",
};
</script>

<style scoped>
.fade-up-enter-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.fade-up-enter {
  opacity: 0;
  transform: translateY(30px);
}
</style>
