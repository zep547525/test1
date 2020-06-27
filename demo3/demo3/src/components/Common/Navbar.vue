<template>
<!--  <div id="Navbar">-->
  <div class="header">
    <h3 @click='goBack' class="back"><</h3>
      <h3 class="desc_title">{{title}}</h3>
  </div>
<!--  </div>-->
</template>

<script>
    export default {
        name: 'Navbar',
        props:["title"],
        data(){
            return{

            }
        },
        methods:{
            goBack(){
              this.$router.go(-1);
            }
        }

    }
</script>

<style scoped>
.header{
  width:100%;
  height:40px;
  background-color:orange;
  position: relative;
  color:white;
  top:-1px;
}
  .back{
   position: absolute;
    left:20px;
    line-height: 40px;

  }
  .desc_title{
    text-align: center;
    margin:0 auto;
    line-height: 40px;
  }


</style>
