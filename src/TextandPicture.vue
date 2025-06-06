<script setup>
import { MotionDirective as motion } from '@vueuse/motion'
const slidedown1 = {
  initial: { y:40, opacity: 0.5 },
  enter: { y: -190, opacity: 1 },
 
  delay: 200,
  duration: 1200,
  easing: 'ease-in-out'
}
const items = [ "strategy", "Design", "Security", "people", "sales", "Customer Success", "Leadership", "Business Development", "Events", "Analytics", "Marketing", "Product", "Engineering", "Finance", "Operations", "HR", "IT", "Legal", "Support" ]
const slidedown2 = {
  initial: { y:40, opacity: 0.5 },
  enter: { y: -60, opacity: 1 , marginTop: '0px'},
 
  delay: 200,
  duration: 1200,
  easing: 'ease-in-out'
}
</script>
<template>
    <!-- ... previous content ... -->
    <p class=" hidden lg:block text-3xl font-bold text-white mt-72 lg:mt[300] p-2 text-center">
  Email is the
  <span class="bg-gradient-to-l from-[#FAC475] via-[#F19FA5] to-[#FA7AF0] text-transparent bg-clip-text text-2xl">
    biggest problem hiding in plain sight
  </span>
</p>
<p class="text-white text-3xl p-4 text-center w-full">We all spend hours on email. But we often reply late, and sometimes don't even reply. We then end up losing deals, blocking our teams, and missing our goals.
</p>
<p class="text-white text-3xl p-4 text-center">It's not anybody's fault. Email itself has not changed in decades. With Superhuman, this all changes.</p>
<!-- Proper marquee wrapper -->
    <div class=" overflow-hidden w-full h-16 mt-22">
      <div class="animate-marquee whitespace-nowrap">
        <span
          v-for="(W, index) in items"
          :key="index"
          class="mx-8 text-white text-2xl font-bold bg-gradient-to-l from-[#302619] via-[#8d8384] to-[#915e8c] p-2 rounded-2xl inline-block"
        >
          {{ W }}
        </span>
      </div>
    </div>
  
    <div class=" overflow-hidden w-full h-16 mt-4">
      <div class="animate-oppositeMarquee whitespace-nowrap">
        <span
          v-for="(W, index) in items"
          :key="index"
          class="mx-10 text-white text-2xl font-bold bg-gradient-to-l from-[#302619] via-[#8d8384] to-[#915e8c] p-2 rounded-2xl inline-block"
        >
          {{ W }}
        </span>
      </div>
    </div>
   
  </template>
  
<style >
@keyframes marquee {
  0% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(-80%);
  }
}
@keyframes oppositeMarquee {
    0%{
        transform: translateX(-80%)
    }
    100%{
        transform: translate(80%);
    }
}
.animate-oppositeMarquee{
    animation: oppositeMarquee 30s linear infinite;
    display: inline-block;
    white-space: nowrap;
}
.animate-marquee {
    display: inline-block;
    white-space: nowrap;
  animation: marquee 20s linear infinite;
}
</style>