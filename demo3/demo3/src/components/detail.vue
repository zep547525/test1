<template>
  <div class="detail">
    <Navbar title="楼盘详情" />
    <div class="item">
      <p>{{detail.title}}</p>
        <div class="items">
          <span>{{detail.click}}次点击</span>
          <span>分类:民生经济</span>
          <span>添加时间:{{detail.add_time | converTime("YYYY-MM-DD")}}</span>
        </div>
    </div>
    <div style="margin:5px 0px;"><hr/></div>
    <div v-html="detail.content"></div>
  </div>

</template>

<script>
  let detail = {id:13,title:"北京小户型全国619楼盘一房一价秀出天际!细看恒大诚意背后的经营哲学",click:"1",content:"<div class=\"entry-inner\">\n" +
      "  <div><img src=\"http://beijing.58fangchan.cn/wp-content/uploads/2020/03/18.jpg\" alt=\"新城房屋出租\" style=\"width:100%;\"></div>\n" +
      "  <p>「北京小户型」</p>\n" +
      "  <p>左手口碑，右手功绩，两手如果都能瓮中捉鳖，这该当是一切企业都想到达的抱负形态。究竟结果赢利又赚名声的活儿，谁都情愿干。</p>\n" +
      "  <p>可是真的到了理想里，要满意花费群体差别种别的请求，还要面临前有追后有赶的行业合作，失实两手难以同时握拳。</p>\n" +
      "  <p>贸易江湖里，真正能把二者完美无缺分离的，要数恒年夜团体的许老板了。3月18日，许老板又出绝招，亮出了天下619个网上售房的<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"楼盘\">楼盘</a></span><span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"价钱\">价钱</a></span>，引患上业界一片哗然，但让购房者们尝到了别样的长处。堪称即赢了口碑，又赚了功绩，样样都良好！</p>\n" +
      "  <p class=\"pi\">\n" +
      "  </p><p>1</p>\n" +
      "  <p>恒年夜，一个要将行业营销划定规矩推翻究竟的房企</p>\n" +
      "  <p>关于<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"房产\">房产</a></span>来讲，今时昔日，购房者最关怀的仍然是价钱。价钱盘踞，实质上便是心智的盘踞，</p>\n" +
      "  <p>3月的恒年夜堪称秀出天涯！3月18日，恒年夜颁布发表到场“网上<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"卖房\">卖房</a></span>”勾当的619个楼盘一切优惠房源价钱，都正在“恒房通”片面地下。这代表着，你没有正在需求到处奔跑找干系，只要要动动小手，就可以正在恒房通APP上看到每一个房源的实在价钱。<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"买房\">买房</a></span>今后辞别头昏眼花的扣头数字，只能说，恒年夜卖房的朴拙超越了人们的设想。</p>\n" +
      "  <p>现实上，恒年夜的一系列立异办法，就好像杨宗纬的那首《洋葱》同样，一层一层往下剥，你就会发明恒年夜那颗热诚炽热的至心。</p>\n" +
      "  <p>先是正在方才过来的2月，恒年夜片面施行网上卖房，经过恒房通平台领先完成了网上看房、引荐及认购等一站式效劳，并推出多项优惠政策。紧接着正在3月，恒年夜又颁布发表将片面晋级线上营销形式，打出78折及3000秒赚35000的福利政策。</p>\n" +
      "  <p>让全平易近都到场到恒年夜的让利狂欢中，配合揭开<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"地产\">地产</a></span>新十年的汗青年夜幕。</p>\n" +
      "  <p>2</p>\n" +
      "  <p>恒年夜，一个最深谙订定运营战略的房企</p>\n" +
      "  <p>恒年夜许家印的这一系列政策，不只一环扣一环，还包含别样的运营哲理。用战国期间贸易年夜神白圭的运营哲学来讲便是：“人弃我取，人取我与。”</p>\n" +
      "  <p>复杂来讲，正在歉收时节之时囤货，正在颗粒无收时售出。凭仗对于季节的判别，获得了丰富利润。而假如再将好名声传播江湖，叠加效应堪称简直倍数的增加。</p>\n" +
      "  <p>细究恒年夜“网上打折卖房”，之以是年夜获乐成，患上益于营销组合拳的精准无效，但其同样成就了<span class=\"wp_keywordlink\"><a href=\"http://beijing.58fangchan.cn\" title=\"房地产\">房地产</a></span>行业独一无二的创举：</p>\n" +
      "  <p>逆势之下，许老板凭仗运营哲学率领恒年夜凸起重围，经过一系列强势扣头、嘉奖安慰，将购房人群少量吸收过去。而这些优惠政策又与潜伏购房人群，和非购房人群停止了得当的需要婚配，从而完成了将优惠盈利转化为极高的流量保存率。</p>\n" +
      "  <p>既取得公道利润，又博得流量口碑，这是白圭的运营哲学，也是恒年夜这次线上购房的营销逻辑。</p>\n" +
      "  <p>复盘恒年夜一起以来的生长之路，就没有难了解，计谋上的灵敏与大胆，战术上的灵敏与多变，恰是恒年夜一起以来可以旗开得胜，誊写一个又一个贸易奇观的本源地点。而正在疫情包围下，恒年夜逆市包围，则是预料当中的事罢了。</p>\n" +
      "  <p>           后果图       云台山恒年夜摄生谷  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">7500</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>北京周边焦作·云台山5A游览景色区 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2019年08月18日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 二居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |77-199 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 396479 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     花圃洋房           叠拼       投资地产    游览地产             </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有16人报名   立刻报名        </p>\n" +
      "  <p>                北京恒年夜将来之光  正在售           </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">9500</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>航空港区领事馆区鄱阳湖路与荆州路交会处 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2019年12月29日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 二居 </em>    <em class=\"ju1 \"> 三居 </em>       <em class=\"ju1\"> |77-107 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 406832 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第       小高层    高层      </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有30人报名   立刻报名        </p>\n" +
      "  <p>                新郑恒年夜悦龙湾  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">6500</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>新郑郑新疾速路与新村落小道交会处东侧 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2018年09月24日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |111-165 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 351823 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第         板楼       中式地产    宜居生态地产     </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有38人报名   立刻报名        </p>\n" +
      "  <p>           后果图       北京恒年夜摄生谷  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">7600</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>荥阳荥泽小道与悦来西路穿插口 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2018年11月25日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |110-178 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 383013 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第       小高层       宜居生态地产     </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有11人报名   立刻报名        </p>\n" +
      "  <p>                恒年夜悦龙台  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">30000</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>郑东新区龙湖外环路与龙翔八街交会处 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2018年03月24日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |134-200 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 168202 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第         高层    板楼       公场地产    宜居生态地产       </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有57人报名   立刻报名        </p>\n" +
      "  <p>                北京恒年夜城  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">14000</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>高新区西三环北延与三全路交会处西约500米 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2019年10月21日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 二居 </em>    <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |82-143 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 191420 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第       高层    板楼       公场地产    名企盘     </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有69人报名   立刻报名        </p>\n" +
      "  <p>           后果图       恒年夜金碧全国半城湖  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">6000</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>平原新区长江小道与太行小道交汇处东北角 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2018年05月27日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |99-228 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 333425 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第         高层       湖景地产    名企盘     </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有20人报名   立刻报名        </p>\n" +
      "  <p>           后果图       郑开恒年夜将来城  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">9500</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>郑东新区开封自贸区郑开小道与十六大巷交汇处 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2017年07月22日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 一居 </em>    <em class=\"ju1 \"> 二居 </em>    <em class=\"ju1 \"> 三居 </em>         <em class=\"ju1\"> |37-144 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 370378 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第               板楼    多层          </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有3人报名   立刻报名        </p>\n" +
      "  <p>           后果图       郑东恒年夜文明游览城  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">7500</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>北京周边开封自贸区郑开小道二十二大巷路北 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2019年05月01日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>       <em class=\"ju1 \"> 二居 </em>    <em class=\"ju1 \"> 三居 </em>    <em class=\"ju1 \"> 四居 </em>       <em class=\"ju1\"> |82-179 m² </em>    <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 370377 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第         板楼    多层           公场地产    游览地产       </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有25人报名   立刻报名        </p>\n" +
      "  <p>           后果图       恒年夜嵩岳桃花源  正在售                </p>\n" +
      "  <p class=\"price\"> <em class=\"num\">8200</em>元/平方米</p>\n" +
      "  <p class=\"addr-p\"> <label style=\"float: left\">楼盘地点：</label>登封少林小道与嵩山路交会处 <em class=\"iconfont\"></em>检查舆图 </p>\n" +
      "  <p> <label>收盘工夫：</label>2019年05月04日 <label class=\"ms\">产权：</label>70年 </p>\n" +
      "  <p class=\"main-log\"> <label style=\"float: left\">主力户型：</label>     <em class=\"ju1 \">暂无</em>     <em class=\"iconfont\"></em>局部户型 </p>\n" +
      "  <p>  <label>400 德律风：</label>  400-032-4608 转 387323 <em class=\"iconfont\"></em>微信扫码拨打     微信扫码 俭省您的拨号工夫       </p>\n" +
      "  <p>     平凡室第             多层       宜居生态地产     </p>\n" +
      "  <p>       我要看房：近期看房勾当，楼盘优惠信息告诉我  已经有50人报名   立刻报名        </p>\n" +
      "  <p>「北京小户型」</p>\n" +
      "</div>"};
    export default {
        name: "detail",
      data(){
          return{
            detail:detail
          }
      }
      // create(){
      //    let id  = this.$route.query.id;
      //   this.$axios.get('getnews/${id}')
      //       .then(res=>{
      //         this.newsList = res.data.message;
      //       console.log(res.data.message);
      //     })
      //     .catch(err=>{
      //       console.log('')
      //     })
      // }

    }
</script>

<style scoped>
  .detail{
    margin-bottom: 55px;
  }
  .item p{
  /*text-align: center;*/
    font-size: 20px;
    color:blueviolet;
    margin-top:5px;
  }
  .items span{
   text-align: center;
    margin-left: 10px;
    color:grey;
  }
  .items{
    margin:5px 0px;
  }
</style>
