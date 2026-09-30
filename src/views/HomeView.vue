<script setup>
import { chapters } from '@/data/chapter';
import router from '@/router';
</script>

<template>
    <h1>Daftar chapter</h1>
    <RouterLink v-for="c in chapters" :key="c.id" :to="'/chapter/' + c.id" class="card">Chapter {{ c.id }}: {{ c.judul }}</RouterLink>
</template>