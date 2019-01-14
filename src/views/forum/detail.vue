// 详情页面
<template>
    <div class="detail">
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
                <div class="content fll">
                    <div v-for="(item, index) in forumData" :key="index" @click="$router.push('/detail')" class="item clearfix">
                        <div :class=" item.coverimg !== '' ? 'c-left fll' :  'c-left fll w1100' ">
                            <div class="cl-top">
                                <i><img class="typeImg" draggable="false" :src="item.icon"></i>
                                <span>{{item.title}}</span>
                            </div>
                            <div class="cl-bottom clearfix">
                                <div class="clb-left fll clearfix">
                                    <div class="b-letf fll clearfix">
                                        <i class="fll"><img class="authorImg" draggable="false" src="../../../static/imgs/forum/touxiang.png"></i>
                                        <span class="bbrFont flr">{{item.author}}</span>
                                    </div>
                                    <div class="b-right fll clearfix">
                                        <div class="fll">{{item.createdtime}}</div>
                                        <div class="bbr fll">
                                            <span class="dayFont">{{item.comment}}天前</span>
                                        </div>
                                        <div class="bbr fll">
                                            <i><img class="looknumImg" draggable="false" src="../../../static/imgs/forum/liulan.png"></i>
                                            <span class="bbrFont">{{item.looknum}}</span>
                                        </div>
                                        <div class="bbr fll">
                                            <i><img class="likenumImg" draggable="false" src="../../../static/imgs/forum/dianzan1.png"></i>
                                            <span class="bbrFont">{{item.likenum}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="clb-right fll">
                                    <div class="typeFont">{{item.classtype}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="cl-container fll">{{item.content}}</div>
                        <div class="like fll">
                            <div class="likeBox">
                                <img class="likeImg" src="../../../static/imgs/forum/likeImg.png">
                            </div>
                            <div class="likeNumber">{{item.likenum}} 人点赞</div>
                        </div>
                        <div class="fll" style="height: 1px; width: 100%; background-color: #f1f1f1;"></div>
                        <div class="share fll clearfix">
                            <div class="shareBox flr clearfix">
                                <div class="shareIF fll">
                                    <img class="shareIcons" src="../../../static/imgs/forum/shareImg.png">
                                    <span>分享</span>
                                </div>
                                <div class="collectIF flr">
                                    <img class="shareIcons" src="../../../static/imgs/forum/collectImg.png">
                                    <span>收藏</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="discuss fll">
                    <el-input class="disInput" placeholder="共同学习，留下你的评论"></el-input>
                    <div class="disNum">
                        <div class="faceBox clearfix">
                            <div class="face fll">
                                <img class="faceImg" src="../../../static/imgs/forum/face.png">
                                <span class="faceFont">添加表情</span>
                            </div>
                            <div class="faceBtn flr">
                                <el-button type="primary">评论</el-button>
                            </div>
                        </div>
                        <div class="line"></div>
                        <div class="disBottom">
                            评论
                            <span class="disFont">{{discussData.length}}</span>
                        </div>
                    </div>
                    <div class="disData" v-for=" (item, index) in discussData" :key="index">
                        <div class="disInfo clearfix">
                            <div class="InfoBox fll clearfix">
                                <img class="infoIcon fll" :src="item.usericon">
                                <div class="infoData flr clearfix">
                                    <div class="infoName fll">{{item.username}}
                                        <div class="infoContent">{{item.content}}</div>
                                    </div>
                                    <div class="infoTime flr">{{item.time}}
                                        <span class="timeFont">之前</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="disBox clearfix">
                            <div class="discussNum flr clearfix">
                                <div class="numBox fll">
                                    <img class="numIcon" src="../../../static/imgs/forum/dianzan1.png">
                                    <span class="numFont">{{item.like}}</span>
                                </div>
                                <div class="numBox fll MarginLeft25">
                                    <img class="numIcon" src="../../../static/imgs/forum/liuyan.png">
                                    <span class="numFont">{{item.reply}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="disLine"></div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header'

    export default {
        components: {
            Header
        },
        data() {
            return{
                userInfo: {
                    username: 'admin',
                    icon: '../../../static/imgs/icon.jpeg'
                },
                currentId: 0,
                articletype: [
                    {
                        id: 0,
                        type: '全部'
                    },
                    {
                        id: 1,
                        type: '最新'
                    },
                    {
                        id: 2,
                        type: '最热'
                    },
                    {
                        id: 3,
                        type: '推荐'
                    },
                    {
                        id: 4,
                        type: '精选'
                    }
                ],
                forumData: [
                    {
                        id: 1,
                        type: '',    //   1 精品贴   2 热门贴  3 推荐贴  4 普通贴
                        title: '双旦有礼，一起来制作礼品啦！',
                        content: '圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！圣诞节临近，周围满满的都是圣诞气息，是时候给我们的课堂也增添一点圣诞氛围啦！现在未来教室“圣诞课程包”限时免费开发，快跟学生一起来制作圣诞贺卡吧！',
                        coverimg: '../../../static/imgs/forum/fengmian.png',
                        icon: '../../../static/imgs/forum/re.png',
                        author: '编程教师',
                        createdtime: '3',
                        commentnum: '141',
                        looknum: '3524',
                        likenum: '225',
                        classtype: 'Blockly'
                    },
                ],
                discussData: [
                    {
                        username: '用户已注销',
                        content: '超喜欢这个课程',
                        time: '12',
                        usericon: '../../../static/imgs/icon.jpeg',
                        like: '98',
                        reply: '0'
                    },
                    {
                        username: '用户在忙碌',
                        content: '超喜欢这个课程',
                        time: '8',
                        usericon: '../../../static/imgs/icon.jpeg',
                        like: '484',
                        reply: '0'
                    },
                    {
                        username: '用户已上线',
                        content: '超喜欢这个课程',
                        time: '4',
                        usericon: '../../../static/imgs/icon.jpeg',
                        like: '108',
                        reply: '0'
                    }
                ],
                searchValue: '',
                tagInfo: 1,
                findForum: ''
            }
        },
        created() {
        },
        mounted() {},
        methods: {
            changeTag(id) {
                this.currentId = id
            }
        }
    }
</script>

<style lang='scss' scoped>
.detail{
    min-width: 1900px;
    background: #f1f1f1;
}
.container{
    margin: 14px 170px 0;
    min-width: 1580px;
    background: #fff;
    border-radius: 10px;
    .containerTop{
        height: 90px;
        background: #f1f1f1;
        .topTags{
            margin-top: 32px;
            .topTag{
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
        .topBtns{
            min-width: 630px;
            min-height: 28px;
            margin-top: 24px;
            .findArticle{
                width: 340px;
                min-width: 340px;
                height: 28px;
                line-height: 28px;
                .findInput{
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
                    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
                    width: 100%;
                    border: 1px solid #35c2e9;
                    border-radius: 20px 0 0 20px;
                }
            }
            .search{
                width: 75px;
                height: 36px;
                background: #35c2e9;
                border: 1px solid #35c2e9;
                border-radius: 0 20px 20px 0;
                cursor: pointer;
                .searchIcon{
                    width: 28px;
                    height: 28px;
                    margin-top: 4px;
                    margin-left: 20px;
                }
            }
            .imgFabu{
                width: 142px;
                height: 32px;
                margin-top: 4px;
                cursor: pointer;
            }
        }
    }
    .containerContent{
        min-height: 80vh;
        background: #f1f1f1;
        .content{
            width: 1140px;
            min-width: 1140px;
            background: #fff;
            border-radius: 6px;
            .item{
                height: 120px;
                padding: 25px 24px 20px 25px;
                font-size: 12px;
                color: #999;
            }
            .cl-container{
                padding: 24px 24px 66px 24px;
                font-size: 16px;
                color: #555;
                line-height: 2;
            }
            .like{
                margin: 0 45% 40px;
                text-align: center;
                .likeBox{
                    width: 65px;
                    height: 65px;
                    border-radius: 40px;
                    background: #bcedfa;
                    cursor: pointer;
                    .likeImg{
                        margin-top: 14px;
                        width: 32px;
                        height: 32px;
                    }
                }
                .likeNumber{
                    margin-top: 10px;
                }
            }
            .share{
                width: 1092px;
                padding: 12px 0;
                .shareIF{
                    cursor: pointer;
                    height: 20px;
                    line-height: 20px;
                    padding: 2px 10px;
                    border: 1px solid #ccc;
                    border-radius: 20px;
                    margin-right: 24px;
                }
                .collectIF{
                    cursor: pointer;
                    height: 20px;
                    line-height: 20px;
                    padding: 2px 10px;
                    border: 1px solid #ccc;
                    border-radius: 20px;
                }
                .shareIcons{
                    width: 16px;
                    height: 16px;
                }
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
                                margin-right: 80px;
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
                            border: 1px solid #40cbf2;
                            border-radius: 20px;
                            color: #40cbf2;
                        }
                    }
                }
            }
            .c-right{
                .cr-img{
                    width: 190px;
                    height: 115px;
                    border:none;
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
        .discuss{
            min-width: 1140px;
            margin-top: 24px;
            margin-bottom: 20px;
            min-height: 150px;
            background: #fff;
            border-radius: 6px;
            .disInput{
                /deep/ .el-input__inner{
                    width: 95.6%;
                    margin: 24px;
                    border-radius: 20px;
                }
            }
            .disNum{
                min-height: 97px;
                .faceBox{
                    margin: 0 24px 24px 24px;
                    .face{
                        .faceImg{
                            width: 14px;
                            height: 14px;
                            cursor: pointer;
                        }
                        .faceFont{
                            margin-left: 10px;
                            font-size: 14px;
                            color: #777;
                            cursor: pointer;
                        }
                    }
                    .faceBtn{
                        /deep/ .el-button{
                            width: 94px;
                            height: 34px;
                            line-height: 12px;
                            border-radius: 20px;
                        }
                        /deep/ .el-button--primary{
                            background-color: #40cbf2;
                            border-color: #40cbf2;
                        }
                    }
                }
                .line{
                    margin: 0 24px;
                    height: 1px;
                    background: #f1f1f1;
                }
                .disBottom{
                    margin: 24px;
                    .disFont{
                        margin-left: 10px;
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
            .disData{
                margin: 24px;
                .disInfo{
                    .InfoBox{
                        min-width: 275px;
                        .infoIcon{
                            width: 45px;
                            height: 45px;
                            border-radius: 20px;
                        }
                        .infoData{
                            min-width: 200px;
                            .infoName{
                                font-size: 16px;
                                font-weight: 600;
                                .infoContent{
                                    margin-top: 8px;
                                    font-weight: normal;
                                }
                            }
                            .infoTime{
                                font-size: 14px;
                                color: #999;
                                .timeFont{}
                            }
                        }
                    }
                }
                .disBox{
                    font-size: 14px;
                    color: #999;
                    .discussNum{
                        min-width: 80px;
                        .numBox{
                            cursor: pointer;
                            .numIcon{}
                            .numFont{
                                margin-left: 5px;
                            }
                        }
                    }
                }
                .disLine{
                    margin-top: 25px;
                    height: 1px;
                    background: #f1f1f1;
                }
            }
        }
    }
}
.tagSeleted{
    color: #fff!important;
    background: #40cbf2!important;
}
.Zero{
    display: none;
}
.w1100{
    width: 1100px!important;
}
.MarginLeft25{
    margin-left: 25px;
}
/deep/ .el-menu.el-menu--horizontal {
    border-bottom: none!important;
}
</style>