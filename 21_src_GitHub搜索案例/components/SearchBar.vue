<template>
  <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
            <button @click="searchUsers">Search</button>
        </div>
    </section>
</template>

<script>
    import axios from 'axios'
export default {
    
    name:'SearchBar',
    data(){
        return{
            keyWord:'',
        }
    },
    methods:{
        searchUsers(){
            this.$bus.$emit('updateListData',{users:[],isFirst:false, isLoading:true, errorMsg:''})
            axios.get(`http://api.github.com/search/users?q=${this.keyWord}`).then(
                response => {
                    console.log('请求成功了');
                    this.$bus.$emit('updateListData',{users:response.data.items, isLoading:false, errorMsg:''})
                },
                error =>{
                    console.log('请求失败了');
                    this.$bus.$emit('updateListData',{users:[], isLoading:false, errorMsg:error.message})
                }
            )
        }
    },


    
}
</script>

<style>
    

</style>