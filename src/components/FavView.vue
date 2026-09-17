<template>
  <section>
    <div class="section-title">
      <span>我喜欢的音乐</span>
      <a @click="playAll">▶ 播放全部</a>
    </div>

    <SongList :items="rows" empty-text="还没有收藏歌曲，去推荐页点个小爱心吧 ♡" />
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { state, actions } from '../store'
import { player } from '../utils/player'
import SongList from './SongList.vue'

const rows = computed(() => state.profile.fav.map((i, n) => ({ i, pos: n + 1 })))

function playAll() {
  if (state.profile.fav.length) player.play(state.profile.fav[0])
  else actions.toast('先收藏几首歌吧')
}
</script>
