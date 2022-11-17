<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count组件的sum为{{sum}}</h3>
    <h3 style="color: goldenrod">第一个人的名字为:{{firstPersonName}}</h3>
    <input placeholder="请输入名字" type="text" v-model="input">
    <button @click="addPerson(input)">添加</button>
    <button @click="addPersonWang(input)">添加一个姓王的</button>
    <button @click="addPersonRandom">添加奇怪的名字的人</button>
    <ul>
        <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:'PersonBar',
    data(){
        return{
            input:'',
        }
    },  
    computed:{
        personList(){
            return this.$store.state.personAbout.personList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstPersonName(){
            return this.$store.getters['personAbout/firstPersonName']
        }
    },
    methods:{
        addPerson(value){
            const person = {id:nanoid(), name:value}
            this.$store.commit('personAbout/ADD_PERSON',person)
            this.input=''
        },
        addPersonWang(value){
            const person = {id:nanoid(), name:value}
            this.$store.dispatch('personAbout/addPersonWang',person)
            this.input=''
        },
        addPersonRandom(){
            this.$store.dispatch('personAbout/addPersonServer')
            this.input=''
        }
    },
    mounted(){
        console.log(this);
    }
}
</script>

<style scoped>
    *{
        margin-left: 5px;
    }
</style>