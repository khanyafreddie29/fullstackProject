<template>
  <div class="bg-gray-50 text-gray-800 font-sans min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow">
      <div class="max-w-6xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-900">Customer Data Handling Policy</h1>
        <p class="text-gray-500">Last updated: August 11, 2025</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section
        v-for="(section, index) in sections"
        :key="index"
        ref="sectionRefs"
        :style="{
          transitionDelay: visibleSections.includes(index)
            ? (index * 150) + 'ms'
            : '0ms'
        }"
        :class="[
          'transition-all duration-700 ease-out transform',
          visibleSections.includes(index)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        ]"
      >
        <h2 class="text-2xl font-semibold text-gray-900 mb-3">{{ section.title }}</h2>
        <div v-html="section.content" class="text-gray-700 leading-relaxed"></div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "CustomerDataPolicy",
  data() {
    return {
      sections: [
        {
          title: "Introduction",
          content: `
            <p>
              At <strong>VaultEdge</strong>, your trust is our most valuable asset.
              As an e-commerce store specializing in advanced security solutions like smart cameras,
              sensors, and related subscription services, we are committed to safeguarding your personal data.
              This policy explains how we collect, store, use, and protect your information.
            </p>
          `
        },
        {
          title: "1. Data We Collect",
          content: `
            <ul class="list-disc list-inside space-y-1">
              <li><strong>Personal Identification:</strong> Name, email address, phone number, billing and shipping address.</li>
              <li><strong>Account Details:</strong> Login credentials, purchase history, and subscription preferences.</li>
              <li><strong>Payment Information:</strong> Processed securely through trusted payment gateways; VaultEdge does not store raw card details.</li>
              <li><strong>Device & Technical Data:</strong> IP address, browser type, and usage statistics for service optimization.</li>
              <li><strong>Service Usage Data:</strong> Camera activity logs, sensor alerts, and related analytics for subscribed services.</li>
            </ul>
          `
        },
        {
          title: "2. How We Use Your Data",
          content: `
            <ul class="list-disc list-inside space-y-1">
              <li>To process and fulfill your orders.</li>
              <li>To provide, maintain, and improve our products and subscription services.</li>
              <li>To notify you about updates, service alerts, and promotions (only if you opt-in).</li>
              <li>To enhance website security and prevent fraudulent activity.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          `
        },
        {
          title: "3. Data Storage & Security",
          content: `
            <p>
              Your data is stored on secure servers with encryption protocols and regular vulnerability testing.
              Only authorized personnel can access your data, and we ensure strict confidentiality agreements are in place.
            </p>
          `
        },
        {
          title: "4. Sharing Your Data",
          content: `
            <p class="mb-2">
              VaultEdge will never sell your personal data. We only share your data with:
            </p>
            <ul class="list-disc list-inside space-y-1">
              <li>Trusted payment processors for secure transactions.</li>
              <li>Delivery partners to fulfill your orders.</li>
              <li>Service providers that help us maintain and enhance our systems.</li>
              <li>Authorities, when required by law or legal process.</li>
            </ul>
          `
        },
        {
          title: "5. Your Rights",
          content: `
            <ul class="list-disc list-inside space-y-1">
              <li>Access, update, or delete your personal data.</li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>Request a copy of the information we hold about you.</li>
              <li>Withdraw consent for data processing where applicable.</li>
            </ul>
          `
        },
        {
          title: "6. Contact Us",
          content: `
            <p>
              For questions about this policy or your personal data, please contact us at:
            </p>
            <p class="mt-2">
              <strong>Email:</strong> support@vaultedge.com<br>
              <strong>Phone:</strong> +27 21 555 1234<br>
              <strong>Address:</strong> VaultEdge HQ, Cape Town, South Africa
            </p>
          `
        }
      ],
      visibleSections: []
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = this.$refs.sectionRefs.indexOf(entry.target);
            if (!this.visibleSections.includes(index)) {
              this.visibleSections.push(index);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    this.$refs.sectionRefs.forEach(section => observer.observe(section));
  }
};
</script>
