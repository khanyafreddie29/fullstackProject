<template>
  <div>
    <div class="video-container">
      <video
        ref="videoElement"
        controls disablePictureInPicture
        autoplay
        loop
        muted
        playsinline
      >
        <source src="@/assets/9795077-hd_1366_720_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div ref="overlay" class="overlay"></div>
      <div ref="heroText" class="hero-text">
        <h1>
          <span v-for="(word, index) in headlineWords"
                :key="index"
                class="word"
                :style="{ animationDelay: `${index * 0.2}s` }">
            {{ word }}
          </span>
        </h1>
        <p>
          <span v-for="(word, index) in subTextWords"
                :key="index"
                class="word"
                :style="{ animationDelay: `${index * 0.15 + 0.6}s` }">
            {{ word }}
          </span>
        </p>
        <button @click="scrollToCategories" class="cta-btn">Explore Solutions</button>
      </div>
    </div>

    <div ref="categories" class="categories-container">
      <h2>Our Solutions</h2>
      <p>Explore our comprehensive range of security offerings.</p>
      <div class="category-grid">
        <div class="category-card">
          <img :src="packagesImage" alt="Security Packages" class="card-image" />
          <h3>Packages</h3>
          <p>Bundled solutions for comprehensive home and business security.</p>
          <RouterLink to="/packages">
          <button class="button">Explore Packages</button>
          </RouterLink>
        </div>

        <div class="category-card">
          <img :src="productsImage" alt="Security Products" class="card-image" />
          <h3>Products</h3>
          <p>Individual security devices including smart cameras and sensors.</p>
          <RouterLink to="/products">
          <button class="button">View Products</button>
          </RouterLink>
        </div>

        <div class="category-card">
          <img :src="servicesImage" alt="Security Services" class="card-image" />
          <h3>Services</h3>
          <p>We provide 24/7 monitoring and support to ensure that your systems and services are always running smoothly.</p>
          <RouterLink to="/monitoring">
          <button class="button">Learn More</button>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="why-choose-us-banner-container">
      <div class="why-choose-us-banner-content">
        <h2>Your Peace of Mind is Our Priority</h2>
        <p>As a startup, our focus is on building a reputation for excellence. We're dedicated to providing innovative security solutions tailored to your unique needs.</p>
        <RouterLink to="/contact">
        <button class="banner-cta-button">Get a Free Consultation</button>
        </RouterLink>
      </div>
    </div>
    <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center text-lg/8 font-semibold text-gray-900">Trusted by the world’s most innovative teams</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" width="158" height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" width="158" height="48" />
      </div>
    </div>
  </div>
    <div class="customizable-systems-banner" :style="{ backgroundImage: 'url(' + customizationImage + ')' }" ref="customizableBanner">
      <div class="customizable-overlay"></div>
      <div class="customizable-content">
        <h2>Tailored Security, Just for You</h2>
        <p>Our systems are fully customizable to fit your unique property and specific security requirements. Design a solution that truly protects what matters most.</p>
        <RouterLink to="/products">
        <button class="customizable-cta-button">Customize your system now</button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import packagesImage from '@/assets/Packages.jpg';
import productsImage from '@/assets/Products.png';
import servicesImage from '@/assets/Services.jpg';
import whyUsImage from '@/assets/WhyUs.jpg';
import customizationImage from '@/assets/customization.jpg'; // Import the new image

export default {
  data() {
    return {
      headlineWords: ["Secure", "What", "Matters"],
      subTextWords: ["Advanced", "CCTV.", "Smart", "Sensors.", "Total", "Confidence."],
      packagesImage,
      productsImage,
      servicesImage,
      whyUsImage,
      customizationImage, // Add the new image to data
    };
  },
  mounted() {
    this.$refs.videoElement.style.animation = "slowZoom 20s ease-in-out infinite alternate";
    setTimeout(() => {
      this.$refs.heroText.classList.add("visible");
    }, 300);
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const video = this.$refs.videoElement;
      const overlay = this.$refs.overlay;
      const scrollPosition = window.scrollY;

      const translateY = scrollPosition * 0.3;
      const scale = 1 + scrollPosition * 0.0005;
      video.style.transform = `translateY(${translateY}px) scale(${scale})`;
      overlay.style.opacity = Math.min(scrollPosition / 500, 0.5);

      const whyChooseUsBanner = this.$el.querySelector('.why-choose-us-banner-container');
      if (whyChooseUsBanner) {
        const rect = whyChooseUsBanner.getBoundingClientRect();
        const bannerPosition = rect.top + scrollPosition;
        const parallaxOffset = (scrollPosition - bannerPosition) * 0.2;
        whyChooseUsBanner.style.backgroundPositionY = `${-parallaxOffset}px`;
      }
    },
    scrollToCategories() {
      this.$refs.categories.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
}

video {
  width: 100%;
  height: auto;
  border-radius: 20px;
  will-change: transform;
  transition: transform 0.1s ease-out;
}

/* Auto cinematic zoom animation */
@keyframes slowZoom {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

/* Overlay */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 1);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

/* Hero text container */
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  opacity: 0;
}

.hero-text.visible {
  opacity: 1;
}

/* Headline staggered words */
.word {
  display: inline-block;
  margin-right: 0.3rem;
  opacity: 0;
  transform: translateY(30px);
  animation: wordFadeUp 0.6s ease forwards;
}

@keyframes wordFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-text h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.hero-text p {
  font-size: 1.25rem;
  margin-top: 0.5rem;
  opacity: 0.9;
}

/* CTA Button Animation */
.cta-btn {
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  background: black;
  color: white;
  border: 2px solid transparent;
  border-radius: 9999px;
  font-weight: bold;
  cursor: pointer;
  transform: translateY(30px);
  opacity: 0;
  animation: buttonSlideUp 0.6s ease forwards;
  animation-delay: 1.8s; /* Starts after text animation */
  transition: all 0.3s ease;
}

.cta-btn:hover {
  background: transparent;
  border: 2px solid white;
  box-shadow: 0 0 10px rgba(255,255,255,0.4);
}

@keyframes buttonSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Categories section styles */
.categories-container {
  padding: 4rem 1rem;
  text-align: center;
  background-color: #f7f7f7;
}

.categories-container h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.categories-container p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 3rem;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.category-card {
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.5rem;
}

.category-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.category-card:hover .card-image {
  transform: scale(1.1);
}

.category-card h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.category-card p {
  font-size: 1rem;
  color: #777;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* Call-to-action button styles for the new section */
.button {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 18px;
  color: #fff;
  border: 2px solid #000;
  border-radius: 34px;
  background-color: #000;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border-radius: inherit;
  scale: 0;
  z-index: -1;
  background-color: #fff;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: #000;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.4);
}

.button:active {
  scale: 1;
}

/* "Why Choose Us" Banner Styles */
.why-choose-us-banner-container {
  position: relative;
  height: 60vh;
  background-image: url(@/assets/WhyUs.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 0; /* Removed padding */
}

.why-choose-us-banner-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Dark overlay for better text readability */
}

.why-choose-us-banner-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 2rem; /* Added padding to content */
}

.why-choose-us-banner-content h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.why-choose-us-banner-content p {
  font-size: 1.2rem;
  color: #bdc3c7;
  margin-bottom: 2rem;
}

.banner-cta-button {
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #000;
  border: 2px solid transparent;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.banner-cta-button:hover {
  background-color: transparent;
  border: 2px solid #ffffff;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}

/* Customizable Systems Banner Styles */
.customizable-systems-banner {
  position: relative;
  height: 70vh; /* Increased height */
  background-size: cover;
  background-position: center top; /* Image starts from the top */
  background-repeat: no-repeat; /* Added to prevent repetition */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #ffffff;
  padding: 0; /* Removed padding */
  overflow: hidden; /* Ensures overlay doesn't spill */
}

.customizable-overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4); /* Initial lighter overlay */
  transition: background-color 0.3s ease;
}

.customizable-systems-banner:hover .customizable-overlay {
  background-color: rgba(0, 0, 0, 0.7); /* Darker overlay on hover */
}

.customizable-content {
  position: relative;
  z-index: 1; /* Ensures content is above overlay */
  max-width: 700px;
  padding: 2rem; /* Added padding to content */
}

.customizable-content h2 {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.customizable-content p {
  font-size: 1.1rem;
  color: #e0e0e0;
  margin-bottom: 2rem;
}

.customizable-cta-button {
  padding: 12px 30px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #000; /* Black button */
  border: 2px solid transparent;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.customizable-cta-button:hover {
  background-color: transparent;
  border: 2px solid #ffffff; /* White border on hover */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
}
</style>