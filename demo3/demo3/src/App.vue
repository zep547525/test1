<template>
  <div id="app">
    <mt-header fixed title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <router-view/>

<!--    <mt-tabbar v-model="selected" fixed>-->
<!--      <mt-tab-item id="home">-->
<!--        <img slot="icon" src="./assets/6.png">-->
<!--        首页-->
<!--      </mt-tab-item>-->
<!--      <mt-tab-item id="vip">-->
<!--        <img slot="icon" src="./assets/1.png">-->
<!--        会员-->
<!--      </mt-tab-item>-->
<!--      <mt-tab-item id="shopcart">-->
<!--        <img slot="icon" src="./assets/2.png">-->
<!--        购物车-->
<!--      </mt-tab-item>-->
<!--      <mt-tab-item id="search">-->
<!--        <img slot="icon" src="./assets/server.png">-->
<!--        查找-->
<!--      </mt-tab-item>-->
<!--    </mt-tabbar v-model="selected">-->
    <ul class="local-nav">
      <li v-for="(item,index) in tabs">
        <router-link :to="item.router" active-class="activeClass" >
          <img :src=item.imgsrc>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import src1 from './assets/6.png'
  import src2 from './assets/1.png'
  import src3 from './assets/1.png'
  import src4 from './assets/1.png'
  var tabs =[
    {id:1,title:"首页",imgsrc:src1,router:{name:"home"}},
    {id:1,title:"会员",imgsrc:src2,router:{name:"vip"}},
    {id:1,title:"购物车",imgsrc:src3,router:{name:"shopcart"}},
    {id:1,title:"查找",imgsrc:src4,router:{name:"search"}}
  ]
export default {
  name: 'App',
  data(){
    return{
      selected:"",
      tabs:tabs



    }
  },
  watch:{
    selected:function(newV,oldV){
      console.log(newV);
      console.log(oldV);
      this.$router.push({name:this.selected});
    }
  }

}
</script>

<style scoped>
  .local-nav {
    width: 100%;
    background-color: white;
    /* border-radius: 10px; */
    box-shadow: 1px 1px 5px #888888;
    list-style: none;
    display: flex;
    overflow: hidden;
    position:fixed;bottom:0;
  }
  ul li {
    flex: 1;
    background-color: white;
  }
  .local-nav li a img{
    width:35%;

  }
  .local-nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    padding-top:5px;
    text-decoration: none;
  }
  .local-nav a span{
    padding:2px 2px;

  }
  .local-nav li a.link_active {
    background-color:pink;
  }
  .activeClass{
    background-color: red;
  }

</style>
