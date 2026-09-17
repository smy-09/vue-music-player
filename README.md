# 酷狗音乐 Web Player（Vue 3 版）

由单文件 `index.html` 改造而来的 Vue 3 工程，样式全部拆到独立的 `.css` 文件中。

## 快速开始

```bash
npm install     # 安装依赖（国内建议加 --registry=https://registry.npmmirror.com）
npm run dev     # 启动开发服务器，默认 http://localhost:5173
npm run build   # 打包到 dist/
npm run preview # 预览打包结果
```

## 目录结构

```
vue-music-player/
├─ index.html                 入口 HTML
├─ package.json
├─ vite.config.js
└─ src/
   ├─ main.js                 应用入口，统一引入所有 CSS
   ├─ App.vue                 根组件：登录页 / 主界面切换
   ├─ store.js                全局响应式状态（reactive + actions，相当于轻量 Pinia）
   ├─ data/
   │  └─ songs.js             歌曲、歌词、预设头像 / 背景数据
   ├─ utils/
   │  ├─ player.js            单例 Audio + 播放控制
   │  └─ image.js             图片压缩、时间格式化
   ├─ styles/                 ★ 所有样式（原本内联在 HTML 里）
   │  ├─ variables.css        CSS 变量（颜色 / 圆角）
   │  ├─ base.css             重置、背景层、滚动条、Toast
   │  ├─ login.css            登录页
   │  ├─ layout.css           顶栏、侧边栏、内容区、横幅
   │  ├─ songlist.css         歌曲列表
   │  ├─ profile.css          个人资料、外观设置
   │  ├─ nowplaying.css       正在播放面板、唱片、歌词
   │  └─ player.css           底部播放条
   └─ components/
      ├─ LoginPage.vue        登录（不校验，任意内容可进）
      ├─ TopBar.vue           顶栏 + 搜索
      ├─ SideBar.vue          侧边导航
      ├─ HomeView.vue         推荐页
      ├─ FavView.vue          我喜欢
      ├─ ProfileView.vue      个人资料（v-model 表单）
      ├─ ThemeView.vue        外观设置（头像 / 背景）
      ├─ SongList.vue         歌曲列表（被首页和收藏页复用）
      ├─ NowPlaying.vue       唱片 + 歌词
      ├─ PlayerBar.vue        底部播放控制
      └─ Toast.vue            轻提示
```

## 功能

- 登录页不校验账号密码，任意内容（含留空）或点击「跳过」即可进入；刷新保持登录态
- 个人资料：昵称 / 性别 / 生日 / 城市 / 邮箱 / 签名，v-model 双向绑定，保存后写入 localStorage
- 更换头像：8 个预设 + 本地上传（自动压缩到 256px）
- 更换背景：6 套预设渐变 + 本地上传（压缩到 1440px）
- 播放器：播放 / 暂停、上下首、进度拖拽、音量、顺序 / 随机 / 单曲、搜索、收藏
- 歌词随播放进度高亮并自动滚动

## 说明

- 歌曲使用的是免费示例音频，需要联网才能播放
- 个人资料、头像、背景保存在浏览器 localStorage，换浏览器或清缓存会丢失
