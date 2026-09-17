<template>
  <div class="login-mask">
    <div class="login-card">
      <div class="lg-brand">
        <span class="mark">🎵</span>
        <span><b>酷狗</b>音乐</span>
      </div>

      <h1>欢迎回来</h1>
      <p class="login-sub">无需注册，任意内容都能进入</p>

      <div class="lg-field">
        <label>账号</label>
        <input v-model="user" placeholder="随便填，留空也行" @keydown.enter="enter" />
      </div>
      <div class="lg-field">
        <label>密码</label>
        <input v-model="pwd" type="password" placeholder="随便填，留空也行" @keydown.enter="enter" />
      </div>

      <div class="lg-err">{{ err }}</div>

      <button class="lg-btn" @click="enter">进 入</button>
      <button class="lg-ghost" @click="skip">跳过，直接进 →</button>

      <div class="lg-tip">
        本页不校验账号密码，填什么都可直接进入<br />
        进入后可修改个人资料、更换头像与背景
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { actions } from '../store'

const user = ref('')
const pwd = ref('')
const err = ref('')

function enter() {
  err.value = ''
  actions.login(user.value.trim())
}

function skip() {
  user.value = ''
  pwd.value = ''
  enter()
}
</script>
