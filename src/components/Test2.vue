<template>
  <div >
    <h1>vue的世界！</h1>
    <p> {{ message }} </p>
  </div>
</template>

<script>

export default {
      data() {
          return {
              message: "message",
          };
      },

      created() {
          this.$api.test.test().then((res) => {
              console.log(res)
          }).catch((err) => {
              console.log('err')
              console.log(err)
          })
      }
  };

</script>
