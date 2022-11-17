export default{
    install(Vue){
        Vue.filter('mySlice',function(val){
            return val.slice(0,4)
        })

        Vue.directive('fbind',{
            // 指令与元素成功绑定时
            bind(element, binding){
                element.value = binding.value
            },
            // 指令插入页面后
            inserted(element){
                element.focus()
            },
            // 指令更新后
            update(element, binding){
                element.value = binding.value
                
            }
        })

        Vue.mixin({
            data(){
                return{
                    age:18,
                    msg2:'二本'
                }
            }
        })

        Vue.prototype.hello =()=>{alert('你好啊！')}

    }
}