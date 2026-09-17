<template>
  <section>
    <div class="card">
      <div class="pf-top">
        <div class="pf-ava" :style="{ background: avatarBg(state.profile.avatar) }">
          {{ avatarText(state.profile.avatar) }}
        </div>

        <div class="who">
          <b>{{ state.profile.nickname }}</b>
          <p>{{ state.profile.desc || '这个人很懒，什么都没写' }}</p>
          <div class="acct">当前账号：<span>{{ state.profile.account || '游客' }}</span></div>
        </div>

        <div class="stats">
          <div><div class="n">{{ state.profile.fav.length }}</div><div class="l">收藏</div></div>
          <div><div class="n">{{ state.profile.playCount }}</div><div class="l">播放次数</div></div>
        </div>
      </div>

      <h3>基本资料</h3>
      <p class="hint">v-model 直接绑定，修改后点击保存即可写入浏览器</p>

      <div class="form-grid">
        <div class="fg">
          <label>昵称</label>
          <input v-model="state.profile.nickname" maxlength="20" placeholder="给自己起个名字" />
        </div>
        <div class="fg">
          <label>性别</label>
          <select v-model="state.profile.gender">
            <option value="secret">保密</option>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </div>
        <div class="fg">
          <label>生日</label>
          <input v-model="state.profile.birthday" type="date" />
        </div>
        <div class="fg">
          <label>所在城市</label>
          <input v-model="state.profile.city" maxlength="20" placeholder="例如：深圳" />
        </div>
        <div class="fg">
          <label>邮箱</label>
          <input v-model="state.profile.email" maxlength="40" placeholder="name@example.com" />
        </div>
        <div class="fg">
          <label>当前账号</label>
          <input :value="state.profile.account || '游客'" disabled style="opacity: 0.55" />
        </div>
        <div class="fg" style="grid-column: 1/-1">
          <label>个性签名</label>
          <textarea v-model="state.profile.desc" maxlength="60" placeholder="写点什么展示在个人主页…"></textarea>
        </div>
      </div>

      <div class="row-actions">
        <button class="btn-p" @click="actions.saveProfile()">保存资料</button>
        <button class="btn-g" @click="actions.resetProfile()">恢复默认</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { state, actions, avatarBg, avatarText } from '../store'
</script>
