<script>
// 获取所有的图片

export default {
  data() {
    let cwidth = 500
    let cheight = 500
    let cx = 160
    let cy = 230
    return {
      cwidth,
      cheight,
      cx,
      cy
    }
  },
  mounted() {
    //获取本地图片
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
    const imgUnderCanvas = new Image();
    imgUnderCanvas.onload = () => {
      ctx.drawImage(imgUnderCanvas, 0, 0, imgUnderCanvas.width, imgUnderCanvas.height)
    }
    imgUnderCanvas.src = './readPic.png'
  },
  methods: {
    genPattern() {
      return new Promise((resolve, reject) => {
        //获取本地图片
        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext('2d');
        const imgUnderCanvas = new Image();
        imgUnderCanvas.onload = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(imgUnderCanvas, 0, 0, imgUnderCanvas.width, imgUnderCanvas.height)
          resolve();
        }
        imgUnderCanvas.onerror = () => {
          reject();
        }
        imgUnderCanvas.src = './readPic.png'
      })

    },
    downloadPic: function (name) {
      return new Promise((resolve, reject) => {
        // 把canvas图片下载
        const link = document.createElement('a')
        link.href = document.getElementById('canvas').toDataURL()
        link.download = name? name : 'canvas.png'
        link.click()
        resolve();
      })

    },
    genProdAndFont: function (reader, ctx, file) {
      return new Promise((resolve, reject) => {
        reader.onload = (e) => {
          const img = new Image()
          img.onload = () => {
            ctx.drawImage(img, 0, 0, 250, 258, 185, 240, 250, 250)
            // 加名字
            ctx.fillStyle = '#ff0000';
            ctx.font = 'bold 30px Arial';
            const text = file.name.slice(0, -4)
            console.log(text, 'name')
            let xoffset = 262
            if (text.length == 2) {
              xoffset = 280
            }
            ctx.fillText(text, xoffset, 530)
            resolve();
          }
          img.onerror = () => {
            reject();
          }
          img.src = e.target.result
        }
      })
    },
    async genPicture(val) {
      const files = val.target.files
      console.log(files)
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      for (let i = 0; i < files.length; i++) {
        await this.genPattern()
        const file = files[i]
        const reader = new FileReader()
        // 把文件变成url，通过canvas展示
        reader.readAsDataURL(file)
        await this.genProdAndFont(reader, ctx, file)
        await this.downloadPic(file.name);
        // 暂停x秒,给浏览器一点喘息空间
        await new Promise(resolve => setTimeout(resolve, 500));
        ctx.clearRect(0, 0, canvas.width, canvas.height)

      }
    }
  }
}
</script>

<template>
  <input type="file" multiple id="fileInput" @change="genPicture"/>
  <canvas id="canvas" width="600px" height="900px"></canvas>
</template>

<style scoped>

</style>
