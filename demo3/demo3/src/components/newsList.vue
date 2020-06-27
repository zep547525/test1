<template>
  <div id="news">
    <Navbar title="楼盘列表" />
  <div id ="newsList">
    <ul>
      <li v-for="(news,index) in newsList" :key='news.id'>
        <div>
          <router-link :to="{name:'detail',query:{id:news.id}}">
            <div class="news">
              <img :src="news.img_url">
            </div>
            <div class="content">
              <div>
              <p class="title">{{news.title}}</p>
              <div class="new-desc">
                <p class="summary">{{news.zhaiyao}}</p>
                <p>
                  <span class="praise">点赞数:{{news.click}}</span>
                  <span class="praise">发表时间{{news.add_time | converTime('YYYY-MM-DD')}}</span>
                </p>
              </div>
              </div>
            </div>
          </router-link>
        </div>

      </li>
    </ul>
  </div>
  </div>
</template>
<script>
  import src1 from '../assets/timg (2).jpg'
  import src2 from '../assets/timg (1).jpg'
  import src3 from '../assets/timg (3).jpg'
  import src4 from '../assets/timg.jpg'
  import src5 from '../assets/timg (4).jpg'
  import src6 from '../assets/timg (5).jpg'
  import src7 from '../assets/timg (6).jpg'
  import src8 from '../assets/timg (7).jpg'
  import src9 from '../assets/timg (8).jpg'
  import src10 from '../assets/timg (8).jpg'

  var newList=[
    {id:1,title:"一季度多家房产",click:1,zhaiyao:"北京小户型全国619楼盘一房一价秀出天际!细看恒大诚意背后的经营哲学",img_url:src1},
    {id:2,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"买房还是炒股,2020年买房无法拒绝的理由",img_url:src2},
    {id:3,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src3},
    {id:4,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src4},
    {id:5,title:"二季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src5},
    {id:6,title:"二季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src6},
    {id:7,title:"三季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src7},
    {id:8,title:"三季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src8},
    {id:9,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src9},
    {id:10,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src10},
    {id:11,title:"一季度多家房产",add_time:"2015-4-12",click:1,zhaiyao:"sdsdsds",img_url:src1}];
  export default {
    name: 'newsList',
    data () {
      return {
        newsList:newList
      }
    }
    // created() {
    //   this.$axios.get('getnewslist')
    //     .then(res=>{
    //       this.newsList = res.data.message;
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
  li{
    width:100%;
    height:120px;
    border-bottom:1px solid #cccccc;
    font-size:12px;
    clear: both;
  }
  .newList ul li{
    position: relative;
  }
  .news {
   float:left;
    width:40%;
    height:120px;
    /*margin-left:5px;*/
    padding:5px 5px;
    box-sizing: border-box;
  }
  .news img{
    width:100%;
    height:100%;

  }
  .title{
    font-size: 14px;
    font-weight: bold;
    color:black;
  }
  .content{
    height:100px;
    float:left;
    padding-top:20px;
    padding-left:10px;
    padding-bottom: 5px;
    width:60%;
    box-sizing: border-box;
    display: flex;
    align-content: center;
    align-items: center;
  }
  .summary{
    margin-bottom: 10px;
    color:black;
  }
  .new-desc{
    word-wrap:break-word;
    margin-top:10px;
  }
  .praise{
    margin-right: 20px;
    color:green;
  }
  #news{
    margin-bottom: 55px;
  }



</style>
