<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { chapters } from '@/data/chapter'

const route = useRoute()
const terbuka = ref([])

function toggle(id) {
  terbuka.value = terbuka.value.includes(id)
    ? terbuka.value.filter(x => x !== id)
    : [...terbuka.value, id]
}

watch(
  () => route.params.id,
  (id) => {
    const n = Number(id)
    if (n && !terbuka.value.includes(n)) terbuka.value.push(n)
  },
  { immediate: true }
)
</script>

<template>
  <header class="topbar">Materi LLM</header>
  <div class="layout">
    <nav class="sidebar">
      <div v-for="c in chapters" :key="c.id" class="chapter">
        <button class="chapter-btn" @click="toggle(c.id)">
          <span>{{ c.id }}. {{ c.judul }}</span>
          <span>{{ terbuka.includes(c.id) ? '▾' : '▸' }}</span>
        </button>
        <div v-show="terbuka.includes(c.id)">
          <RouterLink v-for="p in c.poin" :key="p.slug" :to="'/chapter/' + c.id + '/' + p.slug" class="link">{{ p.judul }}</RouterLink>
        </div>
      </div>
    </nav>
    <main class="main"><RouterView /></main>
  </div>
</template>