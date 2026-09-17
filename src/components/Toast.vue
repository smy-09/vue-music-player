<template>
  <div class="toast" :class="{ show: state.toastShow }">{{ state.toastMsg }}</div>
</template>

<script setup>
import { state } from '../store'
</script>
