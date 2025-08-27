<template>
  <div class="water-drop-loader" :class="{ 'hidden': isHidden }">
    <div class="water-drop-container">
      <div class="drop"></div>
      <div class="ripple"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isHidden: false,
    };
  },
  watch: {
    isLoading(newVal) {
      if (!newVal) {
        // Start fade-out animation when loading is complete
        setTimeout(() => {
          this.isHidden = true;
        }, 500);
      }
    }
  },
};
</script>

<style scoped>
.water-drop-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff; /* White background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s ease-out;
}

.water-drop-loader.hidden {
  opacity: 0;
  pointer-events: none;
}

.water-drop-container {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.drop {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #000000; /* Black drop */
  border-radius: 50% 50% 50% 0;
  transform: rotate(45deg);
  animation: fall 1.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
}

@keyframes fall {
  0% {
    top: 0;
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
  70% {
    top: 60px;
    opacity: 1;
    transform: rotate(45deg) scale(1.1);
  }
  100% {
    top: 75px;
    opacity: 0;
    transform: rotate(45deg) scale(0.1);
  }
}

.ripple {
  position: absolute;
  top: 75px; /* The point where the drop "lands" */
  width: 10px;
  height: 10px;
  border: 2px solid #000000; /* Black ripple */
  border-radius: 50%;
  opacity: 0;
  animation: ripple-spread 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  animation-delay: 1.5s;
}

@keyframes ripple-spread {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
}
</style>