// 头部组件
<template>
    <div class="header clearfix">
        <div class="fll headerLeft">
            <div class="imgbox fll">
                <img class="img" draggable="false" src="../../static/imgs/logo.png" alt="logo">
            </div>                
            <i class="geduan"></i>
            <div class="menuBox flr">
                <div class="menu">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" style="height: 74px; background: #fff;">
                        <el-submenu index="1">
                            <template slot="title">全部课程</template>
                            <el-menu-item index="1-1" style="background: #4e5f7a; color: #fff;">全部课程</el-menu-item>
                            <el-menu-item index="1-2" style="background: #4e5f7a; color: #fff;">我的课程</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="2" style="background: #fff;" @click="$router.push('/')">课堂论坛</el-menu-item>
                    </el-menu>
                </div>
            </div>
        </div>
        <div class="headerRight flr clearfix">
            <div class="admin clearfix fll" @click="$router.push('/information')">
                <img class="icon fll" draggable="false" :src="userInfo.icon" alt="icon">
                <span class="username fll">{{userInfo.username}}</span>
            </div>
            <el-dropdown class="message" trigger="click">
                <span class="el-dropdown-link">
                    <el-badge class="item" :value="15">
                        消息
                    </el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item class="clearfix" command="$router.push('/detail')">
                        评论
                        <el-badge class="mark" :value="12" @click.native="$router.push('/detail')"/>
                    </el-dropdown-item>
                    <el-dropdown-item class="clearfix" @click.native="$router.push('/reply')">
                        回复
                        <el-badge class="mark" :value="3" />
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <router-link class="loginOut" to="/login">退出</router-link>
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                defaultIndex: '1',
                userInfo: {
                    username: 'admin',
                    icon: '../../static/imgs/icon.jpeg'
                }
            }
        },
        methods: {
            handleSelect(key, keyPath) {
            }
        }
    }
</script>

<style scoped lang='scss'>
.item {
    margin-left: 10px;
    margin-right: 25px;
}
.header{
    min-width: 750px;
    min-height: 76px;
    overflow: hidden;
    background: #fff;
    -moz-box-shadow: 2px 4px 6px #ccc; 
    -webkit-box-shadow: 2px 4px 6px #ccc; 
    box-shadow: 2px 4px 6px #ccc;
    .headerLeft{
        height: 76px;
        .imgbox{
            min-height: 76px;
            .img{
                margin: 18px 58px 18px 30px;
                width: 120px;
                height: 40px;
            }
        }
        .geduan{
            margin-top: 10px;
            display: inline-block;
            width: 1px;
            height: 56px;
            background: radial-gradient(#d3d5d7 -15%, #fff 100%);
        }
    }
    .menuBox{
        .menu{
            margin-left: 20px;
        }
    }
    .headerRight{
        height: 76px;
        margin-right: 20px;
        .admin{
            cursor: pointer;
        }
        .icon{
            margin-top: 23px;
            width: 30px;
            height: 30px;
            border-radius: 40px;
        }
        .username{
            font-size: 14px;
            margin-top: 28px;
            margin-left: 8px;
        }
        .message{
            margin-top: 26px;
            margin-left: 5px;
            cursor: pointer;
        }
        .loginOut{
            margin-right: 15px;
            font-size: 14px;
        }
    }
}
</style>