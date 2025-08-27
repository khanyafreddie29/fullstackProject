<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <RouterLink to="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-12 w-auto object-contain mx-auto" src="@/assets/logo-sm.png" alt="Your Company" />
      </RouterLink>
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Forgot your password?</h2>
      <p class="mt-2 text-center text-sm text-gray-600">Enter your email and we'll send you a reset link.</p>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleRequest">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div class="mt-2">
            <input
              v-model="email"
              type="email"
              id="email"
              name="email"
              required
              autocomplete="email"
              placeholder="Enter your email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Send Reset Link
          </button>
        </div>
        <div v-if="message" class="text-center text-sm mt-2 text-gray-700">{{ message }}</div>
      </form>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Remember your password?
        {{ ' ' }}
        <RouterLink to="/login" class="font-semibold text-black hover:text-gray">Back to login</RouterLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const email = ref("");
const message = ref("");
const handleRequest = async () => {
  try {
    const res = await fetch("http://localhost:3000/auth/forgot-password",  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.value }),
    });
    const data = await res.json();
    message.value = data.message || "Check your email for reset link!";
  } catch (err) {
    message.value = "Something went wrong. Please try again.";
  }
};
</script>














