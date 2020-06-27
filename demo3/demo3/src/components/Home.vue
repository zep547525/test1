<template>
  <div id ="Home">
    <mt-swipe :auto="4000" style="height:200px;background-color:red;" id="swiper">
      <mt-swipe-item>
        <img src="../assets/bg1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/bg2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/bg3.jpg">
      </mt-swipe-item>
    </mt-swipe>
<!--    <MySwiper url="getUrl"/>-->
    <div class="list">
      <ul>
        <li v-for="(item,index) in list">
          <router-link :to="item.router">
            <img :src="item.src">
          </router-link>
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
    <div class="thumbs">
      <vue-preview :slides="thumbsList" class="imgPrev"></vue-preview>
    </div>
    <Comment :cid='$route.path'/>
  </div>
</template>

<script>
  import src1 from '../assets/7.png'
  import src2 from '../assets/8.png'
  import src3 from '../assets/9.png'
  import src4 from '../assets/10.png'
  import src5 from '../assets/11.png'
  import src6 from '../assets/12.png'
  import src7 from '../assets/7.png'
  import src8 from '../assets/8.png'
  import src9 from '../assets/9.png'
  var list =[
    {id:1,src:src1,title:"楼盘信息",router:{name:"news_List"}},
    {id:2,src:src2,title:"图文分享",router:{name:"photo_list",params:{categoryId:0}}},
    {id:3,src:src3,title:"商品展示",router:{name:"news_List"}},
    {id:4,src:src4,title:"资讯",router:{name:"news_List"}},
    {id:5,src:src5,title:"留言反馈",router:{name:"news_List"}},
    {id:6,src:src6,title:"联系我们",router:{name:"news_List"}},
    {id:1,src:src7,title:"新闻资讯",router:{name:"news_List"}},
    {id:2,src:src8,title:"图文分享",router:{name:"news_List"}},
    {id:3,src:src9,title:"商品展示",router:{name:"news_List"}}];
  let thumbsList=[{w: 600, h: 500, src:src1,msrc:src2},{w: 600, h: 500, src:src1, msrc:src2},{w: 600, h: 500, src:src5, msrc:src2}];
  export default {
    name: 'Home',
    data () {
      return {
        imgs:[],
        list:list,
        thumbsList:thumbsList
      }
    },
    created() {
      console.log(this.$route.path);
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
  #swiper img{
    width:100%;
    height:200px;
  }
  .list{
    width:100%;
    margin-top:10px;
  }
  .list ul{
    display:flex;
    flex-wrap:wrap;
    /*list-style: none;*/
  }
  .list ul li{
    width:33%;
    height:100px;
    text-align:center;
    font-size:14px;
  }
 #Home{
  margin-bottom: 55px;
  }
</style>
