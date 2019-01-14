// 我的帖子页面
<template>
  <div class="article">
    <Header></Header>
    <div class="container">
        <div class="containerTop clearfix">
            <div class="topTags fll">
                <el-tag
                    v-for="(tag, id) in articletype"
                    :key="id"
                    @click.native="changeTag(id)"
                    :class=" id == currentId ? 'topTag tagSeleted' : 'topTag'"
                >
                    {{tag.type}}
                </el-tag>
            </div>
            <div class="topBtns flr clearfix">
                <div class="findArticle fll">
                    <input class="findInput" type="text" v-model="findForum" placeholder="请输入内容">
                </div>
                <div class="search fll">
                    <img class="searchIcon" draggable="false" src="../../../static/imgs/forum/sousuo.png">
                </div>
                <img @click="$router.push('/posted')" class="imgFabu flr" draggable="false" src="../../../static/imgs/forum/fabu.png">
            </div>
        </div>
    </div>
    <div class="bgBox">
        <div class="bgImg"></div>
        <div class="userBox">
            <img class="userIcon" draggable="false" :src="userInfo.icon">
            <div class="userName">{{userInfo.username}}</div>
        </div>
        <div class="userAction clearfix">
            <div class="actionBox fll mr80">
                <span class="mr17 actionSeleted">帖子</span>
                <span>{{userInfo.article}}</span>
            </div>
            <div class="actionBox fll mr80" @click="$router.push('/reply')">
                <span class="mr17">回复</span>
                <span>{{userInfo.reply}}</span>
            </div>
            <div class="actionBox fll mr80" @click="$router.push('/draft')">
                <span class="mr17">草稿箱</span>
                <span>{{userInfo.draft}}</span>
            </div>
            <div class="actionBox fll" @click="$router.push('/collect')">
                <span class="mr17">收藏</span>
                <span>{{userInfo.collect}}</span>
            </div>
            <div class="search flr">
                <el-input class="searchInput" type="text" placeholder="请输入内容"></el-input>
                <img class="searchIcon" draggable="false" src="../../../static/imgs/forum/search.png">
            </div>
        </div>
    </div>
    <div class="total">
        <div class="content">
            <div v-for="(item, index) in forumData" @click="$router.push('/detail')" :key="index" class="item clearfix">
                <div class="c-left fll">
                    <div class="cl-top">
                        <i>
                            <img class="typeImg" draggable="false" :src="item.icon">
                        </i>
                        <span>{{item.title}}</span>
                    </div>
                    <div class="cl-container">{{item.content}}</div>
                    <div class="cl-bottom clearfix">
                        <div class="clb-left fll clearfix">
                            <div class="b-letf fll clearfix">
                                <i class="fll">
                                    <img class="authorImg" draggable="false" src="../../../static/imgs/forum/touxiang.png">
                                </i>
                                <span class="bbrFont flr">{{item.author}}</span>
                            </div>
                            <div class="b-right fll clearfix">
                                <div class="fll">{{item.createdtime}}</div>
                                <div class="bbr fll">
                                    <span class="dayFont">{{item.comment}}天前</span>
                                </div>
                                <div class="bbr fll">
                                    <i>
                                    <img class="looknumImg" draggable="false" src="../../../static/imgs/forum/liulan.png">
                                    </i>
                                    <span class="bbrFont">{{item.looknum}}</span>
                                </div>
                                <div class="bbr fll">
                                    <i>
                                    <img class="likenumImg" draggable="false" src="../../../static/imgs/forum/dianzan1.png">
                                    </i>
                                    <span class="bbrFont">{{item.likenum}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="clb-right flr">
                            <div class="typeFont">{{item.classtype}}</div>
                        </div>
                    </div>
                </div>
                <div class="c-right flr">
                    <img src="../../../static/imgs/forum/fengmian.png" draggable="false">
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      userInfo: {
        username: "admin",
        icon: "../../../static/imgs/icon.jpeg",
        article: "1",
        reply: "2",
        draft: "3",
        collect: "4"
      },
      currentId: 0,
      articletype: [
        {
          id: 0,
          type: "全部"
        },
        {
          id: 1,
          type: "最新"
        },
        {
          id: 2,
          type: "最热"
        },
        {
          id: 3,
          type: "推荐"
        },
        {
          id: 4,
          type: "精选"
        }
      ],
      findForum: "",
      forumData: [
        {
          id: 1,
          type: "", //   1 精品贴   2 热门贴  3 推荐贴  4 普通贴
          title: "双旦有礼，一起来制作礼品啦！",
          content:
            "圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！",
          coverimg: "../../../static/imgs/forum/fengmian.png",
          icon: "../../../static/imgs/forum/re.png",
          author: "编程教师",
          createdtime: "3",
          commentnum: "141",
          looknum: "3524",
          likenum: "225",
          classtype: "Blockly"
        },
        {
          id: 2,
          type: "", //   1 精品贴   2 热门贴  3 推荐贴  4 普通贴
          title: "双旦有礼，一起来制作礼品啦！",
          content:
            "圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！",
          coverimg: "../../../static/imgs/forum/fengmian.png",
          icon: "../../../static/imgs/forum/jian.png",
          author: "编程教师",
          createdtime: "5",
          commentnum: "504",
          looknum: "5204",
          likenum: "445",
          classtype: "DouBao:bit"
        }
      ]
    };
  },
  methods: {
        changeTag(id) {
            this.currentId = id
        }
  }
};
</script>

<style lang='scss' scoped>
.article {
  min-width: 1920px;
  background: #f1f1f1;
}
.container {
  margin: 14px 170px 0;
  min-width: 1580px;
  background: #fff;
  border-radius: 10px;
  .containerTop {
    height: 90px;
    background: #f1f1f1;
    .topTags {
      margin-top: 32px;
      .topTag {
        min-width: 100px;
        height: 28px;
        line-height: 28px;
        color: #40cbf2;
        background: #f1f1f1;
        border: 1px solid #40cbf2;
        border-radius: 30px;
        text-align: center;
        margin-right: 28px;
        cursor: pointer;
      }
    }
    .topBtns {
      min-width: 630px;
      min-height: 28px;
      margin-top: 24px;
      .findArticle {
        width: 340px;
        min-width: 340px;
        height: 28px;
        line-height: 28px;
        .findInput {
          -webkit-appearance: none;
          background-color: #f1f1f1;
          background-image: none;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          color: #606266;
          display: inline-block;
          font-size: inherit;
          height: 38px;
          line-height: 38px;
          outline: 0;
          padding: 0 15px;
          -webkit-transition: border-color 0.2s
            cubic-bezier(0.645, 0.045, 0.355, 1);
          transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
          width: 100%;
          border: 1px solid #35c2e9;
          border-radius: 20px 0 0 20px;
        }
      }
      .search {
        width: 75px;
        height: 36px;
        background: #35c2e9;
        border: 1px solid #35c2e9;
        border-radius: 0 20px 20px 0;
        cursor: pointer;
        .searchIcon {
          width: 28px;
          height: 28px;
          margin-top: 4px;
          margin-left: 20px;
        }
      }
      .imgFabu {
        width: 142px;
        height: 32px;
        margin-top: 4px;
        cursor: pointer;
      }
    }
  }
}
.bgBox {
  width: 1920px;
  height: 454px;
  background: #fff;
  position: relative;
  .bgImg {
    width: 1920px;
    height: 293px;
    background: url("../../../static/imgs/bgImg.png") no-repeat;
    background-color: #fff;
    background-size: cover;
  }
  .userBox {
    width: 150px;
    height: 200px;
    text-align: center;
    position: absolute;
    left: 46%;
    bottom: 20%;
    .userIcon {
      width: 150px;
      height: 150px;
      border-radius: 150px;
    }
    .userName {
      margin-top: 25px;
      font-size: 16px;
      font-weight: 500;
    }
  }
  .userAction {
    margin-top: 26px;
    width: 1140px;
    height: 64px;
    line-height: 64px;
    position: absolute;
    bottom: 0;
    left: 348px;
    right: 327px;
    color: #727272;
    .actionBox {
      cursor: pointer;
    }
    .search {
      position: relative;
      .searchInput {
      }
      .searchIcon {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 20px;
        right: 14px;
        cursor: pointer;
      }
    }
  }
  .mr80 {
    margin-right: 80px;
  }
  .mr17 {
    margin-right: 17px;
  }
}
.total {
    min-height: 500px;
    background: #f1f1f1;
    .content{
        margin-top: 24px;
        margin-left: 348px;
        width: 1140px;
        min-width: 1140px;
        background: #fff;
        border-radius: 6px;
        .item{
            height: 120px;
            padding: 25px 24px 20px 25px;
            font-size: 12px;
            color: #999;
            border-bottom: 1px solid #f1f1f1;
        }
        .c-left{
            width: 840px;
            .cl-top{
                height: 24px;
                line-height: 24px;
                font-size: 16px;
                font-weight: 600;
                color: #333;
                margin-bottom: 10px;
            }
            .cl-container{}
            .cl-bottom{
                margin-top: 24px;
                height: 28px;
                line-height: 28px;
                .clb-left{
                    .b-letf{
                        margin-right: 20px;
                        .authorImg{
                            margin-right: 8px;
                            border-radius: 20px;
                        }
                    }
                    .b-right{
                        margin-left: 20px;
                        .bbr{
                            margin-right: 20px;
                            .dayFont{
                                margin-left: 4px;
                            }
                            .looknumImg, .likenumImg{
                                margin-right: 4px;
                            }
                        }
                    }
                }
                .clb-right{
                    .typeFont{
                        height: 20px;
                        line-height: 20px;
                        padding: 2px 10px;
                        border: 1px solid #999;
                        border-radius: 20px;
                    }
                }
            }
        }
        .c-right{
            width: 190px;
            height: 112px;
        }
    }
}
/deep/ .el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
/deep/ .el-input__inner {
  height: 30px;
  border: 1px solid #bdbdbd;
  border-radius: 20px !important;
}
.tagSeleted{
    color: #fff!important;
    background: #40cbf2!important;
}
.actionSeleted{
    color: #40cbf2!important;
}
</style>