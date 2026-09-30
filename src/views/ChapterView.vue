<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

const files = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})
const route = useRoute()

const parsed = computed(() => {
  const raw = files['../content/chapter' + route.params.id + '/' + route.params.slug + '.md']
  if (!raw) return null
  const doc = new DOMParser().parseFromString(marked.parse(raw), 'text/html')
  const toc = []
  doc.querySelectorAll('h2, h3').forEach((h, i) => {
    h.id = 'h-' + i
    toc.push({ id: h.id, text: h.textContent, level: h.tagName })
  })
  return { html: doc.body.innerHTML, toc }
})

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="page" v-if="parsed">
    <article class="content" v-html="parsed.html"></article>
    <aside class="toc">
      <div class="toc-title">Di halaman ini</div>
      <a v-for="t in parsed.toc" :key="t.id" href="#" :class="t.level" @click.prevent="goTo(t.id)">{{ t.text }}</a>
    </aside>
  </div>
  <p v-else class="content">Catatan belum dibuat.</p>
</template>