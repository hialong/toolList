<script>
</script>
<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="125" height="125"/>
      some tools for hialong
      <div class="github-corner" aria-label="View source on Github">
        <a href="https://github.com/hialong">
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style="fill:#25dedb; color:rgba(5,227,142,0.99);"
            aria-hidden="true"
          >
<!--            <rect width="100%" height="100%" fill="#000000" /> &lt;!&ndash; 这里设置为黑色作为示例，你可以更改为其他深色 &ndash;&gt;-->
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          </svg>
        </a></div>
    </header>
  </div>
  <el-descriptions title="工具list" border>
    <el-descriptions-item label="工具">
      <el-tag>tool</el-tag>
      <router-link to="/genpic">生成图片(阅读证)并下载</router-link>
    </el-descriptions-item>
    <el-descriptions-item label="动画">
      <el-tag>tool</el-tag>
      <router-link to="/boxCartoon">一个简单的vue动画盒子的折叠</router-link>
    </el-descriptions-item>
    <el-descriptions-item label="资源" >
      <el-tag>resource</el-tag>
      <a href="http://8.136.96.241/user/login" target="_blank">个人网址（包括博客等）</a>
    </el-descriptions-item>
  </el-descriptions>
</template>
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>