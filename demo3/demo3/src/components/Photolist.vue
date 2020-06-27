<template>
  <div class="photoList">
    <Navbar title="图文列表" />
    <div class="category-list">
      <ul>
        <li v-for="(category,index) in categoryList" @click="categoryHandler(category.id,index)">
          <a v-bind:class="{ active:index==currentIndex }">{{category.title}}</a>
        </li>
      </ul>
    </div>
    <div class="photo-list">
      <ul>
        <li v-for=" (image,index) in imageList">
          <a>
<!--          <img :src="image.img_url"> -->
            <img v-lazy="image.img_url">
<!--            <img src="../assets/timg (3).jpg">-->
          <div>{{image.zhaiyao}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import src1 from '../assets/timg (3).jpg'
  import src2 from '../assets/timg (2).jpg'
  import src3 from '../assets/timg (4).jpg'
  import src4 from '../assets/timg (5).jpg'
  import src5 from '../assets/timg (6).jpg'
  import src6 from '../assets/timg (7).jpg'
  import src7 from '../assets/jia.jpg'
  import src8 from '../assets/jia1.jpg'
  import src9 from '../assets/jia2.jpg'
  let categoryList =[{id:0,title:"全部"},{id:1,title:"家具生活"},{id:2,title:"摄影设计"},
    {id:3,title:"明星美女"},{id:4,title:"空间设计"},{id:5,title:"体育运动"},{id:6,title:"户型装饰"},{id:7,title:"摄影学习"},{id:8,title:"广告摄影"}];
  let  imageList = [{id:1,img_url:src1,zhaiyao:"东四环楼盘,南五环楼盘,北京四环楼盘,找靠谱的租房网站,真实房源,一键预约,方便快捷,您的满意之选,选中心仪房源,网上电话预约看房 , 24小时服务..."},{id:2,img_url:src2,zhaiyao:"【平谷】新华联YOYO悦城2号楼2-12室（复式底商）【平谷】新华联YOYO悦城2号楼2-12室（复式底商）"},{id:3,img_url:src3,zhaiyao:"【平谷】新华联YOYO悦城2号楼2-12室（复式底商）"},{id:4,img_url:src4,zhaiyao:"【平谷】新华联YOYO悦城2号楼2-12室（复式底商）"},{id:5,img_url:src5,zhaiyao:"【平谷】新华联YOYO悦城2号楼2-12室（复式底商）【平谷】新华联YOYO悦城2号楼2-12室（复式底商）"}];
  let  imageList1 = [{id:1,img_url:src7,zhaiyao:"东四环楼盘,南五环楼盘,北京四环楼盘,找靠谱的租房网站,真实房源,一键预约,方便快捷,您的满意之选,选中心仪房源,网上电"},{id:2,img_url:src8,zhaiyao:"东四环楼盘,南五环楼盘,北京四环楼盘,找靠谱的租房网站,真实房源,一键预约,方便快捷,您的满意之选,选中心仪房源,网上电"},{id:3,img_url:src9,zhaiyao:"东四环楼盘,南五环楼盘,北京四环楼盘,找靠谱的租房网站,真实房源,一键预约,方便快捷,您的满意之选,选中心仪房源,网上电"}];
  let  imageList2 = [{id:1,img_url:src5,zhaiyao:"东四环楼盘,南五环楼盘,北京四环楼盘,找靠谱的租房网站,真实房源,一键预约,方便快捷,您的满意之选,选中心仪房源,网上电"}];
    export default {
        // name: "Photolist"
      data(){
        return{
          categoryList:categoryList,
          imageList:imageList,
          currentIndex:0
        }
      },
      methods:{
        // loadImgByCategroyId(id){
        //   this.$axios.get('getimges/'+id).then(res=>{
        //     this.imageList = res.data.message;
        //   })
        //     .catch(err=>{
        //     console.log('图片信息获取失败',err);
        //     })
        // }
        categoryHandler(id,index){
          this.currentIndex=index;
          this.$router.push({name:'photo_list',params:{categoryId:id}});
         // console.log(index);
        }
      },
      created() {
        //获取图片列表信息
       // this.loadImgByCategroyId(0)；
        //分类信息获取
        // this.$axios.get('').then(res=>{
        //   this.categoryList = res.data.message;
        // })
        //   .catch(err=>{
        //   console.log('分类信息获取失败',err);
        //   })
      },
      //组件内导航
      beforeRouteUpdate(to,from,next){
        console.log(to,from,next);
        console.log(to.params.categoryId);
        // this.loadImgByCategroyId(to.params.categoryId);
        if(to.params.categoryId ===1){
          console.log(1);
          this.imageList=imageList1;
          console.log(this.imageList);
        }
        if(to.params.categoryId ===2){
          this.imageList=imageList2;
        }
        if(to.params.categoryId ===0){
          this.imageList=imageList;
          console.log("dsdsds");
        }
        if(to.params.categoryId ===3){
          // this.imageList=imageList;
          // console.log("dsdsds");
          this.$toast({
            message:'没有图片',
            iconClass:'iconfont icon-shibail',
            duration:1000
          })
        }
        next();
      },
      // berforeRouterEnter(to,from,next){
      //   next(vm=>{
      //     vm.loadImgByCategroyId(to.params.categoryId);
      //   })
      // }




    }
</script>

<style scoped>
  .photo-list{
    margin-bottom: 55px;
  }
  .category-list{
    overflow: hidden;
  }
  .category-list ul{
    width:100%;
    height:40px;
    overflow: hidden;
    overflow-x:scroll;
    white-space:nowrap;
  }
  /*//滚动条不显示*/
  ::-webkit-scrollbar {
    display: none;
  }
  .category-list ul li{
    width:25%;
    height:100%;
    font-size: 18px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    color:blue;
    /*font-family:华文楷体;*/
    font-weight: bolder;
  /*margin: 10px 10px;*/
  }
  .category-list ul li a{
    font-size: 16px;
    text-decoration: none;
    /*margin: 10px 10px;*/
  }
  .category-list ul li a.active{
    color:red;
  }
  .photo-list ul {
    width:100%;
  }
  .photo-list ul  li{
    width:100%;
    height:220px;
    /*border:1px solid red;*/
    position:relative;
    margin:3px 0px;
  }
  .photo-list ul  img {
    width:100%;
    height: 100%;
  }
  .photo-list ul  li div{
    padding:3px 3px;
    position:absolute;
    bottom:0px;
    color:white;
    word-break: break-all;
    /*background-color:lightseagreen;*/
    background-color: grey;
    background-color:rgba(0,0,0,0.1);
    font-size: 15px;
  }
  image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }


</style>
