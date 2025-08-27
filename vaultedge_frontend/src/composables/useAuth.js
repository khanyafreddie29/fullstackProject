// composables/useAuth.js
import { ref, computed } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

// Global reactive state
const token = ref(localStorage.getItem('token'))
const user = ref(null)
const isLoading = ref(false)

// Set up axios interceptor to include token in requests
axios.interceptors.request.use((config) => {
  if (token.value) {
    config.headers.Authorization = `Bearer ${token.value}`
  }
  return config
})

export function useAuth() {
  const router = useRouter()

  // Computed properties
  const isAuthenticated = computed(() => !!token.value && !!user.value)
  const userInitials = computed(() => {
    if (!user.value?.name) return ''
    const names = user.value.name.split(' ')
    if (names.length === 1) {
      return names[0].substring(0, 2).toUpperCase()
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase()
  })

  // Login function
  const login = async (email, password) => {
    isLoading.value = true
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password
      })
      
      token.value = response.data.token
      user.value = response.data.user || { name: email.split('@')[0] } // Fallback if user data not returned
      
      localStorage.setItem('token', token.value)
      
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Login failed. Please try again.' 
      }
    } finally {
      isLoading.value = false
    }
  }

  // Logout function
  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    router.push('/')
  }

  // Initialize user data from token on app load
  const initializeAuth = async () => {
    if (!token.value) return

    try {
      // You might want to verify the token with your backend
      // and fetch user data here
      // For now, we'll create a basic user object
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        user.value = JSON.parse(storedUser)
      } else {
        // If you have an endpoint to get user info, call it here
        // const response = await axios.get('http://localhost:3000/users/me')
        // user.value = response.data
        
        // Fallback: create basic user from token (you might decode JWT here)
        user.value = { name: 'User' }
      }
    } catch (error) {
      // If token is invalid, clear it
      logout()
    }
  }

  // Register function (optional - you can keep the existing one in RegisterView)
  const register = async (userData) => {
    isLoading.value = true
    try {
      await axios.post('http://localhost:3000/users/register', userData)
      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.message || 'Registration failed. Please try again.' 
      }
    } finally {
      isLoading.value = false
    }
  }

  return {
    // State
    user,
    isLoading,
    
    // Computed
    isAuthenticated,
    userInitials,
    
    // Methods
    login,
    logout,
    register,
    initializeAuth
  }
}