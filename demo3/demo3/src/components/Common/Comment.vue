<template>
  <div>
  <textarea rows="15">
    dfdsfsdfdsfds
  </textarea>
    <mt-button type="primary"  size="large" @click="" >提交</mt-button>
  <ul>
    <li>sdsds</li>
    <li>sdsd</li>
    <li>aadsads</li>
    <li> <mt-button type="danger"  size="large" @click="">继续加载</mt-button></li>
  </ul>

    <mt-button plain>plain</mt-button>
    <mt-button icon="more">more</mt-button>
  </div>
</template>

<script>

    export default {
      name: "Comment",
      props:['cid'],
      data(){
          return {
            page:1,
            comments:[],
            commentContent:''
          }

      },
      // methods:{
      //   // commentshandel(){
      //   //   this.$axios.post("postcomment/$(this.cid)",'content='+this.commentContent)
      //   //   .then(res=>{
      //   //     if(res.data.message="xcxc"){
      //   //       this.loadMore(1);
      //   //     }
      //   //
      //   //   })
      //   //   .catch(err=>{
      //   //
      //   //   })
      //   //
      //   // }
      //   // loadMore(page){
      //   //   this.$axio.get("getcomments/${this.cid}?pageindex=${this.page}")
      //   //   .then(res=>{
      //   //     if(res.data.message.length==0){
      //   //       this.$toast('没有数据');
      //   //     }
      //   //     if(page){
      //   //       this.comments=this.comments.concact(res.data.message)
      //   //     }else {
      //   //       this.comments = res.data.message;
      //   //     }
      //   //    this.page++;
      //   //   })
      //   //   .catch(err=>{
      //   //
      //   //   })
      //   // }
      // },
      created() {
        // this.loadMore();
        console.log(this.cid);
      }
    }
</script>

<style scoped>
  textarea{
    width:98%;
    resize:none;
    /*box-sizing:content-box;*/
  }
</style>
