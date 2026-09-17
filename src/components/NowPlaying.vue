<template>
  <aside class="nowplaying">
    <div class="disc" :class="{ playing: state.playing }">
      <div class="cover" :style="cur >= 0 ? coverStyle(cur) : ''"></div>
    </div>

    <div class="np-title">{{ cur >= 0 ? songs[cur].title : '未在播放' }}</div>
    <div class="np-artist">{{ cur >= 0 ? songs[cur].artist : '选择一首歌开始吧' }}</div>

    <div class="np-ops">
      <span :class="{ on: liked }" title="喜欢" @click="toggleLike">{{ liked ? '♥' : '♡' }}</span>
      <span title="上一首" @click="player.prev()">⏮</span>
      <span title="下一首" @click="player.next()">⏭</span>
    </div>

    <div class="lyrics" ref="box">
      <div
        v-for="(line, i) in LYRICS"
        :key="i"
        class="ln"
        :class="{ active: i === state.lyricIndex }"
      >{{ line }}</div>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { state, actions, songs, coverStyle, LYRICS } from '../store'
import { player } from '../utils/player'

const cur = computed(() => state.current)
const liked = computed(() => cur.value >= 0 && actions.isFav(cur.value))
const box = ref(null)

function toggleLike() {
  if (cur.value >= 0) actions.toggleFav(cur.value)
}

// 歌词跟着播放进度自动滚动
watch(
  () => state.lyricIndex,
  (n) => {
    nextTick(() => {
      const el = box.value
      if (!el || !el.children[n]) return
      const top = el.children[n].offsetTop - el.clientHeight / 2 + el.children[n].clientHeight / 2
      if (Math.abs(el.scrollTop - top) > 24) el.scrollTop = top
    })
  }
)
</script>
