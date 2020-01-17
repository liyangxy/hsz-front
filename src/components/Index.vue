<template>
  <el-container>
      <el-header height="65px">
          <base-menu-bar></base-menu-bar>
      </el-header>
  <el-container>
      <el-aside width="300px">
            <base-aside></base-aside>
      </el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer height="80px">Footer</el-footer>
    </el-container>
  </el-container>
</el-container>
</template>

<style>
  .el-header, .el-footer {
    background-color: #dce3e6;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #3c3c3c;
  }

  .el-aside {
    background-color: #c2cacc;
    color: #333;
    text-align: center;
    line-height: 2000px;
  }
rgb(251, 62, 130)
  .el-main {
    background-color: #95c1e9;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<script>
    import BaseMenuBar from '@/components/BaseMenuBar.vue';
    import BaseAside from '@/components/BaseAside.vue';
    // import BaseToTop from '@/components/BaseToTop.vue';
    // import todotips from '@/components/BaseTodoTips.vue';

    export default {
        name: 'Index',
        components: {
            BaseMenuBar,
            BaseAside,
            // BaseToTop,
            // todotips
        }
    };
</script>
