import axios from "axios"
import { nanoid } from "nanoid"

export default{
    namespaced:true,
    actions:{
        addPersonWang(context, value){
            if(value.name[0]=== '王'){
                context.commit('ADD_PERSON',value)
                // console.log('***',context);
            }else{
                alert('你确定这小子姓王吗？！')
            }
        },
        addPersonServer(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response=>{
                    context.commit('ADD_PERSON', {id:nanoid(), name:response.data})
                },
                error=>{
                    console.log('@@@',error.message)
                }
            )
        }
    },
    mutations:{
        'ADD_PERSON'(state, personObj){
            state.personList.unshift(personObj)
        },
    },
    state:{
        personList:[
            {id:'001', name:'张三'},
            {id:'002', name:'李四'}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}