// 发布帖子页面
<template>
    <div class="posted">
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
            <div class="containerContent clearfix">
                <div class="userBox flr">
                    <div class="userTop">
                        <span class="userFont">我的</span>
                    </div>
                    <div class="userBottom">
                        <div class="adminIcon">
                            <img class="userIcon" draggable="false" :src="userInfo.icon">
                        </div>
                        <div class="adminName">{{userInfo.username}}</div>
                        <div class="adminAction clearfix">
                            <div class="fll action" @click="$router.push('/article')">
                                <i><img class="actionIco" draggable="false" src="../../../static/imgs/forum/tiezi.png"></i>
                                <div class="actionFont">帖子</div>
                            </div>
                            <div class="fll action ml45" @click="$router.push('/reply')">
                                <i><img class="actionIco" draggable="false" src="../../../static/imgs/forum/xiaoxi.png"></i>
                                <div class="actionFont">消息</div>
                            </div>
                            <div class="fll action ml45" @click="$router.push('/draft')">
                                <i><img class="actionIco" draggable="false" src="../../../static/imgs/forum/caogaoxiang.png"></i>
                                <div class="actionFont">草稿箱</div>
                            </div>
                            <div class="fll action ml45" @click="$router.push('/collect')">
                                <i><img class="actionIco" draggable="false" src="../../../static/imgs/forum/shoucang.png"></i>
                                <div class="actionFont">收藏</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cctop fll">
                    <span>发布帖子</span>
                </div>
                <div class="middle fll">
                    <el-input class="midInput" placeholder="请输入标题"></el-input>
                    <div class="midSelect">
                        <el-select
                            v-model="newValue"
                            multiple
                            filterable
                            allow-create
                            default-first-option
                            placeholder="请选择文章标签">
                            <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                </div>
                <div class="content fll">
                    <div id="editorElem1" class="toolbar" style="text-align:left"></div>
                    <div id="editorElem2" class="text" style="text-align:left"></div>                    
                </div>
            </div>
            <div class="actionBtn">
                <el-button class="btns" type="primary">发布</el-button>
                <el-button class="btns" type="primary">保存草稿</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import E from 'wangeditor'
    import Header from "@/components/Header";
    import 'wangeditor/release/wangEditor.min.css'

    export default {
        components: {
            Header
        },
        data() {
            return {
                content:"",
                userInfo: {
                    username: "admin",
                    icon: "../../../static/imgs/icon.jpeg",
                    article: "1",
                    huifu: "2",
                    caogao: "3",
                    shoucang: "4"
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
                options: [
                    {
                        value: 'HTML',
                        label: 'HTML'
                    }, 
                    {
                        value: 'CSS',
                        label: 'CSS'
                    }, 
                    {
                        value: 'JavaScript',
                        label: 'JavaScript'
                    },
                    {
                        value: 'TypeScript',
                        label: 'TypeScript'
                    }
                ],
                newValue: '',
                findForum: "",
            }
        },
        created() {
        },
        mounted() {
            var editor = new E('#editorElem1', '#editorElem2') 
            editor.customConfig.onchange = (html) => { this.editorContent = html } 
            editor.create()
        },
        methods: {
            getContent: function () {
                alert(this.editorContent)
            },
            changeTag(id) {
                this.currentId = id
            }
        }
    }
</script>

<style lang='scss' scoped>
.posted {
  min-width: 1920px;
  background: #f1f1f1;
}
.container {
  margin: 14px 170px 0;
  min-width: 1580px;
  min-height: 830px;
  background: #f1f1f1;
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
  .containerContent{
      background: #f1f1f1;
        .cctop{
            width: 1116px;
            height: 50px;
            line-height: 50px;
            padding-left: 24px;
            margin-bottom: 24px;
            border-radius: 6px;
            color: #666;
            background: #fff;
        }
        .middle{
            width: 1092px;
            height: 90px;
            padding: 24px;
            margin-bottom: 24px;
            border-radius: 6px;
            background: #fff;
            .midInput{
                width: 422px;
                height: 40px;
                background: #fff;
                /deep/ .el-input__inner{
                    padding: 0 24px;
                    border-radius: 20px;
                }
            }
            .midSelect{
                margin: 24px 0;
                width: 130px;
                height: 24px;
                font-size: 12px;
                /deep/ .el-input__icon{
                    height: 130%;
                }
                /deep/ .el-input__inner{
                    height: 24px;
                    border-radius: 20px;
                }
                /deep/ .is-focus .el-input__suffix{
                    top: -8px;
                }
            }
        }
        .content{
            width: 1140px;
            min-width: 1140px;
            background: #fff;
            border-radius: 6px;
            .toolbar{
                margin: 24px auto 0;
                width: 1092px;
                border: 1px solid #f1f1f1;
                border-radius: 20px;
                background: #f1f1f1;
            }
            .text{
                margin: 0 auto;
                width: 1092px;
                min-height: 500px;
                /deep/ .w-e-text{
                    overflow: hidden;
                    min-height: 480px;
                }
            }
        }
      .userBox{
            width: 400px;
            height: 400px;
            background: #fff;
            border-radius: 6px;
            .userTop{
                width: 400px;
                height: 65px;
                line-height: 65px;
                border-bottom: 1px solid #f1f1f1;
                .userFont{
                    font-size: 16px;
                    margin-left: 32px;
                }
            }
            .userBottom{
                padding: 50px 65px;
                .adminIcon{
                    width: 100px;
                    height: 100px;
                    margin: 0 auto 20px;
                    .userIcon{
                        width: 100px;
                        height: 100px;
                        border-radius: 40px;
                    }
                }
                .adminName{
                    font-size: 18px;
                    margin-bottom: 30px;
                    text-align: center;
                }
                .adminAction{
                    .actionIco{
                        width: 28px;
                        height: 30px;
                    }
                    .actionFont{
                        font-size: 14px;
                    }
                    .ml45{
                        margin-left: 45px;
                    }
                    .action{
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .actionBtn{
        height: 34px;
        margin-top: 24px;
        /deep/ .el-button--primary {
            margin-right: 24px;
            width: 140px;
            height: 32px;
            line-height: 8px;
            color: #fff;
            background-color: #40cbf2;
            border-color: #40cbf2;
            border-radius: 30px;
        }
    }
}
.tagSeleted{
    color: #fff!important;
    background: #40cbf2!important;
}
</style>