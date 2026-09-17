<template>
  <aside class="sidebar">
    <div class="nav-group">音乐馆</div>
    <div class="nav-item" :class="{ active: state.view === 'home' }" @click="actions.showView('home')">
      <span class="ic">🏠</span><span>推荐</span>
    </div>
    <div class="nav-item" :class="{ active: state.view === 'fav' }" @click="actions.showView('fav')">
      <span class="ic">❤️</span><span>我喜欢</span>
      <span class="badge">{{ state.profile.fav.length }}</span>
    </div>

    <div class="nav-group">我的</div>
    <div class="nav-item" :class="{ active: state.view === 'profile' }" @click="actions.showView('profile')">
      <span class="ic">👤</span><span>个人资料</span>
    </div>
    <div class="nav-item" :class="{ active: state.view === 'theme' }" @click="actions.showView('theme')">
      <span class="ic">🎨</span><span>外观设置</span>
    </div>

    <div class="nav-spacer"></div>
    <div class="nav-item" @click="actions.logout()">
      <span class="ic">⏻</span><span>退出登录</span>
    </div>
  </aside>
</template>

<script setup>
import { state, actions } from '../store'
</script>
