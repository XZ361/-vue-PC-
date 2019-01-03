<template>
  <div class="counter-component">
  	<div class="counter-btn" @click="minus">-</div>  	
  	<div class="counter-show">
  		<input type="text" v-model="number" @keyup="fixNumber">
  	</div>
  	<div class="counter-btn" @click="add">+</div>  	
  </div>
</template>

<script>
export default {
	props:{
		max:{
			type:Number,
			default:5
		},
		min:{
			type:Number,
			default:1
		}
	},
  data () {
    return {
     number:this.min
    }
  },
  watch:{
  	// 让watch监听number属性，并将函数赋值给number，当number发生变化时，就将其变化传递给on-change自定义事件
  	number(){
  		/*将变化通过$emit函数传递给on-change绑定的事件*/
  		this.$emit('on-change',this.number)
  	}
  },
  methods:{
  	fixNumber(){
  		let fix
  		if(typeof this.number=== 'string'){
  			// 如果输入的结果中含有字母或则字符就将其替换为空，然后在转换成数字类型
  			fix=Number(this.number.replace(/\D/g,''))
  		}
  		else{
  			fix=this.number
  		}
  		// 之后进行范围判断
  		if(fix>this.max||fix<this.min){
  			fix=this.min
  		}
  		this.number=fix
  	},
  	minus(){
  		if(this.number<=this.min){
  			return
  		}
  		this.number--
  	},
  	add(){
  		if(this.number>=this.max){
  			return
  		}
  		this.number++
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}
.counter-show {
  float: left;
}
.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 40px;
  outline: none;
  text-indent: 4px;
}
.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}
.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>