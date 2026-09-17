<template>
  <section>
    <section class="hero">
      <h2>{{ state.profile.nickname }} · 每日推荐</h2>
      <p>点击播放即可体验完整播放器交互：搜索、上一首 / 下一首、进度拖拽、音量、播放模式。</p>
      <button class="play-hero" @click="player.play(0)">▶ 播放全部</button>
    </section>

    <div class="section-title">
      <span>推荐歌曲</span>
      <a @click="shuffle">随机播放</a>
    </div>

    <SongList :items="rows" empty-text="没有找到匹配的歌曲" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { state, actions, songs } from '../store'
import { player } from '../utils/player'
import SongList from './SongList.vue'

// 按搜索关键词过滤
const rows = computed(() => {
  const f = state.filter.trim()
  const out = []
  let pos = 0
  songs.forEach((s, i) => {
    if (f && !(s.title.includes(f) || s.artist.includes(f) || s.album.includes(f))) return
    pos++
    out.push({ i, pos })
  })
  return out
})

function shuffle() {
  state.mode = 1
  player.play(Math.floor(Math.random() * songs.length))
  actions.toast('已切到随机播放')
}
</script>
