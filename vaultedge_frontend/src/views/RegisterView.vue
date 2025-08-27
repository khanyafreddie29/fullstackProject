<template>
    <div class="flex min-h-full flex-1">
        <!-- Left side - Image -->
        <div class="relative flex flex-1">
            <img
                class="absolute inset-0 h-full w-full object-cover"
                src="@/assets/register.jpg"
                alt="Mother and child reading together"
            />
        </div>
        <!-- Right side - Form -->
        <div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div>
                    <RouterLink to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-12 w-auto object-contain" src="@/assets/logo-sm.png" alt="Your Company" />
                    </RouterLink>
                    <h2 class="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">Create your account</h2>
                    <p class="mt-2 text-sm/6 text-gray-600">
                        Already have an account?
                        {{ ' ' }}
                        <RouterLink to="/login" class="font-semibold text-black hover:text-gray-700">Sign in here</RouterLink>
                    </p>
                </div>
                <div class="mt-10">
                    <form class="space-y-6" @submit.prevent="submitForm">
                        <div class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First name</label>
                                <div class="mt-2">
                                    <input v-model="form.first_name" type="text" name="first-name" id="first-name" autocomplete="given-name" required
                                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                                </div>
                            </div>
                            <div>
                                <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last name</label>
                                <div class="mt-2">
                                    <input v-model="form.last_name" type="text" name="last-name" id="last-name" autocomplete="family-name" required
                                        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input v-model="form.email" type="email" name="email" id="email" autocomplete="email" required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label for="cellphone" class="block text-sm/6 font-medium text-gray-900">Cellphone number</label>
                            <div class="mt-2">
                                <input v-model="form.cellphone" type="tel" name="cellphone" id="cellphone" autocomplete="cellphone" required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
                            <div class="mt-2">
                                <input v-model="form.password" type="password" name="password" id="password" autocomplete="new-password" required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label for="confirm-password" class="block text-sm/6 font-medium text-gray-900">Confirm password</label>
                            <div class="mt-2">
                                <input v-model="form.confirmPassword" type="password" name="confirm-password" id="confirm-password" autocomplete="new-password" required
                                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6" />
                            </div>
                        </div>
                        <div class="flex items-center">
                            <input v-model="form.agree" id="agree-terms" name="agree-terms" type="checkbox" required
                                class="h-4 w-4 rounded border-gray-300 text-black focus:ring-black focus:ring-2 focus:ring-offset-2" />
                            <label for="agree-terms" class="ml-3 block text-sm/6 text-gray-900">
                                I agree to the
                                {{ ' ' }}
                                <a href="#" class="font-semibold text-black hover:text-gray-700">Terms and Conditions</a>
                                {{ ' ' }}
                                and
                                {{ ' ' }}
                                <a href="#" class="font-semibold text-black hover:text-gray-700">Privacy Policy</a>
                            </label>
                        </div>
                        <div>
                            <button type="submit" :disabled="isLoading"
                                class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-50 disabled:cursor-not-allowed">
                                <span v-if="!isLoading">Create account</span>
                                <span v-else class="flex items-center gap-x-2">
                                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating account...
                                </span>
                            </button>
                        </div>
                        <div v-if="successMessage" class="text-green-600 text-center mt-2">{{ successMessage }}</div>
                        <div v-if="errorMessage" class="text-red-600 text-center mt-2">{{ errorMessage }}</div>
                    </form>
                    <div class="mt-10">
                        <div class="relative">
                            <div class="absolute inset-0 flex items-center" aria-hidden="true">
                                <div class="w-full border-t border-gray-200" />
                            </div>
                            <div class="relative flex justify-center text-sm/6 font-medium">
                                <span class="bg-white px-6 text-gray-900">Or continue with</span>
                            </div>
                        </div>
                        <button type="button"
                            class="flex w-full items-center justify-center mt-5 gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                            <svg class="h-5 w-5" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            <span class="text-sm/6 font-semibold">Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { register, isLoading } = useAuth()

const form = ref({
    first_name: '',
    last_name: '',
    email: '',
    cellphone: '',
    password: '',
    confirmPassword: '',
    agree: false
})
const successMessage = ref('')
const errorMessage = ref('')

const submitForm = async () => {
    successMessage.value = ''
    errorMessage.value = ''
    
    // Basic validation
    if (!form.value.first_name || !form.value.last_name || !form.value.email || !form.value.cellphone || !form.value.password || !form.value.confirmPassword) {
        errorMessage.value = 'Please fill in all fields.'
        return
    }
    if (form.value.password !== form.value.confirmPassword) {
        errorMessage.value = 'Passwords do not match.'
        return
    }
    if (!form.value.agree) {
        errorMessage.value = 'You must agree to the Terms and Conditions.'
        return
    }
    
    // Combine first and last name for backend 'name' field
    const name = `${form.value.first_name} ${form.value.last_name}`
    
    const result = await register({
        name,
        email: form.value.email,
        phone_number: form.value.cellphone,
        password: form.value.password
    })
    
    if (result.success) {
        successMessage.value = 'Registration successful! You can now log in.'
        // Reset form
        form.value = {
            first_name: '',
            last_name: '',
            email: '',
            cellphone: '',
            password: '',
            confirmPassword: '',
            agree: false
        }
        // Optionally redirect to login page after a delay
        setTimeout(() => {
            router.push('/login')
        }, 2000)
    } else {
        errorMessage.value = result.message
    }
}
</script>

<style scoped>
/* Additional responsive styles if needed */
@media (max-width: 1024px) {
    .flex {
        flex-direction: column;
    }
}
</style>