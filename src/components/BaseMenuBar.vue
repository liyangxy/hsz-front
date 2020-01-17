<template>
    <div class="header-main">
        <img src="../assets/logo.png" alt="" class="logo">
        <span class="title">加盟商管理系统</span>
    </div>
</template>
<style lang="scss" scoped>
    .header-main {
        display: flex;
        justify-content: flex-start;
        .logo {
          display: block;
          border: 0;
          padding: 7px 8px 8px 40px;
          margin-top: 8px;
          height: 45px;
        }
        .title {
          display: block;
          font-size: 18px;
          color: #274A59;
          margin-top: auto;
          margin-bottom: auto;
          text-align: center;
        }
    }
</style>
<script>
    export default {
        name: "BaseMenuBar",
    };
</script>
