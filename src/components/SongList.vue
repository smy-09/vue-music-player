<template>
  <div class="songlist">
    <div class="sl-head">
      <div>序号</div>
      <div>音乐标题</div>
      <div>歌手</div>
      <div>专辑</div>
      <div style="text-align: right">时长</div>
      <div></div>
    </div>

    <div v-if="!items.length" class="empty">{{ emptyText }}</div>

    <div
      v-for="it in items"
      :key="it.i"
      class="sl-row"
      :class="{ playing: it.i === state.current }"
      @click="player.play(it.i)"
    >
      <div class="idx">
        {{ it.i === state.current && state.playing ? '🎵' : String(it.pos).padStart(2, '0') }}
      </div>
      <div class="title-cell">
        <div class="cover" :style="coverStyle(it.i)"></div>
        <div class="meta"><div class="title">{{ songs[it.i].title }}</div></div>
      </div>
      <div class="artist">{{ songs[it.i].artist }}</div>
      <div class="album">{{ songs[it.i].album }}</div>
      <div class="dur">{{ fmt(songs[it.i].dur) }}</div>
      <div
        class="heart"
        :class="{ on: actions.isFav(it.i) }"
        @click.stop="actions.toggleFav(it.i)"
      >{{ actions.isFav(it.i) ? '♥' : '♡' }}</div>
    </div>
  </div>
</template>

<script setup>
import { state, actions, songs, coverStyle, fmt } from '../store'
import { player } from '../utils/player'

defineProps({
  items: { type: Array, default: () => [] },
  emptyText: { type: String, default: '暂无歌曲' }
})
</script>
