<template>
  <div class="login-form">
    <div class="g-form">
    	<div class="g-form-line">
    		<span class="g-form-label">用户名：</span>
    		<div class="g-form-input">
    			<input type="text" v-model="usernameModel" placeholder="请输入用户名">
    		</div>
    		<span class="g-form-error">{{userErrors.errorText}}</span>
    	</div>
    	<div class="g-form-line">
    		<span class="g-form-label">密码：</span>
    		<div class="g-form-input">
    			<input type="password" v-model="passwordModel" placeholder="请输入密码">
    		</div>
    		<span class="g-form-error">{{passwordErrors.errorText}}</span>
    	</div>
    	<div class="g-form-line">
    		<div class="g-form-btn">
    			<a class="button " @click="onLogin()">登录</a>
    		</div>
    	</div>
    	<p>{{errorText}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel:'',
      errorText:''
    }
  },
  computed:{
  	userErrors(){
  		// 先定义报错两个参数
  		let errorText,status
  		if(!/@/g.test(this.usernameModel)){
  			// 正则监测用户名中没有@则报错
  			status=false;
  			errorText="用户名不合法"
  		}else{
  			status=true;
  			errorText=""
  		}
  		if(!this.userFlag){
  			errorText='';
  			this.userFlag=true;
  		}
  		return {
  			status,
  			errorText
  		}
  	},
  	passwordErrors(){
  		// 先定义报错两个参数
  		let errorText,status
  		if(!/^\w{1,6}$/g.test(this.passwordModel)){
  			// 正则进行密码位数的检查，密码位数要求在1-6位之间
  			status=false;
  			errorText="密码位数不合法"
  		}else{
  			status=true;
  			errorText=""
  		}
  		if(!this.passwordFlag){
  			errorText='';
  			this.passwordFlag=true;
  		}
  		return {
  			status,
  			errorText
  		}	
  	}
  },
  methods:{
  	onLogin(){
  		if(!this.userErrors.status || !this.passwordErrors.status){
  			//不合格
  			this.errorText='用户名或密码错误！'
  		}else{
  			// 执行登录操作
  			this.errorText=''
  			this.$http.get('api/login')
  			.then((res)=>{
  				this.$emit('has-log',res.data)
  			},(error)=>{
  				console.log(error)
  			})
  		}
  		
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
