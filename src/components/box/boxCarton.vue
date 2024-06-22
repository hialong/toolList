<script setup>

</script>

<template>
<!--  思路上先画出来六个面，然每个面做动画-->
  <div class="boxBody">
    <div class="box">
      <div class="box-end left">左面</div>
      <div class="box-end right">右面</div>
      <div class="box-end backend">背面</div>
      <div class="box-end bottom">底面</div>
      <div class="box-end frontend">
        <div class="box-end frontendBegin">前面</div>
        <div class="box-end frontendend">上面</div>
      </div>

    </div>
  </div>

</template>

<style scoped>
.boxBody {
  height: 100%;
  perspective: 2000px;
  transform-style: preserve-3d;
}
.box{
  width: 200px;
  height: 200px;
  margin: 200px auto;
  transform-style: preserve-3d;
  transform: rotate3d(1,1,0,45deg);
  animation: fold-box 3s ease-in-out 7s infinite forwards; /* 采用ease-in-out的缓动函数，延迟7秒后开始，并且无限循环播放。forwards表示动画完成后保持最后一个关键帧的状态。 */
}
.box-end{
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  color: #ffffff;
  font-size: 20px;
}
.box-end.left{
  background: #ff0000;
  transform: translate3d(-200px,0px,-100px);
  transform-origin: 100% 50%;
  animation: left-ani 3s linear 2s 1 forwards;
}
.box-end.right{
  background: #00ff00;
  transform: translate3d(200px,-200px,-100px);
  transform-origin: 0% 50%;
  animation: right-ani 3s linear 2s 1 forwards;
}
.box-end.backend{
  background: #0000ff;
  transform: translate3d(0px,-600px,-100px);
  transform-origin: 50% 100%;
  animation: back-ani 3s linear 2s 1 forwards;
}
.box-end.bottom{
  background: #ffff00;
  transform:translate3d(0px,-600px,-100px);
}
.box-end.frontend{
  transform-style: preserve-3d;
  background: chocolate;
  transform: translate3d(0px,-600px,-100px);
  transform-origin: 50% 00%;
  animation: frontend-ani 3s linear 2s 1 forwards;
}
.box-end.frontendBegin{
  background: #ff00ff;
  animation: frontBegin-ani 3s linear 2s 1 forwards;
}
.box-end.frontendend{
  background: #00ffff;
  transform-origin: 50% 0%;
  animation: frontendend-ani 3s linear 2s 1 forwards;
}
@keyframes left-ani {
  100%{
    transform: translate3d(-200px,0px,-100px) rotate3d(0,1,0,90deg);
  }
}

@keyframes right-ani {
  100%{
    transform: translate3d(200px,-200px,-100px) rotate3d(0,1,0,-90deg);
  }
}
@keyframes back-ani {
  100%{
    transform: translate3d(0px,-600px,-100px) rotate3d(1,0,0,-90deg);
  }
}
@keyframes frontend-ani {
  100%{
    transform: translate3d(0px,-600px,-100px) rotate3d(1,0,0,90deg);
  }
}
@keyframes frontBegin-ani {
  100%{
    background-color:rgba(128,0,128,0) ;
  }
}
@keyframes frontendend-ani {
  100%{
    transform: rotate3d(1,0,0,90deg);
  }
}

@keyframes fold-box {
  0% {
    /* 初始状态，整体旋转 */
    transform: rotate3d(1,1,0,45deg);
  }
  50% {
    transform: rotate3d(1,0,0,350deg);
  }
  70% {
    /* 盒子状态 */
    transform: rotate3d(1,1,0,-300deg);
  }
  100% {
    /* 盒子状态 */
    transform: rotate3d(1,1,0,45deg);
  }
}
</style>
