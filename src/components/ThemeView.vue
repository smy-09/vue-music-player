<template>
  <section>
    <!-- 头像 -->
    <div class="card">
      <h3>更换头像</h3>
      <p class="hint">选择预设头像，或上传本地图片（自动压缩裁剪为正方形）</p>

      <div class="pick-row">
        <div class="pick-preview" :style="{ background: avatarBg(state.profile.avatar) }">
          {{ avatarText(state.profile.avatar) }}
        </div>

        <div style="flex: 1; min-width: 240px">
          <div class="picks">
            <div
              v-for="(a, i) in AVATARS"
              :key="a.id"
              class="pick"
              :class="{ on: state.profile.avatar === a.id }"
              :style="{ background: a.css }"
              :title="'预设 ' + (i + 1)"
              @click="actions.setAvatar(a.id)"
            >{{ a.t }}</div>
          </div>

          <div class="upload-wrap">
            <button class="btn-g" @click="avaFile.click()">上传头像</button>
            <input ref="avaFile" type="file" accept="image/*" @change="onAva" />
            <button class="btn-g" @click="actions.setAvatar('')">使用默认</button>
            <span style="font-size: 12px; color: var(--text-dim)">支持 JPG / PNG / GIF，建议 ≤ 2MB</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 背景 -->
    <div class="card">
      <h3>更换背景</h3>
      <p class="hint">选择预设主题背景，或上传本地图片铺满整个页面</p>

      <div class="pick-row">
        <div class="pick-preview square" :style="{ background: bgStyle(state.profile.bg) }">背景</div>

        <div style="flex: 1; min-width: 240px">
          <div class="picks">
            <div
              v-for="b in BGS"
              :key="b.id"
              class="pick wide"
              :class="{ on: state.profile.bg === b.id }"
              :style="{ background: b.css }"
              :title="b.name"
              @click="actions.setBg(b.id)"
            >{{ b.name }}</div>
          </div>

          <div class="upload-wrap">
            <button class="btn-g" @click="bgFile.click()">上传背景</button>
            <input ref="bgFile" type="file" accept="image/*" @change="onBg" />
            <button class="btn-g" @click="actions.setBg('')">恢复默认背景</button>
            <span style="font-size: 12px; color: var(--text-dim)">建议 16:9 横图，宽度 ≥ 1280px</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { state, actions, avatarBg, avatarText, bgStyle, AVATARS, BGS } from '../store'
import { pickImage } from '../utils/image'

const avaFile = ref(null)
const bgFile = ref(null)

function onAva(e) {
  pickImage(e.target.files[0], 256, (data) => {
    state.profile.avatar = data
    actions.save()
    actions.toast('头像已更新')
  })
  e.target.value = ''
}

function onBg(e) {
  pickImage(e.target.files[0], 1440, (data) => {
    state.profile.bg = data
    actions.save()
    actions.toast('背景已更新')
  })
  e.target.value = ''
}
</script>
