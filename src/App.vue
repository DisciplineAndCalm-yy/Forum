<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.fll{
  float: left;
}
.flr{
  float: right;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}
a:link, a:visited{
  text-decoration:none;
  color:#333;
}
a:hover, a:active{
  text-decoration:underline;
  color:#f60;
}
ul, ol, li{
  list-style-type:none;
}
/* body{
  font-family:Tahoma, Arial, Helvetica, "宋体";
  font-size:12px;
  text-align:center;
  background:#FFF;
  color:#333;
} */
</style>
