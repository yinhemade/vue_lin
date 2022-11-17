export const hunhe ={
    methods:{
        showName(){
            alert(this.name);
        }
    },
}
export const hunhe2 = {
    mounted() {
        console.log('mounted  '+this.name)
    },
    data(){
        return{
            age:18,
        }
    },
}
export const hunhe3 = {
    data(){
        return{
            msg2:'二本'
        }
    }
}