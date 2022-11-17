export default {
    namespaced:true,
    actions: {
        ji(context, value){
            if(context.state.sum % 2)
            context.commit('JIA', value)
        },
        waitjia(context, value){
            setTimeout(()=>{
                context.commit('JIA', value)
            },1000)
        },
    },
    
   mutations:{
        'JIA'(state,value){
            state.sum += value
        },
        'JIAN'(state,value){
            state.sum -= value
        },
    },
    
    state: {
        sum: 0,//当前的和
        school:'尚硅谷',
        subject:'前端',  
    },
    
    getters: {
        bigSum(state){
            return state.sum*10
        }
    }
}