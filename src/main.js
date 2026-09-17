import { createApp } from 'vue'
import App from './App.vue'

// 所有样式都拆成独立 css 文件，在这里统一引入
import './styles/variables.css'
import './styles/base.css'
import './styles/login.css'
import './styles/layout.css'
import './styles/songlist.css'
import './styles/profile.css'
import './styles/nowplaying.css'
import './styles/player.css'

createApp(App).mount('#app')
