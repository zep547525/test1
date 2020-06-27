<template>
  <div id ="vip">
    <p>{{msg}}</p>
  </div>
</template>

<script>
  export default {
    name: 'vip',
    data () {
      return {
        msg:"sdsd"
      }
    }
    //,
    // created() {
    //   this.$axios.get('getlunbo')
    //     .then(res=>{
    //       this.imgs = res.data.message;
    //     console.log(res.data.message);
    //   })
    //   .catch(err=>{
    //     console.log('')
    //   })
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
