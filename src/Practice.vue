<script setup>
import { ref, onMounted } from 'vue';
import { MotionComponent } from '@vueuse/motion';

const faded = {
  initial: {opacity: 0, scale: 0},
  enter: {opacity: 1, scale: 1},
  delay: 200,
  duration: 1200,
  easing: 'ease-in-out'
}
const customersReview = ref([
  {
    name: 'John Doe',
    review: 'It is one thing for me to be better with my email, but if my whole team is better, then we tend to make decisions faster, respond faster, and give higher quality responses to everyone we interact with',
    company: 'Tech Corp',
    img: './malecustomer.jpeg'
  },
  {
    name: 'Jane Smith',
    review: 'Superhuman is a key tool in our tech stack that everyone gets onboarded to when they join the team. With the peace of mind an organized inbox brings, they can focus on doing what matters most to the business.',
    company: 'Design Studio',
    img: './femaleCustomer.png'
  },
  {
    name: 'Alice Johnson',
    review: 'Spending less time on email means I can focus on meaningful work that moves the needle for our business. With Superhuman, I have peace of mind that things are taken care of. Email just is not a hassle for me anymore.',
    company: 'Marketing Agency',
    img: './maleCustomer.png'
  }
]);
const paragraph = ref(0)
const handleDisplay = ()=> {
  paragraph.value = (paragraph.value + 1) % customersReview.value.length
}


onMounted(()=>{
    setInterval(() => {
  handleDisplay()
}, 6000);
}

)


</script>

<template>
 <div class="mt-22">
  <Motion  v-bind="faded">
     <h1 class="text-4xl text-blue-800 font-bold text-center">Customer Reviews</h1>
  </Motion>
 <Motion  v-bind="faded">
  <p class="text-3xl text-white font-mono text-center p-2 mt-6">{{ customersReview[paragraph].review }}</p>
 </Motion>
 
  <div class="flex justify-between"> 
     <Motion  v-bind="faded">
 <p class="text-lg text-gray-300 bg-blue-600 p-2 rounded-3xl ml-4 font-bold" >{{ customersReview[paragraph].name }}</p>
  </Motion>
    <Motion  v-bind="faded">
      <img :src="customersReview[paragraph].img" alt="Customer Image" class="rounded-full w-20 h-20"/>
    </Motion>
<Motion v-bind="faded">
   <p class="text-lg text-blue-600 bg-gray-300 p-4 rounded-3xl ml-4 font-bold">{{ customersReview[paragraph].company }}</p>
</Motion>
 
  </div>
 
  
 </div>
 <div class="relative mt-26">
  <img src="/lastDiv1.png" alt="">
  <button class="absolute top-16 left-1/2 -translate-x-1/2 w-96 text-white bg-gray-700 rounded-2xl p-4 font-mono text-2xl hover:bg-blue-800">
    Get Started
  </button>
</div>

</template>
