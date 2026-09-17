<template>
  <!-- 可更换的背景层 -->
  <div class="bg-layer" :style="{ background: bgStyle(state.profile.bg) }"></div>

  <!-- 未进入时只显示登录（欢迎）页 -->
  <LoginPage v-if="!state.logged" />

  <!-- 主界面 -->
  <div class="app" v-else>
    <TopBar />
    <div class="layout">
      <SideBar />
      <main class="content">
        <HomeView v-if="state.view === 'home'" />
        <FavView v-else-if="state.view === 'fav'" />
        <ProfileView v-else-if="state.view === 'profile'" />
        <ThemeView v-else-if="state.view === 'theme'" />
      </main>
      <NowPlaying />
    </div>
    <PlayerBar />
  </div>

  <Toast />
</template>

<script setup>
import { onMounted } from 'vue'
import { state, actions, bgStyle } from './store'
import LoginPage from './components/LoginPage.vue'
import TopBar from './components/TopBar.vue'
import SideBar from './components/SideBar.vue'
import HomeView from './components/HomeView.vue'
import FavView from './components/FavView.vue'
import ProfileView from './components/ProfileView.vue'
import ThemeView from './components/ThemeView.vue'
import NowPlaying from './components/NowPlaying.vue'
import PlayerBar from './components/PlayerBar.vue'
import Toast from './components/Toast.vue'

// 刷新页面后保持已登录状态
onMounted(() => {
  if (actions.autoLogin()) state.logged = true
})
</script>
