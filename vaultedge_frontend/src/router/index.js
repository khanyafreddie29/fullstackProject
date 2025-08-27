import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SolutionsView from '@/views/SolutionsView.vue'
import DealsView from '@/views/DealsView.vue'
import PackagesView from '@/views/PackagesView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import CatagoriesView from '@/views/CatagoriesView.vue'
import GoogleDevicesView from '@/views/GoogleDevicesView.vue'
import XiaomiDevicesView from '@/views/XiaomiDevicesView.vue'
import ERSDevicesView from '@/views/ERSDevicesView.vue'
import SecurityView from '@/views/SecurityView.vue'
import InstallationsView from '@/views/InstallationsView.vue'
import MonitoringView from '@/views/MonitoringView.vue'
import CompareView from '@/views/CompareView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import OrderSummary from '@/views/OrderSummary.vue'
import DealDetails from '@/views/DealDetails.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import WhyVaultedgeView from '@/views/WhyVaultedgeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/solutions',
    name: 'solutions',
    component:SolutionsView
  },
  {
    path: '/packages',
    name: 'packages',
    component: PackagesView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/catagories',
    name: 'catagories',
    component: CatagoriesView
  },
  {
    path: '/google',
    name: 'google',
    component: GoogleDevicesView
  },
  {
    path: '/xiaomi',
    name: 'xiaomi',
    component: XiaomiDevicesView
  },
  {
    path: '/ers',
    name: 'ers',
    component: ERSDevicesView
  },
  {
    path: '/security',
    name: 'security',
    component: SecurityView
  },
  {
    path: '/installations',
    name: 'installations',
    component: InstallationsView
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: MonitoringView
  },
  {
    path: '/compare',
    name: 'compare',
    component: CompareView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetail,
    props: true // This passes the route params as props to the component
  },
  {
    path: '/deals',
    name: 'deals',
    component: DealsView
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: AboutView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView
  },
  {
    path: '/order-summary',
    name: 'order-summary',
    component: OrderSummary
  },
  {
    path: '/deal/:id',
    name: 'DealDetails',
    component: DealDetails,
    props: true,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordView
  },
  {
    path: '/reset-password/:token',
    name: 'ResetPassword',
    component: ResetPasswordView
  },
  {
    path: '/why-vaultedge',
    name: 'why',
    component: WhyVaultedgeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // Optional: Smooth scroll behavior when navigating
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
export default router
