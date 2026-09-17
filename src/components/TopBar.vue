<template>
  <header class="topbar">
    <div class="logo"><span class="mark">🎵</span><span><b>酷狗</b>音乐</span></div>

    <div class="search">
      <input v-model="state.filter" placeholder="搜索歌曲、歌手、专辑…" />
    </div>

    <div class="top-actions">
      <span class="link" @click="actions.toast('演示版本未接入支付')">开通VIP</span>
      <span class="nick" @click="actions.showView('profile')">{{ state.profile.nickname }}</span>
      <div
        class="ava"
        :style="{ background: avatarBg(state.profile.avatar) }"
        :title="state.profile.nickname"
        @click="actions.showView('profile')"
      >{{ avatarText(state.profile.avatar) }}</div>
      <span class="link" @click="actions.logout()">退出</span>
    </div>
  </header>
</template>

<script setup>
import { state, actions, avatarBg, avatarText } from '../store'
</script>
