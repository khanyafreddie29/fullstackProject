<template>
    <div class="google-store-layout">
        <div class="hero-section" :class="{ 'fade-in': showContent }">
            <h1 class="hero-title">Biometric Security Solutions</h1>
            <p class="hero-subtitle">Advanced access control starts here.</p>
            <p class="hero-description">
                Build a secure environment, one device at a time. Bring your biometric devices together for comprehensive access control and time attendance solutions.
            </p>
        </div>
        <div class="section-container" :class="{ 'fade-in': showContent }">
            <div class="section-header">
                <h2 class="section-title">Biometric Hardware</h2>
                <p class="section-subtitle">Professional access control and time attendance.</p>
            </div>
            <div class="products-grid">
                <div
                    v-for="product in products"
                    :key="product.id"
                    class="product-card"
                >
                    <div class="product-media">
                        <img
                            :src="product.image"
                            :alt="product.name"
                            class="product-image"
                            loading="lazy"
                        />
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">{{ product.name }}</h3>
                        <div class="product-actions">
                            <button
                                class="btn-primary"
                                @click="addToCart(product)"
                            >
                                Add to Cart
                            </button>
                            <button
                                class="btn-secondary"
                                @click="learnMore(product)"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="features-section" :class="{ 'fade-in': showContent }">
            <div class="features-grid">
                <div class="feature-item">
                    <h3 class="feature-title">Advanced facial recognition technology.</h3>
                    <p class="feature-description">
                        Our facial terminals use cutting-edge recognition algorithms to provide secure, contactless access control.
                        Fast identification with high accuracy rates for reliable security.
                    </p>
                </div>
                <div class="feature-item">
                    <h3 class="feature-title">Fingerprint authentication you can trust.</h3>
                    <p class="feature-description">
                        Biometric fingerprint terminals offer precise identification with advanced sensors.
                        Ideal for time attendance and access control in professional environments.
                    </p>
                </div>
                <div class="feature-item">
                    <h3 class="feature-title">Comprehensive access control solutions.</h3>
                    <p class="feature-description">
                        From standalone devices to integrated systems, our biometric hardware provides
                        scalable security solutions for businesses of all sizes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            showContent: false,
            products: []
        };
    },
    async mounted() {
        // Show content after slight delay for animation
        setTimeout(() => {
            this.showContent = true;
        }, 300);
        // Fetch products from backend where brand is "ERSBiometric" - the %20 represents a space
        try {
            const response = await axios.get('http://localhost:3000/products/brand/ERS%20Biometric');
            this.products = response.data.map(product => ({
                id: product.product_id,
                name: product.product_name,
                image: product.product_url
            }));
        } catch (error) {
            console.error('Failed to fetch ERS Biometric products:', error);
        }
    },
    methods: {
        addToCart(product) {
            alert(`${product.name} added to cart!`);
            console.log('Added to cart:', product);
        },
        learnMore(product) {
            this.$router.push(`/product/${product.id}`);
        }
    }
}
</script>
<style scoped>
.google-store-layout {
    font-family: 'Google Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #fff;
    color: #202124;
    line-height: 1.5;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
}
/* Hero Section */
.hero-section {
    text-align: center;
    padding: 80px 24px 120px;
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.8s ease-out;
}
.hero-section.fade-in {
    opacity: 1;
    transform: translateY(0);
}
.hero-title {
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 16px;
    color: #202124;
    letter-spacing: -0.02em;
}
.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    color: #5F6368;
    margin-bottom: 24px;
}
.hero-description {
    font-size: 1.125rem;
    font-weight: 400;
    color: #5F6368;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}
/* Section Container */
.section-container {
    padding: 80px 24px;
    max-width: 1200px;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out 0.2s;
}
.section-container.fade-in {
    opacity: 1;
    transform: translateY(0);
}
.section-header {
    text-align: center;
    margin-bottom: 80px;
}
.section-title {
    font-size: 2.5rem;
    font-weight: 400;
    color: #202124;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
}
.section-subtitle {
    font-size: 1.25rem;
    font-weight: 400;
    color: #5F6368;
}
/* Products Grid */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 32px;
    margin-top: 64px;
}
.product-card {
    background: #fff;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    position: relative;
}
.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: #DADCE0;
}
.product-media {
    aspect-ratio: 1;
    background: #F8F9FA;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
}
.product-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
}
.product-card:hover .product-image {
    transform: scale(1.05);
}
.product-info {
    padding: 24px;
    text-align: center;
}
.product-name {
    font-size: 1rem;
    font-weight: 500;
    color: #202124;
    line-height: 1.4;
    margin: 0 0 20px 0;
}
.product-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}
.btn-primary {
    background-color: #000;
    color: white;
    border: none;
    border-radius: 24px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 100px;
}
.btn-primary:hover {
    background-color: #333;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
.btn-secondary {
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
    border-radius: 24px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 100px;
}
.btn-secondary:hover {
    background-color: #F0F0F0;
    border-color: #000;
    transform: translateY(-1px);
}
/* Features Section */
.features-section {
    background: #F8F9FA;
    padding: 80px 24px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out 0.4s;
}
.features-section.fade-in {
    opacity: 1;
    transform: translateY(0);
}
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 48px;
    max-width: 1200px;
    margin: 0 auto;
}
.feature-item {
    text-align: center;
}
.feature-title {
    font-size: 1.5rem;
    font-weight: 500;
    color: #202124;
    margin-bottom: 16px;
    line-height: 1.3;
}
.feature-description {
    font-size: 1rem;
    font-weight: 400;
    color: #5F6368;
    line-height: 1.6;
    margin: 0;
}
/* Responsive Design */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    .hero-subtitle {
        font-size: 1.25rem;
    }
    .hero-description {
        font-size: 1rem;
    }
    .section-title {
        font-size: 2rem;
    }
    .products-grid {
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 24px;
    }
    .features-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    .hero-section,
    .section-container,
    .features-section {
        padding-left: 16px;
        padding-right: 16px;
    }
}
@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }
    .hero-subtitle {
        font-size: 1.125rem;
    }
    .section-title {
        font-size: 1.75rem;
    }
    .products-grid {
        grid-template-columns: 1fr;
    }
    .product-media {
        padding: 24px;
    }
    .product-info {
        padding: 16px;
    }
    .product-actions {
        flex-direction: column;
        align-items: center;
    }
    .btn-primary,
    .btn-secondary {
        width: 100%;
        max-width: 200px;
    }
}
</style>