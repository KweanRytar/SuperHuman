<script setup>
import { ref } from 'vue';
import {
  faAngleDown, faAngleUp, faBars, faXmark, faQuestion
} from '@fortawesome/free-solid-svg-icons';

// Controls for mobile hamburger menu
const menuOpen = ref(false);

// Desktop menu items with dropdown state
const menuItemsLg = ref([
  { name: 'Product', open: false },
  { name: 'Resources', open: false }
]);

// Mobile menu items with dropdown state
const menuItems = ref([
  { name: 'Product', open: false },
  { name: 'Resources', open: false },
  { name: 'Pricing', open: false },
  { name: 'Love', open: false }
]);

// Toggle desktop dropdowns (ensures only one is open at a time)
const menuItemsLgToggle = (index, otherIndex) => {
  menuItemsLg.value[index].open = !menuItemsLg.value[index].open;
  if (index !== otherIndex) menuItemsLg.value[otherIndex].open = false;
};

// Toggle mobile dropdowns
const menuToggle = (index) => {
  menuItems.value[index].open = !menuItems.value[index].open;
};

// Toggle entire mobile menu visibility
const menuItemToggle = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <!-- Header Wrapper -->
  <header class="fixed top-0 left-0 w-full z-50 bg-gradient-to-br from-[#02213a] via-[#28353f] to-[#6b6e70] shadow-md text-white">
    <div class="flex justify-between items-center p-6">
      
      <!-- Logo -->
      <div>
        <a href="#Home" class="text-2xl font-extralight font-mono">SUPERHUMAN</a>
      </div>

      <!-- Desktop Menu (hidden on small screens) -->
      <nav class="hidden lg:flex items-center gap-8">
        
        <!-- Product Dropdown -->
        <div class="relative">
          <button
            class="hover:font-bold transition-all duration-200 flex items-center gap-1"
            @mouseenter="menuItemsLgToggle(0, 1)">
            Product
            <font-awesome-icon :icon="menuItemsLg[0].open ? faAngleUp : faAngleDown" />
          </button>
          
          <!-- Product Dropdown Content -->
          <div
            v-if="menuItemsLg[0].open"
            class="absolute top-12 left-0 bg-[#242C33] rounded-2xl p-4 z-50 w-[700px]"
            @mouseleave="menuItemsLgToggle(0, 1)">
            <div class="flex gap-6">
              <div>
                <h4 class="text-[#B8B79F] font-bold mb-2">Solutions</h4>
                <a href="https://superhuman.com/enterprise" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Enterprise</a>
                <a href="https://superhuman.com/sales" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Sales</a>
                <a href="https://superhuman.com/agencies" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Agencies</a>
                <a href="https://superhuman.com/consulting" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Consulting</a>
              </div>
              <div>
                <h4 class="text-[#B8B79F] font-bold mb-2">Learn</h4>
                <a href="https://superhuman.com/ai" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">SuperHuman AI</a>
                <a href="https://superhuman.com/gmail-alternative" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Gmail</a>
                <a href="https://superhuman.com/outlook-alternative" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">For Outlook</a>
                <a href="https://superhuman.com/crm-integrations" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">CRM Integrations</a>
              </div>
              <div>
                <h4 class="text-[#B8B79F] font-bold mb-2">Latest Updates</h4>
                <a href="https://superhuman.com/the-next-superhuman-ai" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">Superhuman AI</a>
                <a href="https://superhuman.com/instant-event" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">Instant Event</a>
                <a href="https://superhuman.com/inbox-zero-week" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">Inbox Zero Week</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Resources Dropdown -->
        <div class="relative">
          <button
            class="hover:font-bold transition-all duration-200 flex items-center gap-1"
            @mouseenter="menuItemsLgToggle(1, 0)">
            Resources
            <font-awesome-icon :icon="menuItemsLg[1].open ? faAngleUp : faAngleDown" />
          </button>
          
          <!-- Resources Dropdown Content -->
          <div
            v-if="menuItemsLg[1].open"
            class="absolute top-12 left-0 bg-[#242C33] rounded-2xl p-4 z-50 w-[600px]"
            @mouseleave="menuItemsLgToggle(1, 0)">
            <div class="flex gap-10">
              <div>
                <h4 class="text-[#B8B79F] font-bold mb-2">Company</h4>
                <a href="https://blog.superhuman.com/" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">Blog</a>
                <a href="https://superhuman.com/jobs" target="_blank" class="block hover:bg-[#28262F] p-2 rounded-2xl">Careers</a>
              </div>
              <div>
                <h4 class="text-[#B8B79F] font-bold mb-2">Customer Stories</h4>
                <a href="#" class="block hover:bg-[#28262F] p-2 rounded-2xl">Hebbia</a>
                <a href="#" class="block hover:bg-[#28262F] p-2 rounded-2xl">Rilla</a>
                <a href="#" class="block hover:bg-[#28262F] p-2 rounded-2xl">UserGems</a>
              </div>
            </div>
            <div class="mt-4 flex items-center gap-2">
              <font-awesome-icon :icon="faQuestion" />
              <span>Help Center</span>
            </div>
          </div>
        </div>

        <!-- Simple Menu Items -->
        <a href="/pricing" class="hover:font-bold">Pricing</a>
        <a href="/love" class="hover:font-bold">Love</a>
      </nav>

      <!-- Right Actions: CTA + Hamburger -->
      <div class="flex items-center gap-4">
        <a href="https://superhuman.com/login" target="_blank" class="bg-gradient-to-r from-[#65438B] to-[#944694] px-4 py-2 rounded-2xl hover:font-bold">Get Started</a>
        <button @click="menuItemToggle" class="lg:hidden">
          <font-awesome-icon :icon="menuOpen ? faXmark : faBars" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu (only visible when menuOpen is true) -->
    <div v-if="menuOpen" class="lg:hidden p-4 bg-gradient-to-b from-[#02213a] via-[#28353f] to-[#6b6e70] flex flex-col gap-4">
      <!-- Mobile Product -->
      <div>
        <button @click="menuToggle(0)" class="text-xl font-bold">Product</button>
        <div v-if="menuItems[0].open" class="mt-2">
          <a href="https://superhuman.com/enterprise" target="_blank" class="block p-2 rounded-2xl hover:bg-[#28262F]">For Enterprise</a>
          <a href="https://superhuman.com/sales" target="_blank" class="block p-2 rounded-2xl hover:bg-[#28262F]">For Sales</a>
        </div>
      </div>

      <!-- Mobile Resources -->
      <div>
        <button @click="menuToggle(1)" class="text-xl font-bold">Resources</button>
        <div v-if="menuItems[1].open" class="mt-2">
          <a href="https://blog.superhuman.com/" target="_blank" class="block p-2 rounded-2xl hover:bg-[#28262F]">Blog</a>
          <a href="https://superhuman.com/jobs" target="_blank" class="block p-2 rounded-2xl hover:bg-[#28262F]">Careers</a>
        </div>
      </div>

      <!-- Mobile Links -->
      <a href="/pricing" class="text-xl font-bold">Pricing</a>
      <a href="/love" class="text-xl font-bold">Love</a>
    </div>
  </header>
</template>
