<template>
  <div class="chooser-component">
  	<ul class="chooser-list">
  		<li 
  		v-for="(item,index) in selections"
  		@click="toggleSelection(index)"
  		:title="item.label"
  		:class="{active:checkActive(index)}"
  		>
  			{{item.label}}
  		</li>
  	</ul>
  </div>
</template>

<script>
	//lodash是一个javascript库，它内部封装了诸多对字符串、数组、对象等常见数据类型的处理函数
	import _ from 'lodash'
export default {
	props:{
		selections:{
			type:Array,
			default:[{
				label:'test',
				value:0
			}]
		}
	},
  data () {
    return {
      nowIndexes:[0]
    }
  },
  methods:{
  	toggleSelection(index){
  		if(this.nowIndexes.indexOf(index)===-1){
  			// 当nowindex数组中没有当前选项时，将当前选择项推入nowindex数组中
  			this.nowIndexes.push(index)
  		}else{
  			// 当nowindex中有当前选项时，将其剔除
  			this.nowIndexes=_.remove(this.nowIndexes,(idx)=>{
				return idx!==index
			 })	
  		}
      let nowObjArray=_.map(this.nowIndexes,(idx)=>{
        // 通过map函数遍历nowindex中的每项，为其中的每项建立映射,让其最后返回每项所对应的selections中的对象
        return this.selections[idx]

      })
  		this.$emit('on-change',nowObjArray)
  	},
  	checkActive(index){
  		// 判断nowindex数组中的index 是否存在
  		return this.nowIndexes.indexOf(index)!==-1
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>