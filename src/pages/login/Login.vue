<template>
  <div class="login-container">
    <div id="main">
      <div id="content">
        <div class="panel">
          <div class="header">
            <ul class="breadcrumb">
              <li>
                <router-link to="/all">主页</router-link>
                <span class="divider">/</span></li>
              <li class="active">登录</li>
            </ul>
          </div>
          <div class="inner">

            <!--<form id="signin_form" class="form-horizontal" action="/signin" method="post">-->
            <form id="signin_form" class="form-horizontal"  autocomplete="off" @submit.prevent="onSubmit">
              <div class="control-group">
                <label class="control-label" for="name">用户名</label>

                <div class="controls">
                  <input class="input-xlarge" v-model="username" id="name" name="name" size="30" type="text">
                </div>
              </div>
              <div class="control-group">
                <label class="control-label" for="pass">密码</label>

                <div class="controls">
                  <input class="input-xlarge" v-model="password" id="pass" name="pass" size="30" type="password">
                </div>
              </div>
              <!--<input type="hidden" name="_csrf" value="BmI9ZQVn-59GiBzkLSXYUONGXCaqDw4I1_nU">-->
              <!--前端验证返回的信息-->
              <!--<p class="tishi-msg" v-if="isSuccess">{{msg}}</p>-->
              <!--<p class="tishi-msg2" v-else >{{msg}}</p>-->
              <p class="tishi-msg">【用户名：ceshi，密码：ceshi】</p>
              <div class="form-actions">
                <input type="submit"  class="span-primary" value="登录" @click="handlerUserInfo">
                <a href="javascript:;">
            <span class="span-info">
              通过 GitHub 登录
            </span>
                </a>
                <a id="forgot_password" href="javascript:;">忘记密码了?</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        username:'',
        password:'',
        // msg:'',//前端验证返回的信息
        // isSuccess:false//是否登陆成功
      }
    },
    mounted(){
      console.log(this.name,this.pwd,'读取vuex里面的数据')
    },
    computed:{
      ...mapState(['name','pwd']),
    },
    methods:{
      //阻止表单的默认提交
      onSubmit(){return false},
      //接收用户填写的注册信息
      handlerUserInfo(){
        let name = this.username
        let pwd = this.password
        //模拟登陆信息状态
        if(this.username === ''){
          return MessageBox.alert('用户名不能为空')
        }else if(this.password === ''){
          return MessageBox.alert('密码不能为空')
        } else if(this.username === 'ceshi' && this.password !== 'ceshi'){
         return MessageBox.alert('用户名或密码错误')
        }else if(this.username !== 'ceshi' && this.password !== 'ceshi'){
          return MessageBox.alert('用户名或密码错误')
        }else if(this.username === 'ceshi' && this.password === 'ceshi'){
          this.$store.dispatch('handlerUserInfo',{name,pwd})
          return MessageBox.alert('登陆成功').then(()=>{this.$router.push('/all')})
        }
      }
    }
  }
</script>

<style>
  .tishi-msg{
    text-align: center;
    font-weight: bold;
    color: green;
  }
  .tishi-msg2{
    text-align: center;
    font-weight: bold;
    color: red;
  }
  .login-container {
    width: 100%;
    /*background: #00b7ee;*/
    position: absolute;
    z-index: 200;
    margin-top: -41px;
  }

  .panel {
    margin: 0 5px;
  }

  .panel .header {
    padding: 10px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;
  }

  .breadcrumb {
    padding: 0;
    margin: 0;
    border: 0;
    background: 0 0;
    box-shadow: none;
    border-radius: 4px;
    display: block;
  }

  .breadcrumb li {
    line-height: 20px;
    display: inline-block;
  }

  .breadcrumb > li > .divider {
    padding: 0 5px;
    color: #ccc;
  }

  .breadcrumb > .active {
    color: #999;
  }

  .breadcrumb a {
    color: #369219;
  }

  .panel .inner {
    line-height: 2em;
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 3px 3px;
  }

  .panel .inner > form.form-horizontal {
    margin-top: 40px;
  }

  form {
    margin: 0 0 20px;
    display: block;
  }

  .form-horizontal .control-group {
    margin-bottom: 20px;
  }

  .label {
    float: none;
    width: auto;
    padding-top: 0;
    text-align: left;
  }

  .form-horizontal .controls {
    margin-left: 0;
  }

  .input-xlarge {
    background: hsla(0, 0%, 0%, 0);
    display: inline-block;
    margin-bottom: 0;
    vertical-align: middle;
    border: 1px solid #ccc;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    transition: border linear .2s, box-shadow linear .2s;
    height: 20px;
    padding: 4px 6px;
    font-size: 14px;
    line-height: 20px;
    color: #555;
    border-radius: 4px;
    width: 270px;
    font-weight: 400;
  }

  .form-horizontal .control-group {
    margin-bottom: 20px;
  }

  .form-horizontal .form-actions {
    padding-right: 10px;
    padding-left: 10px;
  }

  actions:before {
    display: table;
    line-height: 0;
    content: "";
  }

  .span-primary {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    padding: 3px 10px;
    border: 0;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    color: #fff;
    background-color: #3374de;
    font-weight: 400;
  }

  .panel .inner a {
    color: #778087;
    cursor: pointer;
    line-height: 2em;
  }

  .span-info {
    display: inline-block;
    float: none;
    padding: 3px 10px;
    border: 0;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    box-shadow: none;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #7597d4;
  }

  #forgot_password {
    margin-left: 1em;
    cursor: pointer;
    line-height: 2em;
  }
</style>
