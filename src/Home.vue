<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { MotionDirective as motion } from '@vueuse/motion'
import { useIntersectionObserver } from '@vueuse/core'


import TextandPicture from './TextandPicture.vue'

import DynamicDiv from './DynamicDiv.vue'
import Practice from './Practice.vue'
import testimonial from './testimonial.vue'
import  Footer from './Footer.vue'
// Image list
const pictureName = [ "birdDesktop", "flowerDesktop", "foodDesktop", "sunDesktop", "catDesktop" ]

const mobilePictureName = [ "birdmobile", "birdmobile (2)", "foodMobile", "sunMobile", "catMobile" ]

const word = ["BREX", "DEEL" ,"COMPASS" ,"GREENHOUSE", "AL6Z" ,"AIRTABLE", "NETFLEX"]

// Reactive image URL
const imgUrl = ref(`./${pictureName[0]}.jpg`)
const mobileImgUrl = ref(`./${mobilePictureName[0]}.jpg`)



// Index tracker
const currentIndex = ref(0)
const mobileCurrentIndex = ref(0)


// Cycle one image at a time every 6s
const cycleImagesMobile = () => {
  setInterval(() => {
    mobileCurrentIndex.value = (mobileCurrentIndex.value +1) % mobilePictureName.length
    mobileImgUrl.value = `./${mobilePictureName[mobileCurrentIndex.value]}.jpg`
  }, 5000)
}
const cycleImages = () => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % pictureName.length
    imgUrl.value = `./${pictureName[currentIndex.value]}.jpg`
  }, 6000)
}
// const marginRight = 0
// const maxMarginRight = 1000
// const moveTextRightOrLeft = ( ) => {
// setInterval(
//   () => {
//     while (marginRight < maxMarginRight) {
//   marginRight += 5
// }
// return marginRight
//   }, 6000
// )
// }

onMounted(() => {
  cycleImages()
  cycleImagesMobile()
  
})
const slidedown1 = {
  initial: { y: -100, opacity: 0 },
  enter: { y: 0, opacity: 1 },
  leave: { y: -100, opacity: 0 },
  delay: 200,
  duration: 1200,
  easing: 'ease-in-out'
}
const slideup ={
  initial: {y: 200, opacity: 0},
  enter: {y: 0, opacity: 1},
  delay: 300,
  duration: 1200,
  easing: 'ease-in-out'
}
const slideRight = {
  initial: { x: -100, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  delay: 400,
  duration: 1200,
  easing: 'ease-in-out'
}
const slideLeft = {
  initial: { x: 100, opacity: 0 },
  enter: { x: 0, opacity: 1 },
  delay: 500,
  duration: 1200,
  easing: 'ease-in-out'
}



</script>

<template>
  <!-- Image Transition Container -->
  

  <!-- Other Elements Below -->
  <div class="flex flex-col justify-center items-center mt-32 lg:mt-22">
    <Motion v-bind="slidedown1">
      <button class="text-white m-4 font-sans bg-transparent border-white w-fit p-2 rounded-2xl border-2 font-light">
        Download the State of Productivity & AI Report 2025
      </button>
    </Motion>

    <Motion v-bind="slideRight">
      <p
        class="m-2 w-full text-center text-4xl bg-gradient-to-r from-[#ADACAF] via-[#F4F4F4] to-[#B3B3B3] bg-clip-text text-transparent font-extrabold font-mono"
      >
        Save 4 hours per person every single week
      </p>
    </Motion>

    <Motion v-bind="slideLeft">
      <p class="text-white font-medium m-2 text-2xl text-center">
        Superhuman is the most productive email app ever made. Collaborate faster and get more done with
        AI-powered email.
      </p>
    </Motion>

    <Motion v-bind="slideup">
      <a
        class="bg-gradient-to-r from-[#66438B] to-[#8E4693] border-[#F874F7] p-2 w-full border-2 text-white rounded-2xl text-center m-10"
        href="https://superhuman.com/signup"
      >
        Get Started
      </a>
    </Motion>
  </div>
  <div class="ImageContainer h-[30rem] relative">
    <transition name="fade" mode="out-in">
      <img
        :key="imgUrl"
        :src="imgUrl"
        alt="Image"
        class="w-[50rem] h-full object-cover mr-[20rem] mx-auto rounded-[40px] border-[5px] border-gray-700 mt-6 "
      />
    </transition>
    <transition name="fade" mode="out-in">
      <img
        :key="mobileImgUrl"
        :src="mobileImgUrl"
        alt="Image"
        class=" w-[15rem] h-[86] lg:h-full object-cover rounded-[40px] border-[2px] border-gray-700 mb-30 absolute bottom-0 mx-auto lg:m-0
         ml-[5rem] md:ml-[10rem] lg:ml-[60rem]"
      />
    </transition>
    
    <div class="border-0 overflow-hidden whitespace-nowrap w-full bg-gradient-to-br from-[#02213a] via-[#28353f] to-[#6b6e70]  rounded-2xl">
  <div class="animate-marquee inline-block">
    <span v-for="(W, index) in word" :key="index" class="mx-8 text-white text-2xl font-bold">
      {{ W }}
    </span>
  </div>
</div>

    <div class="bg-gradient-to-br from-[#2A283E] via-[#1D2336] to-[#1D2336] shadow-md relative">
    <img src="/page.png" alt="picture" class=" w-[50rem] h-full object-cover mr-[20rem] mx-auto rounded-[40px]  mt-6 bg-transparent" />
<p class="text-2xl text-white absolute top-10 p-2 text-center">Superhuman saves teams over
  <span class="bg-gradient-to-l from-[#FAC475] via-[#F19FA5] to-[#FA7AF0] text-transparent bg-clip-text text-2xl lg:text-8xl">15 million hours</span> every single year.</p>
    </div>
   
  </div>
  <div>
   
  </div>
  
  <div class="block mt-90">
    <p class="text-2xl font-bold text-white  lg:mt[300] p-2 text-center">
  Email is the
  <span class="bg-gradient-to-l from-[#FAC475] via-[#F19FA5] to-[#FA7AF0] text-transparent bg-clip-text text-2xl">
    biggest problem hiding in plain sight
  </span>
</p> 
  
  </div>


  <TextandPicture  />
  <testimonial/>
  <DynamicDiv/>
   <Practice/>
  <Footer/>
   

  
  <!-- <DynamicDiv/> -->
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.5;
  transform: scale(0.98) translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
@keyframes marquee {
  0% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(-80%);
  }
}

.animate-marquee {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}

</style>
