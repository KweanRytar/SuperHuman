<script setup>
import { nextTick, onMounted, ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const description = ref([
  { info: 'Fly through your email twice as fast as before.', targetVisible: false },
  { info: 'Be more responsive to what matters most.', targetVisible: false },
  { info: 'Collaborate faster than ever before.', targetVisible: false },
])

const paragraphRefs = ref([])
const divtowatch = ref()

const setParagraphRef = (el) => {
  if (el && !paragraphRefs.value.includes(el)) {
    paragraphRefs.value.push(el)
  }
}

onMounted(async () => {
  await nextTick()

  paragraphRefs.value.forEach((el, index) => {
    if (!el) return

    useIntersectionObserver(
      el,
      ([entry]) => {
        if (entry.isIntersecting) {
          description.value[index].targetVisible = true
          console.log(`Paragraph ${index} is visible`)
        }
        else{
          description.value[index].targetVisible = false
          console.log(`Paragraph ${index} is not visible`)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
    )
  })
})
</script>
<template>
 <div class="flex flex-col lg:flex-row justify-center items-center " ref="divtowatch">

    <div class="flex-none">
       <img src="/june.png" class="lg:h-52 w-52 m-2 " alt="Demo Image" />
    </div>
   <div class="flex flex-col  space-y-6 lg:ml-10 mt-6 lg:mt-0">
    <div v-for="(d, index) in description" :key="index" >
      <p
        :ref="setParagraphRef"
        :class="[
    'transition-all duration-500 block text-2xl',
    d.targetVisible 
      ? 'bg-gradient-to-l from-[#FAC475] via-[#F19FA5] to-[#FA7AF0] text-transparent bg-clip-text select-text' 
      : 'text-gray-300 select-none bg-none bg-clip-border text-opacity-100'
  ]"

      >
        {{ d.info }}
      </p>
      <span class="text-xs ml-2 text-red-400">{{ d.targetVisible ? 'VISIBLE' : 'HIDDEN' }}</span>
    </div>
   </div>

    
  </div>
 
</template>






