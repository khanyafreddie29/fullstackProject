<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <RouterLink to="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img class="h-12 w-auto object-contain mx-auto" src="@/assets/logo-sm.png" alt="Your Company" />
      </RouterLink>
      <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Reset Your Password
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Enter a new password to regain access to your account.
      </p>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleReset">
        <div>
          <label for="password" class="block text-sm/6 font-medium text-gray-900">New Password</label>
          <div class="mt-2">
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter new password"
              autocomplete="new-password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Reset Password
          </button>
        </div>
        <div v-if="message" class="text-center text-sm mt-2 text-gray-700">{{ message }}</div>
      </form>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Remembered your password?
        {{ ' ' }}
        <RouterLink to="/login" class="font-semibold text-black hover:text-gray">Back to login</RouterLink>
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const token = route.params.token;
const password = ref("");
const message = ref("");
const handleReset = async () => {
  try {
    const res = await fetch(`http://localhost:3000/auth/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: password.value }),
    });
    const data = await res.json();
    if (res.ok) {
      message.value = "Password reset successful! Redirecting to login...";
      setTimeout(() => router.push("/login"), 2000);
    } else {
      message.value = data.msg || "Reset failed";
    }
  } catch (err) {
    message.value = "Something went wrong. Please try again.";
  }
};
</script>
