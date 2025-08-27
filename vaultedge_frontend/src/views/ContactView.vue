<template>
  <div class="relative bg-transparent px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift" aria-hidden="true">
      <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-black via-gray-900 to-black opacity-25" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift-reverse" aria-hidden="true">
      <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-30" style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
    </div>
    <div class="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl animate-pulse-slow" aria-hidden="true">
      <div class="aspect-square w-96 bg-gradient-to-br from-black via-gray-800 to-black opacity-18 rounded-full" />
    </div>
    <div class="absolute bottom-0 right-1/4 -z-10 transform-gpu blur-xl animate-gradient-float" aria-hidden="true">
      <div class="aspect-square w-64 bg-gradient-to-tl from-gray-900 via-black to-gray-800 opacity-20 rounded-full" />
    </div>
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-gradient-shift" aria-hidden="true">
      <div class="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-black via-gray-900 to-black opacity-40 sm:left-[calc(50%-40rem)] sm:w-288.75" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Contact us</h2>
      <p class="mt-2 text-lg/8 text-gray-600">We're always here for you.</p>
    </div>
    <form @submit.prevent="submitForm" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">First name</label>
          <div class="mt-2.5">
            <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black" />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">Last name</label>
          <div class="mt-2.5">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
          <div class="mt-2.5">
            <input type="text" name="company" id="company" autocomplete="organization" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
          <div class="mt-2.5">
            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black" />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900">Phone number</label>
          <div class="mt-2.5">
            <div class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-black">
              <div class="grid shrink-0 grid-cols-1 focus-within:relative">
                <select id="country" name="country" autocomplete="country" aria-label="Country" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6">
                  <option>RSA</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
              </div>
              <input type="text" name="phone-number" id="phone-number" class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" placeholder="123-456-7890" />
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
          <div class="mt-2.5">
            <textarea name="message" id="message" rows="4" class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black" />
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <div class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-black transition-colors duration-200 ease-in-out has-checked:bg-black has-focus-visible:outline-2">
              <span class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
              <input type="checkbox" class="absolute inset-0 appearance-none focus:outline-hidden" aria-label="Agree to policies" id="agree-to-policies" name="agree-to-policies" v-model="agreedToPolicy" />
            </div>
          </div>
          <label class="text-sm/6 text-gray-600" for="agree-to-policies">
            By selecting this, you agree to our
            {{ ' ' }}
            <a href="#" class="font-semibold whitespace-nowrap text-black">privacy policy</a>.
          </label>
        </div>
        <div class="sm:col-span-2" v-if="privacyPolicyError">
          <p class="text-sm text-red-500">{{ privacyPolicyError }}</p>
        </div>
      </div>
      <div class="mt-10">
        <button type="submit" class="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
      </div>
    </form>
  </div>
  
  <TransitionRoot as="template" :show="isModalOpen">
    <Dialog as="div" class="relative z-50" @close="isModalOpen = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>
  
      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-base font-semibold leading-6 text-gray-900">Message Sent!</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Thank you for your message. We'll be in touch with you shortly.
                    </p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" @click="isModalOpen = false">
                  Got it
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup>
import { ref } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
  
const isModalOpen = ref(false);
const agreedToPolicy = ref(false);
const privacyPolicyError = ref('');
  
const submitForm = () => {
  // Reset any previous error message
  privacyPolicyError.value = '';
  
  // Check if the user has accepted the privacy policy
  if (!agreedToPolicy.value) {
    privacyPolicyError.value = 'Please accept the privacy policy to submit the form.';
    return;
  }
  
  // You would typically handle form submission logic here,
  // e.g., send data to an API.
  // For this example, we'll just open the modal.
  isModalOpen.value = true;
};
</script>
  
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

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.15;
    transform: translateX(-50%) scale(1);
  }
  50% {
    opacity: 0.08;
    transform: translateX(-50%) scale(1.1);
  }
}

@keyframes gradient-float {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.20;
  }
  50% {
    transform: translateY(-15px) scale(1.05);
    opacity: 0.12;
  }
}

.animate-gradient-shift {
  animation: gradient-shift 8s ease-in-out infinite;
}

.animate-gradient-shift-reverse {
  animation: gradient-shift-reverse 10s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.animate-gradient-float {
  animation: gradient-float 7s ease-in-out infinite;
}
</style>