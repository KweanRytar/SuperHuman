<script setup>
import { onMounted, ref } from 'vue'

const imageRefs = []
const paragraphRefs = []

const paragraphs = [
  {
    text: "Like a truly great assistant, Superhuman AI is constantly working beside you. Organizing your inbox. Making sure you never drop the ball. Drafting — and if you want — sending fully written emails on your behalf. It can even execute complete workflows, end-to-end, so you don’t have to.",
    img: "./assets/seven.png"
  },
  {
    text: "We all get too much email. The urgent buries the important. We don't reply to our team or VIPs. And we miss notifications from tools like Google Docs. As a result, we lose opportunities, block our teams, and damage our reputations.",
    img: "./assets/eight.png"
  },
  {
    text: "You're sending a crucial email: closing a deal, delegating a task, or landing a meeting. But people are busy — you might not hear back. So what do you do? You could painstakingly maintain a list or spreadsheet. Or you could somehow try to keep it all in your head.",
    img: "./assets/five.png"
  },
  {
    text: "But what if there was a way to automate this process? Superhuman AI can help you track and follow up on important emails, ensuring you never miss a beat. It can even remind you to follow up on emails that haven't received a response, so you can stay on top of your game.",
    img: "./assets/six.png"
  }
]

const handleIntersect = (entries) => {
  entries.forEach(({ target, isIntersecting }) => {
    const index = paragraphRefs.findIndex(p => p === target)
    if (index !== -1) {
      const para = paragraphRefs[index]
      const img = imageRefs[index]

      if (isIntersecting) {
        if (img) {
          img.style.opacity = '1'
          img.style.transition = 'opacity 0.6s ease'
        }

        if (para) {
          setTimeout(() => {
            para.style.opacity = '1'
            para.style.transition = 'opacity 0.6s ease'
          }, 200) 
        }
      } else {
        // Reset if not intersecting
        if (img) img.style.opacity = '0'
        if (para) para.style.opacity = '0'
      }
    }
  })
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersect, {
    threshold: 1,
    root: null,
    rootMargin: '0px',
  })

  paragraphRefs.forEach(el => {
    if (el) observer.observe(el)
  })
})
</script>
<template>
  <div class="generaldiv">
    <div
      v-for="(content, index) in paragraphs"
      :key="index"
      class="flex flex-col gap-6 lg:flex-row lg:gap-10 mt-20 px-6"
    >
      <img
        :src="content.img"
        :alt="`image-${index}`"
        :ref="el => imageRefs[index] = el"
        class="opacity-0 transition-opacity duration-700"
      />
      <p
        :ref="el => paragraphRefs[index] = el"
        class="text-3xl font-mono text-white opacity-0 transition-opacity duration-700"
      >
        {{ content.text }}
      </p>
    </div>
  </div>
</template>
