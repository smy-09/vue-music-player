// 全局响应式状态（一个轻量版的 Pinia：reactive + 一组 action）
import { reactive } from 'vue'
import { songs, palette, AVATARS, BGS, DEFAULT_BG, LYRICS } from './data/songs'
import { fmt } from './utils/image'

const STORE_KEY = 'kg_player_profile_v1'

export const DEFAULT_PROFILE = {
  nickname: '音乐旅人',
  desc: '今天也想听点好听的 ♪',
  gender: 'secret',
  birthday: '',
  city: '',
  email: '',
  account: '',
  avatar: '',
  bg: '',
  fav: [],
  playCount: 0
}

// 深拷贝一份默认值，避免 fav / 对象等引用被多处共享后互相污染
function freshDefaults() {
  return JSON.parse(JSON.stringify(DEFAULT_PROFILE))
}

function loadProfile() {
  try {
    return Object.assign(freshDefaults(), JSON.parse(localStorage.getItem(STORE_KEY) || '{}'))
  } catch (e) {
    return freshDefaults()
  }
}

export const state = reactive({
  logged: false,        // 是否已进入主界面
  view: 'home',         // home / fav / profile / theme
  profile: loadProfile(),
  filter: '',           // 搜索关键词
  current: -1,          // 当前歌曲下标
  playing: false,
  mode: 0,              // 0 顺序 1 随机 2 单曲
  curTime: 0,
  duration: 0,
  volume: 0.7,
  lyricIndex: 0,
  toastMsg: '',
  toastShow: false
})

let toastTimer = null

export const actions = {
  save() {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(state.profile))
    } catch (e) {
      actions.toast('浏览器存储不可用，本次修改仅在当前页面有效')
    }
  },

  toast(msg) {
    state.toastMsg = msg
    state.toastShow = true
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => (state.toastShow = false), 2000)
  },

  showView(v) {
    state.view = v
  },

  // 不校验账号密码，任意内容（含留空）都能进入
  login(name) {
    state.profile.account = name || '游客'
    actions.save()
    state.logged = true
    try {
      sessionStorage.setItem('kg_logged', '1')
    } catch (e) {}
    actions.toast(name ? '欢迎你，' + name : '已直接进入')
  },

  logout() {
    try {
      sessionStorage.removeItem('kg_logged')
    } catch (e) {}
    state.logged = false
    state.view = 'home'
  },

  autoLogin() {
    try {
      return sessionStorage.getItem('kg_logged') === '1'
    } catch (e) {
      return false
    }
  },

  isFav(i) {
    return state.profile.fav.indexOf(i) > -1
  },

  toggleFav(i) {
    const k = state.profile.fav.indexOf(i)
    if (k > -1) {
      state.profile.fav.splice(k, 1)
      actions.toast('已取消收藏')
    } else {
      state.profile.fav.push(i)
      actions.toast('已加入我喜欢的音乐')
    }
    actions.save()
  },

  saveProfile() {
    if (!state.profile.nickname.trim()) {
      actions.toast('昵称不能为空')
      return
    }
    actions.save()
    actions.toast('资料已保存')
  },

  resetProfile() {
    const keep = {
      fav: state.profile.fav.slice(),
      playCount: state.profile.playCount,
      account: state.profile.account
    }
    Object.assign(state.profile, freshDefaults(), keep)
    actions.save()
    actions.toast('已恢复默认资料')
  },

  setAvatar(id) {
    state.profile.avatar = id
    actions.save()
    actions.toast('头像已更换')
  },

  setBg(id) {
    state.profile.bg = id
    actions.save()
    const b = BGS.find((x) => x.id === id)
    actions.toast(b ? '背景已更换为「' + b.name + '」' : '背景已更新')
  }
}

/* ---------- 一些纯函数辅助 ---------- */
export function coverStyle(i) {
  const c = palette[i % palette.length]
  return 'background:linear-gradient(135deg,' + c[0] + ',' + c[1] + ')'
}

export function avatarBg(id) {
  if (id && id.indexOf('data:') === 0) return 'url(' + id + ') center/cover no-repeat'
  const p = AVATARS.find((a) => a.id === id) || AVATARS[0]
  return p.css
}

export function avatarText(id) {
  if (id && id.indexOf('data:') === 0) return ''
  const p = AVATARS.find((a) => a.id === id) || AVATARS[0]
  return p.t
}

export function bgStyle(b) {
  if (b && b.indexOf('data:') === 0) return 'url(' + b + ') center/cover no-repeat'
  if (b) {
    const p = BGS.find((x) => x.id === b)
    return p ? p.css : DEFAULT_BG
  }
  return DEFAULT_BG
}

export { songs, AVATARS, BGS, LYRICS, fmt }
