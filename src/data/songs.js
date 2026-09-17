// 歌曲数据源（免费示例音频，需联网播放）
export const palette = [
  ['#1ec8ff', '#7b5cff'],
  ['#ff8a5b', '#ff5b8a'],
  ['#22d3a6', '#1e8bff'],
  ['#f6c453', '#ff7e5f'],
  ['#a06bff', '#ff6bcb'],
  ['#3ad1ff', '#2e6cff'],
  ['#ff5b8a', '#ffb15b'],
  ['#5be0a0', '#1ec8ff']
]

export const songs = [
  { title: '夜空中的回响', artist: '林夕遥', album: '星河漫游', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', dur: 234 },
  { title: '潮汐之间', artist: '苏野', album: '蓝色海岸线', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', dur: 286 },
  { title: '霓虹城市', artist: '电音少年', album: '午夜频率', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', dur: 254 },
  { title: '风的形状', artist: '陈漫', album: '山与海', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', dur: 297 },
  { title: '旧时光信笺', artist: '温开水', album: '回忆博物馆', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', dur: 312 },
  { title: '银河便利店', artist: '小宇', album: '宇宙夜市', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', dur: 268 },
  { title: '雨后初晴', artist: '白鹭', album: '清新时刻', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', dur: 241 },
  { title: '追光者', artist: '晨曦乐队', album: '在路上', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', dur: 263 }
]

// 示例歌词（每 7 秒滚动一行）
export const LYRICS = [
  '夜色铺开一条长长的河',
  '我把心事折成纸船',
  '让它顺着旋律漂远',
  '副歌升起的时候',
  '整座城市都亮了起来',
  '间奏像雨后的风',
  '轻轻推开窗',
  '尾声慢慢落下来',
  '留在你耳边的温度'
]

// 预设头像
export const AVATARS = [
  { id: 'a1', css: 'linear-gradient(135deg,#ff8a5b,#ff5b8a)', t: '🎧' },
  { id: 'a2', css: 'linear-gradient(135deg,#1ec8ff,#7b5cff)', t: '🎤' },
  { id: 'a3', css: 'linear-gradient(135deg,#22d3a6,#1e8bff)', t: '🎹' },
  { id: 'a4', css: 'linear-gradient(135deg,#f6c453,#ff7e5f)', t: '🎸' },
  { id: 'a5', css: 'linear-gradient(135deg,#a06bff,#ff6bcb)', t: '🎺' },
  { id: 'a6', css: 'linear-gradient(135deg,#5be0a0,#1ec8ff)', t: '🥁' },
  { id: 'a7', css: 'linear-gradient(135deg,#ff5b8a,#ffb15b)', t: '🎼' },
  { id: 'a8', css: 'linear-gradient(135deg,#8892ff,#3ad1ff)', t: '🎷' }
]

// 预设背景
export const BGS = [
  { id: 'b0', name: '极光', css: 'linear-gradient(135deg,#0f2027,#203a43,#2c5364)' },
  { id: 'b1', name: '星夜紫', css: 'linear-gradient(135deg,#2b1055,#7597de)' },
  { id: 'b2', name: '落日橙', css: 'linear-gradient(135deg,#ff512f,#dd2476)' },
  { id: 'b3', name: '深海蓝', css: 'linear-gradient(135deg,#000428,#004e92)' },
  { id: 'b4', name: '森林绿', css: 'linear-gradient(135deg,#134e5e,#71b280)' },
  { id: 'b5', name: '樱花粉', css: 'linear-gradient(135deg,#ee9ca7,#ffdde1)' }
]

export const DEFAULT_BG =
  'radial-gradient(1200px 600px at 80% -10%,rgba(123,92,255,.25),transparent 60%),' +
  'radial-gradient(900px 500px at -10% 110%,rgba(30,200,255,.18),transparent 55%),#0e0f1a'
