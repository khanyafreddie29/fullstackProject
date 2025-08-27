<template>
  <div>
    <!-- Hero Section with Animated Background -->
    <div
      class="relative isolate flex items-center overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5">
      <!-- Gradient background elements (absolute positioned) -->
      <div
        class="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift"
        aria-hidden="true">
        <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-black via-gray-900 to-black opacity-25"
          style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>
      <div
        class="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl animate-gradient-shift-reverse"
        aria-hidden="true">
        <div class="aspect-577/310 w-144.25 bg-gradient-to-r from-gray-800 via-black to-gray-900 opacity-30"
          style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" />
      </div>

      <!-- Centered content wrapper for the text and button -->
      <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-24 gap-y-2 w-full">
        <div class="flex flex-col">
          <p class="text-sm/6 text-gray-900">
            <strong class="font-semibold">🔴 LIVE: Our monitoring center is operational 24/7/365</strong>
          </p>
          <p class="text-sm text-gray-700">
            Professional security monitoring never stops - Real-time alerts and instant response guaranteed.
          </p>
        </div>
        <a href="#contact"
          class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Get
          Protected <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>

    <!-- Main Hero Section -->
    <div class="mx-auto max-w-2xl py-8 sm:py-12 lg:py-16">
      <div class="text-center">
        <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          <span class="text-red-600">24/7</span> Smart Monitoring
        </h1>
        <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Your security never sleeps. Our advanced monitoring systems work around the clock to keep your property safe
          with instant alerts, real-time verification, and immediate response.
        </p>
        <div class="mt-8 flex items-center justify-center gap-x-6">
          <RouterLink to="contact"
            class="rounded-md bg-black px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
            Start Monitoring Today
        </RouterLink>
          <a href="#learn-more" class="text-base font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Live Status Dashboard -->
    <div class="bg-gray-900 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Live Alert Management Center</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            See how our alert notification system operates in real-time
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div
            class="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 dashboard-card">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
              <div class="w-8 h-8 rounded-full bg-green-500 animate-pulse pulse-active"></div>
            </div>
            <h3 class="text-2xl font-semibold text-white">ACTIVE</h3>
            <p class="text-sm text-gray-300">Alert System</p>
            <div class="mt-4 text-center">
              <p class="text-3xl font-bold text-green-400" id="activeAlerts">280</p>
              <p class="text-xs text-gray-400">Connected Households & Businesses</p>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 dashboard-card">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/20 mb-4">
              <div class="w-8 h-8 rounded-full bg-blue-500 animate-ping"></div>
            </div>
            <h3 class="text-2xl font-semibold text-white">&lt; 2min</h3>
            <p class="text-sm text-gray-300">Contact Time</p>
            <div class="mt-4 text-center">
              <p class="text-3xl font-bold text-blue-400" id="responseTime">0</p>
              <p class="text-xs text-gray-400">Seconds Average</p>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 dashboard-card">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-4">
              <div class="w-8 h-8 rounded-full bg-yellow-500 animate-pulse"></div>
            </div>
            <h3 class="text-2xl font-semibold text-white">24/7</h3>
            <p class="text-sm text-gray-300">Always Watching</p>
            <div class="mt-4 text-center">
              <p class="text-3xl font-bold text-yellow-400" id="uptime">99.9%</p>
              <p class="text-xs text-gray-400">Uptime</p>
            </div>
          </div>
          <div
            class="flex flex-col items-center justify-center rounded-2xl bg-white/5 p-8 backdrop-blur-sm ring-1 ring-white/10 dashboard-card">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-red-500/20 mb-4">
              <div class="w-8 h-8 rounded-full bg-red-500 animate-pulse blink-alert"></div>
            </div>
            <h3 class="text-2xl font-semibold text-white">INSTANT</h3>
            <p class="text-sm text-gray-300">Alert System</p>
            <div class="mt-4 text-center">
              <p class="text-3xl font-bold text-red-400" id="alerts">5</p>
              <p class="text-xs text-gray-400">Active Alerts</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- How It Works Section -->
    <div class="bg-white py-24 sm:py-32" id="learn-more">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How Our 24/7 Alert System Works</h2>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            From device alert to customer notification, here's how we keep you informed
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                  <!-- Bell icon -->
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
                1. Device Alert Triggered
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Your security cameras, sensors, and access control systems detect unusual activity
                  and automatically generate an alert. This alert is simultaneously sent to both you and our VaultEdge
                  alert center.</p>
              </dd>
            </div>

            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                  <!-- Phone icon -->
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                2. We Contact You Immediately
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Within minutes of receiving the alert, our team contacts you via phone or SMS to
                  notify you of the security event. We confirm whether this is a genuine emergency or if you're aware of
                  the activity.</p>
              </dd>
            </div>

            <div class="flex flex-col">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-black">
                  <!-- Refined Checkmark in Circle icon -->
                  <svg class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                3. Coordinated Response
              </dt>
              <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p class="flex-auto">Based on your response, we help coordinate the appropriate action - whether that's
                  contacting emergency services, security companies, or simply logging a false alarm. You maintain
                  complete control while we provide the communication support.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:mx-0">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What Makes Our Alert Service Different
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            We provide the human connection between your security system and emergency response, while maintaining your
            privacy.
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div class="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
            <!-- Alert Relay Service -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Bell icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Smart Alert Relay</h3>
                <p class="mt-2 text-base text-gray-500">
                  We receive the same alerts you do from your Xiaomi, Google Nest, and other smart devices. Our system
                  ensures your **home or business** is never alone when dealing with security alerts, providing immediate human support and
                  communication.
                </p>
              </div>
            </div>

            <!-- Privacy Protection -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Lock icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Complete Privacy Protection</h3>
                <p class="mt-2 text-base text-gray-500">
                  We never access your camera footage or recordings. Your visual privacy remains completely intact while
                  you still benefit from professional alert management and response coordination.
                </p>
              </div>
            </div>

            <!-- Personal Contact Service -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Phone icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Personal Contact Service</h3>
                <p class="mt-2 text-base text-gray-500">
                  When alerts trigger, you get a personal phone call from our team. We help you understand what's
                  happening, confirm if it's a real emergency, and assist with contacting appropriate services if
                  needed.
                </p>
              </div>
            </div>

            <!-- 24/7 Communication Hub -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Clock icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">24/7 Communication Hub</h3>
                <p class="mt-2 text-base text-gray-500">
                  Our team operates around the clock to ensure you're never dealing with security alerts alone. We
                  bridge the gap between your security system and emergency services with professional communication
                  support.
                </p>
              </div>
            </div>

            <!-- False Alarm Filtering -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Sparkles/Magic wand icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.847a4.5 4.5 0 003.09 3.09L15.75 12l-2.847.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Smart False Alarm Management</h3>
                <p class="mt-2 text-base text-gray-500">
                  By contacting you first, we help filter out false alarms before involving emergency services. This
                  saves you from unnecessary response fees and ensures first responders focus on real emergencies.
                </p>
              </div>
            </div>

            <!-- Emergency Coordination -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Exclamation Triangle/Warning icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Emergency Service Coordination</h3>
                <p class="mt-2 text-base text-gray-500">
                  When you confirm a real emergency, we can help coordinate contact with police, security companies, or
                  emergency services, providing them with the context and information they need for an effective
                  response.
                </p>
              </div>
            </div>

            <!-- Instant Mobile Alerts -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Mobile Phone icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Instant Mobile Alerts</h3>
                <p class="mt-2 text-base text-gray-500">
                  Receive push notifications with photos and video clips the moment an alert is triggered. View live
                  feeds remotely and communicate directly with our monitoring center through the app.
                </p>
              </div>
            </div>

            <!-- Access Control Monitoring -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Lock icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Access Control Monitoring</h3>
                <p class="mt-2 text-base text-gray-500">
                  Every entry and exit through your fingerprint terminals and smart locks is logged and monitored. Unauthorized access attempts trigger immediate alerts and response protocols. **Ideal for both securing your home and managing entry for small offices.**
                </p>
              </div>
            </div>

            <!-- Backup Systems -->
            <div class="flex">
              <div class="flex-shrink-0">
                <div class="flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                  <!-- Cloud Arrow Up (Upload) icon -->
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.75 3.75 0 0118 19.5H6.75z" />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">Redundant Backup Systems</h3>
                <p class="mt-2 text-base text-gray-500">
                  Multiple communication paths ensure alerts always reach our monitoring center. Even during power
                  outages or internet disruptions, cellular and battery backup systems keep protection active.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section with Background -->
    <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="contact">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready for 24/7 Peace of Mind?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join our **growing community** of protected **households and businesses** who trust our monitoring services. Get started today with professional installation and setup.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/contact"
              class="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get Free Consultation
          </RouterLink>
            <a href="tel:0861234567" class="text-base font-semibold leading-6 text-white">
              Call Now: 086 123 4567 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div class="aspect-1155/678 w-72.1875 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
          <p class="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to know about our 24/7 monitoring services
          </p>
        </div>
        <div class="mx-auto mt-16 max-w-4xl">
          <div class="space-y-8">
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-lg font-semibold text-gray-900">How quickly do you respond to alerts?</h3>
              <p class="mt-2 text-gray-600">
                Our monitoring center receives alerts within seconds of detection. Professional verification typically
                occurs within 30 seconds, and emergency services are contacted immediately when threats are confirmed.
                You'll receive mobile notifications instantly.
              </p>
            </div>
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-lg font-semibold text-gray-900">What happens if my internet goes down?</h3>
              <p class="mt-2 text-gray-600">
                Our systems use multiple communication paths including cellular backup. Even during internet or power
                outages, your security devices continue monitoring through battery backup and cellular connectivity,
                ensuring continuous protection.
              </p>
            </div>
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-lg font-semibold text-gray-900">Do you monitor all types of security devices?</h3>
              <p class="mt-2 text-gray-600">
                Yes, we monitor all devices in our packages including Xiaomi cameras, Google Nest products, fingerprint
                terminals, smart doorbells, and motion sensors. Our platform integrates seamlessly with all major
                security device brands.
              </p>
            </div>
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-lg font-semibold text-gray-900">Can I view my cameras remotely?</h3>
              <p class="mt-2 text-gray-600">
                Absolutely. Our mobile app provides 24/7 access to all your camera feeds. You can view live footage,
                receive push notifications with images, and communicate with our monitoring center directly through the
                app.
              </p>
            </div>
            <div class="border-b border-gray-200 pb-8">
              <h3 class="text-lg font-semibold text-gray-900">What's the difference between self-monitoring and
                professional monitoring?</h3>
              <p class="mt-2 text-gray-600">
                Self-monitoring means you receive alerts and must respond yourself. Professional monitoring means
                trained security professionals receive alerts 24/7, verify threats, and coordinate emergency response
                even when you're unavailable.
              </p>
            </div>
            <div class="pb-8">
              <h3 class="text-lg font-semibold text-gray-900">Is there a contract required?</h3>
              <p class="mt-2 text-gray-600">
                We offer flexible monitoring plans with both month-to-month and annual options. Annual contracts
                provide better rates, but we understand every customer has different needs and offer various payment
                structures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MonitoringView',
  mounted() {
    this.animateCounters();
    this.addScrollAnimations();
  },
  methods: {
    /**
     * Animates the counter numbers on the dashboard.
     * Adjusted target value for 'activeAlerts' to reflect a startup's growing client base.
     */
    animateCounters() {
      // Animate the active alerts counter to 280 over 2 seconds (more realistic for a startup)
      this.animateNumber('activeAlerts', 50, 2000);
      // Animate the response time to 24 (seconds) over 1.5 seconds
      this.animateNumber('responseTime', 24, 1500);
      // Animate the uptime percentage to 99.9% over 1.8 seconds
      this.animateNumber('uptime', 99.9, 1800);
      // Animate the active alerts to a low, visible number for a startup
      this.animateNumber('alerts', 5, 1000);
    },

    /**
     * Animates a number from 0 to a target value.
     * @param {string} elementId - The ID of the HTML element to update.
     * @param {number} targetValue - The final value of the animation.
     * @param {number} duration - The duration of the animation in milliseconds.
     */
    animateNumber(elementId, targetValue, duration) {
      const element = document.getElementById(elementId);
      if (!element) return;

      const startValue = 0;
      const startTime = Date.now();

      const updateNumber = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        let currentValue;
        if (elementId === 'uptime') {
          currentValue = (startValue + (targetValue - startValue) * progress).toFixed(1);
        } else {
          currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
        }

        element.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        }
      };

      requestAnimationFrame(updateNumber);
    },

    /**
     * Adds scroll-based fade-in animations to sections.
     */
    addScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      const sections = document.querySelectorAll('div[class*="py-"]');
      sections.forEach(section => {
        observer.observe(section);
      });
    }
  }
};
</script>

<style scoped>
/* Apply Inter font family globally for consistent look if this component is used in isolation or within a larger app */
/* If part of a larger app with a global stylesheet, this might be redundant or overridden. */
body {
  font-family: 'Inter', sans-serif;
}

/* Gradient animations */
@keyframes gradient-shift {
  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-50%) translateX(10px) scale(1.05);
  }
  66% {
    transform: translateY(-50%) translateX(-5px) scale(0.98);
  }
}

@keyframes gradient-shift-reverse {
  0%,
  100% {
    transform: translateY(-50%) translateX(0) scale(1);
  }
  33% {
    transform: translateY(-50%) translateX(-8px) scale(0.97);
  }
  66% {
    transform: translateY(-50%) translateX(12px) scale(1.08);
  }
}

.animate-gradient-shift {
  animation: gradient-shift 8s ease-in-out infinite;
}

.animate-gradient-shift-reverse {
  animation: gradient-shift-reverse 10s ease-in-out infinite;
}

/* Custom animations for monitoring elements */
@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.3);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Fade in animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Status indicators */
.status-indicator {
  position: relative;
}

.status-indicator::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #10b981, #3b82f6, #10b981);
  animation: rotate 2s linear infinite;
}

.status-indicator::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: inherit;
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-7xl {
    font-size: 3rem;
  }

  .text-5xl {
    font-size: 2.5rem;
  }
}

/* Button hover effects */
.hover-scale {
  transition: transform 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}

/* Loading animation for dashboard */
.dashboard-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.dashboard-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* Pulse animation for active status */
.pulse-active {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: .7;
  }
}

/* Blinking alert indicator */
.blink-alert {
  animation: blink 1s step-start infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}
</style>
