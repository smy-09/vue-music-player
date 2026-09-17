// 读取本地图片 -> 等比压缩 -> 转成 base64（避免 localStorage 超限）
export function pickImage(file, max, callback) {
  if (!file) return
  if (file.type.indexOf('image/') !== 0) {
    alert('请选择图片文件')
    return
  }
  if (file.size > 8 * 1024 * 1024) {
    alert('图片过大，请选择 8MB 以内的图片')
    return
  }
  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      const scale = Math.min(1, max / Math.max(img.width, img.height))
      const w = Math.max(1, Math.round(img.width * scale))
      const h = Math.max(1, Math.round(img.height * scale))
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = '#0e0f1a'
      ctx.fillRect(0, 0, w, h)
      ctx.drawImage(img, 0, 0, w, h)
      callback(canvas.toDataURL('image/jpeg', 0.85))
    }
    img.onerror = () => alert('图片解析失败，换一张试试')
    img.src = e.target.result
  }
  reader.onerror = () => alert('读取文件失败')
  reader.readAsDataURL(file)
}

// 秒 -> m:ss
export function fmt(s) {
  s = Math.floor(s || 0)
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')
}
